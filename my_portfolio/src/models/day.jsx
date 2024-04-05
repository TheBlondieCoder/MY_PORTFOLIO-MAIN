import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import dayScene from "../assets/3d/day.glb";

const Day = ({ isRotating }) => {
  const Day = useGLTF(dayScene);
  const dayRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      dayRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={dayRef}>
      <primitive object={Day.scene} />
    </mesh>
  );
};

export default Day;
