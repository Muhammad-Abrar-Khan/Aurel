"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Landmark,
  Mail,
  Clock,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { EMAIL_ADDRESS, WHATSAPP_URL } from "@/lib/constants";
import Image from "next/image";

// EmailJS credentials (same service used by ProposalForm / MultiStepRFQ)
const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID   ?? 'service_aurel';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID ?? 'template_newsletter';
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY   ?? '';

/* ── Newsletter Form ── */
function NewsletterForm() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, []);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return;

    if (!isValidEmail(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      if (!PUBLIC_KEY) {
        // Dev fallback: simulate success when EmailJS not yet configured
        await new Promise(r => setTimeout(r, 600));
        setStatus('success');
        setMessage('Subscribed! (configure EmailJS to activate delivery)');
        setEmail('');
        return;
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        subscriber_email: trimmed,
        subscribed_at: new Date().toISOString(),
      });

      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Could not subscribe. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-primary py-2.5 max-w-xs">
        <CheckCircle2 size={14} className="shrink-0" />
        <span className="font-sans text-xs">{message}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xs" noValidate>
      <div className="flex border-b border-primary/20 focus-within:border-primary transition-colors duration-300">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); setMessage(''); }}
          placeholder="enter.corporate@email.com"
          className="flex-1 bg-transparent py-2.5 text-xs text-on-surface outline-none placeholder:text-outline/60 font-sans"
          disabled={status === 'loading'}
          aria-label="Newsletter email address"
          required
        />
        <button
          type="submit"
          className="text-primary pl-3 hover:opacity-70 transition-opacity disabled:opacity-40"
          aria-label="Subscribe to newsletter"
          disabled={status === 'loading' || !email.trim()}
        >
          {status === 'loading'
            ? <Loader2 size={12} className="animate-spin" />
            : <ArrowRight size={12} />}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-1.5 font-sans text-[10px] text-red-400" role="alert">{message}</p>
      )}
    </form>
  );
}


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
                <span className="font-display text-3xl tracking-[0.4em] text-primary">AUREL LEATHER</span>
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
              <NewsletterForm />
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
