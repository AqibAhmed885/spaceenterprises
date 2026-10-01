import Link from 'next/link';
import { navigation } from '../../content/navigation';
import { Container } from './Container';
import { Logo } from '../shared/Logo';
import { Button } from '../shared/Button';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15 text-white">
      <Container className="flex h-[73px] items-center justify-between gap-8">
        <Logo light />
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-white/80 transition hover:text-white focus-visible:outline-2 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/rfq" className="hidden min-h-10 px-4 lg:inline-flex">
            Request a Quote
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
