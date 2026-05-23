// @ts-nocheck
'use client';

/// <reference types="@react-three/fiber" />
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function LeatherGift({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.06;
    }
  });

  return (
    <Float rotationIntensity={0.3} floatIntensity={0.35} speed={1.2}>
      <mesh ref={ref} position={position} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.4, 3.5]} />
        <meshPhysicalMaterial
          color="#2d2720"
          roughness={0.35}
          metalness={0.2}
          clearcoat={0.65}
          clearcoatRoughness={0.08}
        />
      </mesh>
      <mesh position={[0, 0.25, 0]} rotation={[0.03, 0, 0]}>
        <boxGeometry args={[2.44, 0.08, 3.44]} />
        <meshPhysicalMaterial
          color="#b8935d"
          roughness={0.18}
          metalness={0.85}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
    </Float>
  );
}

export default function HeroProduct3D() {
  const dpr = typeof window !== 'undefined' ? Math.min(1.25, window.devicePixelRatio || 1) : 1;

  return (
    <div className="h-[520px] w-full rounded-[2rem] border border-white/10 bg-[#0b0a09]/80 shadow-2xl overflow-hidden">
      <Canvas
        frameloop="demand"
        dpr={[1, dpr]}
        camera={{ position: [0, 1.2, 6], fov: 28 }}
        gl={{ antialias: false, powerPreference: 'low-power' }}
        className="h-full w-full"
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 2]} intensity={1.1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <directionalLight position={[-5, 3, -4]} intensity={0.35} />
        <LeatherGift position={[0, 0.08, 0]} />
        <ContactShadows opacity={0.5} width={7} blur={2.5} far={6} resolution={1024} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
