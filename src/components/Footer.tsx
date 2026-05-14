export const Footer = () => {
  return (
    <footer className="w-full py-24 px-8 md:px-16 border-t border-primary/10 bg-surface-low">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start max-w-7xl mx-auto">
        <div>
          <div className="text-3xl font-display text-primary italic mb-6">AUREL</div>
          <p className="font-sans text-on-surface-variant max-w-xs leading-relaxed">
            Precision manufacturing for the world’s most refined institutions. Crafted with generational expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <h5 className="font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2rem] mb-2">Divisions</h5>
            <div className="flex flex-col gap-3">
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Global Procurement</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Bespoke Heirlooms</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Design Lab</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2rem] mb-2">Legal</h5>
            <div className="flex flex-col gap-3">
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Terms of Service</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Contact Us</a>
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
          © 2024 AUREL CORPORATE GIFTING. THE BESPOKE LEATHER HEIRLOOM.
        </p>
      </div>
    </footer>
  );
};
