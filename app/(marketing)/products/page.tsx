import type { Metadata } from 'next';
import { ListingPage } from '../../../src/components/shared/MarketingTemplates';
import { productCategories } from '../../../src/content/products';
export const metadata: Metadata = {
  title: 'Products & Equipment',
  description:
    'RFQ-driven procurement categories across industrial equipment, electrical, mechanical, IT, safety and general supplies.',
};
export default function ProductsPage() {
  return (
    <ListingPage
      eyebrow="What we source"
      title="Products and equipment across key categories."
      description="We source against your specification, quantity, brand preference and delivery context. No cart required."
      basePath="/products"
      items={productCategories}
    />
  );
}
