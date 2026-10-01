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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = getBySlug(projects, slug);
    return item
      ? pageMetadata(item.title, item.summary, `/projects/${item.slug}`)
      : {};
  });
}
export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const item = getBySlug(projects, slug);
    if (!item) notFound();
    return <DetailPage type="project" item={item} />;
  });
}
