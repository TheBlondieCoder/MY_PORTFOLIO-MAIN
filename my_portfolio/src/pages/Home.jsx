import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Sky from "../models/sky";
import Island from "../models/island";
import Dragon from "../models/dragon";
import Homeinfo from "../components/Homeinfo";
import ErrorBoundary from "../components/Errorboundry";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -10, -50];
    } else {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [-0, -5, -30];
    }
    return [screenScale, screenPosition];
  };

  const adjustDragonForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -0, 0];
    } else {
      screenScale = [3, 5, -20];
      screenPosition = [1.5, -1.5, -1];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [dragonScale, dragonPosition] = adjustDragonForScreenSize();
  const skyPosition = [0, 0, 0];

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
      <ErrorBoundary>
        <Canvas
          style={{ width: "100vw", height: "100vh" }}
          className={`bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />

            <group position={dragonPosition}>
              <Dragon
                isRotating={isRotating}
                scale={dragonScale}
                position={dragonPosition}
                rotation={[0, 20, 0]}
              />
            </group>

            <group position={skyPosition}>
              <Sky isRotating={isRotating} />
            </group>

            <group position={islandPosition}>
              <Island
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                position={islandPosition}
                rotation={islandRotation}
                scale={islandScale}
                setCurrentStage={setCurrentStage}
              />
            </group>
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </section>
  );
};

export default Home;