import assetSrcsets from '../../assets/asset-srcsets.json';

interface AssetMapping {
  original: string;
  mapping: Array<{ width: number; file: string }>;
}

const srcsetMap = new Map<string, AssetMapping>(
  assetSrcsets.map((asset: AssetMapping) => [asset.original, asset])
);

/**
 * Generate a srcset string for an asset
 * @param originalName - original filename (e.g., "executive-notebook-embossed.jpeg")
 * @returns srcset string or null if not found
 */
export function getAssetSrcset(originalName: string): string | null {
  const asset = srcsetMap.get(originalName);
  if (!asset) return null;

  // Build srcset: "url 400w, url 750w, ..."
  return asset.mapping.map((m) => `/assets/${m.file} ${m.width}w`).join(', ');
}

/**
 * Get the default (largest) WebP image for an asset
 * @param originalName - original filename
 * @returns path to largest WebP variant or null if not found
 */
export function getAssetPath(originalName: string): string | null {
  const asset = srcsetMap.get(originalName);
  if (!asset || asset.mapping.length === 0) return null;

  // Return the last (largest) variant as default
  const lastVariant = asset.mapping[asset.mapping.length - 1];
  return `/assets/${lastVariant.file}`;
}

/**
 * Generate sizes attribute based on responsive breakpoints
 */
export function getAssetSizes(): string {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw';
}
