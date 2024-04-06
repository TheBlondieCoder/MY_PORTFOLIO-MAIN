import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const My3DScene = ({ isDaytime }) => {
  const mountRef = useRef();
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    if (!mountRef.current) return; // Ensure mountRef is available

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const initialRenderer = new THREE.WebGLRenderer({ antialias: true });
    initialRenderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(initialRenderer.domElement);
    setRenderer(initialRenderer);

    // Handle window resize
    const handleResize = () => {
      const { clientWidth, clientHeight } = mountRef.current;
      initialRenderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    const loader = new GLTFLoader();
    const modelPath = isDaytime ? "/3d/day.glb" : "/3d/night.glb";
    loader.load(
      modelPath,
      (gltf) => {
        while (scene.children.length > 0) {
          scene.remove(scene.children[0]); // Clear previous scene
        }
        scene.add(gltf.scene); // Add new model to scene
      },
      undefined,
      (error) => console.error(error)
    );

    const animate = () => {
      requestAnimationFrame(animate);
      initialRenderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(initialRenderer.domElement);
      window.removeEventListener("resize", handleResize); // Clean up
      initialRenderer.dispose(); // Optional: Dispose of the renderer for clean-up
    };
  }, [isDaytime]); // Re-run effect when theme changes

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default My3DScene;
