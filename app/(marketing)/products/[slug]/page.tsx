import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DetailPage } from '../../../../src/components/shared/MarketingTemplates';
import { productCategories } from '../../../../src/content/products';
import { getBySlug } from '../../../../src/lib/content';
import { pageMetadata } from '../../../../src/lib/seo';
export function generateStaticParams() {
  return productCategories.map(({ slug }) => ({ slug }));
}
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = getBySlug(productCategories, slug);
    return item
      ? pageMetadata(item.title, item.description, `/products/${item.slug}`)
      : {};
  });
}
export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const item = getBySlug(productCategories, slug);
    if (!item) notFound();
    return <DetailPage type="product" item={item} />;
  });
}
