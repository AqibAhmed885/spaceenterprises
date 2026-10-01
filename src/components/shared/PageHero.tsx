import { Container } from '../layout/Container';
import { Breadcrumb } from './Breadcrumb';

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark pb-20 pt-36 text-white sm:pb-28">
      <div
        className="absolute inset-0 opacity-25"
        style={
          image
            ? {
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }
            : undefined
        }
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#08151f_10%,rgba(8,21,31,.8)_55%,rgba(8,21,31,.55))]" />
      <Container className="relative">
        <Breadcrumb items={[{ label: title, href: '#' }]} light />
        <div className="mt-16 max-w-3xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
          <h1 className="text-5xl font-semibold leading-[.98] tracking-[-0.05em] sm:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
