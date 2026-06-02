"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Landmark, Cpu, GraduationCap, Building, HeartPulse } from 'lucide-react';

const STATS = [
  { value: 50,  suffix: " Units",  label: "Minimum Order"  },
  { value: 14,  suffix: " Days", label: "Production Time"     },
  { value: 100,  suffix: "%", label: "Full-Grain Leather"    },
];

const INDUSTRIES_WITH_ICONS = [
  { label: "Banking & Finance", icon: Landmark },
  { label: "Enterprise Technology", icon: Cpu },
  { label: "Higher Education", icon: GraduationCap },
  { label: "Real Estate", icon: Building },
  { label: "Healthcare", icon: HeartPulse },
  // Duplicate for smooth looping marquee
  { label: "Banking & Finance", icon: Landmark },
  { label: "Enterprise Technology", icon: Cpu },
  { label: "Higher Education", icon: GraduationCap },
  { label: "Real Estate", icon: Building },
  { label: "Healthcare", icon: HeartPulse },
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

        {/* Built For Marquee */}
        <div className="mt-10 pt-8 border-t border-primary/5 overflow-hidden">
          <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-center text-outline/40 mb-6">Built For Industry Leaders</p>
          <div className="marquee-track">
            {INDUSTRIES_WITH_ICONS.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div key={i} className="flex items-center gap-3 shrink-0 px-8">
                  <Icon size={12} className="text-primary opacity-60" />
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-outline/70 whitespace-nowrap">
                    {ind.label}
                  </span>
                  <div className="w-1 h-1 bg-primary/20 rotate-45 shrink-0 ml-4" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
