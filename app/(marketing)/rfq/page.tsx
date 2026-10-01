import type { Metadata } from 'next';
import { PageHero } from '../../../src/components/shared/PageHero';
import { Container } from '../../../src/components/layout/Container';
import { RFQForm } from '../../../src/components/forms/RFQForm';
export const metadata: Metadata = {
  title: 'Request a Quotation',
  description:
    'Share your product, equipment and delivery requirements with the Space Enterprises procurement team.',
};
export default function RFQPage() {
  return (
    <>
      <PageHero
        eyebrow="Request for quotation"
        title="Tell us what you need. We’ll handle the sourcing."
        description="Share your procurement requirements with our team. Provide product specifications, quantities and supporting documents and we’ll review your request."
      />
      <main>
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-xl leading-8 text-brand">
              Give us the requirement in the detail you have. We’ll come back
              with the next useful step.
            </p>
            <div className="mt-10 grid gap-4 text-sm text-muted">
              <p>✓ Product and equipment sourcing</p>
              <p>✓ Technical and commercial coordination</p>
              <p>✓ Supplier and delivery visibility</p>
            </div>
          </div>
          <RFQForm />
        </Container>
      </main>
    </>
  );
}
