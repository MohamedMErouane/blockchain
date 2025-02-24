"use client";
import { useLoader } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ArcadeScene() {
  // Load the 3D room model from the public folder
  const roomModel = useLoader(GLTFLoader, "/room.glb");

  return (
    <>
      {/* Floor */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <meshStandardMaterial attach="material" color="gray" />
      </Plane>

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