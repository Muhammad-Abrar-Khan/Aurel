"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { label: 'Products', href: '/products', type: 'link' },
  {
    label: 'Manufacturing',
    href: '/manufacturing',
    type: 'submenu',
    items: [
      { label: 'Manufacturing Overview', href: '/manufacturing' },
      { label: 'OEM & Private Label', href: '/manufacturing/oem' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    type: 'submenu',
    items: [
      { label: 'Banking & Finance', href: '/industries/banking-finance' },
      { label: 'Technology', href: '/industries/technology' },
      { label: 'Higher Education', href: '/industries/education' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Healthcare', href: '/industries/healthcare' },
    ],
  },
  { label: 'Corporate Gifting', href: '/corporate-gifting', type: 'link' },
  { label: 'About', href: '/about', type: 'link' },
] as const;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'h-[72px] bg-background/90 backdrop-blur-xl border-b border-primary/8 shadow-[0_1px_30px_rgba(0,0,0,0.4)]'
          : 'h-[100px] bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto h-full">
        <Link href="/" className="group cursor-pointer select-none flex items-center">
          <Image 
            src="/assets/HeaderLogo.webp" 
            alt="Aurel Leather" 
            width={180} 
            height={50} 
            priority
            className={`w-auto transition-all duration-300 ${isScrolled ? 'h-[40px]' : 'h-[45px] lg:h-[55px]'}`}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.type === 'link' ? (
              <Link
                key={item.label}
                href={item.href}
                className="relative font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-200 group py-1"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-400" />
              </Link>
            ) : (
              <div key={item.label} className="relative group">
                <button className="relative inline-flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-200 py-1">
                  {item.label}
                  <ChevronDown size={12} />
                </button>
                <div className="invisible absolute left-0 top-full mt-3 w-56 rounded-3xl border border-primary/10 bg-background/95 p-4 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block rounded-2xl px-4 py-3 text-sm font-sans text-on-surface-variant hover:bg-surface/40 hover:text-primary"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ),
          )}

          <Link
            href="/request-quote"
            className="shimmer-btn bg-primary text-on-primary px-6 py-2 font-sans text-[10px] font-bold tracking-[0.18em] uppercase"
          >
            Request Quote
          </Link>
        </div>

        <motion.button whileTap={{ scale: 0.95 }} className="lg:hidden text-primary p-1" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
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
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-primary/10 lg:hidden px-6 py-8 shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.type === 'link' ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block font-sans text-[13px] font-bold uppercase text-on-surface-variant py-2"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between font-sans text-[13px] font-bold uppercase text-on-surface-variant py-2"
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform ${openSection === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openSection === item.label && (
                        <div className="space-y-2 rounded-3xl border border-primary/10 bg-surface/40 p-4 mt-2">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-2xl px-4 py-3 text-sm font-sans text-on-surface-variant hover:bg-background/70 hover:text-primary"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              <Link
                href="/request-quote"
                className="mt-4 bg-primary text-on-primary w-full text-center py-3 font-sans font-bold uppercase"
                onClick={() => setIsOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
