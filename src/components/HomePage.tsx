"use client";

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { ExecutiveCollection } from '@/components/ExecutiveCollection';
import { IndustrialCapabilities } from '@/components/IndustrialCapabilities';
import { AurelLeather } from '@/components/AurelLeather';
import { DeliveryModel } from '@/components/DeliveryModel';
import AtelierSection from '@/components/AtelierSection';
import { TechnicalSpecs } from '@/components/TechnicalSpecs';
import { ProposalForm } from '@/components/ProposalForm';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';

export function HomePageContent() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <TrustBar />
        <section id="collections" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-outline mb-4">Curated gifting collections</p>
            <h2 className="font-display text-4xl md:text-5xl">Premium leather essentials for corporate gifting.</h2>
          </div>
          <ExecutiveCollection />
        </section>
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
