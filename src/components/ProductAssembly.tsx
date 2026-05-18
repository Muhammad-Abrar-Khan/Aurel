import { motion, useScroll, useTransform } from "motion/react";
import { useRef, Suspense, lazy } from "react";

const ProductAssemblyScene = lazy(() => import("./ProductAssembly3D"));

export const ProductAssembly = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={containerRef}
      className="relative h-[300vh] bg-surface-low"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <Suspense fallback={<div className="text-primary font-mono text-[10px] tracking-[0.2em] animate-pulse uppercase">Initializing Assembly Engine...</div>}>
            <ProductAssemblyScene />
        </Suspense>

        {/* Text Overlays - Updated labels */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
            className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center"
          >
            <p className="font-display text-5xl text-primary italic mb-2 tracking-tight">Enterprise Assembly.</p>
            <p className="text-on-surface-variant text-[10px] font-mono tracking-[0.3em] uppercase">The Science of Corporate Gifting</p>
          </motion.div>

          <motion.div 
            style={{ 
                opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
                y: useTransform(scrollYProgress, [0.4, 0.6], [20, 0])
            }}
            className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center"
          >
            <p className="font-display text-5xl text-primary italic mb-2 tracking-tight">Institutional Branding.</p>
            <p className="text-on-surface-variant text-[10px] font-mono tracking-[0.3em] uppercase">Engineered for Permanence</p>
          </motion.div>

          <motion.div 
            style={{ 
                opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]),
                scale: useTransform(scrollYProgress, [0.85, 1], [0.9, 1])
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <p className="font-display text-8xl text-primary italic mb-8 drop-shadow-2xl">Delivered.</p>
            <motion.button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 pointer-events-auto bg-primary text-on-primary px-12 py-6 font-sans text-xs font-bold tracking-[0.3em] uppercase rounded-sm shadow-2xl"
            >
                Start Production
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

