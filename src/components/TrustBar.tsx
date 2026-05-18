import { motion } from "motion/react";

export const TrustBar = () => {
  const industries = [
    "Banking & Finance",
    "Telecom",
    "FMCG",
    "Real Estate",
    "HR & Recruitment",
    "Technology",
  ];

  const stats = [
    { value: "50+", label: "Clients Served" },
    { value: "10K+", label: "Units Delivered" },
    { value: "30+", label: "Product Variants" },
    { value: "7–14", label: "Day Turnaround" },
  ];

  return (
    <div className="bg-surface-low border-y border-primary/10 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center md:text-left flex flex-col gap-2"
            >
              <span className="font-display text-4xl md:text-5xl text-primary">{stat.value}</span>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-primary/5">
          {industries.map((industry, idx) => (
            <div key={idx} className="flex items-center gap-4">
              {idx !== 0 && <div className="w-1 h-1 bg-primary/30 rounded-full"></div>}
              <span className="font-sans text-[10px] font-medium tracking-[0.1em] text-outline uppercase whitespace-nowrap">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
