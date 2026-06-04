"use client";

import dynamic from 'next/dynamic';

const HeroProduct3D = dynamic(() => import('./HeroProduct3D'), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] rounded-[2rem] bg-surface border border-primary/10 flex items-center justify-center text-sm text-on-surface-variant">
      Loading 3D presentation…
    </div>
  ),
});

export default function ProductViewerWrapper() {
  return <HeroProduct3D />;
}
