"use client";

import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, ArrowRight, Landmark, Mail, Phone, Clock } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const navLinks = {
  Collections: [
    { label: "Executive Wallets",      href: "/products" },
    { label: "Signature Card Holders",   href: "/products" },
    { label: "Notebook Covers",        href: "/products" },
    { label: "Passport Holders",       href: "/products" },
    { label: "Document & Padfolios",   href: "/products" },
    { label: "Corporate Kits",         href: "/products" },
  ],
  Manufacturing: [
    { label: "Karachi Atelier",        href: "#atelier-stitching",   anchor: true },
    { label: "Packaging Experience",   href: "#packaging-experience", anchor: true },
    { label: "Custom Debossing",       href: "/#custom-branding" },
    { label: "Bespoke Branding MOQ",   href: "/#process" },
  ],
  Contact: [
    { label: "Request a Proposal",     href: "#contact",             anchor: true },
    { label: "WhatsApp Inquiry",       href: "https://wa.me/923323632052", external: true },
    { label: "info@aurel.pk",          href: "mailto:info@aurel.pk",  external: true },
    { label: "+92 332 3632052",        href: "tel:+923323632052",     external: true },
  ],
};

const socials = [
  { icon: <Instagram size={14} />,     href: "https://instagram.com/aurelpk",            label: "Instagram" },
  { icon: <Linkedin size={14} />,      href: "https://linkedin.com/company/aurelpk",      label: "LinkedIn" },
  { icon: <MessageCircle size={14} />, href: "https://wa.me/923323632052",                label: "WhatsApp" },
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
    <footer className="relative bg-[#0c0b0a] border-t border-primary/10 overflow-hidden pb-16 md:pb-6">
      <div className="grain-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-50" />

      {/* Main grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              {/* Gold Monogram & Brand block */}
              <div className="flex items-center gap-3 select-none mb-3">
                <div className="w-10 h-10 border border-primary/45 rounded flex items-center justify-center bg-surface-high relative shadow-md">
                  <span className="font-display italic text-lg text-primary leading-none">A</span>
                  <div className="absolute inset-[2px] border border-primary/10 rounded-sm pointer-events-none" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display italic tracking-[0.25em] text-primary text-2xl leading-none">
                    Aurel Leather
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.3em] text-outline/60 uppercase mt-1 leading-none">
                    Karachi &bull; Pakistan
                  </span>
                </div>
              </div>
              <div className="font-mono text-[9px] tracking-[0.32em] uppercase text-primary font-bold mt-4 leading-relaxed">
                Factory Direct Leather Manufacturing
              </div>
              <div className="font-mono text-[8px] tracking-[0.3em] uppercase text-outline/40 mt-1">
                Established 2024
              </div>
            </div>
            
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-xs">
              Pakistan's elite B2B leather manufacturing infrastructure. Direct-from-source corporate gifting and volume leather manufacturing for international institutional brands.
            </p>

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
              <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-outline mb-3">Newsletter Submissions</p>
              <div className="flex border-b border-primary/20 focus-within:border-primary transition-colors duration-300 max-w-xs">
                <input 
                  type="email" 
                  placeholder="enter.corporate@email.com"
                  className="flex-1 bg-transparent py-2.5 text-xs text-on-surface outline-none placeholder:text-outline/25 font-sans" 
                />
                <button className="text-primary pl-3 hover:opacity-70 transition-opacity" aria-label="Subscribe">
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-2 flex flex-col gap-5">
              <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">
                {heading}
              </h5>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.anchor ? (
                      <button 
                        onClick={() => handleAnchor(link.href)}
                        className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 text-left gold-line-animate pb-0.5"
                      >
                        {link.label}
                      </button>
                    ) : link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 gold-line-animate pb-0.5"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 gold-line-animate pb-0.5"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Address column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">Headquarters</h5>
            <address className="not-italic flex flex-col gap-3">
              <span className="font-sans text-xs text-on-surface-variant flex items-center gap-2">
                <Landmark size={12} className="text-primary shrink-0" />
                Karachi, Pakistan
              </span>
              <a href="tel:+923323632052" className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-2">
                <Phone size={12} className="text-primary shrink-0" />
                +92 332 3632052
              </a>
              <a href="mailto:info@aurel.pk" className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-2">
                <Mail size={12} className="text-primary shrink-0" />
                info@aurel.pk
              </a>
            </address>
            <div className="mt-2 p-4 border border-primary/10 bg-surface/50 rounded-sm">
              <p className="font-mono text-[8px] tracking-[0.25em] uppercase text-primary mb-1 flex items-center gap-1.5">
                <Clock size={10} />
                Response SLA
              </p>
              <p className="font-sans text-xs text-on-surface">Within 24 Hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-primary/5 px-8 md:px-16 py-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-outline/50 text-center md:text-left">
            © 2026 Aurel Leather &bull; Precision Crafted in Karachi &bull; All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <span key={item} className="font-mono text-[9px] tracking-[0.2em] uppercase text-outline/30 cursor-default">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
