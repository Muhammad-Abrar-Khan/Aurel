"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import dynamic from "next/dynamic";
import { RefreshCw, CheckCircle2 } from "lucide-react";

const LuxuryPackaging3D = dynamic(() => import("./LuxuryPackaging3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[420px] flex flex-col items-center justify-center bg-surface-low border border-primary/10 rounded">
      <span className="font-mono text-[9px] tracking-widest text-outline uppercase animate-pulse">Loading Rigid Presentation 3D Box...</span>
    </div>
  ),
});

const packagingFeatures = [
  {
    title: "Magnetic Hinge Closure Box",
    description: "Rigid presentation box with absolute mechanical alignment — opens with the satisfying resistance of luxury leather goods. Permanently attached hinge ensure pristine corporate presentation.",
  },
  {
    title: "Bespoke Custom Embossing",
    description: " Boardroom-ready gold or silver foil debossing on the lid. Tailored to represent your institutional logo with microscopic visual fidelity.",
  },
  {
    title: "Individually Fitted Trays",
    description: "Premium sand velvet inserts customized specifically for your order dimensions. Holds executive accessories, notebooks, and writing instruments flawlessly in place.",
  },
];

export const LuxuryPackaging = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.35 });
  const [triggerOpen, setTriggerOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  // Play animation once when entering the viewport
  useEffect(() => {
    if (isInView && !hasOpenedOnce) {
      setTriggerOpen(true);
      setHasOpenedOnce(true);
    }
  }, [isInView, hasOpenedOnce]);

  const handleReplay = () => {
    // Smooth toggle close-then-open replay sequence
    setTriggerOpen(false);
    setTimeout(() => {
      setTriggerOpen(true);
    }, 600);
  };

  return (
    <section id="packaging-experience" ref={containerRef} className="scroll-mt-28 relative py-32 px-8 md:px-16 bg-background overflow-hidden">
      {/* Cinematic background texture */}
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,_rgba(201,169,110,0.045)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Luxury Packaging Experience"
          title={"The Unboxing Is\nPart of the Gift."}
          subtitle="Every Aurel order ships in packaging engineered to establish enterprise prestige before the leather goods are even touched."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: 3D Interactive Canvas */}
          <div className="flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[450px] relative rounded-lg border border-primary/8 bg-[#0b0a09]/60 shadow-[0_40px_100px_rgba(0,0,0,0.65)] overflow-hidden"
            >
              <div className="absolute inset-x-0 top-6 z-20 flex justify-between px-6 pointer-events-none">
                <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-outline bg-background/80 px-3 py-1 rounded-sm border border-white/5">
                  Interactive R3F 3D Viewport
                </span>
                <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-sm border border-primary/20">
                  {triggerOpen ? "Box Opened" : "Box Closing..."}
                </span>
              </div>

              {/* R3F Box Model */}
              <LuxuryPackaging3D triggerOpen={triggerOpen} />

              {/* Gradient overlays */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
            </motion.div>

            {/* Manual Replay Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReplay}
              className="mt-6 flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase text-primary border border-primary/30 px-6 py-3 bg-[#0d0c0a] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-xl"
            >
              <RefreshCw size={10} className="animate-spin-slow" />
              Replay Unboxing
            </motion.button>
          </div>

          {/* Right: Technical specifications & custom lists */}
          <div className="space-y-8">
            {packagingFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                className="group flex gap-5 p-6 border border-primary/8 hover:border-primary/25 bg-surface transition-all duration-500 rounded-sm"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 size={16} className="text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl italic text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
