'use client';

import { AdminShell } from '@/components/AdminShell';

export default function AdminDashboardPage() {
  return (
    <AdminShell>
      <div className="grid gap-8 lg:grid-cols-3">
        {[
          { label: 'Active SKUs', value: '5' },
          { label: 'Published Collections', value: '3' },
          { label: 'Pending Inquiries', value: '14' },
        ].map((item) => (
          <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-background p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-outline">{item.label}</p>
            <p className="mt-4 text-4xl font-semibold text-on-surface">{item.value}</p>
          </div>
        ))}
      </div>

      <section className="mt-10 rounded-[1.75rem] border border-white/10 bg-background p-8">
        <h2 className="font-display text-2xl mb-4">Quick actions</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: 'Create product', href: '/admin/products' },
            { label: 'Manage homepage content', href: '/admin/cms' },
            { label: 'Review inquiries', href: '/contact' },
            { label: 'Collections overview', href: '/collections' },
          ].map((item) => (
            <a key={item.label} href={item.href} className="rounded-2xl border border-white/10 bg-surface px-6 py-5 text-sm font-semibold transition hover:border-primary/30">
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
