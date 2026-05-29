"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const packagingFeatures = [
  {
    title: "Magnetic Closure Box",
    description: "Rigid matte-black gift box with magnetic snap — opens with the satisfying resistance of a luxury product. Embossed with your brand on the lid.",
  },
  {
    title: "Gold Satin Ribbon",
    description: "Hand-tied gold or champagne satin ribbon. Elevates unboxing to a ritual. Available in custom colours to match your brand identity.",
  },
  {
    title: "Branded Insert Card",
    description: "Premium 400gsm insert card — your message, your design, your logo. Sets the context before the gift is even revealed.",
  },
];

export const LuxuryPackaging = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-8 md:px-16 bg-background overflow-hidden">
      {/* Cinematic background */}
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Luxury Packaging Experience"
          title={"The Unboxing Is\nPart of the Gift."}
          subtitle="Every Aurel order ships in packaging engineered to make an impression before the leather is even touched."
          align="center"
          className="mb-20"
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Animated Box & Items */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center h-96 relative perspective-1200"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80" style={{ transformStyle: "preserve-3d" }}>
              
              {/* Box Base (Red Highlight) */}
              <div className="absolute inset-x-0 bottom-0 h-32 z-10 bg-gradient-to-t from-[#3a0a0a] to-[#5a1010] border border-red-500/40 shadow-[0_30px_60px_rgba(255,0,0,0.15)] rounded-sm">
                <div className="absolute inset-2 border border-red-500/20" />
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-red-600/30 -translate-x-1/2 shadow-[0_0_10px_rgba(255,0,0,0.5)]" /> {/* Ribbon */}
              </div>

              {/* Items flying in */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                {/* Wallet (From Left) */}
                <motion.div
                  animate={{
                    x: ["-150%", "0%", "0%", "-150%"],
                    y: ["-20%", "20%", "20%", "-20%"],
                    opacity: [0, 1, 0, 0],
                    scale: [0.8, 1, 0.8, 0.8]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-24 h-16 bg-[#2a2826] border border-primary/30 rounded shadow-xl flex items-center justify-center"
                >
                  <span className="font-mono text-[8px] text-primary/70 uppercase tracking-widest">Wallet</span>
                </motion.div>

                {/* Notebook (From Right) */}
                <motion.div
                  animate={{
                    x: ["150%", "0%", "0%", "150%"],
                    y: ["-40%", "10%", "10%", "-40%"],
                    opacity: [0, 1, 0, 0],
                    scale: [0.8, 1, 0.8, 0.8]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute w-20 h-28 bg-[#1e1c1a] border border-primary/40 rounded shadow-xl flex items-center justify-center"
                >
                  <span className="font-mono text-[8px] text-primary/70 uppercase tracking-widest">Notebook</span>
                </motion.div>

                {/* Pen (From Bottom) */}
                <motion.div
                  animate={{
                    y: ["100%", "30%", "30%", "100%"],
                    opacity: [0, 1, 0, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute w-2 h-24 bg-gradient-to-b from-primary to-primary-dark rounded-full shadow-xl"
                />
              </div>

              {/* Box Lid (Red Highlight) */}
              <motion.div
                animate={{
                  rotateX: [-70, -70, 0, -70],
                  y: [-60, -60, 0, -60],
                  z: [-20, -20, 20, -20]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-x-0 bottom-32 h-32 z-30 origin-bottom"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-full h-full bg-gradient-to-b from-[#4a0d0d] to-[#2a0505] border border-red-500/50 shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display italic text-xl text-red-400 tracking-[0.3em]">Aurel</div>
                    <div className="w-8 h-px bg-red-500/50 mx-auto mt-1" />
                  </div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-red-600/40 -translate-x-1/2" /> {/* Ribbon */}
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right: Feature list */}
          <div className="space-y-8">
            {packagingFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.12 }}
                className="group flex gap-5 p-6 border border-primary/8 hover:border-primary/25 bg-surface transition-all duration-500"
              >
                <div className="flex-shrink-0 font-display text-4xl italic text-primary/30 group-hover:text-primary/60 transition-colors duration-400 leading-none">
                  {String(i + 1).padStart(2, "0")}
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
