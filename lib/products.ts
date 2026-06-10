import fs from "fs";
import path from "path";

function loadProducts() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export function getAllProducts() {
  return loadProducts();
}

export function getProductBySlug(slug: string) {
  return loadProducts().find((p: any) => p.slug === slug);
}