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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = getBySlug(services, slug);
    return item
      ? pageMetadata(item.title, item.description, `/services/${item.slug}`)
      : {};
  });
}
export default function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const item = getBySlug(services, slug);
    if (!item) notFound();
    return <DetailPage type="service" item={item} />;
  });
}
