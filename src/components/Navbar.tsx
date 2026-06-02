"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { WHATSAPP_URL } from '@/lib/constants';

const navItems = [
  { label: 'Collections', href: '#collections', type: 'anchor' },
  { label: 'Process', href: '#process', type: 'anchor' },
  { label: 'Atelier', href: '#atelier', type: 'anchor' },
  { label: 'Contact', href: '#contact', type: 'anchor' },
] as const;

export const Navbar = ({ onRequestQuote }: { onRequestQuote?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === '/' && typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleLogoClick = () => {
    if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
    else router.push('/');
  };

  const handleAnchor = (href: string) => {
    setIsOpen(false);
    const id = href.replace(/^#/, '');
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'h-[72px] bg-background/90 backdrop-blur-xl border-b border-primary/8 shadow-[0_1px_30px_rgba(0,0,0,0.4)]'
          : 'h-[100px] bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto h-full">

        <motion.button onClick={handleLogoClick} whileHover={{ opacity: 0.9 }} className="group cursor-pointer select-none focus:outline-none">
          <span className={`font-display font-bold tracking-[0.2em] text-primary ${scrolled ? 'text-lg' : 'text-2xl'}`}>AUREL</span>
        </motion.button>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.type === 'anchor' ? (
              <button key={item.label} onClick={() => handleAnchor(item.href)} className="relative font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-200 group py-1">
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-400" />
              </button>
            ) : (
              <Link key={item.label} href={item.href} className="relative font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-200 group py-1">
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-400" />
              </Link>
            )
          )}

          <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} className="shimmer-btn bg-primary text-on-primary px-6 py-2 font-sans text-[10px] font-bold tracking-[0.18em] uppercase">
            Request Quote
          </motion.a>
        </div>

        <motion.button whileTap={{ scale: 0.95 }} className="lg:hidden text-primary p-1" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <AnimatePresence initial={false} mode="wait">
            {isOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }} className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-primary/10 lg:hidden px-6 py-8 shadow-lg">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.type === 'anchor' ? (
                  <button key={item.label} onClick={() => { setIsOpen(false); handleAnchor(item.href); }} className="font-sans text-[13px] font-bold uppercase text-on-surface-variant text-left py-2">
                    {item.label}
                  </button>
                ) : (
                  <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="font-sans text-[13px] font-bold uppercase text-on-surface-variant text-left py-2">
                    {item.label}
                  </Link>
                )
              ))}

              <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 bg-primary text-on-primary w-full text-center py-3 font-sans font-bold uppercase">
                Request Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
