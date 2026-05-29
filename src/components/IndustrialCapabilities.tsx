"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { ThreeDCard } from "./ThreeDCard";

const capabilities = [
  {
    title: "Eid Gifting",
    description:
      "Premium leather gifts for Eid ul Fitr and Eid ul Adha. Custom embossed with your brand. Order 4 weeks ahead for on-time delivery.",
    number: "01",
  },
  {
    title: "Employee Onboarding Kits",
    description:
      "Leather notebooks, wallets, and card holders in branded gift boxes. Make a first impression that lasts.",
    number: "02",
  },
  {
    title: "Executive Awards",
    description:
      "Custom engraved leather portfolios and desk sets for management recognition programmes.",
    number: "03",
  },
  {
    title: "Year-End Gifting",
    description:
      "Bulk leather gift sets for clients and partners. Consistent quality across 50 to 5,000 units.",
    number: "04",
  },
];

export const IndustrialCapabilities = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="corporate" className="scroll-mt-28 py-24 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left heading */}
        <AnimatedReveal variant="slideRight" className="lg:col-span-4">
          <SectionHeading
            eyebrow="Corporate Use Cases"
            title="Corporate Gifting Solutions."
            subtitle="Scalable leather gifting infrastructure built for enterprise brands. Crafted with precision in Karachi."
            align="left"
            titleSize="2xl"
            showDivider={true}
          />
        </AnimatedReveal>

        {/* Right capability cards */}
        <div ref={ref} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <ThreeDCard>
                <div className="group bg-surface p-8 h-full border border-outline-variant/20 hover:border-primary/35 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden preserve-3d">
                  {/* Number */}
                  <p className="font-mono text-[9px] tracking-[0.4em] text-primary/50 mb-4 uppercase">{cap.number}</p>
                  {/* Animated gold line */}
                  <div className="mb-5 w-8 h-px bg-primary transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-display text-2xl italic text-on-surface mb-3 group-hover:text-primary transition-colors duration-400" style={{ transform: "translateZ(30px)" }}>
                    {cap.title}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed" style={{ transform: "translateZ(15px)" }}>
                    {cap.description}
                  </p>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
