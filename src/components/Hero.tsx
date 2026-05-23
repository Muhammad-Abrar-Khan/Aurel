"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { usePrefersReducedMotion } from "../utils/hooks";
import LeadModal from "./LeadModal";

export const Hero = ({ onRequestQuote }: { onRequestQuote?: () => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const prefersReduced = usePrefersReducedMotion();
  const y1 = prefersReduced ? undefined : useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = prefersReduced ? undefined : useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100vh] flex items-center overflow-hidden perspective-2000 bg-background">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          alt="Luxury leather craftsmanship detail" 
          className="w-full h-full object-cover opacity-40"
          srcSet={`/assets/hero-leather-background-400.webp 400w, /assets/hero-leather-background-800.webp 800w, /assets/hero-leather-background-1200.webp 1200w, /assets/hero-leather-background.webp 1774w`}
          sizes="(max-width: 768px) 100vw, 1200px"
          src="/assets/hero-leather-background.webp"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80"></div>
      </motion.div>
      
      <div className="relative z-10 px-8 md:px-20 max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.div
            style={{ opacity }}
            className="preserve-3d"
          >
            {prefersReduced ? (
              <h1 className="font-display text-5xl md:text-7xl text-on-surface mb-12 leading-[1.1] tracking-tight font-light">Aurel Leather. Premium Leather Corporate Gifts in Pakistan.</h1>
            ) : (
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-display text-5xl md:text-7xl text-on-surface mb-12 leading-[1.1] tracking-tight font-light"
                    >
                      Aurel Leather. Premium Leather Corporate Gifts in Pakistan.
                    </motion.h1>
            )}
            
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="font-sans text-lg md:text-xl text-on-surface-variant mb-16 max-w-2xl leading-relaxed"
                  >
                    Enterprise-grade leather manufacturing for corporate gifting. Handcrafted in Karachi, trusted by institutions globally.
                  </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative bg-primary text-on-primary px-10 py-4 font-sans text-sm font-semibold tracking-wide transition-all rounded"
              >
                <span className="relative z-10">Request Quote</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button 
                onClick={() => document.getElementById('collections')?.scrollIntoView({behavior:'smooth'})}
                className="border border-outline text-outline hover:text-primary hover:border-primary px-10 py-4 font-sans text-sm font-semibold tracking-wide transition-all rounded"
              >
                View Collections
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <LeadModal open={isModalOpen} onClose={() => setIsModalOpen(false)} product={undefined} />
      
      {/* Elegant Scroll Indicator */}
      {!prefersReduced && (
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => document.getElementById('collections')?.scrollIntoView({behavior:'smooth'})}
        >
          <span className="font-mono text-xs tracking-widest text-outline/60 uppercase">Scroll</span>
          <div className="w-px h-8 bg-outline/30"></div>
        </motion.div>
      )}
    </section>
  );
};

