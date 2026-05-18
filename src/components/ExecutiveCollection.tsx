import { motion } from "motion/react";
import { ThreeDCard } from "./ThreeDCard";

export const ExecutiveCollection = () => {
  const products = [
    {
      span: "md:col-span-2",
      tag: "Most Ordered",
      title: "Executive Wallet",
      price: "Rs. 2,500 – 3,500",
      moq: "50 Units",
      description: "Full-grain leather bifold wallet with 6 card slots and embossed logo panel. Available in black, tan, and dark brown.",
      features: ["Logo Embossing", "RFID Protection Option", "Gift Box Included"],
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800"
    },
    {
      span: "md:col-span-1",
      title: "Leather Notebook / Portfolio",
      price: "Rs. 3,500 – 5,500",
      moq: "50 Units",
      description: "A5 refillable leather-bound notebook with pen loop and business card pocket. Perfect for onboarding kits.",
      features: ["Custom Inner Pages", "Gold/Silver Emboss", "Ribbon Bookmark"],
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
    },
    {
      span: "md:col-span-1",
      title: "Card Holder",
      price: "Rs. 1,200 – 1,800",
      moq: "100 Units",
      description: "Slim full-grain leather cardholder. Holds 8–12 cards. Laser or heat embossing available.",
      features: ["Slim Profile", "8–12 Card Capacity", "Custom Emboss"],
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800"
    },
    {
      span: "md:col-span-2",
      title: "Executive Gift Set",
      price: "Rs. 6,500 – 9,500",
      moq: "30 Units",
      description: "Curated set: wallet + notebook + cardholder in premium black gift box with gold ribbon. Ideal for awards gifting.",
      features: ["Premium Gift Box", "Matching Leather Set", "Custom Insert Card"],
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handleEnquire = (title: string) => {
    window.open(`https://wa.me/923323632052?text=Hi AUREL, I'm interested in ${title}. MOQ enquiry.`, '_blank');
  };

  return (
    <section id="collections" className="py-24 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
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

                {p.features && (
                  <ul className="space-y-2 mt-4">
                    {p.features.map(li => (
                      <li key={li} className="flex items-center gap-3 text-xs font-mono text-on-surface-variant">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="mt-8 relative overflow-hidden rounded group shadow-inner-xl h-48 flex items-center justify-center" style={{ transform: "translateZ(30px)" }}>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                />
                <button 
                  onClick={() => handleEnquire(p.title)}
                  className="absolute bottom-4 right-4 bg-primary text-on-primary px-4 py-2 text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Enquire on WhatsApp
                </button>
              </div>
            </div>
          </ThreeDCard>
        ))}
      </div>
    </section>
  );
};
