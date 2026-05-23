"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const TechnicalSpecs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What is the minimum order quantity?", a: "50 units for Aurel Leather branded products. 100 units for white-label production." },
    { q: "How long does production take?", a: "Standard: 7–14 business days. Express: 3–5 days (30% surcharge applies)." },
    { q: "Can I get a sample before ordering?", a: "Yes. Sample fee applies and is deducted from bulk order. Contact us on WhatsApp." },
    { q: "Do you ship outside Karachi?", a: "Yes — we deliver Pakistan-wide. International shipping available on request." },
    { q: "What customization is available?", a: "Logo embossing, debossing, foil stamping, custom color lining, personalized packaging, and branded gift boxes." },
    { q: "What payment terms do you offer?", a: "50% advance, 50% before delivery. Bank transfer or cash accepted." },
  ];

  return (
    <section className="bg-surface-low py-32 border-y border-outline-variant/10">
      <div className="px-8 md:px-16 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="font-sans text-xs font-bold text-primary mb-4 block tracking-[0.3em] uppercase">Common Registry</span>
          <h2 className="font-display text-4xl md:text-5xl text-on-surface italic">Frequently Asked Questions.</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-primary/5 rounded-sm overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className={`w-full flex items-center justify-between p-6 text-left transition-all ${activeIndex === idx ? 'bg-primary/5 border-l-4 border-primary' : 'bg-surface hover:bg-surface-high'}`}
              >
                <span className="font-sans text-sm font-bold tracking-wide text-on-surface uppercase">{faq.q}</span>
                {activeIndex === idx ? <Minus size={16} className="text-primary" /> : <Plus size={16} className="text-primary/40" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-surface/50"
                  >
                    <div className="p-6 pt-0 text-on-surface-variant font-sans text-sm leading-relaxed border-t border-primary/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
