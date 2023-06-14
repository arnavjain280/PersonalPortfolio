import React, { Suspense, useEffect, useState } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

import * as THREE from 'three';

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./shape/scene.gltf");
  
  const mesh = React.useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={mesh}>
      <mesh>
        <hemisphereLight intensity={0.5} groundColor="black"/>
        <pointLight intensity={1}/>
        <spotLight 
           position = {[-2, -1.25, -1.5]}
           angle={0.12}
           penumbra={1}
           color="white"
           intensity={10}
           castShadow
           shadow-mapSize={2048}
        />
        <primitive 
          object={computer.scene} 
          scale={isMobile ? 0.064 : 0.08}
          position={isMobile ? [0, -1.5, -2.2] : [-2, -1.25, -1.5]}
        />
      </mesh>
    </group>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{preserveDrawingBuffer:true}}
      >
         <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <spotLight position={[0, 50, 50]} angle={0.1} penumbra={1} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
          autoRotate
           enableZoom={false}
           maxPolarAngle={Math.PI/2}
           minPolarAngle={Math.PI/2}
          />
          <Computers isMobile={isMobile} />
         </Suspense>
         <Preload all />
      
    </Canvas>
  )
}

export default ComputersCanvas;
