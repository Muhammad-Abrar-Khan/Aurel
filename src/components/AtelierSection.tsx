import { motion } from "motion/react";
import { ThreeDCard } from "./ThreeDCard";

export const AtelierSection = () => {
  const images = [
    { span: "md:col-span-2", image: "/assets/artisanal-leather-workflow.webp", label: "Hand-Stitched Precision" },
    { span: "md:col-span-1", image: "/assets/gold-foil-stamping-detail.webp", label: "Gold Embossing" },
    { span: "md:col-span-1", image: "/assets/raw-hide-curation-01.webp", label: "Raw Hide Curation" }
  ];

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
        <div className="max-w-2xl space-y-6">
          <h2 className="font-display text-4xl md:text-5xl italic text-on-surface">The Karachi Atelier</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Our Karachi manufacturing facility combines skilled artisanal craft with modern production precision. Every product is hand-finished, quality checked, and delivered on time.
          </p>
        </div>
        <motion.button 
          onClick={() => document.getElementById('process')?.scrollIntoView({behavior:'smooth'})}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          whileTap={{ scale: 0.95 }}
          className="font-sans text-[10px] font-bold tracking-[0.2em] text-primary border border-outline px-10 py-4 hover:bg-primary hover:text-on-primary transition-all uppercase rounded-sm cursor-pointer"
        >
          View Our Process →
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[auto] md:h-[600px]">
        {images.map((img, idx) => (
          <ThreeDCard key={idx} className={img.span}>
            <div
              className={`relative group h-full w-full overflow-hidden rounded-sm cursor-pointer min-h-[300px] md:min-h-0 bg-surface shadow-2xl`}
            >
              <img 
                src={img.image} 
                alt={img.label} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-8" style={{ transform: "translateZ(40px)" }}>
                <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-on-surface uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                  {img.label}
                </span>
              </div>
            </div>
          </ThreeDCard>
        ))}
      </div>
    </section>
  );
};

export default AtelierSection;
