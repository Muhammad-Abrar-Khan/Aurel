"use client";

import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { useState } from 'react';
import LeadModal from './LeadModal';
import { WHATSAPP_URL } from '@/lib/constants';

const HeroProduct3D = dynamic(() => import('./HeroProduct3D'), {
  ssr: false,
  loading: () => (
    <div className="h-full rounded-[2rem] bg-[#090805]/80 flex items-center justify-center text-sm text-on-surface-variant">
      Loading product preview…
    </div>
  ),
});

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background/95 py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:px-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-10">
          <div className="space-y-4 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-outline">Corporate Leather Gifts</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tight text-on-surface">
              Crafted leather experiences for executive gifting and branded corporate programs.
            </h1>
            <p className="max-w-xl text-lg leading-9 text-on-surface-variant">
              Aurel Leather combines premium finish, precision manufacturing, and elegant presentation to turn corporate gifting into a memorable luxury experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-on-primary transition hover:bg-primary/90"
            >
              Request quote
            </button>
            <a
              href="/products"
              className="rounded-full border border-white/10 bg-surface px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-on-surface transition hover:border-primary/30 hover:text-primary"
            >
              Browse products
            </a>
            <a
              href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20a%20corporate%20gifting%20proposal.`}
              className="rounded-full border border-white/10 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-on-surface transition hover:border-primary/30 hover:text-primary"
            >
              WhatsApp inquiry
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            {[
              { label: 'Minimum corporate orders', value: '50 units' },
              { label: 'Fastest production', value: '7–14 days' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-surface px-6 py-5 shadow-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-outline mb-2">{stat.label}</p>
                <p className="text-2xl font-semibold text-on-surface">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-[2rem] border border-white/10 bg-[#090805]/95 shadow-2xl overflow-hidden min-h-[520px]">
          <HeroProduct3D />
        </div>
      </div>

      <LeadModal open={isModalOpen} onClose={() => setIsModalOpen(false)} product={undefined} />
};

