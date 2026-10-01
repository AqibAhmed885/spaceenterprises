import Link from 'next/link';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 ${light ? 'text-white' : 'text-brand'}`}
      aria-label="Space Enterprises home"
    >
      <span className="grid h-9 w-9 place-items-center border border-current text-[11px] font-bold tracking-[-0.1em]">
        SE
      </span>
      <span className="text-[13px] font-bold uppercase tracking-[0.18em]">
        Space Enterprises
      </span>
    </Link>
  );
}
