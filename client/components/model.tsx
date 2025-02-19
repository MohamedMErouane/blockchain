"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap"; // For smooth animations
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentMachines, setCurrentMachines] = useState([0, 1, 2]); // Indices for the 3 machines
  const machinesRef = useRef<THREE.Object3D[]>([]); // Ref to store the machines

  // Declare the camera with useRef
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<any>(null); // Ref to store the OrbitControls instance

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = null;

    // Camera Setup
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    if (camera.current) camera.current.position.set(0, 50, 200);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);
    scene.add(new THREE.AmbientLight(0xaaaaaa, 1));

    // Load 3D Models
    const loader = new GLTFLoader();
    const modelUrls = [
      "/arcades.glb", // Replace with your model paths
      "/arcades2.glb",
      "/arcades.glb",
    ];

    // Load and position multiple models
    modelUrls.forEach((url, index) => {
      loader.load(
        url,
        (gltf) => {
          const machine = gltf.scene;
          machine.scale.set(40, 40, 40); // Set the same scale for all models initially
          machine.position.set(index * 150 - 150, -50, 0); // Position models horizontally
          scene.add(machine);
          machinesRef.current.push(machine); // Store machine in ref
        },
        undefined,
        (error) => console.error("Error loading model:", error)
      );
    });

    // Initialize OrbitControls
    controlsRef.current = new OrbitControls(camera.current, renderer.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.enabled = false; // Disable orbit controls initially for all models

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      if (camera.current) {
        renderer.render(scene, camera.current);
      }
    };
    animate();

    // Resize Handling
    const onResize = () => {
      if (camera.current) {
        camera.current.aspect = window.innerWidth / window.innerHeight;
        camera.current.updateProjectionMatrix();
      }
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Function to switch machine positions
  const switchMachine = (direction: "left" | "right") => {
    // Update the state to reflect the new machine order
    setCurrentMachines((prevMachines) => {
      const newMachines = [...prevMachines];
      if (direction === "left") {
        // Swap machine 1 and 2
        const temp = newMachines[0];
        newMachines[0] = newMachines[1];
        newMachines[1] = temp;
      } else {
        // Swap machine 2 and 3
        const temp = newMachines[1];
        newMachines[1] = newMachines[2];
        newMachines[2] = temp;
      }
      return newMachines;
    });
  };

  // UseEffect to position machines based on currentMachines state
  useEffect(() => {
    if (machinesRef.current.length === 0) return;

    // Reset all machine positions
    machinesRef.current.forEach((machine, index) => {
      const newPosX = (currentMachines.indexOf(index) - 1) * 150;
      gsap.to(machine.position, { x: newPosX, duration: 0.5, ease: "power2.inOut" });
      
      // Set scale for center model (larger) and others (smaller)
      if (currentMachines.indexOf(index) === 1) {
        gsap.to(machine.scale, { x: 80, y: 80, z: 80, duration: 0.5 }); // Center model (larger)
      } else {
        gsap.to(machine.scale, { x: 40, y: 40, z: 40, duration: 0.5 }); // Other models (smaller)
      }
    });
  }, [currentMachines]);

  useEffect(() => {
    // Ensure the initial center model is large when the website first loads
    if (machinesRef.current.length > 0) {
      const centerMachine = machinesRef.current[1]; // The second model is the center one
      gsap.to(centerMachine.scale, { x: 80, y: 80, z: 80, duration: 0.5 }); // Center model is large initially
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom right, #1f2937, #000000)",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 50,
          left: 0,
        }}
      />
      {/* Left Arrow Button */}
      <div
        onClick={() => switchMachine("left")}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
          color: "#fff",
          fontSize: "2rem",
        }}
      >
        {"<"}
      </div>
      {/* Right Arrow Button */}
      <div
        onClick={() => switchMachine("right")}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
          color: "#fff",
          fontSize: "2rem",
        }}
      >
        {">"}
      </div>
    </div>
  );
};

export default ThreeScene;
