import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import dayPath from "../assets/3d/day.glb";
import nightPath from "../assets/3d/night.glb";

const My3DScene = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene()); // Use ref for scene
  const [isDaytime, setIsDaytime] = useState(
    new Date().getHours() > 6 && new Date().getHours() < 18
  );

  useEffect(() => {
    // Initialize camera and renderer only once
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(sceneRef.current, camera); // Use ref here
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    // This effect handles switching between day and night scenes
    const loader = new GLTFLoader();
    loader.load(
      isDaytime ? dayPath : nightPath,
      (gltf) => {
        // Clear existing scene before adding new model
        while (sceneRef.current.children.length > 0) {
          sceneRef.current.remove(sceneRef.current.children[0]);
        }
        sceneRef.current.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );
  }, [isDaytime]);

  return (
    <>
      <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />
      <button
        onClick={() => setIsDaytime(!isDaytime)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 25,
          background: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Look at me!!
      </button>
    </>
  );
};

export default My3DScene;
