import { getAllProducts } from "./products";

export function getProducts() {
  return getAllProducts();
}

export function getProductCategories() {
  const products = getAllProducts();
  return [...new Set(products.map((p: any) => p.category))];
}

export function getProductsByCategory(category: string) {
  return getAllProducts().filter((p: any) => p.category === category);
}