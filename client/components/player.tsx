"use client";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3, Box3, Raycaster, Mesh } from "three";
import { arcadePositions } from "../components/arcadeposition"; // Adjust the path accordingly

const SPEED = 0.03; // Movement speed
const ROTATION_SPEED = 0.02; // Rotation speed
const ROOM_BOUNDS = new Box3(new Vector3(-10, 0, -10), new Vector3(10, 5, 10)); // Room bounds
const ARCADE_RANGE = 2; // Range within which the player is considered near an arcade machine

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
  const { camera, scene } = useThree();
  const raycaster = new Raycaster();

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

  // Update player position and rotation
  useFrame(() => {
    if (playerRef.current) {
      const direction = new Vector3();

      // Movement logic
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

      // Rotate the camera based on joystick input
      camera.rotation.y -= rotation.x * ROTATION_SPEED;
      camera.rotation.x -= rotation.y * ROTATION_SPEED;

      // Check proximity to ALL arcade machines
      let closestArcadeIndex = null;
      let closestDistance = Infinity;

      for (let i = 0; i < arcadePositions.length; i++) {
        const distance = playerRef.current.position.distanceTo(arcadePositions[i]);
        if (distance < ARCADE_RANGE && distance < closestDistance) {
          closestArcadeIndex = i;
          closestDistance = distance;
        }
      }

      // Update states
      setNearArcadeIndex(closestArcadeIndex); // Which arcade is nearby
      setNearArcade(closestArcadeIndex !== null); // Whether any arcade is nearby
    }
  });

  return (
    <>
      <mesh ref={playerRef} position={[2, 1.3, 3]}>
        <boxGeometry args={[0.5, 1.5, 0.5]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}