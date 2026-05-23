"use client";

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-on-surface px-6">
      <div className="max-w-xl rounded-xl bg-surface p-10 shadow-2xl border border-primary/10 text-center">
        <h1 className="font-display text-3xl mb-4">Something went wrong.</h1>
        <p className="text-on-surface-variant mb-8">Please refresh the page or try again. If the issue persists, contact support via WhatsApp.</p>
        <button
          onClick={() => reset()}
          className="bg-primary text-on-primary px-8 py-3 uppercase tracking-[0.2em] text-sm rounded-sm"
        >
          Reload
        </button>
      </div>
    </div>
  );
}
