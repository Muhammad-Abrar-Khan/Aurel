import { motion } from "motion/react";
import { ThreeDCard } from "./ThreeDCard";

export const ExecutiveCollection = () => {
  const products = [
    {
      span: "md:col-span-2",
      tag: "Best Seller",
      title: "The Corporate Ledger",
      price: "Rs. 4,500",
      moq: "50 Units",
      description: "Refillable A5 leather journal with card slots and an integrated pen loop. Hand-finished edges.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      list: ["Faux-Leather Options", "Top-Grain Leather", "Blind Debossing"]
    },
    {
      span: "md:col-span-1",
      title: "Bespoke Wallets",
      price: "Rs. 2,800",
      moq: "100 Units",
      description: "Minimalist bifold design with RFID protection.",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600"
    },
    {
      span: "md:col-span-1",
      title: "Institutional Mats",
      price: "Rs. 6,500",
      moq: "20 Units",
      description: "Suede-lined desk protectors for executive cabins.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=600"
    },
    {
      span: "md:col-span-2",
      title: "The Legacy Folio",
      price: "Rs. 8,900",
      moq: "30 Units",
      description: "Comprehensive A4 organizer for board meetings and summits. Custom-lined interiors reflecting your brand colors.",
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800",
      list: ["Tablet Compartment", "Magnetic Closure", "Silk Lined"]
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      <div className="mb-16 text-center space-y-4">
        <h2 className="font-display text-4xl md:text-5xl text-on-surface">The Gifting Ledger</h2>
        <div className="w-24 h-px bg-primary mx-auto gold-thread"></div>
        <p className="text-on-surface-variant font-mono text-[10px] tracking-widest uppercase opacity-60">Corporate Bulk Solutions | Rs. PKR Pricing</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p, index) => (
          <ThreeDCard key={index} className={p.span}>
            <div className="group relative bg-surface p-8 border border-primary/10 rounded overflow-hidden flex flex-col justify-between h-full hover:border-primary/40 transition-all duration-500 shadow-2xl">
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  {p.tag && <span className="bg-surface-highest text-primary font-mono text-[10px] px-3 py-1 tracking-widest uppercase">{p.tag}</span>}
                  <span className="text-primary font-mono text-xs font-bold">{p.price}</span>
                </div>
                <h3 className="font-display text-3xl text-on-surface">{p.title}</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md text-sm">{p.description}</p>
                
                <div className="flex items-center gap-4 py-2">
                  <span className="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded border border-primary/10">MOQ: {p.moq}</span>
                </div>

                {p.list && (
                  <ul className="space-y-2 mt-4">
                    {p.list.map(li => (
                      <li key={li} className="flex items-center gap-3 text-xs font-mono text-on-surface-variant">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="mt-8 relative overflow-hidden rounded group shadow-inner-xl flex-grow flex items-end" style={{ transform: "translateZ(30px)" }}>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </ThreeDCard>
        ))}
      </div>
    </section>
  );
};
