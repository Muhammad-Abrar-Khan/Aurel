"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Select Collection",
    description:
      "Browse our executive leather catalogue — wallets, notebooks, card holders, gift sets. Choose from ready-to-order or fully custom designs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Customize Branding",
    description:
      "Submit your logo for embossing, debossing, or gold foil stamping. Choose leather colour, lining, and packaging style for a fully branded experience.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Deliver Prestige",
    description:
      "Production in 7–14 days. Delivered in premium branded packaging, ready to present. Pakistan-wide delivery. International shipping available.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10H3M21 10l-4-7H7L3 10m18 0v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"/><path d="M9 21v-6h6v6"/>
      </svg>
    ),
  },
];

export const CorporateGiftingFlow = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-8 md:px-16 bg-surface-low overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="grain-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-thread opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Procurement Process"
          title="From Brief to Boardroom."
          subtitle="A streamlined three-step system designed for enterprise procurement teams."
          align="center"
          className="mb-20"
        />

        {/* Steps */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[44px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-primary/15 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              style={{ originX: 0 }}
              className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.18 }}
              className="relative z-10 flex flex-col items-center text-center px-8 py-10 group"
            >
              {/* Number circle */}
              <div className="relative mb-8">
                <div className="w-[88px] h-[88px] rounded-full border border-primary/20 bg-background flex items-center justify-center shadow-[0_0_40px_rgba(201,169,110,0.08)] group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(201,169,110,0.18)] transition-all duration-500">
                  <div className="text-primary">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 font-mono text-[9px] tracking-widest text-primary/60 bg-background border border-primary/20 px-2 py-0.5">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl md:text-3xl italic text-on-surface mb-4 group-hover:text-primary transition-colors duration-400">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed max-w-xs">
                {step.description}
              </p>

              {/* Arrow connector (mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden mt-8 text-primary/30">
                  <ArrowRight size={20} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="mt-16 flex justify-center"
        >
          <PremiumButton
            variant="primary"
            size="lg"
            icon={<ArrowRight size={14} />}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Begin Your Procurement
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
};
