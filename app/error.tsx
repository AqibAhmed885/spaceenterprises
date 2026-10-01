'use client';
import { useEffect } from 'react';
import { Container } from '../src/components/layout/Container';
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main className="grid min-h-screen place-items-center bg-surface">
      <Container className="max-w-xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          Something went wrong
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-brand">
          We couldn’t load this page.
        </h1>
        <button
          onClick={() => reset()}
          className="mt-8 bg-brand px-6 py-3 text-sm font-semibold text-white"
        >
          Try again
        </button>
      </Container>
    </main>
  );
}
