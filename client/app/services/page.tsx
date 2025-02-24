"use client";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import ArcadeScene from "@/components/ArcadeScene";
import Player from "@/components/player"; // Import the player component
import dynamic from "next/dynamic";

// Dynamically import the Joystick component to avoid SSR issues
const Joystick = dynamic(() => import("react-joystick-component").then((mod) => mod.Joystick), {
  ssr: false,
});

export default function Home() {
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [move, setMove] = useState({ forward: 0, backward: 0, left: 0, right: 0 }); // Movement state
  const [rotation, setRotation] = useState({ x: 0, y: 0 }); // Rotation state

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

  // Activate PointerLockControls on user click (desktop only)
  const handleClick = () => {
    if (!isMobile) {
      setIsLocked(true);
    }
  };

  // Joystick movement handler (left joystick)
  const handleMoveJoystick = (event: { x: number | null; y: number | null }) => {
    if (!event || event.x === null || event.y === null) return;

    // Update player movement based on joystick input
    setMove({
      forward: event.y > 0 ? Math.abs(event.y) : 0,
      backward: event.y < 0 ? Math.abs(event.y) : 0,
      left: event.x < 0 ? Math.abs(event.x) : 0,
      right: event.x > 0 ? Math.abs(event.x) : 0,
    });
  };

  // Reset movement when joystick stops (left joystick)
  const handleMoveJoystickStop = () => {
    setMove({ forward: 0, backward: 0, left: 0, right: 0 });
  };

  // Joystick rotation handler (right joystick)
  const handleRotateJoystick = (event: { x: number | null; y: number | null }) => {
    if (!event || event.x === null || event.y === null) return;

    // Update rotation based on joystick input
    setRotation({
      x: event.x, // Horizontal rotation (left/right)
      y: event.y, // Vertical rotation (up/down)
    });
  };

  // Reset rotation when joystick stops (right joystick)
  const handleRotateJoystickStop = () => {
    setRotation({ x: 0, y: 0 });
  };

  // Keyboard controls (for desktop)
  useEffect(() => {
    if (isMobile) return; // Skip keyboard controls on mobile

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
  }, [isMobile]);

  return (
    <div className="h-screen w-screen" onClick={handleClick}>
      <Canvas shadows camera={{ position: [0, 1.6, 0], fov: 75 }}>
        <Suspense fallback={null}>
          <ArcadeScene />
          <Player move={move} rotation={rotation} /> {/* Pass move and rotation states to Player */}
        </Suspense>
        {!isMobile && isLocked && <PointerLockControls />} {/* Enable PointerLockControls only on desktop */}
      </Canvas>

      {/* Joysticks for mobile devices (outside Canvas) */}
      {isMobile && (
        <>
          {/* Left joystick for movement */}
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
              baseColor="rgba(255, 255, 255, 0.3)" // Transparent base
              stickColor="rgba(0, 0, 0, 0.5)" // Semi-transparent stick
              move={handleMoveJoystick}
              stop={handleMoveJoystickStop}
            />
          </div>

          {/* Right joystick for rotation */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
            }}
          >
            <Joystick
              size={100}
              baseColor="rgba(255, 255, 255, 0.3)" // Transparent base
              stickColor="rgba(0, 0, 0, 0.5)" // Semi-transparent stick
              move={handleRotateJoystick}
              stop={handleRotateJoystickStop}
            />
          </div>
        </>
      )}
    </div>
  );
}