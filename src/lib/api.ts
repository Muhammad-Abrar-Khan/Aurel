export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://api.aurel-leather.com';

export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: 'no-store',
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export type ErrorResponse = {
  message: string;
};

export async function fetchProducts() {
  return fetcher('/products');
}

export async function fetchProduct(slug: string) {
  return fetcher(`/products/${encodeURIComponent(slug)}`);
}
