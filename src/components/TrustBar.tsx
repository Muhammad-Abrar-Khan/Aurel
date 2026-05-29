"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const STATS = [
  { value: 50,  suffix: "+",  label: "Enterprise Clients"  },
  { value: 10,  suffix: "K+", label: "Units Delivered"     },
  { value: 30,  suffix: "+",  label: "Product Variants"    },
  { value: 14,  suffix: " days", label: "Max Turnaround"   },
];

const INDUSTRIES = [
  "Banking & Finance", "Telecom", "FMCG", "Real Estate",
  "HR & Recruitment",  "Technology", "Insurance", "Pharma",
  "Banking & Finance", "Telecom", "FMCG", "Real Estate",
  "HR & Recruitment",  "Technology", "Insurance", "Pharma",
];

/* Animated counter */
const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps    = 50;
    const inc      = target / steps;
    let   current  = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const TrustBar = () => {
  return (
    <div className="bg-surface-low border-y border-primary/10 overflow-hidden relative">
      {/* Gold top edge */}
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-60" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-14">

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-primary/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 text-center md:text-left md:px-8 first:pl-0 last:pr-0"
            >
              <span className="font-display text-4xl md:text-5xl text-primary italic">
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-outline">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Marquee separator */}
        <div className="mt-10 pt-8 border-t border-primary/5 overflow-hidden">
          <div className="marquee-track">
            {INDUSTRIES.map((industry, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-outline/70 whitespace-nowrap px-6">
                  {industry}
                </span>
                <div className="w-1 h-1 bg-primary/30 rotate-45 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
