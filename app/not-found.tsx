import Link from 'next/link';
import { Container } from '../src/components/layout/Container';
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-dark px-5 text-white">
      <Container className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          404 · Page not found
        </p>
        <h1 className="mt-6 text-6xl font-semibold leading-none tracking-[-0.06em] sm:text-8xl">
          The page you’re looking for may have moved.
        </h1>
        <p className="mt-7 max-w-lg text-lg leading-8 text-white/60">
          Return to the homepage or tell us what you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex min-h-12 items-center bg-accent px-6 text-sm font-semibold text-brand"
        >
          Return home
        </Link>
      </Container>
    </main>
  );
}
