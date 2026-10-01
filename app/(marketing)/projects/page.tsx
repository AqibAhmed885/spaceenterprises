import type { Metadata } from 'next';
import { ListingPage } from '../../../src/components/shared/MarketingTemplates';
import { projects } from '../../../src/content/projects';
export const metadata: Metadata = {
  title: 'Selected Projects',
  description:
    'Selected procurement and sourcing project examples from Space Enterprises.',
};
export default function ProjectsPage() {
  return (
    <ListingPage
      eyebrow="Our work"
      title="Selected procurement projects."
      description="A small selection of how sourcing, coordination and delivery come together around a requirement."
      basePath="/projects"
      items={projects.map((project) => ({
        ...project,
        description: project.summary,
      }))}
    />
  );
}
