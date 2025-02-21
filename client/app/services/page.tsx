"use client";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import ArcadeScene from "@/components/ArcadeScene";
import Player from "@/components/player"; // Import the player component

export default function Home() {
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="h-screen w-screen" onClick={handleClick}>
      <Canvas shadows camera={{ position: [0, 1.6, 0], fov: 75 }}>
        <Suspense fallback={null}>
          <ArcadeScene />
          <Player /> {/* Include the player component */}
        </Suspense>
        {!isMobile && isLocked && <PointerLockControls />} {/* Enable PointerLockControls only on desktop */}
      </Canvas>
    </div>
  );
}