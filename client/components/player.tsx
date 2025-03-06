"use client";
import { useRef, useState, useEffect } from "react";
import { useSpring } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3, Box3, Raycaster, Mesh } from "three";
import { arcadePositions } from "../components/arcadeposition"; // Adjust the path accordingly

const SPEED = 0.03; // Movement speed
const ROTATION_SPEED = 0.02; // Rotation speed
const ROOM_BOUNDS = new Box3(new Vector3(-10, 0, -10), new Vector3(10, 5, 10)); // Room bounds
const ARCADE_RANGE = 2;
const arcadeGames = [
  "/games/suiman/pacman.html",         // Arcade 1
  "/games/spaceinvaders/space-invaders.html", // Arcade 2
  "/games/asteroids/asteroids.html"       // Arcade 3
];


interface MoveState {
  forward: number;
  backward: number;
  left: number;
  right: number;
}

interface RotationState {
  x: number;
  y: number;
}

interface PlayerProps {
  move: MoveState;
  rotation: RotationState;
  setNearArcade: (near: boolean) => void; // Callback to update nearArcade state
  setNearArcadeIndex: (index: number | null) => void; // Callback to update which arcade is nearby
}

export default function Player({ move, rotation, setNearArcade, setNearArcadeIndex }: PlayerProps) {
  const playerRef = useRef<Mesh | null>(null);
  const { camera, scene } = useThree(); // Destructure camera here
  const raycaster = new Raycaster();
  const [isPlayingArcade, setIsPlayingArcade] = useState(false);

  // Store the original camera position and rotation
  const originalCameraPosition = useRef(new Vector3());
  const originalCameraRotation = useRef(new Vector3());

  

  // Spring animations for camera
  const [{ camPosition, camRotation }, api] = useSpring(() => ({
    camPosition: [camera.position.x, camera.position.y, camera.position.z],
    camRotation: [camera.rotation.x, camera.rotation.y, camera.rotation.z],
    config: { tension: 100, friction: 20 },
  }));

  // Check for collisions
  const checkCollisions = (newPosition: Vector3) => {
    if (!playerRef.current) return false;

    // Check room bounds
    if (!ROOM_BOUNDS.containsPoint(newPosition)) {
      return false;
    }

    // Check for collisions with objects in the scene
    raycaster.set(playerRef.current.position, newPosition.clone().sub(playerRef.current.position).normalize());
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0 && intersects[0].distance < 1) {
      return false;
    }

    return true;
  };

  // Handle "F" and "X" key presses
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "f" && !isPlayingArcade) {
        originalCameraPosition.current.copy(camera.position);
        originalCameraRotation.current.copy(camera.rotation);
      
        let closestArcadeIndex = null;
        let closestDistance =   Infinity;
      
        if (playerRef.current) {
          for (let i = 0; i < arcadePositions.length; i++) {
            const distance = playerRef.current.position.distanceTo(arcadePositions[i]);
            if (distance < ARCADE_RANGE && distance < closestDistance) {
              closestArcadeIndex = i;
              closestDistance = distance;
            }
          }
        }
      
        if (closestArcadeIndex !== null) {
          const arcadePosition = arcadePositions[closestArcadeIndex];
          const targetPosition = new Vector3(
            arcadePosition.x - 1.1, 
            arcadePosition.y + 1.4, 
            arcadePosition.z + 0.3  
          );
      
          api.start({
            camPosition: [targetPosition.x, targetPosition.y, targetPosition.z],
            camRotation: [-0.2, 0, 0],
          });
      
          // Load the game
          const gameUrl = arcadeGames[closestArcadeIndex] || "/games/pacman.html";
          const arcadeScreen = document.createElement("iframe");
          arcadeScreen.src = gameUrl;
          arcadeScreen.style.position = "absolute";
          arcadeScreen.style.top = "56%"; // Center vertically
          arcadeScreen.style.left = "48.8%"; // Center horizontally
          arcadeScreen.style.transform = "translate(-50%, -50%)"; // Center the iframe
          arcadeScreen.style.borderRadius = "12px"; // Adds rounded corners
          arcadeScreen.style.border = "none";

          // Calculate the initial size based on the viewport dimensions
          const initialViewportWidth = window.innerWidth;
          const initialViewportHeight = window.innerHeight;

          // Set the iframe dimensions to 36% of the initial viewport width and 49% of the initial viewport height
          const initialWidth = initialViewportWidth * 0.36; // 36% of viewport width
          const initialHeight = initialViewportHeight * 0.49; // 49% of viewport height

          // Set the iframe dimensions as fixed pixel values
          arcadeScreen.style.width = `${initialWidth}px`;
          arcadeScreen.style.height = `${initialHeight}px`;


          arcadeScreen.id = "arcade-game";
          document.body.appendChild(arcadeScreen);

setIsPlayingArcade(true);
        }
      }
      
  
      if (event.key.toLowerCase() === "x" && isPlayingArcade) {
        console.log("Exiting focus mode");
      
        api.start({
          camPosition: [originalCameraPosition.current.x, originalCameraPosition.current.y, originalCameraPosition.current.z],
          camRotation: [originalCameraRotation.current.x, originalCameraRotation.current.y, originalCameraRotation.current.z],
        });
      
        const arcadeScreen = document.getElementById("arcade-game");
        if (arcadeScreen) {
          arcadeScreen.remove(); // Remove the iframe
        }
      
        setIsPlayingArcade(false);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlayingArcade, camera]); // Remove api from the dependency array

  // Update camera position and rotation using spring values
  useFrame(() => {
    // Update camera position and rotation only when in focus mode
    if (isPlayingArcade) {
      camera.position.set(camPosition.get()[0], camPosition.get()[1], camPosition.get()[2]);
      camera.rotation.set(camRotation.get()[0], camRotation.get()[1], camRotation.get()[2]);
    }
  });

  // Update player position and rotation
  useFrame(() => {
    if (playerRef.current && !isPlayingArcade) {
      const direction = new Vector3();

      // Movement logic (only when not in focus mode)
      if (move.forward) {
        direction.add(camera.getWorldDirection(new Vector3()).setY(0).normalize());
      }
      if (move.backward) {
        direction.sub(camera.getWorldDirection(new Vector3()).setY(0).normalize());
      }
      if (move.left) {
        direction.sub(camera.getWorldDirection(new Vector3()).setY(0).cross(new Vector3(0, 1, 0)).normalize());
      }
      if (move.right) {
        direction.add(camera.getWorldDirection(new Vector3()).setY(0).cross(new Vector3(0, 1, 0)).normalize());
      }

      // Calculate new position
      const newPosition = playerRef.current.position.clone().addScaledVector(direction, SPEED);

      // Check for collisions before updating position
      if (checkCollisions(newPosition)) {
        playerRef.current.position.copy(newPosition);
      }

      // Update camera position to follow the player
      camera.position.copy(playerRef.current.position);

      // Apply camera rotation (only when not in focus mode)
      camera.rotation.y -= rotation.x * ROTATION_SPEED;
      camera.rotation.x -= rotation.y * ROTATION_SPEED;
    }

    // Check proximity to ALL arcade machines
    let closestArcadeIndex = null;
    let closestDistance = Infinity;

    if (playerRef.current) {
      for (let i = 0; i < arcadePositions.length; i++) {
        const distance = playerRef.current.position.distanceTo(arcadePositions[i]);
        if (distance < ARCADE_RANGE && distance < closestDistance) {
          closestArcadeIndex = i;
          closestDistance = distance;
        }
      }
    }

    // Update states
    setNearArcadeIndex(closestArcadeIndex); // Which arcade is nearby
    setNearArcade(closestArcadeIndex !== null); // Whether any arcade is nearby
  });

  return (
    <>
      <mesh ref={playerRef} position={[2, 1.3, 3]}>
        <boxGeometry args={[0.5, 1.5, 0.5]} />
        <meshStandardMaterial color="green" transparent opacity={0} />      </mesh>
    </>
  );
}