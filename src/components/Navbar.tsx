import { motion } from "motion/react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 h-24 border-b border-primary/10 bg-background/80 backdrop-blur-xl shadow-2xl">
      <div className="flex justify-between items-center px-8 md:px-16 max-w-7xl mx-auto h-full">
        <div className="text-4xl font-display text-primary italic tracking-tight cursor-pointer">AUREL</div>
        
        <div className="hidden lg:flex items-center gap-12">
          {["THE LEDGER", "MANUFACTURING", "BESPOKE", "ARCHIVE", "LOGIN"].map((item) => (
            <a 
              key={item}
              href="#" 
              className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-primary text-on-surface-variant"
            >
              {item}
            </a>
          ))}
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-on-primary px-8 py-3 font-sans text-[10px] font-bold tracking-[0.2em] hover:opacity-90 transition-all uppercase rounded-sm hidden sm:block md:w-auto"
        >
          Request Quote
        </motion.button>
      </div>
    </nav>
  );
};
