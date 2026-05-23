"use client";

export const Footer = () => {
  return (
    <footer className="w-full py-24 px-8 md:px-16 border-t border-primary/10 bg-surface-low">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start max-w-7xl mx-auto">
        <div>
          <div className="text-3xl font-display text-primary italic mb-6">Aurel Leather</div>
          <p className="font-sans text-on-surface-variant max-w-xs leading-relaxed">
            Crafted in Karachi. Premium leather goods and bespoke gifting solutions for global institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <h5 className="font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2rem] mb-2">Sitemap</h5>
            <div className="flex flex-col gap-3">
              <button onClick={() => document.getElementById('collections')?.scrollIntoView({behavior:'smooth'})} className="text-left text-on-surface-variant hover:text-primary transition-colors text-sm">Collections</button>
              <button onClick={() => document.getElementById('corporate')?.scrollIntoView({behavior:'smooth'})} className="text-left text-on-surface-variant hover:text-primary transition-colors text-sm">Solutions</button>
              <button onClick={() => document.getElementById('process')?.scrollIntoView({behavior:'smooth'})} className="text-left text-on-surface-variant hover:text-primary transition-colors text-sm">Process</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="text-left text-on-surface-variant hover:text-primary transition-colors text-sm">Quote</button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2rem] mb-2">Location</h5>
            <div className="flex flex-col gap-3">
              <p className="text-on-surface-variant text-sm">Karachi, Pakistan</p>
              <p className="text-on-surface-variant text-sm">Ph: +92 332 3632052</p>
              <p className="text-on-surface-variant text-sm">Email: info@aurel.pk</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end">
          <h5 className="font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2rem] mb-6">Stay Informed</h5>
          <div className="w-full flex border-b border-outline-variant focus-within:border-primary transition-all max-w-sm">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-none py-3 flex-grow outline-none text-sm placeholder:text-outline/40"
            />
            <button className="text-primary font-sans text-[10px] font-bold uppercase tracking-widest pl-4 hover:opacity-70 transition-all cursor-pointer">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-outline-variant/10 text-center">
        <p className="font-sans text-[10px] font-bold text-outline uppercase tracking-[0.4rem]">
          © 2025 Aurel Leather Corporate Gifting. PRECISION CRAFTED IN KARACHI.
        </p>
      </div>
    </footer>
  );
};
