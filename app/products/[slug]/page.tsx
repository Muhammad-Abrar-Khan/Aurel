import { getAllProducts, Product } from "../../../lib/shop";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product: any) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const products = getAllProducts();
  const product = products.find((p: Product) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto py-32 px-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-display italic text-on-surface">{product.name}</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">{product.description}</p>
        <div className="flex gap-8 text-sm font-mono uppercase tracking-widest text-primary">
          <span>Price: {product.priceRange}</span>
          <span>MOQ: {product.moq} units</span>
          <span>Category: {product.category}</span>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-display italic">Materials</h3>
            <ul className="list-disc list-inside text-on-surface-variant">
              {product.materials?.map((m: string, i: number) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-display italic">Best Use Cases</h3>
            <ul className="list-disc list-inside text-on-surface-variant">
              {product.useCases?.map((u: string, i: number) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}