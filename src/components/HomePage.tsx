"use client";

import { Navbar }                 from '@/components/Navbar';
import { Hero }                   from '@/components/Hero';
import { TrustBar }               from '@/components/TrustBar';
import { ExecutiveCollection }    from '@/components/ExecutiveCollection';
import { CorporateGiftingFlow }   from '@/components/CorporateGiftingFlow';
import { IndustrialCapabilities } from '@/components/IndustrialCapabilities';
import { WhyAurel }               from '@/components/WhyAurel';
import { AurelLeather }           from '@/components/AurelLeather';
import AtelierSection             from '@/components/AtelierSection';
import { LuxuryPackaging }        from '@/components/LuxuryPackaging';
import { DeliveryModel }          from '@/components/DeliveryModel';
import { TestimonialsSection }    from '@/components/TestimonialsSection';
import { TechnicalSpecs }         from '@/components/TechnicalSpecs';
import { ProposalForm }           from '@/components/ProposalForm';
import { Footer }                 from '@/components/Footer';
import { WhatsAppCTA }            from '@/components/WhatsAppCTA';

export function HomePageContent() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main" className="relative">
        {/* 1 — Cinematic fullscreen hero */}
        <Hero />

        {/* 2 — Trust Indicators (Animated Stats + "Built For" marquee) */}
        <TrustBar />

        {/* 3 — Aurel Leather Manufacturing deep dive */}
        <AurelLeather />

        {/* 4 — Karachi Atelier visual & loop video grid */}
        <AtelierSection />

        {/* 5 — Packaging Experience (Rigid R3F 3D hinged box) */}
        <LuxuryPackaging />

        {/* 6 — Executive Collections (Premium product catalog cards) */}
        <ExecutiveCollection />

        {/* 7 — Customization & Branding capabilities */}
        <IndustrialCapabilities />

        {/* 8 — Corporate Gifting Flow & Bespoke Scale */}
        <CorporateGiftingFlow />

        {/* 9 — Why Aurel (Competitive Moat & Product Comparison Table) */}
        <WhyAurel />

        {/* 10 — Delivery Model & Procurement Logistics */}
        <DeliveryModel />

        {/* 11 — Testimonials & Enterprise client voice */}
        <TestimonialsSection />

        {/* 12 — Technical Specs (FAQ Accordion with SEO Schema) */}
        <TechnicalSpecs />

        {/* 13 — Quote Form & Custom MOQ Proposal Selector */}
        <ProposalForm />
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
