import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

const classes =
  'inline-flex min-h-12 items-center justify-center gap-3 border border-accent bg-accent px-5 text-sm font-semibold text-brand transition hover:bg-[#e0ad60] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent';

export function Button({
  href,
  children,
  className = '',
  ...props
}: { href: string; children: ReactNode; className?: string } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
>) {
  return (
    <Link className={`${classes} ${className}`} href={href} {...props}>
      {children}
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </Link>
  );
}
export function ActionButton({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button className={`${classes} ${className}`} {...props}>
      {children}
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </button>
  );
}
export function TextLink({
  className = '',
  children,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      className={`group inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
      href={href}
      {...props}
    >
      {children}
      <ArrowUpRight
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        size={16}
      />
    </Link>
  );
}
