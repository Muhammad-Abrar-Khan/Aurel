import { getFeaturedProducts } from '@/lib/shop';
import { ProductCard } from './ProductCard';

export const FeaturedProducts = () => {
  const featured = getFeaturedProducts();

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="mb-12 space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-outline">Featured Products</p>
        <h2 className="font-display text-4xl md:text-5xl">Curated leather essentials for corporate gifting.</h2>
        <p className="mx-auto max-w-2xl text-on-surface-variant">Each collection item is crafted for boardrooms, executive suites and premium loyalty programs with manufacturing quality that scales.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};
