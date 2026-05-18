// @ts-nocheck
/// <reference types="@react-three/fiber" />
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Float, ContactShadows, Environment, Text, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const LeatherMaterial = ({ color = "#1A1917" }: any) => (
  <meshStandardMaterial 
    color={color}
    roughness={0.7}
    metalness={0.1}
  />
);

const GoldMaterial = () => (
  <meshStandardMaterial 
    color="#C9A96E"
    roughness={0.2}
    metalness={0.9}
  />
);

const Wallet = () => {
  const ref = useRef<any>(null);
  const scroll = useScroll();
  useFrame(() => {
    const s = scroll.offset;
    const entryProgress = THREE.MathUtils.smoothstep(s, 0, 0.4);
    if (ref.current) {
      ref.current.position.x = -5 + (5 * entryProgress);
      ref.current.rotation.y = Math.PI * 0.1 * (1 - entryProgress);
      ref.current.position.z = s > 0.6 ? (s - 0.6) * -5 : 0;
    }
  });

  return (
    <group ref={ref} position={[-5, 0.5, 0]}>
      <mesh castShadow>
        <boxGeometry args={[1.5, 1, 0.2]} />
        <LeatherMaterial />
      </mesh>
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[0.4, 0.1, 0.01]} />
        <GoldMaterial />
      </mesh>
    </group>
  );
};

const Notebook = () => {
  const ref = useRef<any>(null);
  const scroll = useScroll();
  useFrame(() => {
    const s = scroll.offset;
    const entryProgress = THREE.MathUtils.smoothstep(s, 0.1, 0.5);
    if (ref.current) {
      ref.current.position.x = 5 - (5 * entryProgress);
      ref.current.rotation.y = -Math.PI * 0.1 * (1 - entryProgress);
      ref.current.position.y = 0.5;
      ref.current.position.z = s > 0.6 ? (s - 0.6) * -5 : 0;
    }
  });

  return (
    <group ref={ref} position={[5, 0.5, -0.5]}>
      <mesh castShadow>
        <boxGeometry args={[1.2, 1.8, 0.15]} />
        <LeatherMaterial color="#211f1d" />
      </mesh>
      <mesh position={[-0.5, 0, 0.08]}>
        <boxGeometry args={[0.05, 1.8, 0.02]} />
        <GoldMaterial />
      </mesh>
    </group>
  );
};

const Pen = () => {
  const ref = useRef<any>(null);
  const scroll = useScroll();
  useFrame(() => {
    const s = scroll.offset;
    const entryProgress = THREE.MathUtils.smoothstep(s, 0.2, 0.6);
    if (ref.current) {
      ref.current.position.y = -5 + (4 * entryProgress);
      ref.current.position.x = 0.8;
      ref.current.rotation.z = Math.PI * 0.05;
      ref.current.position.z = s > 0.6 ? (s - 0.6) * -5 : 0;
    }
  });

  return (
    <group ref={ref} position={[0.8, -5, 0]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.03, 0.03, 1.5, 32]} />
        <GoldMaterial />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.3, 32]} />
        <meshStandardMaterial color="black" roughness={0.1} />
      </mesh>
    </group>
  );
};

const BoxLid = () => {
  const ref = useRef<any>(null);
  const scroll = useScroll();
  useFrame(() => {
    const s = scroll.offset;
    const entryProgress = THREE.MathUtils.smoothstep(s, 0.7, 0.95);
    if (ref.current) {
      ref.current.position.y = 5 - (5 * entryProgress);
      ref.current.rotation.x = -Math.PI * 0.1 * (1 - entryProgress);
      ref.current.visible = s > 0.6;
    }
  });

  return (
    <group ref={ref} position={[0, 5, 0.5]}>
      <mesh castShadow>
        <boxGeometry args={[4, 4, 0.1]} />
        <LeatherMaterial color="#1A1917" />
      </mesh>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.4}
        color="#C9A96E"
        font="https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bm39__LgnTRiBZ_1R82_YAtL_f_6x.woff"
        letterSpacing={0.5}
      >
        AUREL
      </Text>
    </group>
  );
};

const BoxBase = () => {
  return (
    <group position={[0, -0.2, -0.1]}>
      <mesh receiveShadow>
        <boxGeometry args={[4.2, 4.2, 0.5]} />
        <LeatherMaterial color="#141311" />
      </mesh>
      <mesh position={[0, 0, 0.2]}>
        <boxGeometry args={[3.8, 3.8, 0.1]} />
        <meshStandardMaterial color="#E6E2DE" roughness={0.8} />
      </mesh>
    </group>
  );
};

export const ProductAssemblyScene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 35 }}>
      <color attach="background" args={["#1c1b19"]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1} />

      <ScrollControls pages={3} damping={0.2}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Wallet />
          <Notebook />
          <Pen />
          <BoxBase />
          <BoxLid />
        </Float>
        <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.25} far={10} color="#000000" />
      </ScrollControls>

      <Environment preset="studio" />
    </Canvas>
  );
};

export default ProductAssemblyScene;
