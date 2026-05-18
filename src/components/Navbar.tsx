import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "COLLECTIONS", href: "#collections" },
    { label: "CORPORATE GIFTING", href: "#corporate" },
    { label: "PROCESS", href: "#process" },
    { label: "AUREL LEATHER", href: "#aurel-leather" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'h-20 bg-background/95 border-b border-primary/10' : 'h-28 bg-transparent'}`}>
      <div className="flex justify-between items-center px-8 md:px-16 max-w-7xl mx-auto h-full">
        {/* Logo Wordmark ONLY */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-3xl md:text-5xl tracking-[0.4em] text-primary cursor-pointer hover:opacity-80 transition-all duration-700 flex items-center"
        >
          AUREL<span className="text-[10px] tracking-normal font-sans font-light text-outline ml-4 opacity-40 hidden md:block">EST. 2024</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => handleScrollTo(item.href)}
              className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:text-primary text-on-surface-variant cursor-pointer relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollTo("#contact")}
            className="bg-primary text-on-primary px-8 py-3 font-sans text-[10px] font-bold tracking-[0.2em] hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] transition-all uppercase rounded-sm"
          >
            Request Quote
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-primary/10 lg:hidden px-8 py-12 flex flex-col gap-8 shadow-2xl"
          >
            {navItems.map((item) => (
              <button 
                key={item.label}
                onClick={() => handleScrollTo(item.href)}
                className="font-sans text-[12px] font-bold tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary text-left"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleScrollTo("#contact")}
              className="bg-primary text-on-primary w-full py-4 font-sans text-xs font-bold tracking-[0.3em] uppercase rounded-sm"
            >
              Request Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
