import React, { useEffect, useState } from "react"; // Import useState here
import { useGLTF } from "@react-three/drei";

const Sky = ({ theme }) => {
  const { scene: dayScene } = useGLTF("/3d/day.glb");
  const { scene: nightScene } = useGLTF("/3d/night.glb");
  const [skyScene, setSkyScene] = useState(null);

  useEffect(() => {
    // Conditionally set the scene based on the theme
    setSkyScene(theme === "day" ? dayScene : nightScene);
  }, [theme, dayScene, nightScene]);

  if (!skyScene) return null;

  return <primitive object={skyScene} />;
};

// Preloading models outside of the component

export default Sky;
