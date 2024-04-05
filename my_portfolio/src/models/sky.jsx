import React, { useEffect, useState } from "react"; // Import useState here
import { useGLTF } from "@react-three/drei";

import Day from "../assets/3d/day.glb";
import Night from "../assets/3d/night.glb";

const Sky = ({ theme }) => {
  const { scene: dayScene } = useGLTF(Day);
  const { scene: nightScene } = useGLTF(Night);
  const [skyScene, setSkyScene] = useState(null);

  useEffect(() => {
    // Conditionally set the scene based on the theme
    setSkyScene(theme === "day" ? dayScene : nightScene);
  }, [theme, dayScene, nightScene]);

  if (!skyScene) return null;

  return <primitive object={skyScene} />;
};

// Preloading models outside of the component
useGLTF.preload(Day);
useGLTF.preload(Night);

export default Sky;
