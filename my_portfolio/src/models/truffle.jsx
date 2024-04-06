/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: dotflare (https://sketchfab.com/Dotflare)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/truffle-man-e41c6781e4854a1fbe5cdf24a0029aab
Title: Truffle Man
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Truffle = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/3d/truffle.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop()); // Corrected syntax: added closing parenthesis after the callback function
    if (actions[currentAnimation]) {
      // Fixed typo: changed curly braces to parentheses
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="truffle" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cylinder082"
                  position={[45.768, 52.674, -0.36]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="BezierCurve032"
                  position={[0, 3.925, 0]}
                  rotation={[-0.688, -0.283, -2.671]}
                  scale={100}
                />
                <group
                  name="Armature001"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_7">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.MatMushroomBody}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.MatMushroom}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials.MatMushroom}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name="Object_105"
                      geometry={nodes.Object_105.geometry}
                      material={materials.MatMushroomBody}
                      skeleton={nodes.Object_105.skeleton}
                    />
                    <skinnedMesh
                      name="Object_107"
                      geometry={nodes.Object_107.geometry}
                      material={materials.MatMushroomBody}
                      skeleton={nodes.Object_107.skeleton}
                    />
                    <skinnedMesh
                      name="Object_109"
                      geometry={nodes.Object_109.geometry}
                      material={materials.MatMushroomBody}
                      skeleton={nodes.Object_109.skeleton}
                    />
                    <skinnedMesh
                      name="Object_111"
                      geometry={nodes.Object_111.geometry}
                      material={materials.MatMushroom}
                      skeleton={nodes.Object_111.skeleton}
                    />
                    <skinnedMesh
                      name="Object_113"
                      geometry={nodes.Object_113.geometry}
                      material={materials.MatMushroom}
                      skeleton={nodes.Object_113.skeleton}
                    />
                    <skinnedMesh
                      name="Object_115"
                      geometry={nodes.Object_115.geometry}
                      material={materials.MatMushroom}
                      skeleton={nodes.Object_115.skeleton}
                    />
                    <skinnedMesh
                      name="Object_117"
                      geometry={nodes.Object_117.geometry}
                      material={materials.MatMushroom}
                      skeleton={nodes.Object_117.skeleton}
                    />
                    <group
                      name="Object_9"
                      position={[45.768, 52.674, -0.36]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_11"
                      position={[0, 3.925, 0]}
                      rotation={[-0.688, -0.283, -2.671]}
                      scale={100}
                    />
                    <group
                      name="Object_102"
                      position={[0, 3.925, 0]}
                      rotation={[-0.688, -0.283, -2.671]}
                      scale={100}
                    />
                    <group
                      name="Object_104"
                      position={[45.768, 52.674, -0.36]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_106"
                      position={[45.768, 52.674, -0.36]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_108"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_110"
                      position={[0, 3.925, 0]}
                      rotation={[-0.688, -0.283, -2.671]}
                      scale={100}
                    />
                    <group
                      name="Object_112"
                      position={[0, 3.925, 0]}
                      rotation={[-0.688, -0.283, -2.671]}
                      scale={100}
                    />
                    <group
                      name="Object_114"
                      position={[0, 3.925, 0]}
                      rotation={[-0.688, -0.283, -2.671]}
                      scale={100}
                    />
                    <group
                      name="Object_116"
                      position={[0, 3.925, 0]}
                      rotation={[-0.688, -0.283, -2.671]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="BezierCurve003"
                  position={[0, 3.925, 0]}
                  rotation={[-0.688, -0.283, -2.671]}
                  scale={100}
                />
                <group
                  name="Cylinder219"
                  position={[45.768, 52.674, -0.36]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cylinder220"
                  position={[45.768, 52.674, -0.36]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cube002"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="BezierCurve001"
                  position={[0, 3.925, 0]}
                  rotation={[-0.688, -0.283, -2.671]}
                  scale={100}
                />
                <group
                  name="BezierCurve002"
                  position={[0, 3.925, 0]}
                  rotation={[-0.688, -0.283, -2.671]}
                  scale={100}
                />
                <group
                  name="BezierCurve004"
                  position={[0, 3.925, 0]}
                  rotation={[-0.688, -0.283, -2.671]}
                  scale={100}
                />
                <group
                  name="BezierCurve005"
                  position={[0, 3.925, 0]}
                  rotation={[-0.688, -0.283, -2.671]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Truffle;
