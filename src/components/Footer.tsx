"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Landmark,
  Mail,
  Clock,
} from "lucide-react";
import { EMAIL_ADDRESS, WHATSAPP_URL } from "@/lib/constants";

const navLinks = {
  Products: [
    { label: "Executive Wallets", href: "/products/executive-wallet" },
    { label: "Card Holders", href: "/products/card-holder" },
    { label: "Leather Notebooks", href: "/products/leather-notebook" },
    { label: "Executive Gift Sets", href: "/products/executive-gift-set" },
  ],
  Manufacturing: [
    { label: "Manufacturing Overview", href: "/manufacturing" },
    { label: "OEM & Private Label", href: "/manufacturing/oem" },
    { label: "Material Library", href: "/materials" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  Solutions: [
    { label: "Banking & Finance", href: "/industries/banking-finance" },
    { label: "Technology", href: "/industries/technology" },
    { label: "Corporate Gifting", href: "/corporate-gifting" },
    { label: "Customization", href: "/customization" },
  ],
  Company: [
    { label: "About Aurel", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Request Quote", href: "/request-quote" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-surface-low border-t border-primary/10 overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <div className="select-none mb-6">
                <span className="font-display font-bold tracking-[0.2em] text-primary text-2xl leading-none">
                  AUREL
                </span>
              </div>
              <div className="font-mono text-[8px] tracking-[0.3em] text-outline/60 uppercase mb-6 leading-tight">
                Premium Leather Manufacturing
                <br />
                Karachi, Pakistan
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-xs">
                Pakistan's elite B2B leather manufacturing infrastructure. Direct-from-source corporate gifting and volume leather manufacturing for international institutional brands.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {[
                { href: 'https://instagram.com/aurelpk', icon: <Instagram size={14} />, label: 'Instagram' },
                { href: 'https://linkedin.com/company/aurelpk', icon: <Linkedin size={14} />, label: 'LinkedIn' },
                { href: WHATSAPP_URL, icon: <MessageCircle size={14} />, label: 'WhatsApp' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 border border-primary/20 flex items-center justify-center text-outline hover:text-primary hover:border-primary/50 hover:shadow-[0_0_16px_rgba(181,147,83,0.15)] transition-all duration-300 rounded-sm bg-background/50"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div>
              <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-outline mb-3">
                Newsletter
              </p>
              <div className="flex border-b border-primary/20 focus-within:border-primary transition-colors duration-300 max-w-xs">
                <input
                  type="email"
                  placeholder="enter.corporate@email.com"
                  className="flex-1 bg-transparent py-2.5 text-xs text-on-surface outline-none placeholder:text-outline/60 font-sans"
                />
                <button className="text-primary pl-3 hover:opacity-70 transition-opacity" aria-label="Subscribe">
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">
              Products
            </h5>
            <ul className="flex flex-col gap-3">
              {navLinks.Products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 text-left gold-line-animate pb-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">
              Manufacturing
            </h5>
            <ul className="flex flex-col gap-3">
              {navLinks.Manufacturing.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 text-left gold-line-animate pb-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">
              Solutions
            </h5>
            <ul className="flex flex-col gap-3">
              {navLinks.Solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 text-left gold-line-animate pb-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">
              Contact
            </h5>
            <div className="flex flex-col gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-2">
                <MessageCircle size={12} className="text-primary shrink-0" />
                WhatsApp
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-2">
                <Mail size={12} className="text-primary shrink-0" />
                {EMAIL_ADDRESS}
              </a>
              <span className="font-sans text-xs text-on-surface-variant flex items-center gap-2">
                <Landmark size={12} className="text-primary shrink-0" />
                Karachi, Pakistan
              </span>
              <span className="font-sans text-xs text-on-surface-variant flex items-center gap-2">
                <Clock size={12} className="text-primary shrink-0" />
                Mon–Sat, 9 AM – 7 PM PKT
              </span>
              <div className="mt-2 pt-3 border-t border-primary/10">
                <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-primary font-bold">Within 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-primary/5 px-8 md:px-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-outline/50 text-center md:text-left">
            © 2026 AUREL • Manufactured in Karachi • All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="font-mono text-[9px] tracking-[0.2em] uppercase text-outline/30 hover:text-outline transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-mono text-[9px] tracking-[0.2em] uppercase text-outline/30 hover:text-outline transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
