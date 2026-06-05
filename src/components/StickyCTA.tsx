"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, FileText, ChevronUp } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling past the Hero (e.g. 500px)
      setIsVisible(window.scrollY > 600);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    // Initial calls
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {isMobile ? (
            /* Mobile: Fixed double split bar at bottom of screen */
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 inset-x-0 z-[90] grid grid-cols-2 h-16 bg-background/95 backdrop-blur-md border-t border-primary/20 shadow-[0_-4px_20px_rgba(38,33,26,0.06)] overflow-hidden"
            >
              {/* WhatsApp CTA (Left) */}
              <a
                href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20to%20discuss%20a%20corporate%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#e6f7ed] text-[#1e7e43] hover:bg-[#d5f5e3] transition-colors border-r border-primary/10 active:opacity-80"
              >
                <MessageCircle size={14} />
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold">WhatsApp</span>
              </a>

              {/* Quote CTA (Right) */}
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 bg-surface-high text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 active:opacity-85"
              >
                <FileText size={14} />
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold">Request Quote</span>
              </button>
            </motion.div>
          ) : (
            /* Desktop: Elegant floating gold badge/pill in bottom right */
            <div className="fixed bottom-8 right-8 z-[90] flex flex-col gap-3 items-end">
              {/* Scroll to Top */}
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.1, translateY: -2 }}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-10 h-10 border border-primary/20 bg-background/95 backdrop-blur-md text-primary flex items-center justify-center rounded-sm shadow-xl hover:border-primary/50 transition-colors"
              >
                <ChevronUp size={16} />
              </motion.button>

              {/* WhatsApp Desktop CTA */}
              <motion.a
                href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20to%20discuss%20a%20corporate%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 font-mono text-[9px] tracking-[0.25em] uppercase shadow-[0_15px_35px_rgba(37,211,102,0.22)] border border-[#25D366] hover:border-white/20 transition-all rounded-sm"
              >
                <MessageCircle size={12} fill="currentColor" />
                WhatsApp
              </motion.a>

              {/* Float Request Pill */}
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="flex items-center gap-3 bg-primary text-on-primary px-6 py-4 font-mono text-[9px] tracking-[0.25em] uppercase shadow-[0_15px_35px_rgba(201,169,110,0.22)] border border-primary-light hover:border-white/20 transition-all rounded-sm"
              >
                <FileText size={12} />
                Request Proposal
              </motion.button>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};
