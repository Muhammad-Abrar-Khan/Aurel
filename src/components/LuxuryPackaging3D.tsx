// @ts-nocheck
"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';

const LeatherMaterial = ({ color = "#171614", roughness = 0.55 }: { color?: string; roughness?: number }) => (
  <meshStandardMaterial 
    color={color}
    roughness={roughness}
    metalness={0.08}
  />
);

const GoldMaterial = () => (
  <meshStandardMaterial 
    color="#C9A96E"
    roughness={0.18}
    metalness={0.9}
  />
);

const VelvetMaterial = () => (
  <meshStandardMaterial 
    color="#E4DFD8"
    roughness={0.8}
    metalness={0.02}
  />
);

// Miniature Wallet nestled in the box
const NestedWallet = () => (
  <group position={[-0.8, -0.05, 0.6]}>
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1.2, 0.15, 0.9]} />
      <LeatherMaterial color="#1b1a18" roughness={0.45} />
    </mesh>
    {/* Gold brand plate */}
    <mesh position={[0, 0.08, 0.25]}>
      <boxGeometry args={[0.3, 0.02, 0.1]} />
      <GoldMaterial />
    </mesh>
  </group>
);

// Miniature Notebook nestled in the box
const NestedNotebook = () => (
  <group position={[0.7, -0.02, -0.2]} rotation={[0, 0.05, 0]}>
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1.3, 0.18, 1.8]} />
      <LeatherMaterial color="#242220" roughness={0.5} />
    </mesh>
    {/* Bookmark ribbon */}
    <mesh position={[0.4, 0.1, 0]}>
      <boxGeometry args={[0.08, 0.01, 1.82]} />
      <GoldMaterial />
    </mesh>
  </group>
);

// Miniature Pen Case nestled in the box
const NestedPenCase = () => (
  <group position={[-0.8, -0.05, -0.6]} rotation={[0, -0.1, 0]}>
    <mesh castShadow receiveShadow>
      <boxGeometry args={[0.35, 0.15, 1.5]} />
      <LeatherMaterial color="#1f1d1b" roughness={0.5} />
    </mesh>
  </group>
);

export const LuxuryBoxScene = ({ triggerOpen }: { triggerOpen: boolean }) => {
  const hingeRef = useRef<THREE.Group>(null);
  const [openProgress, setOpenProgress] = useState(0);

  // Smooth physical opening animation on triggerOpen
  useFrame((state, delta) => {
    if (triggerOpen) {
      if (openProgress < 1) {
        const nextProgress = Math.min(openProgress + delta * 1.5, 1); // 1.5s duration
        setOpenProgress(nextProgress);
      }
    } else {
      if (openProgress > 0) {
        const nextProgress = Math.max(openProgress - delta * 2.0, 0); // faster close
        setOpenProgress(nextProgress);
      }
    }

    if (hingeRef.current) {
      // Rotate on X axis, starting at 0 (closed) up to 110 degrees (-Math.PI * 0.61)
      const targetAngle = -Math.PI * 0.61 * THREE.MathUtils.easeOutCubic(openProgress);
      hingeRef.current.rotation.x = targetAngle;
    }
  });

  return (
    <group position={[0, -0.4, 0]} rotation={[0.2, -0.5, 0]}>
      {/* ── Box Base (Rigid structural box) ── */}
      <mesh castShadow receiveShadow position={[0, -0.2, 0]}>
        <boxGeometry args={[4.2, 0.4, 4.2]} />
        <LeatherMaterial color="#161513" roughness={0.6} />
      </mesh>

      {/* Internal Velvet Tray Inset */}
      <mesh position={[0, -0.01, 0]}>
        <boxGeometry args={[3.96, 0.1, 3.96]} />
        <VelvetMaterial />
      </mesh>

      {/* Ribbon wrap along the base */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[4.22, 0.12, 0.4]} />
        <GoldMaterial />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.4, 0.12, 4.22]} />
        <GoldMaterial />
      </mesh>

      {/* Nestled Products */}
      <NestedWallet />
      <NestedNotebook />
      <NestedPenCase />

      {/* ── Rigid Box Lid (Hinged at the rear) ── */}
      {/* Hinge axis group positioned at the top-rear edge of the box base (y=0, z=-2.1) */}
      <group ref={hingeRef} position={[0, 0, -2.1]}>
        {/* Lid parented to the hinge. local position shifted by Z=2.1, Y=0.06 to sit perfectly flush */}
        <group position={[0, 0.06, 2.1]}>
          
          {/* Lid Top */}
          <mesh castShadow position={[0, 0, 0]}>
            <boxGeometry args={[4.22, 0.12, 4.22]} />
            <LeatherMaterial color="#161513" roughness={0.5} />
          </mesh>

          {/* Lid Lip / Edges */}
          <mesh castShadow position={[0, -0.15, 0.02]}>
            <boxGeometry args={[4.22, 0.3, 0.04]} />
            <LeatherMaterial color="#161513" roughness={0.5} />
          </mesh>
          <mesh castShadow position={[-2.09, -0.15, 0]}>
            <boxGeometry args={[0.04, 0.3, 4.22]} />
            <LeatherMaterial color="#161513" roughness={0.5} />
          </mesh>
          <mesh castShadow position={[2.09, -0.15, 0]}>
            <boxGeometry args={[0.04, 0.3, 4.22]} />
            <LeatherMaterial color="#161513" roughness={0.5} />
          </mesh>

          {/* Gold Ribbons across Lid */}
          <mesh position={[0, 0.07, 0]}>
            <boxGeometry args={[4.24, 0.02, 0.41]} />
            <GoldMaterial />
          </mesh>
          <mesh position={[0, 0.07, 0]}>
            <boxGeometry args={[0.41, 0.02, 4.24]} />
            <GoldMaterial />
          </mesh>

          {/* Gold Embossed Aurel Branding */}
          <Text
            position={[0, 0.082, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.4}
            font="Georgia"
            italic
            color="#C9A96E"
            letterSpacing={0.3}
          >
            Aurel
          </Text>
        </group>
      </group>
    </group>
  );
};

export default function LuxuryPackaging3D({ triggerOpen }: { triggerOpen: boolean }) {
  const dpr = typeof window !== 'undefined' ? Math.min(1.25, window.devicePixelRatio || 1) : 1;

  return (
    <div className="w-full h-full min-h-[420px] relative">
      <Canvas
        shadows
        dpr={[1, dpr]}
        camera={{ position: [0, 3.2, 7.5], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight 
          position={[5, 12, 4]} 
          intensity={1.6} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-6, 4, -4]} intensity={0.4} />
        <spotLight position={[0, 15, 0]} intensity={0.8} penumbra={1} angle={0.2} />
        
        <LuxuryBoxScene triggerOpen={triggerOpen} />
        
        <ContactShadows opacity={0.6} scale={10} width={8} height={8} blur={2.4} far={4.5} resolution={1024} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
