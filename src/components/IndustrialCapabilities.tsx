import { motion } from "motion/react";
import { Factory, Inventory, Security, PrecisionManufacturing } from "./Icons";
import { ThreeDCard } from "./ThreeDCard";

export const IndustrialCapabilities = () => {
  const capabilities = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Bulk Supply",
      description: "Direct sourcing from LWG Gold-Rated tanneries with proprietary finishing techniques exclusive to Aurel partners."
    },
    {
      icon: <Inventory className="w-8 h-8 text-primary" />,
      title: "White Label",
      description: "End-to-end design and manufacturing services for corporate clients and luxury brands seeking heirloom-grade products."
    },
    {
      icon: <Security className="w-8 h-8 text-primary" />,
      title: "NDA Protocols",
      description: "Rigid data protection and proprietary design shielding. We act as a silent partner to the world’s most discreet brands."
    },
    {
      icon: <PrecisionManufacturing className="w-8 h-8 text-primary" />,
      title: "Scale Logic",
      description: "Modular production lines capable of handling prototype runs of 50 units to global deployments of 50,000+."
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl text-on-surface mb-6 font-display">Industrial Capabilities.</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Scaleable leather production infrastructure backed by rigid NDA protocols and global logistics networks.
          </p>
        </motion.div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <ThreeDCard key={index}>
              <div className="bg-surface p-10 h-full leather-inset border border-outline-variant/30 rounded-lg hover:border-primary/40 transition-colors duration-500 shadow-2xl overflow-hidden preserve-3d">
                <div className="mb-6" style={{ transform: "translateZ(30px)" }}>{cap.icon}</div>
                <h3 className="text-2xl mb-4 font-display" style={{ transform: "translateZ(40px)" }}>{cap.title}</h3>
                <p className="text-on-surface-variant font-sans leading-relaxed" style={{ transform: "translateZ(20px)" }}>{cap.description}</p>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
};
