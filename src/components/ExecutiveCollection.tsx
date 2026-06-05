"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ThreeDCard } from "./ThreeDCard";
import LeadModal from "./LeadModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 'wallet',
    span: "md:col-span-2",
    tag: "Popular",
    title: "Executive Wallet",
    description:
      "Full-grain leather bifold wallet with 6 card slots and embossed logo panel. Available in black, tan, and dark brown.",
    features: ["Logo Embossing", "6 Card Slots", "Gift Box Included"],
    pricing: "Rs. 1,400–1,200 per unit",
    moq: "50 Units Minimum",
    image: "/assets/premium-leather-wallet-bulk.webp",
  },
  {
    id: 'cardholder',
    span: "md:col-span-1",
    title: "Card Holder",
    description:
      "Slim full-grain leather cardholder. Holds 8–12 cards. Laser or heat embossing available.",
    features: ["Slim Profile", "8–12 Cards", "Custom Emboss"],
    pricing: "Rs. 750–650 per unit",
    moq: "50 Units Minimum",
    image: "/assets/card-holder-branded-bulk.webp",
  },
  {
    id: 'notebook',
    span: "md:col-span-1",
    title: "Leather Notebook",
    description:
      "A5 refillable leather-bound notebook with pen loop and business card pocket. Perfect for onboarding kits.",
    features: ["Custom Inner Pages", "Gold/Silver Emboss", "Ribbon Bookmark"],
    pricing: "Rs. 1,100–950 per unit",
    moq: "50 Units Minimum",
    image: "/assets/executive-notebook-embossed.webp",
  },
  {
    id: 'giftset',
    span: "md:col-span-2",
    tag: "Most Ordered",
    title: "Executive Gift Set",
    description:
      "Curated set: wallet + notebook + cardholder in premium black gift box with gold ribbon. Ideal for awards gifting.",
    features: ["Premium Gift Box", "Matching Leather Set", "Custom Insert Card"],
    pricing: "Custom Quote",
    moq: "50 Units Minimum",
    image: "/assets/corporate-gift-set-pakistan.webp",
  },
];

export const ExecutiveCollection = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section id="collections" className="scroll-mt-28 py-28 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      <SectionHeading
        eyebrow="THE GIFTING LEDGER"
        title="Curated Corporate Collections."
        subtitle="Premium leather essentials engineered for executive gifting programmes."
        align="center"
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, index) => (
          <AnimatedReveal key={p.id} variant="fadeUp" delay={index * 0.1} className={p.span}>
            <ThreeDCard className="h-full">
              <div className="group relative bg-surface border border-primary/8 overflow-hidden flex flex-col justify-between h-full transition-all duration-500 hover:border-primary/35 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-7 space-y-4 flex-1">
                  {/* Header row */}
                  <div className="flex justify-between items-start">
                    {p.tag && (
                      <span className="bg-primary/10 text-primary font-mono text-[8px] px-3 py-1 tracking-[0.25em] uppercase border border-primary/20">
                        {p.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl text-on-surface group-hover:text-primary transition-colors duration-400">
                    {p.title}
                  </h3>
                  
                  <p className="text-on-surface-variant text-sm leading-relaxed">{p.description}</p>

                  {/* Pricing */}
                  <div className="pt-2">
                    <p className="font-mono text-[10px] text-primary tracking-[0.15em] uppercase font-bold">
                      {p.pricing}
                    </p>
                    <p className="font-mono text-[8px] text-outline/50 tracking-[0.2em] uppercase mt-1">
                      {p.moq}
                    </p>
                  </div>

                  {/* Features */}
                  {p.features && (
                    <ul className="space-y-1.5 pt-1">
                      {p.features.map((li) => (
                        <li key={li} className="flex items-center gap-3 font-mono text-[9px] text-outline uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-primary rotate-45 shrink-0" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Product image */}
                <div className="relative overflow-hidden h-60 flex-shrink-0" style={{ transform: "translateZ(20px)" }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transform group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-out contrast-[1.05]"
                  />
                  {/* Luxury overlay CTA */}
                  <button
                    onClick={() => setSelectedProduct(p.title)}
                    className="absolute inset-0 bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                  >
                    <span className="shimmer-btn bg-primary text-on-primary px-8 py-3.5 font-mono text-[9px] font-bold tracking-[0.3em] uppercase shadow-2xl flex items-center gap-2">
                      Enquire Now <ArrowRight size={12} />
                    </span>
                  </button>
                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </ThreeDCard>
          </AnimatedReveal>
        ))}
      </div>

      <LeadModal
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct || ""}
      />
    </section>
  );
};
