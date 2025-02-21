"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3, Box3, Mesh } from "three";
import dynamic from "next/dynamic";

const SPEED = 0.1;
const ROOM_BOUNDS = new Box3(new Vector3(-10, 0, -10), new Vector3(10, 5, 10)); // Define room bounds

// Dynamically import the Joystick component to avoid SSR issues
const Joystick = dynamic(() => import("react-joystick-component").then((mod) => mod.Joystick), {
  ssr: false,
});

export default function Player() {
  const playerRef = useRef<Mesh | null>(null);
  const [move, setMove] = useState({ forward: 0, backward: 0, left: 0, right: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const { camera } = useThree();

  // Detect if the user is on a mobile device
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
          setMove((m) => ({ ...m, forward: 1 }));
          break;
        case "KeyS":
          setMove((m) => ({ ...m, backward: 1 }));
          break;
        case "KeyA":
          setMove((m) => ({ ...m, left: 1 }));
          break;
        case "KeyD":
          setMove((m) => ({ ...m, right: 1 }));
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
          setMove((m) => ({ ...m, forward: 0 }));
          break;
        case "KeyS":
          setMove((m) => ({ ...m, backward: 0 }));
          break;
        case "KeyA":
          setMove((m) => ({ ...m, left: 0 }));
          break;
        case "KeyD":
          setMove((m) => ({ ...m, right: 0 }));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Joystick movement handler
  const handleJoystickMove = (event: { x: number | null; y: number | null }) => {
    if (!event || event.x === null || event.y === null) return;

    setMove({
      forward: event.y > 0 ? Math.abs(event.y) : 0,
      backward: event.y < 0 ? Math.abs(event.y) : 0,
      left: event.x < 0 ? Math.abs(event.x) : 0,
      right: event.x > 0 ? Math.abs(event.x) : 0,
    });
  };

  // Reset movement when joystick stops
  const handleJoystickStop = () => {
    setMove({ forward: 0, backward: 0, left: 0, right: 0 });
  };

  // Update player position based on movement
  useFrame(() => {
    if (playerRef.current) {
      const direction = new Vector3(
        move.left - move.right,
        0,
        move.forward - move.backward
      ).normalize();

      // Calculate new position
      const newPosition = playerRef.current.position.clone().addScaledVector(direction, SPEED);

      // Check if new position is within room bounds
      if (ROOM_BOUNDS.containsPoint(newPosition)) {
        playerRef.current.position.copy(newPosition);
      }

      // Update the camera position to follow the player
      camera.position.copy(playerRef.current.position);
    }
  });

  return (
    <>
      {/* Player representation (optional) */}
      <mesh ref={playerRef} position={[0, 1, 0]}>
        <boxGeometry args={[0.5, 2, 0.5]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Joystick for mobile devices */}
      {isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            zIndex: 1000,
          }}
        >
          <Joystick
            size={100}
            baseColor="gray"
            stickColor="black"
            move={handleJoystickMove}
            stop={handleJoystickStop}
          />
        </div>
      )}
    </>
  );
}