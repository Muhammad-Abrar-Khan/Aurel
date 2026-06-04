"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, X, ShieldCheck, Activity, Award } from "lucide-react";

const pillars = [
  {
    title: "Genuine Full-Grain Leather",
    description: "Sourced from certified domestic tanneries. Zero bonded, zero PU — real cowhide leather that ages with character and commands respect.",
  },
  {
    title: "Factory-Direct Moat",
    description: "No brokers, no middleman markups. You work directly with our Karachi manufacturing facility for authentic wholesale B2B pricing.",
  },
  {
    title: "Bespoke Scale from 50 Units",
    description: "Most competitors enforce high 500+ MOQ minimums. We accommodate 50+ units, scaling smoothly to large institutional orders.",
  },
  {
    title: "Express Express Timelines",
    description: "Standard 7–14 day delivery — the most reliable turnaround in Pakistan. Express rush options are available for crunch B2B deadlines.",
  },
];

const comparisonData = [
  { feature: "Genuine Full-Grain Leather", aurel: "✓ 100% Certified Cowhide", generic: "✗ Bonded / Synthetic PU Leather", focus: true },
  { feature: "Factory-Direct Moat", aurel: "✓ Direct Karachi Facility", generic: "✗ Middlemen / Trade Markups" },
  { feature: "Low MOQ Scaling", aurel: "✓ Flexible (Starts at 50+)", generic: "✗ Strict (500+ Units minimum)" },
  { feature: "Corporate Customization", aurel: "✓ Premium Foils & Stampings", generic: "✗ Limited generic screenprints" },
  { feature: "Boardroom Packaging", aurel: "✓ Ribbon Magnetic Box Included", generic: "✗ Extra Charge / Standard polybag" },
  { feature: "Artisanal Quality Control", aurel: "✓ In-house Karachi Masters", generic: "✗ Outsourced outsourced assembly" }
];

export const WhyAurel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-aurel" className="scroll-mt-28 relative py-32 px-8 md:px-16 bg-leather/5 overflow-hidden border-t border-primary/5">
      {/* Background ambient lighting */}
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,_rgba(201,169,110,0.035)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left panel: Value statement & grid */}
          <div className="lg:col-span-6 space-y-12">
            <SectionHeading
              eyebrow="Competitive Advantage"
              title="A Manufacturing Authority."
              subtitle="Where competitors offer generic gift items, Aurel delivers premium factory-direct manufacturing control."
              align="left"
              titleSize="xl"
            />
            
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  className="group p-6 border border-primary/8 bg-surface hover:border-primary/25 transition-all duration-500 rounded-sm"
                >
                  <h4 className="font-display text-lg italic text-primary mb-2 group-hover:text-primary-light transition-colors">
                    {p.title}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right panel: Premium Spec Sheet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 bg-surface border border-primary/10 p-8 shadow-lg relative rounded-sm"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none rounded-bl-full" />
            
            <div className="mb-8 pb-6 border-b border-primary/10">
              <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-primary font-bold">Factory Guarantee</span>
              <h3 className="font-display text-2xl italic text-on-surface mt-2">Atelier Standards Matrix</h3>
            </div>

            <ul className="space-y-4">
              {[
                { label: "Material Raw Base",   value: "100% Genuine Cowhide Tannery Leather" },
                { label: "Stitch Details",     value: "Bonded Nylon High-Tension Thread" },
                { label: "Debossing Options",  value: "Heat Press deboss / Gold & Silver Foils" },
                { label: "Turnaround SLA",     value: "7 to 14 business days standard" },
                { label: "Sourcing Location",  value: "Direct Karachi Facility (Karachi, PK)" },
              ].map((spec, idx) => (
                <li key={idx} className="flex justify-between items-baseline gap-4 py-1.5 border-b border-primary/10 last:border-0">
                  <span className="font-mono text-[9px] tracking-wider text-outline uppercase shrink-0">{spec.label}</span>
                  <div className="flex-1 h-px bg-primary/10 border-dashed self-center mx-2" />
                  <span className="font-sans text-xs text-on-surface text-right font-semibold">{spec.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Product Comparison Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28"
        >
          <div className="text-center mb-12">
            <span className="font-mono text-[8px] tracking-[0.35em] text-primary uppercase font-bold block mb-2">Metrics Matrix</span>
            <h3 className="font-display text-3xl italic text-on-surface">The Competitive Position</h3>
            <p className="font-sans text-xs text-on-surface-variant max-w-xl mx-auto mt-2 leading-relaxed">
              Observe why Pakistan's premier financial institutions and corporate technology sectors contract their leather production directly to our facilities.
            </p>
          </div>

          <div className="overflow-x-auto rounded border border-primary/10 bg-surface shadow-[0_20px_50px_rgba(38,33,26,0.06)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-primary/15 bg-background/50">
                  <th className="p-5 font-mono text-[9px] tracking-[0.25em] text-outline uppercase font-bold">Core Sourcing Metric</th>
                  <th className="p-5 font-mono text-[9px] tracking-[0.25em] text-primary uppercase font-bold bg-primary/5 text-center">Aurel Leather Manufacturing</th>
                  <th className="p-5 font-mono text-[9px] tracking-[0.25em] text-outline uppercase font-bold text-center">Generic Gifting Resellers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`border-b border-primary/10 last:border-0 hover:bg-primary/[0.02] transition-colors ${row.focus ? 'bg-primary/[0.02]' : ''}`}
                  >
                    <td className="p-5 font-sans text-xs font-semibold text-on-surface">{row.feature}</td>
                    
                    {/* Aurel Premium Column */}
                    <td className="p-5 text-center bg-primary/[0.03] border-x border-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Check size={12} className="text-primary shrink-0" />
                        <span className="font-sans text-xs text-primary font-bold">{row.aurel}</span>
                      </div>
                    </td>

                    {/* Generic Competitor Column */}
                    <td className="p-5 text-center opacity-65">
                      <div className="flex items-center justify-center gap-2">
                        <X size={12} className="text-red-500/60 shrink-0" />
                        <span className="font-sans text-xs text-on-surface-variant line-through decoration-red-500/25">{row.generic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
