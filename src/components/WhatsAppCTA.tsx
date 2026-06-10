"use client";

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/923323632052?text=Hi%20Aurel%20Leather%2C%20I%20have%20a%20question."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[999] w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-primary/30 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppCTA;