import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DetailPage } from '../../../../src/components/shared/MarketingTemplates';
import { projects } from '../../../../src/content/projects';
import { getBySlug } from '../../../../src/lib/content';
import { pageMetadata } from '../../../../src/lib/seo';
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = getBySlug(projects, params.slug);
  return item
    ? pageMetadata(item.title, item.summary, `/projects/${item.slug}`)
    : {};
}
export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const item = getBySlug(projects, params.slug);
  if (!item) notFound();
  return <DetailPage type="project" item={item} />;
}
