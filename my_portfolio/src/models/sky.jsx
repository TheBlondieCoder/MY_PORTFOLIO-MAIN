import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Day from "../assets/3d/day.glb";
import Night from "../assets/3d/night.glb";

// Preloading models
useGLTF.preload(Day);
useGLTF.preload(Night);

const Sky = ({ theme = "day" }) => {
  console.log(`Rendering Sky with theme: ${theme}`);

  const dayModel = useGLTF(Day);
  const nightModel = useGLTF(Night);

  // Determine which scene to use based on the theme
  const skyScene = theme === "day" ? dayModel.scene : nightModel.scene;

  return <primitive object={skyScene} />;
};

export default Sky;
