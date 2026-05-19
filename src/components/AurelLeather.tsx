import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export const AurelLeather = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/923323632052?text=Hi AUREL, I'd like to enquire about trade pricing for white-label production.", "_blank");
  };

  return (
    <section id="aurel-leather" className="py-32 px-8 md:px-16 max-w-7xl mx-auto bg-[#1c1b19] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-primary/40 hidden md:block"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-5xl md:text-6xl text-primary tracking-tight">AUREL LEATHER</h2>
            <p className="font-sans text-xs font-bold tracking-[0.3em] text-outline uppercase">B2B Manufacturing Division</p>
          </div>
          
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            For gifting agencies, white-label resellers, and bulk corporate suppliers. We are the backend manufacturing partner for brands that need scalable, premium production.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Minimum 100 units",
              "White-label production",
              "Trade pricing tiers",
              "Private label packaging"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 border border-primary/40 rotate-45"></div>
                <span className="font-sans text-sm text-on-surface">{feature}</span>
              </div>
            ))}
          </div>

          <motion.button 
            onClick={openWhatsApp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 bg-transparent border border-primary/40 text-primary px-10 py-5 font-sans text-xs font-bold tracking-widest hover:bg-primary/5 transition-all uppercase rounded-sm"
          >
            Contact for Trade Pricing
            <MessageCircle size={16} />
          </motion.button>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-sm blur-2xl group-hover:bg-primary/10 transition-colors duration-1000"></div>
          <div className="relative aspect-video bg-surface border border-primary/10 overflow-hidden rounded shadow-2xl">
              <img 
                srcSet={`/assets/aurel-leather-craft-karachi-400.webp 400w, /assets/aurel-leather-craft-karachi.webp 800w`}
                sizes="(max-width: 768px) 100vw, 600px"
                src="/assets/aurel-leather-craft-karachi.webp"
                alt="Industrial scale leather manufacturing" 
                className="w-full h-full object-cover grayscale opacity-60 contrast-125"
                loading="lazy"
              />
          </div>
        </div>
      </div>
    </section>
  );
};
