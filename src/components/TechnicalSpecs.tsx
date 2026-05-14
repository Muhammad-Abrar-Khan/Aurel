import { motion } from "motion/react";

export const TechnicalSpecs = () => {
  const specs = [
    {
      grade: "Full Grain Aniline",
      thickness: "1.2 - 1.8",
      moq: "100 Units",
      leadTime: "4-6 Weeks",
      finishes: "Matte / Satin / Waxed"
    },
    {
      grade: "Chrome-Free Nappa",
      thickness: "0.8 - 1.1",
      moq: "250 Units",
      leadTime: "6-8 Weeks",
      finishes: "Soft / Milled / Smooth"
    },
    {
      grade: "Heavy Pebble Grain",
      thickness: "2.0 - 2.5",
      moq: "50 Units",
      leadTime: "3-5 Weeks",
      finishes: "Pigmented / Durable"
    }
  ];

  return (
    <section className="bg-surface-low py-24 border-y border-outline-variant/20">
      <div className="px-8 md:px-16 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="font-sans text-xs font-semibold text-primary mb-2 block tracking-widest uppercase">Datasheet V.24</span>
            <h2 className="font-display text-4xl md:text-5xl text-on-surface">Technical Specifications.</h2>
          </div>
          <div className="hidden md:block">
            <p className="font-mono text-xs text-outline uppercase tracking-wider">Last Updated: Oct 2023</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-outline-variant/50">
                <th className="py-6 px-4 font-sans text-xs font-bold text-outline uppercase tracking-[0.15em]">Material Grade</th>
                <th className="py-6 px-4 font-sans text-xs font-bold text-outline uppercase tracking-[0.15em]">Thickness (mm)</th>
                <th className="py-6 px-4 font-sans text-xs font-bold text-outline uppercase tracking-[0.15em]">MOQ Tier</th>
                <th className="py-6 px-4 font-sans text-xs font-bold text-outline uppercase tracking-[0.15em]">Lead Time</th>
                <th className="py-6 px-4 font-sans text-xs font-bold text-outline uppercase tracking-[0.15em]">Finish Opts</th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm">
              {specs.map((spec, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  delay={index * 0.1}
                  className="border-b border-outline-variant/20 hover:bg-surface-high transition-colors"
                >
                  <td className="py-8 px-4 text-on-surface flex items-center">
                    <span className="w-2 h-2 bg-primary inline-block rounded-full mr-4 shadow-[0_0_8px_rgba(230,196,135,0.5)]"></span>
                    {spec.grade}
                  </td>
                  <td className="py-8 px-4 text-on-surface-variant">{spec.thickness}</td>
                  <td className="py-8 px-4 text-on-surface-variant font-mono">{spec.moq}</td>
                  <td className="py-8 px-4 text-on-surface-variant">{spec.leadTime}</td>
                  <td className="py-8 px-4 text-on-surface-variant">{spec.finishes}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
