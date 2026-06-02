"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "50 units for Aurel Leather branded products. 100 units for white-label / private-label production.",
  },
  {
    q: "How long does production take?",
    a: "Standard: 7–14 business days. Express: 3–5 days (30% surcharge applies). Timeline confirmed on order approval.",
  },
  {
    q: "Can I get a sample before ordering?",
    a: "Yes. A sample fee applies and is fully deducted from your bulk order total. Contact us on WhatsApp to initiate.",
  },
  {
    q: "Do you ship outside Karachi?",
    a: "Yes — we deliver Pakistan-wide via premium courier. International shipping is available on request with DHL/FedEx.",
  },
  {
    q: "What customization is available?",
    a: "Logo embossing, debossing, gold & silver foil stamping, custom colour lining, personalized packaging inserts, and fully co-branded gift boxes.",
  },
  {
    q: "What payment terms do you offer?",
    a: "50% advance to confirm production, 50% balance before delivery. Bank transfer and cash accepted. Trade accounts available for agencies.",
  },
];

export const TechnicalSpecs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-surface-low py-32 border-y border-primary/8 overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_rgba(201,169,110,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="px-8 md:px-16 max-w-4xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked."
          align="center"
          className="mb-16"
        />

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`border overflow-hidden transition-all duration-400 ${
                  isOpen
                    ? "border-primary/30 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
                    : "border-primary/8"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className={`w-full flex items-center justify-between px-7 py-6 text-left transition-all duration-400 ${
                    isOpen ? "bg-primary/[0.05]" : "bg-surface hover:bg-surface-high"
                  }`}
                  aria-expanded={isOpen}
                >
                  {/* Left: number + question */}
                  <div className="flex items-start gap-5 flex-1 pr-4">
                    <span
                      className={`font-mono text-[9px] tracking-[0.3em] shrink-0 mt-1 transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-outline/40"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl italic text-on-surface">
                      {faq.q}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <span
                    className={`shrink-0 w-7 h-7 flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "border-primary bg-primary/10 rotate-0"
                        : "border-outline-variant/30 rotate-0"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={13} className="text-primary" />
                    ) : (
                      <Plus size={13} className="text-outline/55" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex gap-5 px-7 py-6 border-t border-primary/10 bg-surface/40">
                        {/* Accent bar */}
                        <div className="w-px bg-primary/40 shrink-0 self-stretch" />
                        <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
