import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import dragonScene from "../assets/3d/dragon.glb";

const Dragon = ({ isRotating, islandPosition, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(dragonScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      console.log({ isRotating });
      if (actions.stand) {
        actions.stand.play();
      }
    } else {
      if (actions.skill02) {
        actions.skill02.stop();
      }
    }
  }, [actions, isRotating]);
  useFrame(() => {
    if (ref.current) {
      const radius = 3; // Distance from the center of the island
      const speed = Date.now() * 0.0003; // Adjust speed if necessary
      const x = Math.cos(speed) * radius; // Swapped sin with cos
      const z = Math.sin(speed) * radius; // Swapped cos with sin
      const cx = 5; // x-coordinate of the center
      const cz = 5;

      ref.current.position.x = x;
      ref.current.position.z = z;
      ref.current.position.y = 2; // Adjust height if necessary

      // Calculate the angle for the dragon's forward direction
      const angle = Math.atan2(x, z);
      ref.current.rotation.y = angle - Math.PI / 1.5; // Rotate the dragon to face forward; adjust based on your model's orientation
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Dragon;
