'use client';

import { useMemo, useState } from 'react';
import { AdminShell } from '@/components/AdminShell';
import { getAllProducts } from '@/lib/shop';

export default function AdminProductsPage() {
  const products = getAllProducts();
  const [search, setSearch] = useState('');

  const visibleProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <AdminShell>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-outline">Products</p>
            <h2 className="font-display text-3xl">Product catalog</h2>
          </div>
          <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-on-primary transition hover:bg-primary/90">
            Add product
          </button>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-background p-6">
          <label className="mb-2 block text-sm text-on-surface-variant">Search products</label>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Search by name or category"
          />
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-background shadow-2xl">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm">
            <thead className="bg-surface/80 text-on-surface-variant">
              <tr>
                <th className="px-6 py-4 uppercase tracking-[0.2em]">Name</th>
                <th className="px-6 py-4 uppercase tracking-[0.2em]">Category</th>
                <th className="px-6 py-4 uppercase tracking-[0.2em]">Price</th>
                <th className="px-6 py-4 uppercase tracking-[0.2em]">Status</th>
                <th className="px-6 py-4 uppercase tracking-[0.2em]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-background">
              {visibleProducts.map((product) => (
                <tr key={product.slug} className="border-b border-white/5 last:border-none">
                  <td className="px-6 py-4 font-semibold text-on-surface">{product.name}</td>
                  <td className="px-6 py-4 text-on-surface-variant">{product.category}</td>
                  <td className="px-6 py-4 text-on-surface">{product.price}</td>
                  <td className="px-6 py-4 text-on-surface-variant">{product.published ? 'Published' : 'Draft'}</td>
                  <td className="px-6 py-4 text-on-surface">
                    <button className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-primary/30">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
