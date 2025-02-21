"use client";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { Vector3 } from "three";

const SPEED = 0.1;

export default function Player() {
  const [move, setMove] = useState({ forward: 0, backward: 0, left: 0, right: 0 });

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

  useFrame((state) => {
    const direction = new Vector3(
      move.left - move.right,
      0,
      move.forward - move.backward
    ).normalize();

    state.camera.position.addScaledVector(direction, SPEED);
  });

  return <PointerLockControls />;
}
