"use client";

import { Navbar }                 from '@/components/Navbar';
import { Hero }                   from '@/components/Hero';
import { BrandPhilosophy }        from '@/components/BrandPhilosophy';
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

        {/* 2 — Brand philosophy: editorial statement */}
        <BrandPhilosophy />

        {/* 3 — Animated stats + industry marquee */}
        <TrustBar />

        {/* 4 — Executive leather collections */}
        <ExecutiveCollection />

        {/* 5 — 3-step corporate procurement flow */}
        <CorporateGiftingFlow />

        {/* 6 — Corporate gifting use cases */}
        <IndustrialCapabilities />

        {/* 7 — Competitive differentiation */}
        <WhyAurel />

        {/* 8 — B2B manufacturing / Atelier */}
        <AurelLeather />

        {/* 9 — Karachi atelier photo grid */}
        <AtelierSection />

        {/* 10 — Luxury packaging experience */}
        <LuxuryPackaging />

        {/* 11 — How it works: 6-step process */}
        <DeliveryModel />

        {/* 12 — Enterprise client testimonials */}
        <TestimonialsSection />

        {/* 13 — FAQ accordion */}
        <TechnicalSpecs />

        {/* 14 — Quote form + procurement CTA */}
        <ProposalForm />
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
