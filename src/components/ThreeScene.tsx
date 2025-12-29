"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function AnimatedStars() {
  const particles = useRef<any>(null);

  useFrame(({ clock }) => {
    if (particles.current) {
      particles.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return <Stars ref={particles} radius={100} depth={50} count={5000} factor={4} saturation={0} fade />;
}

export default function ThreeBackground() {
  return (
    <Canvas className="absolute inset-0 -z-20" camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <AnimatedStars />
    </Canvas>
  );
}
