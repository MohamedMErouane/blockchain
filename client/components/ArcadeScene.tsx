"use client";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ArcadeScene() {
  const roomModel = useLoader(GLTFLoader, "/room.glb");

  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 3D Model of the Room */}
      <primitive object={roomModel.scene} position={[0, 0, 0]} scale={[1, 1, 1]} />

      {/* Example: Table object */}
      <mesh position={[2, 0.5, -3]}>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="brown" />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />
    </>
  );
}
