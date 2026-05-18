import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const ProductAssembly = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Items flying in (0.05 to 0.35)
  const itemInNotebookX = useTransform(scrollYProgress, [0.05, 0.35], ["-150%", "0%"]);
  const itemInWalletX = useTransform(scrollYProgress, [0.05, 0.35], ["150%", "0%"]);
  const itemInPenY = useTransform(scrollYProgress, [0.05, 0.35], ["200%", "0%"]);
  const itemInCardX = useTransform(scrollYProgress, [0.05, 0.35], ["0%", "0%"]);
  const itemInCardY = useTransform(scrollYProgress, [0.05, 0.35], ["-200%", "0%"]);
  
  const itemOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const itemRotate = useTransform(scrollYProgress, [0.05, 0.35], [30, 0]);

  // Settling into box (0.4 to 0.55)
  const itemsScale = useTransform(scrollYProgress, [0.4, 0.55], [1, 0.8]);
  const itemsOpacityOut = useTransform(scrollYProgress, [0.5, 0.65], [1, 0]);

  // Lid Closing (0.6 to 0.8)
  const lidY = useTransform(scrollYProgress, [0.6, 0.8], ["-150%", "0%"]);
  const lidRotateX = useTransform(scrollYProgress, [0.6, 0.8], [-15, 0]);
  const lidOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);

  // Box scaling and perspective
  const boxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const boxRotation = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-surface-low"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-2000">
        
        {/* The Scene Container */}
        <motion.div 
          style={{ 
            scale: boxScale,
            rotateY: boxRotation,
            transformStyle: "preserve-3d"
          }}
          className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px]"
        >
          
          {/* Box Base (Dark Matte) */}
          <div className="absolute inset-0 border-[12px] border-primary/20 bg-[#1A1917] rounded-xl shadow-2xl preserve-3d">
            <div className="absolute inset-0 bg-black/40 blur-3xl translate-y-12 scale-110"></div>
            <div className="absolute inset-4 bg-[#F0EDE8]/10 rounded shadow-inner-xl flex items-center justify-center overflow-hidden">
               {/* Inner lining: Cream */}
               <div className="absolute inset-2 bg-[#F0EDE8]/5 border border-[#F0EDE8]/10"></div>
            </div>
          </div>

          {/* THE ITEMS GROUP */}
          <div className="absolute inset-0 flex items-center justify-center preserve-3d">
            
            {/* Notebook (Left) */}
            <motion.div
              style={{
                x: itemInNotebookX,
                opacity: itemOpacity,
                rotateZ: itemRotate,
                scale: itemsScale,
              }}
              className="absolute left-[-15%] w-48 h-64 bg-[#211f1d] rounded shadow-2xl p-6 border-l-[6px] border-primary leather-texture overflow-hidden"
            >
              <div className="w-10 h-0.5 bg-primary/40 mb-4"></div>
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-on-surface/10"></div>
                ))}
              </div>
            </motion.div>

            {/* Wallet (Right) */}
            <motion.div
              style={{
                x: itemInWalletX,
                opacity: itemOpacity,
                rotateZ: itemRotate,
                scale: itemsScale,
              }}
              className="absolute right-[-10%] w-44 h-32 bg-[#2a2a2a] rounded shadow-2xl border border-primary/20 leather-texture overflow-hidden"
            >
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="w-full h-px bg-primary/10 dashed"></div>
                <div className="flex gap-2">
                  <div className="w-12 h-6 border border-primary/20 rounded-sm"></div>
                  <div className="w-12 h-6 border border-primary/20 rounded-sm"></div>
                </div>
              </div>
            </motion.div>

            {/* Cardholder (Top) */}
            <motion.div
              style={{
                x: itemInCardX,
                y: itemInCardY,
                opacity: itemOpacity,
                scale: itemsScale,
              }}
              className="absolute top-[-5%] w-32 h-20 bg-[#1f1e1c] rounded shadow-2xl border border-primary/30 leather-texture flex items-center justify-center"
            >
              <div className="w-24 h-12 border border-primary/10 rounded"></div>
            </motion.div>

            {/* Pen (Bottom) - Slim Gold Cylinder */}
            <motion.div
              style={{
                y: itemInPenY,
                opacity: itemOpacity,
                scale: itemsScale,
              }}
              className="absolute bottom-[-5%] w-1.5 h-40 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full shadow-gold"
            >
              <div className="absolute top-8 w-full h-1 bg-black/20"></div>
            </motion.div>

          </div>

          {/* THE LID */}
          <motion.div
            style={{
              y: lidY,
              rotateX: lidRotateX,
              opacity: lidOpacity,
              translateZ: 200,
            }}
            className="absolute inset-[-4px] bg-[#1A1917] border-4 border-primary/40 rounded-xl flex flex-col items-center justify-center shadow-lid preserve-3d"
          >
            <div className="text-primary text-center">
              <div className="font-display text-4xl tracking-[0.5em] mb-4 uppercase">AUREL</div>
              <div className="w-12 h-[1px] bg-primary/40 mx-auto"></div>
            </div>
          </motion.div>

        </motion.div>

        {/* Text Overlays - Updated labels */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="font-display text-4xl text-primary italic mb-2 tracking-tight">Your Products.</p>
            <p className="text-on-surface-variant text-[10px] font-mono tracking-[0.3em] uppercase">Scroll to assemble</p>
          </motion.div>

          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.35, 0.55], [0, 1]) }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="font-display text-4xl text-primary italic mb-2 tracking-tight">Your Brand.</p>
            <p className="text-on-surface-variant text-[10px] font-mono tracking-[0.3em] uppercase">Built for permanence</p>
          </motion.div>

          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.75, 1], [0, 1]) }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <p className="font-display text-7xl text-primary italic mb-4 drop-shadow-2xl">Delivered.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
