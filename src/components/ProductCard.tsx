import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/shop';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-outline-variant bg-surface p-6 shadow-[0_4px_24px_rgba(38,33,26,0.06)] transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_12px_40px_rgba(38,33,26,0.1)]">
      <div className="relative mb-6 h-64 overflow-hidden rounded-[1.75rem] bg-surface-low">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <span className="mb-4 inline-flex text-[11px] uppercase tracking-[0.35em] text-outline">{product.category}</span>
      <h3 className="font-display text-2xl leading-tight text-on-surface mb-3">{product.name}</h3>
      <p className="text-on-surface-variant mb-6 text-sm leading-7">{product.excerpt}</p>
      <div className="flex items-center justify-between gap-4">
        <span className="text-primary font-semibold tracking-[0.12em] uppercase">{product.price}</span>
        <Link href={`/products/${product.slug}`} className="text-xs font-bold uppercase tracking-[0.35em] text-on-surface transition-colors hover:text-primary">
          View Details
        </Link>
      </div>
    </article>
  );
};
