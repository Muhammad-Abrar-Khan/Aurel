"use client";

import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";

const pillars = [
  {
    roman: "I",
    title: "Full-Grain Only",
    body: "Sourced from certified tanneries. Not bonded. Not PU. Full-grain cowhide that ages into a patina worthy of the executive who carries it.",
  },
  {
    roman: "II",
    title: "Crafted in Karachi",
    body: "Every product leaves our Karachi atelier — not a warehouse, not a reseller. Factory-direct precision means no compromise on quality or cost.",
  },
  {
    roman: "III",
    title: "Infrastructure Scale",
    body: "We operate as gifting infrastructure for enterprises. 50 to 10,000 units. Consistent grain, consistent stitching, consistent brand representation.",
  },
];

export const BrandPhilosophy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden bg-background">
      <div className="grain-overlay" />

      {/* Parallax background glow */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_15%_50%,_rgba(201,169,110,0.055)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_50%,_rgba(201,169,110,0.03)_0%,_transparent_70%)]" />
      </motion.div>

      {/* Decorative vertical rule */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/12 to-transparent hidden xl:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 mb-12"
        >
          <div className="w-10 h-px bg-primary" />
          <span className="font-mono text-[9px] tracking-[0.5em] uppercase text-primary">
            Brand Philosophy
          </span>
        </motion.div>

        {/* Cinematic headline */}
        <div ref={headingRef} className="mb-24">
          {["Not a gift shop.", "An infrastructure."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%", opacity: 0 }}
                animate={headingInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                className={`font-display italic leading-[1.02] tracking-tight block ${
                  i === 0
                    ? "text-5xl md:text-7xl xl:text-[86px] text-on-surface"
                    : "text-5xl md:text-7xl xl:text-[86px] text-primary"
                }`}
              >
                {line}
              </motion.h2>
            </div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-sans text-on-surface-variant text-base md:text-lg leading-relaxed max-w-2xl mt-8"
          >
            Aurel Leather is Pakistan's premier leather manufacturing partner for corporate gifting
            programmes. We don't sell products. We build gifting systems for enterprises.
          </motion.p>
        </div>

        {/* Philosophy pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className="group relative border-t border-primary/15 pt-10 pb-10 md:pr-10 hover:border-primary/45 transition-all duration-700 cursor-default"
            >
              {/* Animated top accent */}
              <div className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              {/* Roman numeral */}
              <div className="font-display text-[72px] italic leading-none text-primary/8 group-hover:text-primary/16 transition-colors duration-700 mb-5 select-none">
                {pillar.roman}
              </div>

              <h3 className="font-display text-2xl md:text-3xl italic text-on-surface mb-4 group-hover:text-primary transition-colors duration-500">
                {pillar.title}
              </h3>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
