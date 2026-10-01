'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigation } from '../../content/navigation';
import { Button } from '../shared/Button';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return (
    <>
      <button
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen((value) => !value)}
        className="grid h-11 w-11 place-items-center border border-white/25 text-white lg:hidden focus-visible:outline-2 focus-visible:outline-accent"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[73px] z-40 border-t border-white/10 bg-brand-dark px-5 py-8 text-white lg:hidden"
        >
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-lg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-7">
            <Button href="/rfq">Request a Quote</Button>
          </div>
        </div>
      )}
    </>
  );
}
