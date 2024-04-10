import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Ensure THREE is imported
import dragonScene from "../assets/3d/dragon.glb";

const Dragon = ({ isRotating, islandPosition = [0, 0, 0], ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(dragonScene);
  const { actions } = useAnimations(animations, ref);
  const { camera } = useThree(); // Destructure camera from useThree
  useFrame((state) => {
    if (ref.current) {
      const elapsedTime = state.clock.getElapsedTime();
      const radius = 20; // Radius of the dragon's circular path
      const speed = elapsedTime * 0.3; // Speed of rotation
      const x = Math.cos(speed) * radius + islandPosition[0];
      const z = Math.sin(speed) * radius + islandPosition[2];
      const y = 0 + islandPosition[1] + Math.sin(elapsedTime * 0.3) * 2;

      ref.current.position.x = x;
      ref.current.position.z = z;
      ref.current.position.y = y; // Use the calculated y for elevation

      // This adjustment makes the dragon face the direction it's moving
      const targetRotation = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          0,
          Math.PI -
            0 -
            Math.atan2(z / islandPosition[2], x / islandPosition[0]),
          0,
          "YXZ"
        )
      );
      ref.current.quaternion.slerp(targetRotation, 0.01);
    }
  });
  useEffect(() => {
    actions.run?.play();
  }, [actions]);

  useEffect(() => {
    // Ensure camera.lookAt is called within useEffect and has the necessary dependencies
    camera.lookAt(
      new THREE.Vector3(islandPosition[0], islandPosition[1], islandPosition[2])
    );
  }, [camera, islandPosition]); // Re-run this effect if camera or islandPosition changes

  return <primitive object={scene} ref={ref} {...props} />;
};

export default Dragon;
