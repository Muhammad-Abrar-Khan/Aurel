'use client';

import { useState } from 'react';
import { AdminShell } from '@/components/AdminShell';

export default function AdminCmsPage() {
  const [heroHeadline, setHeroHeadline] = useState('Crafted for performance, built for prestige.');
  const [heroCopy, setHeroCopy] = useState('Aurel Leather is the new standard for executive leather goods, fusion of innovation, design, and timeless luxury.');
  const [footerCallout, setFooterCallout] = useState('Invite clients to a new standard of tactile luxury.');

  return (
    <AdminShell>
      <div className="space-y-10">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-outline">CMS</p>
          <h2 className="font-display text-3xl">Homepage content editor</h2>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          <label className="block rounded-[1.75rem] border border-white/10 bg-background p-6">
            <p className="text-sm text-on-surface-variant">Hero headline</p>
            <input
              value={heroHeadline}
              onChange={(event) => setHeroHeadline(event.target.value)}
              className="mt-4 w-full rounded-2xl border border-white/10 bg-surface px-4 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </label>

          <label className="block rounded-[1.75rem] border border-white/10 bg-background p-6">
            <p className="text-sm text-on-surface-variant">Hero subtext</p>
            <textarea
              value={heroCopy}
              onChange={(event) => setHeroCopy(event.target.value)}
              className="mt-4 min-h-[160px] w-full rounded-2xl border border-white/10 bg-surface px-4 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </label>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-background p-6">
          <p className="text-sm text-on-surface-variant">Footer CTA</p>
          <input
            value={footerCallout}
            onChange={(event) => setFooterCallout(event.target.value)}
            className="mt-4 w-full rounded-2xl border border-white/10 bg-surface px-4 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <button className="rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-on-primary transition hover:bg-primary/90">
          Save changes
        </button>
      </div>
    </AdminShell>
  );
}
