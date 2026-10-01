import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DetailPage } from '../../../../src/components/shared/MarketingTemplates';
import { services } from '../../../../src/content/services';
import { getBySlug } from '../../../../src/lib/content';
import { pageMetadata } from '../../../../src/lib/seo';
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = getBySlug(services, params.slug);
  return item
    ? pageMetadata(item.title, item.description, `/services/${item.slug}`)
    : {};
}
export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const item = getBySlug(services, params.slug);
  if (!item) notFound();
  return <DetailPage type="service" item={item} />;
}
