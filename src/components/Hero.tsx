import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[110vh] flex items-center overflow-hidden perspective-2000">
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          alt="Technical leather manufacturing" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4FxQF9dC9muQx9wmCOO_3ZostjAGf0OIkxCwsfl44RoAf_BSLIogD1zu2j5tr84ItXmOmh8h6PVS9gAUUn_YOuri-IlMoS_m657ddloL_8U5glfElzXBGeNs6Kf5dCdms7q6ndy4GvBVKv3Fba1FYxo-uyrhGXh4AhS-TUZIL-9_acSliPrGKGRIRIk2HRTTQdiqLIRKGsTW9mod6i5n3GWGBzwJR7rXO76g-sPAqAKuLHjClMzeq_HiKcdCXCixUaL9YIynvBIk"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent"></div>
      </motion.div>
      
      {/* Floating 3D Elements */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute right-[10%] top-[20%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      
      <div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.div
            style={{ opacity }}
            className="preserve-3d"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: -10 }}
              className="font-sans text-xs font-semibold text-primary mb-6 block tracking-[0.4em] uppercase"
            >
              Karachi Atelier • Est. 1994
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, rotateX: 45, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-display text-7xl md:text-9xl text-on-surface mb-8 leading-[0.9] tracking-tight"
            >
              Crafted in <br />
              <span className="text-outline italic">Karachi.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-sans text-lg md:text-xl text-on-surface-variant mb-12 max-w-xl leading-relaxed"
            >
              AUREL delivers premium leather craftsmanship and bespoke gifting solutions to global institutions. Built for longevity, designed for your brand.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <button className="group relative bg-primary text-on-primary px-10 py-5 font-sans text-xs font-bold tracking-widest transition-all uppercase rounded-sm overflow-hidden">
                <span className="relative z-10">THE LEDGER</span>
                <div className="absolute inset-0 bg-on-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button className="border border-primary/40 text-primary px-10 py-5 font-sans text-xs font-bold tracking-widest hover:bg-primary/5 transition-all uppercase rounded-sm">
                Corporate Inquiry
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Industrial Accent */}
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
};
