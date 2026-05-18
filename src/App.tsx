/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { ExecutiveCollection } from "./components/ExecutiveCollection";
import { ProductAssembly } from "./components/ProductAssembly";
import { IndustrialCapabilities } from "./components/IndustrialCapabilities";
import { AurelLeather } from "./components/AurelLeather";
import { DeliveryModel } from "./components/DeliveryModel";
import { AtelierSection } from "./components/AtelierSection";
import { TechnicalSpecs } from "./components/TechnicalSpecs";
import { ProposalForm } from "./components/ProposalForm";
import { Footer } from "./components/Footer";
import { WhatsAppCTA } from "./components/WhatsAppCTA";
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
      {/* Global Grain & Lights */}
      <div className="fixed inset-0 grain-overlay z-[1] pointer-events-none"></div>
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] floating"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] floating" style={{ animationDelay: "1s" }}></div>
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />

      <Navbar />
      
      <main className="pt-24 space-y-0">
        <Hero />
        <TrustBar />
        <ExecutiveCollection />
        <ProductAssembly />
        <IndustrialCapabilities />
        <AurelLeather />
        <DeliveryModel />
        <AtelierSection />
        <TechnicalSpecs />
        <ProposalForm />
      </main>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
