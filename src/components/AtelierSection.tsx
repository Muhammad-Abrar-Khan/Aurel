"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThreeDCard } from "./ThreeDCard";

const atelierItems = [
  { 
    span: "md:col-span-2", 
    video: "/assets/video-wallet-stitch.mp4", 
    image: "/assets/artisanal-leather-workflow.webp", 
    label: "Hand-Stitched Precision", 
    tag: "Craft" 
  },
  { 
    span: "md:col-span-1", 
    video: "/assets/video-production-stamp.mp4", 
    image: "/assets/gold-foil-stamping-detail.webp", 
    label: "Gold Embossing", 
    tag: "Finish" 
  },
  { 
    span: "md:col-span-1", 
    image: "/assets/aurel-showroom-karachi.webp", 
    label: "Material Curation", 
    tag: "Heritage" 
  },
];

export const AtelierSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="atelier-stitching" className="scroll-mt-28 py-28 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
        <SectionHeading
          eyebrow="The Karachi Atelier"
          title="Where Leather Meets Legacy."
          subtitle="Our manufacturing facility combines skilled artisanal craft with modern production precision. Every product is hand-finished, quality-checked, and delivered on schedule."
          align="left"
          titleSize="2xl"
          className="max-w-2xl"
        />
        <motion.button
          onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="shimmer-btn shrink-0 font-sans text-[10px] font-bold tracking-[0.25em] text-primary border border-primary/40 px-10 py-4 hover:bg-primary hover:text-on-primary transition-all duration-300 uppercase"
        >
          View Our Process &rarr;
        </motion.button>
      </div>

      {/* Image and Video Grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[560px]">
        {atelierItems.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.12 }}
            className={img.span}
          >
            <ThreeDCard className="h-full">
              <div className="group relative h-full w-full overflow-hidden cursor-pointer min-h-[280px] md:min-h-0 bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-primary/5 hover:border-primary/20 transition-all duration-500 rounded-sm">
                
                {img.video ? (
                  <video
                    src={img.video}
                    poster={img.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-[2000ms] ease-out opacity-75 group-hover:opacity-90"
                  />
                ) : (
                  <img
                    src={img.image}
                    alt={img.label}
                    className="w-full h-full object-cover transform group-hover:scale-[1.06] transition-transform duration-[2000ms] ease-out opacity-80 group-hover:opacity-95"
                    loading="lazy"
                  />
                )}

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Labels overlay */}
                <div
                  className="absolute bottom-6 left-6 flex items-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <span className="bg-background/85 backdrop-blur-md border border-primary/20 px-3 py-1 font-mono text-[8px] tracking-[0.3em] uppercase text-primary">
                    {img.tag}
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-on-surface/80 font-bold">
                    {img.label}
                  </span>
                </div>

                {/* Top corner accent */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </ThreeDCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AtelierSection;
