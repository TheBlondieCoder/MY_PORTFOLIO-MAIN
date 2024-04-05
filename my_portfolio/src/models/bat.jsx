import React, { useRef, useEffect } from "react";

import batScene from "../assets/3d/bat.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Bat() {
  const { scene, animations } = useGLTF(batScene);
  const batRef = useRef();
  const { actions } = useAnimations(animations, batRef);

  // useEffect(() => {
  //   actions["Flight"].play();
  // });

  // useFrame(({ clock, camera }) => {
  //   // batRef.current.rotation.y += 0.15 * delta;

  //   // console.log("Bat position:", batRef.current.position);
  //   // console.log("Camera position:", camera.position);

  //   batRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

  //   batRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

  //   if (batRef.current.position.x > camera.position.x + 3) {
  //     batRef.current.rotation.y = Math.PI;
  //   } else if (batRef.current.position.x < camera.position.x - 3) {
  //     batRef.current.rotation.y = 1.5;
  //   }

  //   // Adjust movement logic
  //   if (batRef.current.rotation.y === 1.5) {
  //     batRef.current.position.x += 0.02;
  //     batRef.current.position.z -= 0.02;
  //   } else {
  //     batRef.current.position.x -= 0.02;
  //     batRef.current.position.z += 0.02;
  //   }
  // });

  // return (
  //   <mesh position={[1, 1, 1]} scale={[0.03, 0.03, 0.03]} ref={batRef}>
  //     <primitive object={scene} />
  //   </mesh>
  // );
}
export default Bat;
