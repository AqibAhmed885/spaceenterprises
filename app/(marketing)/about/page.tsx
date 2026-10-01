import type { Metadata } from 'next';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { PageHero } from '../../../src/components/shared/PageHero';
import { SectionHeader } from '../../../src/components/shared/SectionHeader';
import { Container } from '../../../src/components/layout/Container';
import { CTA } from '../../../src/components/shared/CTA';
import { company } from '../../../src/content/company';
export const metadata: Metadata = {
  title: 'About Space Enterprises',
  description:
    'Learn how Space Enterprises approaches sourcing, procurement and supply coordination.',
};
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A dependable partner for complex procurement."
        description={company.description}
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
      />
      <main>
        <Container className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-24">
          <SectionHeader
            eyebrow="Our story"
            title="Built around the requirements that matter."
          />
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              Space Enterprises is structured around a simple idea: procurement
              should be easier to coordinate when the technical, commercial and
              delivery details are kept in the same conversation.
            </p>
            <p>
              Our content is intentionally practical and replaceable as the
              company’s confirmed history, team and operating footprint are
              documented.
            </p>
          </div>
        </Container>
        <section className="bg-white py-20 sm:py-28">
          <Container className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="What guides us"
                title="Precision in the details. Clarity in the process."
              />
            </div>
            <div className="grid gap-5">
              {[
                'Reliable communication',
                'Specification-led sourcing',
                'Commercial clarity',
                'Delivery coordination',
              ].map((value) => (
                <div
                  key={value}
                  className="flex gap-4 border-t border-border pt-5 text-lg font-medium text-brand"
                >
                  <Check className="text-accent" />
                  {value}
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className="py-20 sm:py-28">
          <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden bg-brand">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85"
                alt="Engineer reviewing industrial equipment"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="How we work"
                title="One workflow. Fewer handoffs."
                description="We bring together requirement definition, supplier sourcing, quotation evaluation, procurement coordination, quality checks and delivery visibility."
              />
              <div className="mt-9 grid grid-cols-2 gap-6">
                {company.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border-l-2 border-accent pl-4"
                  >
                    <p className="text-3xl font-semibold text-brand">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <CTA />
      </main>
    </>
  );
}
