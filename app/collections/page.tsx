import { CollectionFilters } from '@/components/CollectionFilters';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { getAllProducts, categories } from '@/lib/shop';

export const metadata = {
  title: 'Collections | Aurel Leather',
  description: 'Explore Aurel Leather’s curated luxury leather collections for corporate gifting and executive accessories.',
  alternates: { canonical: '/collections' },
};

export default function CollectionsPage() {
  const products = getAllProducts();

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <main id="main">
        <CollectionFilters products={products} categories={categories.map((item) => item.key)} />
      </main>
      <Footer />
    </div>
  );
}
