"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Landmark,
  Mail,
  Phone,
  Clock,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { EMAIL_ADDRESS, WHATSAPP_URL } from "@/lib/constants";

const navLinks = {
  Collections: [
    { label: "Executive Wallets", href: "#collections", anchor: true },
    { label: "Signature Card Holders", href: "#collections", anchor: true },
    { label: "Leather Notebooks", href: "#collections", anchor: true },
    { label: "Gift Sets", href: "#collections", anchor: true },
  ],
  Manufacturing: [
    { label: "Karachi Atelier", href: "#atelier", anchor: true },
    { label: "Custom Logo Embossing", href: "#atelier", anchor: true },
    { label: "Bulk Pricing", href: "#contact", anchor: true },
  ],
  Company: [
    { label: "Request a Quote", href: "#contact", anchor: true },
    { label: "WhatsApp Inquiry", href: WHATSAPP_URL, external: true },
    { label: "Email", href: `mailto:${EMAIL_ADDRESS}`, external: true },
  ],
};

const socials = [
  {
    icon: <Instagram size={14} />,
    href: "https://instagram.com/aurelpk",
    label: "Instagram",
  },
  {
    icon: <Linkedin size={14} />,
    href: "https://linkedin.com/company/aurelpk",
    label: "LinkedIn",
  },
  { icon: <MessageCircle size={14} />, href: WHATSAPP_URL, label: "WhatsApp" },
];

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleAnchor = (href: string) => {
    const id = href.replace(/^#/, "");
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <footer className="relative bg-[#0c0b0a] border-t border-primary/10 overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-50" />

      {/* Main grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              {/* AUREL Wordmark */}
              <div className="select-none mb-6">
                <span className="font-display font-bold tracking-[0.2em] text-primary text-2xl leading-none">
                  AUREL
                </span>
              </div>

              {/* Brand description */}
              <div className="font-mono text-[8px] tracking-[0.3em] text-outline/60 uppercase mb-6 leading-tight">
                Premium Leather Manufacturing
                <br />
                Karachi, Pakistan
              </div>

              {/* Brand tagline */}
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-xs">
                Pakistan's elite B2B leather manufacturing infrastructure. Direct-from-source corporate gifting and volume leather manufacturing for international institutional brands.
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-primary/15 flex items-center justify-center text-outline hover:text-primary hover:border-primary/50 hover:shadow-[0_0_16px_rgba(201,169,110,0.15)] transition-all duration-300 rounded-sm bg-background/25"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-outline mb-3">
                Newsletter
              </p>
              <div className="flex border-b border-primary/20 focus-within:border-primary transition-colors duration-300 max-w-xs">
                <input
                  type="email"
                  placeholder="enter.corporate@email.com"
                  className="flex-1 bg-transparent py-2.5 text-xs text-on-surface outline-none placeholder:text-outline/25 font-sans"
                />
                <button
                  className="text-primary pl-3 hover:opacity-70 transition-opacity"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* Collections column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">
              Collections
            </h5>
            <ul className="flex flex-col gap-3">
              {navLinks.Collections.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleAnchor(link.href)}
                    className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 text-left gold-line-animate pb-0.5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">
              Manufacturing
            </h5>
            <ul className="flex flex-col gap-3">
              {navLinks.Manufacturing.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleAnchor(link.href)}
                    className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 text-left gold-line-animate pb-0.5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">
              Company
            </h5>
            <ul className="flex flex-col gap-3">
              {navLinks.Company.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 gold-line-animate pb-0.5"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleAnchor(link.href)}
                      className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 text-left gold-line-animate pb-0.5"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">
              Contact
            </h5>

            <div className="flex flex-col gap-4">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-2"
              >
                <MessageCircle size={12} className="text-primary shrink-0" />
                WhatsApp
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-2"
              >
                <Mail size={12} className="text-primary shrink-0" />
                {EMAIL_ADDRESS}
              </a>

              {/* Location */}
              <span className="font-sans text-xs text-on-surface-variant flex items-center gap-2">
                <Landmark size={12} className="text-primary shrink-0" />
                Karachi, Pakistan
              </span>

              {/* Hours */}
              <span className="font-sans text-xs text-on-surface-variant flex items-center gap-2">
                <Clock size={12} className="text-primary shrink-0" />
                Mon–Sat, 9 AM – 7 PM PKT
              </span>

              {/* Response Promise */}
              <div className="mt-2 pt-3 border-t border-primary/10">
                <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-primary font-bold">
                  Within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-primary/5 px-8 md:px-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-outline/50 text-center md:text-left">
            © 2026 AUREL • Manufactured in Karachi • All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="font-mono text-[9px] tracking-[0.2em] uppercase text-outline/30 hover:text-outline transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-mono text-[9px] tracking-[0.2em] uppercase text-outline/30 hover:text-outline transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
