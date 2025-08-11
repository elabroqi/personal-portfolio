// src/components/canvas/FibonacciCanvas.jsx
import React, { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Center, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

function FibonacciModel() {
  const { scene } = useGLTF("/models/fibonacci_sphere/scene.gltf");

  useEffect(() => {
    // Apply wireframe material to show the structure
    scene.traverse((o) => {
      if (o.isMesh) {
        o.material = new THREE.MeshBasicMaterial({
          wireframe: true,
          transparent: true,
          opacity: 0.3,
          color: new THREE.Color(0xc084fc),
          blending: THREE.AdditiveBlending
        });
        o.material.depthWrite = false;
        o.material.side = THREE.DoubleSide;
      }
    });

    // Set initial rotation to a good starting point
    scene.rotation.x = Math.PI * 5; // Slight tilt on X axis
    scene.rotation.y = Math.PI * 5; // Start rotated 54 degrees on Y axis
    scene.rotation.z = Math.PI * 5; // Slight tilt on Z axis
  }, [scene]);

  return (
    <Center>
      <primitive 
        object={scene} 
        scale={[2, 2, 2]}
      />
    </Center>
  );
}

export default function FibonacciCanvas() {
  return (
    <Canvas 
      className="w-full h-full"
      gl={{ alpha: true, antialias: true }}
      camera={{ fov: 35, position: [0, 0, 5] }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[0, 0, 0]} intensity={2} />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={.8}
          enableZoom={false} 
          enablePan={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={-10}
        />
        <FibonacciModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}