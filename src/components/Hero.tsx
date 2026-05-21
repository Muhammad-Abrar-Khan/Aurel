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
  const y1 = prefersReduced ? undefined : useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = prefersReduced ? undefined : useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = prefersReduced ? undefined : useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = prefersReduced ? undefined : useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[110vh] flex items-center overflow-hidden perspective-2000">
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          alt="Luxury leather craftsmanship detail" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity brightness-50"
          srcSet={`/assets/hero-leather-background-400.webp 400w, /assets/hero-leather-background-800.webp 800w, /assets/hero-leather-background-1200.webp 1200w, /assets/hero-leather-background.webp 1774w`}
          sizes="(max-width: 768px) 100vw, 1200px"
          src="/assets/hero-leather-background.webp"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent"></div>
      </motion.div>
      
      {/* Floating Gold Flare */}
      {!prefersReduced && (
        <motion.div 
          style={{ y: y2 }}
          className="absolute right-[10%] top-[20%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"
        />
      )}
      
      <div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            style={{ opacity }}
            className="preserve-3d"
          >
            {prefersReduced ? (
              <h1 className="font-display text-5xl md:text-[6rem] text-on-surface mb-8 leading-[0.95] tracking-tight">CRAFTED IN <span className="text-outline italic font-light opacity-80">Karachi.</span> BUILT FOR <span className="text-primary italic font-light">Your Brand.</span></h1>
            ) : (
              <motion.h1 
                initial={{ opacity: 0, rotateX: 45, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 1.2, ease: [0.2, 0.9, 0.2, 1] }}
                className="font-display text-7xl md:text-[10rem] text-on-surface mb-8 leading-[0.85] tracking-tight"
              >
                CRAFTED IN <br />
                <span className="text-outline italic font-light opacity-80">Karachi.</span> <br />
                BUILT FOR <br />
                <span className="text-primary italic font-light">Your Brand.</span>
              </motion.h1>
            )}
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-sans text-lg md:text-xl text-on-surface-variant/80 mb-12 max-w-xl leading-relaxed tracking-wide"
            >
              AUREL delivers precision-engineered leather gifting solutions to global institutions. Artisanal craft meets enterprise scale.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-8"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative bg-primary text-on-primary px-12 py-6 font-sans text-[10px] font-bold tracking-[0.3em] transition-all uppercase rounded-sm overflow-hidden shadow-2xl"
              >
                <span className="relative z-10">Request Production Quote</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              <button 
                onClick={() => document.getElementById('collections')?.scrollIntoView({behavior:'smooth'})}
                className="border border-outline/30 text-outline hover:text-primary hover:border-primary px-12 py-6 font-sans text-[10px] font-bold tracking-[0.3em] transition-all uppercase rounded-sm"
              >
                View Collections
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <LeadModal open={isModalOpen} onClose={() => setIsModalOpen(false)} product={undefined} />
      
      {/* Scroll Indicator */}
      {!prefersReduced && (
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
          onClick={() => document.getElementById('collections')?.scrollIntoView({behavior:'smooth'})}
        >
          <span className="font-mono text-[8px] tracking-[0.4em] text-outline uppercase group-hover:text-primary transition-colors">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      )}
    </section>
  );
};

