// Import the product data JSON. The path uses the TypeScript path alias "@" which
// resolves to the project root. This ensures the JSON is bundled correctly by
// Next.js and TypeScript.
// Import the product data JSON using a relative path. The alias "@" points to
// the project root, but the JSON file lives in the top‑level `data` folder.
import productsData from "../data/products.json";

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;

  priceRange: string;
  moq: number;

  images: string[];

  materials?: string[];
  useCases?: string[];
};

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return (productsData as Product[]).find((p) => p.slug === slug);
}

export const categories = [
  { key: "wallets" },
  { key: "accessories" },
  { key: "notebooks" },
  { key: "gift-sets" },
  { key: "portfolios" }
];
