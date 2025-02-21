"use client";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { Suspense } from "react";
import ArcadeScene from "@/components/ArcadeScene";
import Player from "@/components/player"; // Import the player component

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Canvas shadows camera={{ position: [0, 1.6, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ArcadeScene />
          <Player /> {/* Include the player component */}
        </Suspense>
        <PointerLockControls /> {/* FPS-style controls */}
      </Canvas>
    </div>
  );
}
