import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Day from "../assets/3d/day.glb";
import Night from "../assets/3d/night.glb";

// Preloading models
useGLTF.preload(Day);
useGLTF.preload(Night);

const Sky = ({ theme = "day", isRotating = false }) => {
  console.log(`Rendering Sky with theme: ${theme}`);

  const dayModel = useGLTF(Day);
  const nightModel = useGLTF(Night);

  // Determine which scene to use based on the theme
  const skyScene = theme === "day" ? dayModel.scene : nightModel.scene;

  const groupRef = useRef();

  // Add a rotating animation
  useFrame(({ clock }) => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={skyScene} />
    </group>
  );
};

export default Sky;
