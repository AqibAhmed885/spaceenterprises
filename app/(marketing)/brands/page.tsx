import type { Metadata } from 'next';
import { PageHero } from '../../../src/components/shared/PageHero';
import { Container } from '../../../src/components/layout/Container';
import { CTA } from '../../../src/components/shared/CTA';
import { brands } from '../../../src/content/brands';
export const metadata: Metadata = {
  title: 'Brands We Source',
  description:
    'Illustrative brands and product families Space Enterprises can source against confirmed requirements.',
};
export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands we source"
        title="Products we can source."
        description="Availability and supplier status are confirmed against each requirement. We do not claim authorized distributor status unless verified."
      />
      <main>
        <Container className="py-20 sm:py-28">
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="min-h-40 border-b border-r border-border p-7"
              >
                <p className="text-2xl font-semibold tracking-[-0.04em] text-brand">
                  {brand.name}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {brand.category}
                </p>
              </div>
            ))}
          </div>
        </Container>
        <CTA />
      </main>
    </>
  );
}
