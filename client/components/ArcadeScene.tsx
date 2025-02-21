import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, Plane } from "@react-three/drei";
import { Mesh, AmbientLight, DirectionalLight } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader

export default function ArcadeScene() {
  const playerRef = useRef<Mesh | null>(null);

  // Load the 3D model (arcade machine) from the public folder
  const model = useLoader(GLTFLoader, "/suiman.glb");

  useFrame(({ camera }) => {
    if (playerRef.current) {
      camera.position.lerp(playerRef.current.position, 0.1);
    }
  });

  return (
    <>
      {/* Floor */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <meshStandardMaterial attach="material" color="gray" />
      </Plane>

      {/* Arcade Machines */}
      <Box position={[0, 1, -3]} args={[1, 2, 1]}>
        <meshStandardMaterial attach="material" color="blue" />
      </Box>

      <Box position={[2, 1, -3]} args={[1, 2, 1]}>
        <meshStandardMaterial attach="material" color="red" />
      </Box>

      {/* 3D Model of the Arcade Machine */}
      <primitive object={model.scene} position={[0, 0, -5]} scale={[1, 1, 1]} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />
    </>
  );
}
