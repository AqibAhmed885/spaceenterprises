import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function Breadcrumb({
  items,
  light = false,
}: {
  items: { label: string; href: string }[];
  light?: boolean;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-2 text-xs ${light ? 'text-white/50' : 'text-muted'}`}
    >
      <Link href="/">Home</Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <ChevronRight size={13} />
          <span
            className={
              item.href === '#' ? (light ? 'text-white/80' : 'text-brand') : ''
            }
          >
            {item.label}
          </span>
        </span>
      ))}
    </nav>
  );
}
