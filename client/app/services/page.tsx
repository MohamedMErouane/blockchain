"use client";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import ArcadeScene from "@/components/ArcadeScene";
import Player from "@/components/player";
import dynamic from "next/dynamic";

// Dynamically import the Joystick component (for mobile devices)
const Joystick = dynamic(() => import("react-joystick-component").then((mod) => mod.Joystick), {
  ssr: false,
});

export default function Home() {
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [move, setMove] = useState({ forward: 0, backward: 0, left: 0, right: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [nearArcade, setNearArcade] = useState(false);
  const [nearArcadeIndex, setNearArcadeIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Debug state updates
  useEffect(() => {
    console.log("Near Arcade:", nearArcade);
    console.log("Near Arcade Index:", nearArcadeIndex);
  }, [nearArcade, nearArcadeIndex]);


  
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

  // Handle pointer lock controls on user click (desktop only)
  const handleClick = () => {
    if (!isMobile) {
      setIsLocked(true);
    }
  };

  // Handle joystick movement (left joystick for movement)
  const handleMoveJoystick = (event: { x: number | null; y: number | null }) => {
    if (!event || event.x === null || event.y === null) return;

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

  // Handle joystick rotation (right joystick for rotation)
  const handleRotateJoystick = (event: { x: number | null; y: number | null }) => {
    if (!event || event.x === null || event.y === null) return;

    setRotation({
      x: event.x, // Horizontal rotation (left/right)
      y: event.y, // Vertical rotation (up/down)
    });
  };

  // Reset rotation when joystick stops (right joystick)
  const handleRotateJoystickStop = () => {
    setRotation({ x: 0, y: 0 });
  };

  // Handle keyboard controls (for desktop)
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

  // Handle "Press F to play" interaction
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "KeyF" && nearArcade && nearArcadeIndex !== null) {
        console.log(`Playing Arcade ${nearArcadeIndex + 1}`);
        setIsPlaying(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [nearArcade, nearArcadeIndex]);

  // Handle "Press X to exit" interaction
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "KeyX" && isPlaying && nearArcadeIndex !== null) {
        console.log(`Exiting Arcade ${nearArcadeIndex + 1}`);
        setIsPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isPlaying, nearArcadeIndex]);

  // Handle mobile play button click
  const handlePlayButtonClick = () => {
    if (nearArcade && nearArcadeIndex !== null && !isPlaying) {
      (window as any).startArcadeGame();
      setIsPlaying(true);
    }
  };

  // Handle mobile exit button click
  const handleExitButtonClick = () => {
    if (isPlaying && nearArcadeIndex !== null) {
      (window as any).stopArcadeGame();
      setIsPlaying(false);
    }
  };


  
  return (
    <div className="h-screen w-screen" onClick={handleClick}>
      {/* Canvas for 3D scene */}
      <Canvas shadows camera={{ position: [0, 1.6, 0], fov: 75 }} style={{ backgroundColor: "#000" }}>
        <Suspense fallback={null}>
          <ArcadeScene />
          <Player
            move={move}
            rotation={rotation}
            setNearArcade={setNearArcade}
            setNearArcadeIndex={setNearArcadeIndex}
          />
        </Suspense>
        {!isMobile && isLocked && <PointerLockControls key={undefined} camera={undefined} layers={undefined} quaternion={undefined} position={undefined} children={undefined} onClick={undefined} isLocked={undefined} rotation={undefined} onPointerMissed={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerCancel={undefined} onWheel={undefined} onLostPointerCapture={undefined} dispose={undefined} attach={undefined} onUpdate={undefined} args={undefined} up={undefined} scale={undefined} matrix={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} onChange={undefined} enabled={undefined} connect={undefined} disconnect={undefined} domElement={undefined} minPolarAngle={undefined} maxPolarAngle={undefined} getDirection={undefined} moveForward={undefined} moveRight={undefined} lock={undefined} unlock={undefined} selector={undefined} onLock={undefined} onUnlock={undefined} />}
      </Canvas>

      {/* Display "Press F to play" message for desktop users */}
      {!isMobile && nearArcade && nearArcadeIndex !== null && !isPlaying && (
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#ff0",
            fontSize: "70px",
            fontFamily: "Press Start 2P, cursive",
            zIndex: 1000,
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
            textAlign: "center",
            animation: "pulse 1.5s infinite",
          }}
        >
          Press{" "}
          <span
            style={{
              color: "#f00",
              textShadow: "0 0 10px #f00, 0 0 20px #f00",
              animation: "glow 1.5s infinite",
            }}
          >
            F
          </span>{" "}
          to play
        </div>
      )}

      {/* Display "Press X to exit" message for desktop users */}
      {!isMobile && isPlaying && (
        <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#ff0",
          fontSize: "40px",
          fontFamily: "Press Start 2P, cursive",
          zIndex: 1000,
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          textAlign: "center",
        }}
      >
        Press{" "}
        <span
          style={{
            color: "#f00",
            textShadow: "0 0 10px #f00, 0 0 20px #f00",
            animation: "glow 1.5s infinite",
          }}
        >
          X
        </span>{" "}
        to exit
        <br />
        <span
          style={{
            
            fontSize: "20px", // Smaller font size
          }}
        >
          press escape or in screen again to use cursor or navigate
        </span>
      </div>
      )}

      {/* Mobile Play Button */}
      {isMobile && nearArcade && nearArcadeIndex !== null && !isPlaying && (
        <button
          style={{
            position: "absolute",
            bottom: "120px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            fontSize: "24px",
            fontFamily: "Press Start 2P, cursive",
            color: "#ff0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "2px solid #ff0",
            borderRadius: "10px",
            zIndex: 1000,
          }}
          onClick={handlePlayButtonClick}
        >
          Play Arcade
        </button>
      )}

      {/* Mobile Exit Button */}
      {isMobile && isPlaying && (
        <button
          style={{
            position: "absolute",
            bottom: "365px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            fontSize: "15px",
            fontFamily: "Press Start 2P, cursive",
            color: "#ff0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid #ff0",
            borderRadius: "10px",
            zIndex: 1000,
          }}
          onClick={handleExitButtonClick}
        >
          Exit 
        </button>
      )}

      {/* Joysticks for mobile devices */}
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
              baseColor="rgba(255, 255, 255, 0.3)"
              stickColor="rgba(0, 0, 0, 0.5)"
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
              baseColor="rgba(255, 255, 255, 0.3)"
              stickColor="rgba(0, 0, 0, 0.5)"
              move={handleRotateJoystick}
              stop={handleRotateJoystickStop}
            />
          </div>
        </>
      )}
    </div>
  );
}