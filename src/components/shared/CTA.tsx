import { Container } from '../layout/Container';
import { Button, TextLink } from './Button';

export function CTA() {
  return (
    <section className="bg-accent py-16 sm:py-20">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-brand/60">
            Have a procurement requirement?
          </p>
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-brand sm:text-6xl">
            Let&apos;s source what your business needs.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-brand/70">
            From specialized equipment to recurring supply requirements, talk to
            our procurement team.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Button
            href="/rfq"
            className="border-brand bg-brand text-white hover:bg-brand-dark"
          >
            Request a Quote
          </Button>
          <TextLink href="/contact" className="text-brand">
            Contact our team
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
