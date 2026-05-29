"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Products',    href: '/products',          type: 'route'  },
  { label: 'Collections', href: '#collections',        type: 'anchor' },
  { label: 'Corporate',   href: '#corporate',          type: 'anchor' },
  { label: 'Atelier',     href: '#aurel-leather',      type: 'anchor' },
  { label: 'Process',     href: '#process',            type: 'anchor' },
  { label: 'Contact',     href: '#contact',            type: 'anchor' },
] as const;

export const Navbar = ({ onRequestQuote }: { onRequestQuote?: () => void }) => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchor = (href: string) => {
    setIsOpen(false);
    const id = href.replace(/^#/, '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.hash = href;
  };

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        scrolled
          ? 'h-[72px] bg-background/90 backdrop-blur-xl border-b border-primary/8 shadow-[0_1px_30px_rgba(0,0,0,0.4)]'
          : 'h-[100px] bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-8 md:px-16 max-w-7xl mx-auto h-full">

        {/* Logo */}
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ opacity: 0.85 }}
          transition={{ duration: 0.3 }}
          className="group cursor-pointer flex items-end gap-3"
        >
          <span
            className={`font-display italic tracking-[0.3em] text-primary transition-all duration-700 ${
              scrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
            }`}
          >
            Aurel Leather
          </span>
          <span className="hidden md:block font-mono text-[8px] tracking-[0.3em] text-outline/50 uppercase mb-1 transition-opacity duration-500">
            Est. 2024
          </span>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-9">
          {navItems.map((item) =>
            item.type === 'anchor' ? (
              <button
                key={item.label}
                onClick={() => handleAnchor(item.href)}
                className="relative font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 group py-1"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500 ease-out" />
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="relative font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 group py-1"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            )
          )}

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => (onRequestQuote ? onRequestQuote() : handleAnchor('#contact'))}
            className="shimmer-btn relative bg-primary text-on-primary px-7 py-[10px] font-sans text-[10px] font-bold tracking-[0.22em] uppercase hover:shadow-[0_0_28px_rgba(201,169,110,0.28)] transition-all duration-300 overflow-hidden"
          >
            Request Quote
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-primary p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0,  backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-primary/10 lg:hidden px-8 py-10 flex flex-col gap-7 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {navItems.map((item, i) =>
              item.type === 'anchor' ? (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleAnchor(item.href)}
                  className="font-sans text-[11px] font-bold tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary text-left transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ) : (
                <motion.div key={item.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-[11px] font-bold tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            )}
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.05, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => { setIsOpen(false); onRequestQuote ? onRequestQuote() : handleAnchor('#contact'); }}
              className="shimmer-btn bg-primary text-on-primary w-full py-4 font-sans text-[10px] font-bold tracking-[0.3em] uppercase mt-2"
            >
              Request Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
