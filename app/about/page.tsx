"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="relative pt-40 pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_30%,_rgba(201,169,110,0.04),_transparent)] pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-primary mb-6 block">Our Story</span>
            <h1 className="font-display text-5xl md:text-7xl italic text-on-surface leading-[1.1] mb-8">
              Karachi precision.
              <br />
              <span className="text-primary not-italic">Enterprise trust.</span>
            </h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              We exist to give Pakistani craftsmanship a global stage. Every piece carries Karachi precision and enterprise trust.
            </p>
          </div>
        </section>
        <section className="py-20 px-6 md:px-12 border-t border-primary/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-primary mb-4 block">Our Mission</span>
              <h2 className="font-display text-3xl md:text-4xl italic text-on-surface mb-6">
                Craftsmanship that <span className="text-primary not-italic">outlasts</span> trends
              </h2>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                Founded in Karachi, Aurel Leather bridges the gap between traditional leather craftsmanship and modern enterprise requirements.
                We partner with institutions worldwide to deliver premium leather goods that reflect brand excellence — from executive wallets to
                bespoke corporate gift sets.
              </p>
            </div>
            <div className="bg-surface rounded-3xl p-8 md:p-12 border border-primary/5">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: '50+', label: 'Enterprise Clients' },
                  { number: '10,000+', label: 'Units Delivered' },
                  { number: '7-Day', label: 'Production SLA' },
                  { number: '100%', label: 'Full-Grain Leather' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl md:text-4xl text-primary">{stat.number}</p>
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-outline mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-6 md:px-12 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-primary mb-4 block text-center">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl italic text-on-surface text-center mb-16">
              Built on <span className="text-primary not-italic">trust</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Transparency', desc: 'Clear pricing, honest lead times, and open communication at every step of your order.' },
                { title: 'Quality', desc: 'Every hide is inspected. Every stitch is verified. Every shipment meets our standard.' },
                { title: 'Partnership', desc: 'We grow with our clients — from first sample to recurring enterprise volume.' },
              ].map((value) => (
                <div key={value.title} className="bg-background rounded-3xl p-8 border border-primary/5">
                  <h3 className="font-display text-2xl text-primary mb-4">{value.title}</h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-primary mb-4 block">Karachi, Pakistan</span>
            <h2 className="font-display text-3xl md:text-4xl italic text-on-surface mb-6">Ready to work together?</h2>
            <p className="font-sans text-base text-on-surface-variant max-w-lg mx-auto mb-8">
              Let's discuss your next corporate gifting or manufacturing project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-primary text-on-primary px-8 py-3 font-sans text-xs font-bold tracking-[0.18em] uppercase">Contact Us</Link>
              <a href="https://wa.me/923323632052?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="border border-primary/30 text-primary px-8 py-3 font-sans text-xs font-bold tracking-[0.18em] uppercase hover:bg-primary/5">WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}