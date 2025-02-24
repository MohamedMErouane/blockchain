"use client";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3, Box3, Raycaster, Mesh } from "three";

const SPEED = 0.03; // Reduced speed for slower movement
const ROTATION_SPEED = 0.02; // Speed for camera rotation
const ROOM_BOUNDS = new Box3(new Vector3(-10, 0, -10), new Vector3(10, 5, 10)); // Define room bounds

// Define the type for the move prop
interface MoveState {
  forward: number;
  backward: number;
  left: number;
  right: number;
}

// Define the type for the rotation prop
interface RotationState {
  x: number;
  y: number;
}

export default function Player({ move, rotation }: { move: MoveState; rotation: RotationState }) {
  const playerRef = useRef<Mesh | null>(null);
  const { camera, scene } = useThree();
  const raycaster = new Raycaster();

  // Check for collisions
  const checkCollisions = (newPosition: Vector3) => {
    if (!playerRef.current) return false;

    // Check room bounds
    if (!ROOM_BOUNDS.containsPoint(newPosition)) {
      return false; // Collision with room bounds
    }

    // Check for collisions with objects in the scene
    raycaster.set(playerRef.current.position, newPosition.clone().sub(playerRef.current.position).normalize());
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0 && intersects[0].distance < 1) {
      return false; // Collision with an object
    }

    return true; // No collision
  };

  // Update player position and rotation based on movement
  useFrame(() => {
    if (playerRef.current) {
      const direction = new Vector3();

      // Always move forward relative to the camera's direction when pressing "W"
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

      // Update the camera position to follow the player
      camera.position.copy(playerRef.current.position);

      // Rotate the camera based on the rotation joystick input
      camera.rotation.y -= rotation.x * ROTATION_SPEED; // Horizontal rotation (left/right)
      camera.rotation.x -= rotation.y * ROTATION_SPEED; // Vertical rotation (up/down)
    }
  });

  return (
    <>
      {/* Player representation (optional) */}
      <mesh ref={playerRef} position={[0, 1, 0]}>
        <boxGeometry args={[0.5, 2, 0.5]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}