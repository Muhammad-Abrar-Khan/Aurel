'use client';

import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { setAuthTokens } from '@/lib/auth';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Enter email and password.');
      return;
    }

    setAuthTokens('demo.access.token', 'demo.refresh.token');
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-surface p-10 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-outline">Admin login</p>
        <h1 className="font-display text-4xl mt-4 mb-6">Access Aurel Control</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block text-sm text-on-surface-variant">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-background px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </label>
          <label className="block text-sm text-on-surface-variant">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-background px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </label>
          {error && <p className="text-sm text-rose-400">{error}</p>}
          <button type="submit" className="w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-on-primary transition hover:bg-primary/90">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
