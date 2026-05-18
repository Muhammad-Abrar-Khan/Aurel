import { motion } from "motion/react";
import { useState } from "react";
import { ThreeDCard } from "./ThreeDCard";
import { LeadModal } from "./LeadModal";

export const ExecutiveCollection = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  
  const products = [
    {
      span: "md:col-span-2",
      tag: "Most Ordered",
      title: "Executive Wallet",
      price: "Rs. 2,500 – 3,500",
      moq: "50 Units",
      description: "Full-grain leather bifold wallet with 6 card slots and embossed logo panel. Available in black, tan, and dark brown.",
      features: ["Logo Embossing", "RFID Protection Option", "Gift Box Included"],
      image: "/assets/premium-leather-wallet-bulk.jpeg"
    },
    {
      span: "md:col-span-1",
      title: "Leather Notebook",
      price: "Rs. 3,500 – 5,500",
      moq: "50 Units",
      description: "A5 refillable leather-bound notebook with pen loop and business card pocket. Perfect for onboarding kits.",
      features: ["Custom Inner Pages", "Gold/Silver Emboss", "Ribbon Bookmark"],
      image: "/assets/executive-notebook-embossed.jpeg"
    },
    {
      span: "md:col-span-1",
      title: "Card Holder",
      price: "Rs. 1,200 – 1,800",
      moq: "100 Units",
      description: "Slim full-grain leather cardholder. Holds 8–12 cards. Laser or heat embossing available.",
      features: ["Slim Profile", "8–12 Card Capacity", "Custom Emboss"],
      image: "/assets/card-holder-branded-bulk.jpeg"
    },
    {
      span: "md:col-span-2",
      title: "Executive Gift Set",
      price: "Rs. 6,500 – 9,500",
      moq: "30 Units",
      description: "Curated set: wallet + notebook + cardholder in premium black gift box with gold ribbon. Ideal for awards gifting.",
      features: ["Premium Gift Box", "Matching Leather Set", "Custom Insert Card"],
      image: "/assets/corporate-gift-set-pakistan.jpeg"
    }
  ];

  return (
    <section id="collections" className="py-24 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      <div className="mb-16 text-center space-y-4">
        <h2 className="font-display text-4xl md:text-5xl text-on-surface italic">The Gifting Ledger.</h2>
        <div className="w-24 h-px bg-primary mx-auto gold-thread"></div>
        <p className="text-on-surface-variant font-mono text-[10px] tracking-widest uppercase opacity-60">Corporate Bulk Solutions | Rs. PKR Pricing</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p, index) => (
          <ThreeDCard key={index} className={p.span}>
            <div className="group relative bg-surface p-8 border border-primary/10 rounded overflow-hidden flex flex-col justify-between h-full hover:border-primary/40 transition-all duration-500 shadow-2xl">
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  {p.tag && <span className="bg-primary/10 text-primary font-mono text-[8px] px-3 py-1 tracking-widest uppercase border border-primary/20">{p.tag}</span>}
                  <span className="text-primary font-mono text-xs font-bold tracking-tighter">{p.price}</span>
                </div>
                <h3 className="font-display text-4xl text-on-surface">{p.title}</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md text-sm">{p.description}</p>
                
                <div className="flex items-center gap-4 py-2">
                  <span className="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded border border-primary/10">MOQ: {p.moq}</span>
                </div>

                {p.features && (
                  <ul className="grid grid-cols-1 gap-2 mt-4">
                    {p.features.map(li => (
                      <li key={li} className="flex items-center gap-3 text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">
                        <span className="w-1 h-1 bg-primary rotate-45"></span> {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="mt-8 relative overflow-hidden rounded group shadow-inner-xl h-64 flex items-center justify-center" style={{ transform: "translateZ(30px)" }}>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0 contrast-[1.1]"
                />
                <button 
                  onClick={() => setSelectedProduct(p.title)}
                  className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="bg-primary text-on-primary px-8 py-4 text-[10px] font-bold tracking-[0.3em] uppercase shadow-2xl">Enquire Now</span>
                </button>
              </div>
            </div>
          </ThreeDCard>
        ))}
      </div>

      <LeadModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        productTitle={selectedProduct || ''} 
      />
    </section>
  );
};

