'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { getAccessToken, clearAuthTokens } from '@/lib/auth';
import Link from 'next/link';

export const AdminShell = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(!!getAccessToken());
  }, []);

  return (
    <div className="min-h-[calc(100vh-85px)] rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-outline">Admin access</p>
          <h1 className="font-display text-3xl text-on-surface">Secure dashboard</h1>
        </div>
        {authenticated ? (
          <button
            onClick={() => {
              clearAuthTokens();
              setAuthenticated(false);
            }}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-on-surface transition hover:border-primary/30"
          >
            Sign out
          </button>
        ) : (
          <Link href="/admin/login" className="rounded-full border border-white/10 bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-on-primary transition hover:bg-primary/90">
            Sign in
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};
