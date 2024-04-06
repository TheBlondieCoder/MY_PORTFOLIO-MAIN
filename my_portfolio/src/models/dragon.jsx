import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const Dragon = ({ isRotating, islandPosition = [0, 0, 0], ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF("/3d/dragon.glb");
  const { actions } = useAnimations(animations, ref);
  const { size } = useThree();

  useEffect(() => {
    if (isRotating && actions.stand) {
      actions.stand.play();
    } else if (!isRotating && actions.skill02) {
      actions.skill02.stop();
    }
  }, [actions, isRotating]);

  useFrame(() => {
    if (ref.current) {
      const radius = 2; // Radius of the dragon's circular path
      const speed = Date.now() * 0.0003; // Speed of rotation
      const x = Math.cos(speed) * radius + islandPosition[2];
      const z = Math.sin(speed) * radius + islandPosition[2];

      ref.current.position.x = x;
      ref.current.position.z = z;
      ref.current.position.y = 1.5 + islandPosition[1]; // Elevation above the island

      // Correct the angle so that dragon faces forward along the path
      const angle = Math.atan2(-z, -x);
      ref.current.rotation.y = angle + Math.PI / 2; // Flipped to face forwards
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Dragon;
