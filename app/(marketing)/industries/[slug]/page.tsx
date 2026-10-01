import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DetailPage } from '../../../../src/components/shared/MarketingTemplates';
import { industries } from '../../../../src/content/industries';
import { getBySlug } from '../../../../src/lib/content';
import { pageMetadata } from '../../../../src/lib/seo';
export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = getBySlug(industries, params.slug);
  return item
    ? pageMetadata(item.title, item.description, `/industries/${item.slug}`)
    : {};
}
export default function IndustryDetail({
  params,
}: {
  params: { slug: string };
}) {
  const item = getBySlug(industries, params.slug);
  if (!item) notFound();
  return <DetailPage type="industry" item={item} />;
}
