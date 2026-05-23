'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/shop';

export const CollectionFilters = ({ products, categories }: { products: Product[]; categories: string[] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(6);

  const filtered = useMemo(() => {
    return products
      .filter((product) => selectedCategory === 'All' || product.category === selectedCategory)
      .filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
  }, [products, selectedCategory, query]);

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-outline">Collections</p>
          <h1 className="font-display text-4xl md:text-5xl">Browse curated leather pieces.</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selectedCategory === category
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-white/10 text-on-surface-variant hover:border-primary/40 hover:text-on-surface'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12 grid items-center gap-4 sm:grid-cols-[1fr_auto]">
        <div className="rounded-[1.75rem] border border-white/10 bg-surface p-4">
          <label className="sr-only" htmlFor="collection-search">
            Search products
          </label>
          <input
            id="collection-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search leather collections"
            className="w-full border-none bg-transparent text-on-surface placeholder:text-on-surface-variant focus:outline-none"
          />
        </div>

        <p className="text-sm text-on-surface-variant">{filtered.length} products available</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {filtered.slice(0, displayCount).map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length > displayCount && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setDisplayCount((value) => value + 6)}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-on-primary transition hover:bg-primary/90"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
};
