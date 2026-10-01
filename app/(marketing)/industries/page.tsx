import type { Metadata } from 'next';
import { ListingPage } from '../../../src/components/shared/MarketingTemplates';
import { industries } from '../../../src/content/industries';
export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Procurement coordination for organizations across industrial, infrastructure, technology and public-sector environments.',
};
export default function IndustriesPage() {
  return (
    <ListingPage
      eyebrow="Industries we serve"
      title="Procurement expertise across industries."
      description="Sourcing support shaped around the technical, commercial and delivery requirements of your environment."
      basePath="/industries"
      items={industries}
    />
  );
}
