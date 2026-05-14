/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { IndustrialCapabilities } from "./components/IndustrialCapabilities";
import { TechnicalSpecs } from "./components/TechnicalSpecs";
import { ExecutiveCollection } from "./components/ExecutiveCollection";
import { ProductAssembly } from "./components/ProductAssembly";
import { DeliveryModel } from "./components/DeliveryModel";
import { AtelierSection } from "./components/AtelierSection";
import { ProposalForm } from "./components/ProposalForm";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-primary selection:text-on-primary bg-background overflow-x-hidden">
      {/* 3D Global Depth Layers */}
      <div className="fixed inset-0 grain-overlay z-[1] pointer-events-none"></div>
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] floating"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] floating" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="pt-24 space-y-0">
        <Hero />
        
        <IndustrialCapabilities />
        
        <ExecutiveCollection />
        <ProductAssembly />
        <TechnicalSpecs />
        
        <DeliveryModel />

        {/* Feature Quote Section */}
        <section className="bg-surface-low py-48 border-y border-primary/5 perspective-2000 overflow-hidden relative">
          <motion.div 
            initial={{ opacity: 0, rotateX: 60, z: -200 }}
            whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-8 text-center italic preserve-3d"
          >
            <motion.h2 
              className="font-display text-5xl md:text-7xl text-primary leading-[1.1] mb-6"
            >
              "The difference between a gift and an heirloom is the science behind the craft."
            </motion.h2>
            <div className="w-16 h-px bg-primary/40 mx-auto"></div>
          </motion.div>
          
          {/* Floating Diamond Accent */}
          <motion.div 
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-[20%] w-4 h-4 border border-primary/20 rotate-45 hidden md:block"
          />
        </section>

        <AtelierSection />
        
        <ProposalForm />
      </main>

      <Footer />
    </div>
  );
}
