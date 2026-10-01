import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { PageHero } from './PageHero';
import { SectionHeader } from './SectionHeader';
import { TextLink } from './Button';
import { CTA } from './CTA';
import type {
  Service,
  Industry,
  ProductCategory,
  Project,
} from '../../types/domain';

type CardItem = {
  slug: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export function CardGrid({
  items,
  basePath,
}: {
  items: CardItem[];
  basePath: string;
}) {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.slug}
          href={`${basePath}/${item.slug}`}
          className="group border-b border-border pb-6"
        >
          <div className="relative aspect-[1.4] overflow-hidden bg-brand">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex items-start justify-between gap-4 pt-5">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-brand">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
            <ArrowUpRight className="mt-1 shrink-0 text-accent" size={19} />
          </div>
        </a>
      ))}
    </div>
  );
}

export function ListingPage({
  eyebrow,
  title,
  description,
  basePath,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  basePath: string;
  items: CardItem[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={items[0]?.image.src}
      />
      <main>
        <Container className="py-20 sm:py-28">
          <CardGrid items={items} basePath={basePath} />
        </Container>
        <CTA />
      </main>
    </>
  );
}

export function DetailPage({
  type,
  item,
}: {
  type: 'service' | 'industry' | 'product' | 'project';
  item: Service | Industry | ProductCategory | Project;
}) {
  const isService = type === 'service';
  const isIndustry = type === 'industry';
  const isProduct = type === 'product';
  const project = item as Project;
  const title = item.title;
  const image = item.image;
  const description = isService
    ? (item as Service).overview
    : isIndustry
      ? (item as Industry).description
      : isProduct
        ? (item as ProductCategory).description
        : project.overview;
  const bullets = isService
    ? (item as Service).capabilities
    : isIndustry
      ? (item as Industry).requirements
      : isProduct
        ? (item as ProductCategory).examples
        : project.approach;
  return (
    <>
      <PageHero
        eyebrow={
          isService
            ? 'Our expertise'
            : isIndustry
              ? 'Industry'
              : isProduct
                ? 'What we source'
                : project.industry
        }
        title={title}
        description={description}
        image={image.src}
      />
      <main>
        <Container className="grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
          <div>
            <SectionHeader
              eyebrow={isProjectType(type) ? 'Project overview' : 'How we help'}
              title={
                isService
                  ? 'A procurement path that keeps the detail visible.'
                  : isIndustry
                    ? 'A considered approach to industry requirements.'
                    : isProduct
                      ? 'Source the right product for the requirement.'
                      : 'A focused sourcing and delivery workflow.'
              }
              description={isProjectType(type) ? project.challenge : undefined}
            />
            <div className="mt-9 grid gap-4">
              {bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex gap-3 border-t border-border pt-4 text-sm leading-6 text-muted"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  {bullet}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden bg-brand">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
        <DetailSections type={type} item={item} />
        <CTA />
      </main>
    </>
  );
}

function isProjectType(type: string): type is 'project' {
  return type === 'project';
}

function DetailSections({
  type,
  item,
}: {
  type: 'service' | 'industry' | 'product' | 'project';
  item: Service | Industry | ProductCategory | Project;
}) {
  const project = item as Project;
  const service = item as Service;
  const industry = item as Industry;
  const product = item as ProductCategory;
  const rows =
    type === 'project'
      ? [
          ['Products / equipment sourced', project.products.join(' · ')],
          ['Sourcing region', project.sourcingRegion],
          ['Quality assurance', project.quality],
          ['Logistics & delivery', project.logistics],
          ['Outcome', project.outcome],
        ]
      : type === 'service'
        ? [
            ['Capabilities', service.capabilities.join(' · ')],
            ['Business challenges', service.challenges.join(' · ')],
            ['Relevant industries', service.industries.join(' · ')],
          ]
        : type === 'industry'
          ? [
              ['Typical requirements', industry.requirements.join(' · ')],
              ['Relevant products', industry.products.join(' · ')],
              ['Relevant services', industry.services.join(' · ')],
            ]
          : [
              ['Product types', product.examples.join(' · ')],
              ['Relevant industries', product.industries.join(' · ')],
              [
                'Procurement capability',
                'Specification-led sourcing, quotation comparison and delivery coordination',
              ],
            ];
  return (
    <section className="border-y border-border bg-white py-16 sm:py-20">
      <Container>
        <div className="grid lg:grid-cols-[.6fr_1.4fr]">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-3 border-b border-border py-6 sm:grid-cols-[.35fr_1fr]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {label}
              </p>
              <p className="max-w-2xl text-base leading-7 text-brand">
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <TextLink href="/rfq">Discuss a similar requirement</TextLink>
        </div>
      </Container>
    </section>
  );
}
