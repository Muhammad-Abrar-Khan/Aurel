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
import { Helmet } from "react-helmet-async";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-primary selection:text-on-primary bg-background overflow-x-hidden">
      <Helmet>
        <title>AUREL | Premium Leather Corporate Gifting Karachi</title>
        <meta name="description" content="AUREL is Pakistan's premier leather corporate gifting manufacturer. Custom wallets, notebooks, and portfolios for enterprise brands. Karachi-based artisanal craft." />
        <link rel="canonical" href="https://aurel.pk" />
        <meta property="og:title" content="AUREL | Luxury Corporate Gifting" />
        <meta property="og:image" content="/assets/institutional-gifting-packaging.jpeg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AUREL",
            "url": "https://aurel.pk",
            "logo": "https://aurel.pk/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+92-332-3632052",
              "contactType": "sales",
              "areaServed": "PK",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.instagram.com/aurelpk"
            ]
          })}
        </script>
      </Helmet>

      {/* Global Grain & Lights */}
      <div className="fixed inset-0 grain-overlay z-[1] pointer-events-none"></div>
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] floating"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] floating" style={{ animationDelay: "2s" }}></div>
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left shadow-[0_0_15px_rgba(201,169,110,0.5)]" style={{ scaleX }} />

      <Navbar />
      
      <main className="space-y-0 relative z-10">
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
