"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

const pillars = [
  {
    title: "Genuine Full-Grain Leather",
    description: "Sourced from certified tanneries. Not bonded, not PU — real leather that ages beautifully and impresses on first touch.",
  },
  {
    title: "Factory-Direct Pricing",
    description: "No middlemen, no resellers. You work directly with our manufacturing facility in Karachi for the sharpest trade pricing available.",
  },
  {
    title: "MOQ from 50 Units",
    description: "Most competitors demand 500+. We start at 50, scaling seamlessly to 10,000+ with consistent quality across every batch.",
  },
  {
    title: "7–14 Day Production",
    description: "The fastest turnaround in Pakistan's premium leather segment. Express 3–5 day service available for urgent corporate deadlines.",
  },
  {
    title: "Premium Gift Packaging",
    description: "Magnetic closure gift boxes, gold ribbon, branded insert cards — all standard. Your gift arrives boardroom-ready.",
  },
  {
    title: "Enterprise Customization",
    description: "Logo embossing, debossing, gold/silver foil stamping, custom lining colours, monogramming, and co-branded packaging.",
  },
];

const competitors = [
  "Jafferjees",
  "Hub Pakistan",
  "CorporateGifting.pk",
  "Gifterzz",
  "The Elegance",
];

export const WhyAurel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-8 md:px-16 bg-background overflow-hidden">
      {/* Background texture */}
      <div className="grain-overlay" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(201,169,110,1) 0px,
            rgba(201,169,110,1) 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Competitive Advantage"
          title="Why Pakistan's Top Enterprises Choose Aurel."
          subtitle="Where competitors offer generic gifting, Aurel delivers infrastructure-grade leather manufacturing."
          align="left"
          className="mb-16 max-w-2xl"
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Pillars grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="group p-6 border border-primary/8 bg-surface hover:border-primary/30 hover:bg-surface-high transition-all duration-500"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                    <Check size={10} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl italic text-on-surface group-hover:text-primary transition-colors duration-400">
                    {p.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed pl-8">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Spec card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-28 bg-surface border border-primary/12 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              {/* Header */}
              <div className="mb-7 pb-6 border-b border-primary/10">
                <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-primary mb-2">Aurel Standard</p>
                <h3 className="font-display text-3xl italic text-on-surface">The Luxury Specification</h3>
              </div>

              {/* Spec list */}
              <ul className="space-y-5">
                {[
                  { label: "Material",      value: "Full-Grain Cowhide Leather" },
                  { label: "Finishing",     value: "Hand-Stitched & Burnished Edge" },
                  { label: "Branding",      value: "Gold / Silver Foil · Emboss · Deboss" },
                  { label: "Packaging",     value: "Magnetic Gift Box + Ribbon" },
                  { label: "Min. Order",    value: "50 units" },
                  { label: "Lead Time",     value: "7–14 business days" },
                  { label: "Delivery",      value: "Pakistan-wide · International on request" },
                ].map((spec, i) => (
                  <li key={i} className="flex justify-between items-baseline gap-4">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-outline whitespace-nowrap">{spec.label}</span>
                    <div className="flex-1 h-px bg-outline-variant/20 mx-2 self-center" />
                    <span className="font-sans text-sm text-on-surface text-right">{spec.value}</span>
                  </li>
                ))}
              </ul>

              {/* vs. competitors note */}
              <div className="mt-7 pt-6 border-t border-primary/10">
                <p className="font-mono text-[8px] tracking-[0.25em] uppercase text-outline mb-3">Unlike</p>
                <div className="flex flex-wrap gap-2">
                  {competitors.map((c) => (
                    <span key={c} className="font-mono text-[8px] tracking-wider text-outline/50 bg-surface-high px-2 py-1 border border-outline-variant/20 line-through decoration-primary/30">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
