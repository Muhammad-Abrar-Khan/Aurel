import type { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Admin | Aurel Leather',
  description: 'Admin portal for Aurel Leather product and content management.',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  // Note: html and body tags are ONLY in root layout.tsx
  return (
    <div className="min-h-screen bg-[#080705] text-on-surface">
      <header className="border-b border-white/10 bg-surface/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 text-sm text-on-surface-variant">
          <div className="font-display text-xl text-on-surface">Aurel Admin</div>
          <nav className="flex flex-wrap gap-3">
            <Link href="/admin/dashboard" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-primary/30 hover:text-primary">Dashboard</Link>
            <Link href="/admin/products" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-primary/30 hover:text-primary">Products</Link>
            <Link href="/admin/cms" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-primary/30 hover:text-primary">Content</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
    </div>
  );
}
