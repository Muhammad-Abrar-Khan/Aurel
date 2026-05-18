import { motion } from "motion/react";
import { Factory, Inventory, Security, PrecisionManufacturing } from "./Icons";
import { ThreeDCard } from "./ThreeDCard";

export const IndustrialCapabilities = () => {
  const capabilities = [
    {
      title: "Eid Gifting",
      description: "Premium leather gifts for Eid ul Fitr and Eid ul Adha. Custom embossed with your brand. Order 4 weeks ahead for on-time delivery."
    },
    {
      title: "Employee Onboarding Kits",
      description: "Leather notebooks, wallets, and card holders in branded gift boxes. Make a first impression that lasts."
    },
    {
      title: "Executive Awards",
      description: "Custom engraved leather portfolios and desk sets for management recognition programs."
    },
    {
      title: "Year-End Gifting",
      description: "Bulk leather gift sets for clients and partners. Consistent quality across 50 to 5,000 units."
    }
  ];

  return (
    <section id="corporate" className="py-24 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl text-on-surface mb-6 font-display">Corporate Gifting Solutions.</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Scalable leather gifting infrastructure built for enterprise brands. Crafted with precision in Karachi.
          </p>
        </motion.div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <ThreeDCard key={index}>
              <div className="bg-surface p-10 h-full leather-inset border border-outline-variant/30 rounded-lg hover:border-primary/40 transition-colors duration-500 shadow-2xl overflow-hidden preserve-3d">
                <div className="mb-6 w-12 h-px bg-primary"></div>
                <h3 className="text-2xl mb-4 font-display" style={{ transform: "translateZ(40px)" }}>{cap.title}</h3>
                <p className="text-on-surface-variant font-sans leading-relaxed text-sm" style={{ transform: "translateZ(20px)" }}>{cap.description}</p>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
};
