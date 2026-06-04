import { CollectionFilters } from '@/components/CollectionFilters';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { getAllProducts, categories } from '@/lib/shop';

export const metadata = {
  title: 'Products | Aurel Leather',
  description: 'Explore Aurel Leather’s premium leather products for corporate gifting, executive accessories, and luxury branded presentations.',
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <main id="main">
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-outline mb-4">Product catalog</p>
            <h1 className="font-display text-4xl md:text-5xl">Premium leather products for corporate gifting.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-on-surface-variant leading-7">
              Discover our curated range of executive wallets, gift sets, notebook covers, and accessories designed for branded corporate programs.
            </p>
          </div>
        </section>

        <CollectionFilters products={products} categories={categories.map((item) => item.key)} />
      </main>
      <Footer />
    </div>
  );
}
