export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] ${light ? 'text-accent' : 'text-accent'}`}
    >
      {children}
    </p>
  );
}
export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  className = '',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl ${light ? 'text-white' : 'text-brand'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-xl text-base leading-7 ${light ? 'text-white/65' : 'text-muted'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
