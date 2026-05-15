import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const ProductAssembly = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation Transitions
  // Items flying in (0 to 0.4)
  const itemInNotebookX = useTransform(scrollYProgress, [0, 0.3], ["-150%", "0%"]);
  const itemInWalletX = useTransform(scrollYProgress, [0, 0.3], ["150%", "0%"]);
  const itemInPenY = useTransform(scrollYProgress, [0, 0.3], ["150%", "0%"]);
  
  const itemOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  // Rotating items for depth during flight
  const itemRotate = useTransform(scrollYProgress, [0, 0.3], [45, 0]);

  // Dropping into box (0.4 to 0.7)
  const itemsScale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.85]);
  const itemsZ = useTransform(scrollYProgress, [0.4, 0.6], [100, -20]);
  const itemsOpacityOut = useTransform(scrollYProgress, [0.65, 0.75], [1, 0]);

  // Box Lid Closing (0.7 to 0.95)
  const lidY = useTransform(scrollYProgress, [0.7, 0.9], ["-200%", "0%"]);
  const lidRotateX = useTransform(scrollYProgress, [0.7, 0.9], [-20, 0]);
  const lidOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

  // Overall Box Container Scaling/Perspective
  const boxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const boxRotation = useTransform(scrollYProgress, [0, 1], [0, 18]); // Subtle slow spin

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-surface-low"
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
          
          {/* The Box Base (The Container) */}
          <div className="absolute inset-0 border-[12px] border-primary/20 bg-surface rounded-xl shadow-2xl preserve-3d">
            {/* Ground Shadow */}
            <div className="absolute inset-0 bg-black/40 blur-3xl translate-y-12 -translate-z-20 scale-110"></div>
            
            {/* Box Inner Shadow Display */}
            <div className="absolute inset-4 bg-background/50 rounded shadow-inner leather-inset"></div>
            
            {/* Box Front Face (for depth) */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-primary/10 origin-bottom transform -rotateX-90 translateZ-6"></div>
          </div>

          {/* THE ITEMS GROUP (Flying in) */}
          <div className="absolute inset-0 flex items-center justify-center preserve-3d">
            
            {/* Notebook (Left) */}
            <motion.div
              style={{
                x: itemInNotebookX,
                opacity: itemOpacity,
                rotateZ: itemRotate,
                scale: itemsScale,
                translateZ: itemsZ,
              }}
              className="absolute left-[-20%] w-48 h-64 bg-[#1a1a1a] rounded shadow-2xl p-6 border-l-4 border-primary/30"
            >
              <div className="w-8 h-1 bg-primary/20 mb-4"></div>
              <div className="space-y-2">
                <div className="w-full h-px bg-on-surface/5"></div>
                <div className="w-full h-px bg-on-surface/5"></div>
                <div className="w-full h-px bg-on-surface/5"></div>
              </div>
              <span className="absolute bottom-4 left-6 text-[8px] font-mono tracking-tighter text-on-surface/20 uppercase">Karachi • 1994</span>
            </motion.div>

            {/* Wallet (Right) */}
            <motion.div
              style={{
                x: itemInWalletX,
                opacity: itemOpacity,
                rotateZ: itemRotate,
                scale: itemsScale,
                translateZ: itemsZ,
              }}
              className="absolute right-[-10%] w-40 h-32 bg-[#2a2a2a] rounded shadow-2xl border border-primary/10 leather-texture overflow-hidden"
            >
              <div className="absolute top-1/2 left-0 w-full h-px bg-primary/10"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary/20 rounded-full"></div>
            </motion.div>

            {/* Pen (Bottom) */}
            <motion.div
              style={{
                y: itemInPenY,
                opacity: itemOpacity,
                scale: itemsScale,
                translateZ: itemsZ,
              }}
              className="absolute bottom-[-10%] w-1.5 h-32 bg-primary rounded-full shadow-xl"
            >
              <div className="absolute top-0 w-full h-8 bg-black/40"></div>
            </motion.div>

          </div>

          {/* THE LID (Descending) */}
          <motion.div
            style={{
              y: lidY,
              rotateX: lidRotateX,
              opacity: lidOpacity,
              translateZ: 150, // Floating above everything else
            }}
            className="absolute inset-[-4px] bg-primary border-4 border-on-primary/10 rounded-xl flex items-center justify-center shadow-[0_50px_100px_rgba(0,0,0,0.5)] preserve-3d"
          >
            <div className="text-on-primary text-center">
              <div className="text-[12px] font-mono tracking-[0.6em] mb-4 uppercase font-bold">AUREL</div>
              <div className="w-16 h-16 border-2 border-on-primary/20 rotate-45 mx-auto flex items-center justify-center">
                <div className="w-8 h-8 border border-on-primary/40"></div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Text Overlays for scroll guidance */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="font-display text-4xl text-primary italic mb-2 tracking-tight">The Assembly</p>
            <p className="text-on-surface-variant text-[10px] font-mono tracking-[0.3em] uppercase">Scroll to compose your gift</p>
          </motion.div>

          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.35, 0.55], [0, 1]) }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="font-display text-4xl text-primary italic mb-2 tracking-tight">Bespoke Fit</p>
            <p className="text-on-surface-variant text-[10px] font-mono tracking-[0.3em] uppercase">Tailored for institutional legacy</p>
          </motion.div>

          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <p className="font-display text-5xl text-on-primary italic mb-4 drop-shadow-2xl">Delivered.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
