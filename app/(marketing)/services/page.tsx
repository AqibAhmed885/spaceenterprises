import { ListingPage } from '../../../src/components/shared/MarketingTemplates';
import { services } from '../../../src/content/services';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Procurement Services',
  description:
    'Strategic sourcing, procurement management, vendor coordination, quality assurance and delivery services.',
};
export default function ServicesPage() {
  return (
    <ListingPage
      eyebrow="Our expertise"
      title="Procurement services built for clarity."
      description="From sourcing through delivery, we coordinate the details that keep business requirements moving."
      basePath="/services"
      items={services}
    />
  );
}
