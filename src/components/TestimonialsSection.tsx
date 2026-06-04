"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Aurel delivered 500 executive wallet sets for our leadership conference. The quality and packaging made an immediate impression. Not a single complaint from 500 recipients.",
    author: "Director, Corporate Affairs",
    company: "Major Telecom Group",
    sector: "Telecom",
    units: "500 Units",
  },
  {
    quote:
      "We've tried three other gifting vendors. Aurel is in a different category entirely. The factory-direct relationship means boardroom-grade quality at procurement-friendly pricing.",
    author: "Head of HR & Culture",
    company: "Leading Financial Institution",
    sector: "Banking",
    units: "250 Units",
  },
  {
    quote:
      "Our Eid gifting programme was anchored by Aurel — leather notebooks and card holders for 300 senior clients. Delivered on time, impeccable finish. We're reordering annually.",
    author: "Brand Manager",
    company: "FMCG Enterprise, Lahore",
    sector: "FMCG",
    units: "300 Units",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-8 md:px-16 bg-surface-low overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-thread opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,_rgba(201,169,110,0.03)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Client Testimony"
          title="Enterprise Trust."
          subtitle="From telecom giants to FMCG leaders — Pakistan's corporate sector gifts with Aurel."
          align="center"
          className="mb-20"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.14 }}
              className="group relative bg-surface border border-primary/8 p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_15px_45px_rgba(38,33,26,0.06)] overflow-hidden"
            >
              {/* Top shimmer on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Gold opening quote */}
              <div className="font-display text-6xl leading-none text-primary/18 group-hover:text-primary/35 transition-colors duration-500 mb-4 select-none">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-8">
                {t.quote}
              </p>

              {/* Author block */}
              <div className="border-t border-primary/10 pt-5">
                <p className="font-display italic text-on-surface text-base group-hover:text-primary transition-colors duration-400">
                  {t.author}
                </p>
                <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-outline mt-1">
                  {t.company}
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/15 px-2.5 py-1">
                    {t.sector}
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-outline/50">
                    {t.units}
                  </span>
                </div>
              </div>

              {/* Ambient glow on hover */}
              <div className="absolute inset-0 bg-primary/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
