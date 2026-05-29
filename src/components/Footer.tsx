"use client";

import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, ArrowRight } from "lucide-react";

const navLinks = {
  Collections: [
    { label: "Executive Wallets",   href: "/wallets" },
    { label: "Card Holders",        href: "/cardholders" },
    { label: "Leather Notebooks",   href: "/products" },
    { label: "Gift Sets",           href: "/products" },
    { label: "All Products",        href: "/products" },
  ],
  Company: [
    { label: "About Aurel",         href: "/about" },
    { label: "Corporate Gifting",   href: "/corporate-gifting" },
    { label: "Customization",       href: "/customization" },
    { label: "Collections",         href: "/collections" },
  ],
  Contact: [
    { label: "Request a Quote",     href: "#contact",  anchor: true },
    { label: "WhatsApp Inquiry",    href: "https://wa.me/923323632052", external: true },
    { label: "info@aurel.pk",       href: "mailto:info@aurel.pk", external: true },
    { label: "+92 332 3632052",     href: "tel:+923323632052", external: true },
  ],
};

const socials = [
  { icon: <Instagram size={16} />,     href: "https://instagram.com/aurelpk",            label: "Instagram" },
  { icon: <Linkedin size={16} />,      href: "https://linkedin.com/company/aurelpk",      label: "LinkedIn" },
  { icon: <MessageCircle size={16} />, href: "https://wa.me/923323632052",                label: "WhatsApp" },
];

export const Footer = () => {
  const handleAnchor = (href: string) => {
    const id = href.replace(/^#/, "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-surface-low border-t border-primary/10 overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-50" />

      {/* Main grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <div className="font-display italic text-4xl text-primary tracking-[0.2em] mb-1">Aurel Leather</div>
              <div className="font-mono text-[8px] tracking-[0.4em] uppercase text-outline/50">Est. 2024 · Karachi, Pakistan</div>
            </div>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed max-w-xs">
              Pakistan's premier corporate leather gifting infrastructure. Factory-direct manufacturing for enterprise brands and gifting agencies.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 border border-primary/20 flex items-center justify-center text-outline hover:text-primary hover:border-primary/50 hover:shadow-[0_0_16px_rgba(201,169,110,0.15)] transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-outline mb-3">Stay Informed</p>
              <div className="flex border-b border-outline-variant/40 focus-within:border-primary transition-colors duration-300 max-w-xs">
                <input type="email" placeholder="your@email.com"
                  className="flex-1 bg-transparent py-2.5 text-sm text-on-surface outline-none placeholder:text-outline/30 font-sans" />
                <button className="text-primary pl-3 hover:opacity-70 transition-opacity" aria-label="Subscribe">
                  <ArrowRight size={14} />
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
                      <button onClick={() => handleAnchor(link.href)}
                        className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 text-left gold-line-animate pb-0.5">
                        {link.label}
                      </button>
                    ) : link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer"
                        className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 gold-line-animate pb-0.5">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}
                        className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 gold-line-animate pb-0.5">
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
            <h5 className="font-mono text-[9px] font-bold tracking-[0.35em] uppercase text-outline border-b border-primary/10 pb-3">Location</h5>
            <address className="not-italic flex flex-col gap-3">
              <span className="font-sans text-sm text-on-surface-variant">Karachi, Pakistan</span>
              <a href="tel:+923323632052" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-200">+92 332 3632052</a>
              <a href="mailto:info@aurel.pk" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-200">info@aurel.pk</a>
            </address>
            <div className="mt-2 p-4 border border-primary/10 bg-surface">
              <p className="font-mono text-[8px] tracking-[0.25em] uppercase text-primary mb-1">Response Time</p>
              <p className="font-sans text-sm text-on-surface">Within 24 Hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-outline-variant/15 px-8 md:px-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-outline/60">
            © 2025 Aurel Leather · Precision Crafted in Karachi
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <span key={item} className="font-mono text-[9px] tracking-[0.2em] uppercase text-outline/40 cursor-default">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
