import { motion } from "motion/react";

export const DeliveryModel = () => {
  const steps = [
    { id: "01", label: "Technical Inquiry" },
    { id: "02", label: "Prototyping" },
    { id: "03", label: "Sourcing" },
    { id: "04", label: "Execution" },
    { id: "05", label: "QA Audit" },
    { id: "06", label: "Global Logistics" }
  ];

  return (
    <section id="process" className="py-32 px-8 md:px-16 max-w-7xl mx-auto overflow-hidden perspective-2000">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-on-surface text-center mb-20"
      >
        How It Works.
      </motion.h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 relative">
        <div className="absolute top-[24px] left-0 w-full h-[1px] bg-primary/20 hidden lg:block"></div>
        {[
          { id: "01", label: "WhatsApp Inquiry" },
          { id: "02", label: "Catalog & Quote" },
          { id: "03", label: "Sample Approval" },
          { id: "04", label: "Production" },
          { id: "05", label: "Quality Check" },
          { id: "06", label: "Delivery" },
        ].map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateY: 5 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="relative z-10 text-center flex flex-col items-center group preserve-3d"
          >
            <div className="w-12 h-12 bg-background border border-primary text-primary flex items-center justify-center font-mono text-sm mb-6 shadow-[0_10px_20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_20px_40px_rgba(230,196,135,0.2)] transition-all duration-300" style={{ transform: "translateZ(20px)" }}>
              {step.id}
            </div>
            <h4 className="font-sans text-xs font-bold text-on-surface tracking-wider uppercase group-hover:text-primary transition-colors" style={{ transform: "translateZ(10px)" }}>{step.label}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
