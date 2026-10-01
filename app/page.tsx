import Image from 'next/image';
import {
  ArrowDownRight,
  ArrowUpRight,
  Compass,
  Factory,
  Globe2,
  ShieldCheck,
  Truck,
  UsersRound,
  Zap,
} from 'lucide-react';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { Container } from '../src/components/layout/Container';
import { Button, TextLink } from '../src/components/shared/Button';
import { CTA } from '../src/components/shared/CTA';
import { Eyebrow, SectionHeader } from '../src/components/shared/SectionHeader';
import { company, processSteps } from '../src/content/company';
import { services } from '../src/content/services';
import { industries } from '../src/content/industries';
import { productCategories } from '../src/content/products';
import { projects } from '../src/content/projects';
import { brands } from '../src/content/brands';

const iconMap = {
  Compass,
  ClipboardCheck: ShieldCheck,
  UsersRound,
  ShieldCheck,
  Truck,
  Globe2,
};

export default function Home() {
  return (
    <>
      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-brand-dark text-white sm:min-h-[860px]">
          <Image
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2200&q=90"
            alt="Industrial infrastructure at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#08151f_0%,rgba(8,21,31,.88)_42%,rgba(8,21,31,.25)_100%)]" />
          <Header />
          <Container className="relative flex min-h-[760px] items-end pb-20 pt-36 sm:min-h-[860px] sm:pb-28">
            <div className="max-w-4xl">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                PROCUREMENT · SOURCING · SUPPLY
              </p>
              <h1 className="max-w-4xl text-6xl font-semibold leading-[.93] tracking-[-0.06em] sm:text-8xl">
                Procurement solutions built around your business.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Space Enterprises helps organizations source, procure and
                deliver equipment, materials and supplies through reliable
                supplier networks and efficient procurement processes.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href="/rfq">Request a Quote</Button>
                <TextLink href="/services" className="text-white">
                  Explore our services
                </TextLink>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs text-white/50 sm:flex">
              <span className="grid h-10 w-10 place-items-center border border-white/20">
                <ArrowDownRight size={16} />
              </span>{' '}
              Scroll to explore
            </div>
          </Container>
        </section>
        <TrustBar />
        <AboutPreview />
        <Metrics />
        <ServicesSection />
        <CategoriesSection />
        <IndustriesSection />
        <ProcessSection />
        <WhySection />
        <BrandsSection />
        <ProjectsSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <Container className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
        {[
          'Global sourcing',
          'Verified suppliers',
          'Quality focused',
          'Reliable delivery',
        ].map((item) => (
          <div
            key={item}
            className="px-3 py-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-brand sm:py-8"
          >
            {item}
          </div>
        ))}
      </Container>
    </section>
  );
}
function AboutPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="max-w-lg text-5xl font-semibold leading-[.98] tracking-[-0.05em] text-brand sm:text-6xl">
            Your reliable procurement partner.
          </h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-muted">
            Space Enterprises provides sourcing, procurement and supply
            solutions for organizations requiring dependable access to
            equipment, materials and specialized products.
          </p>
          <p className="mt-4 max-w-lg text-base leading-8 text-muted">
            From supplier identification through procurement and delivery, we
            simplify complex purchasing requirements and provide a single point
            of coordination.
          </p>
          <div className="mt-8">
            <TextLink href="/about">Discover Space Enterprises</TextLink>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-brand">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85"
            alt="Engineer working with industrial equipment"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute bottom-0 left-0 max-w-xs bg-brand p-7 text-white">
            <p className="text-3xl font-semibold tracking-[-0.04em]">
              One point of coordination.
            </p>
            <p className="mt-3 text-sm leading-6 text-white/60">
              From requirement to delivery, with the detail kept visible.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
function Metrics() {
  return (
    <section className="border-y border-border bg-white py-10">
      <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {company.metrics.map((metric) => (
          <div key={metric.label} className="border-l-2 border-accent pl-4">
            <p className="text-4xl font-semibold tracking-[-0.05em] text-brand">
              {metric.value}
            </p>
            <p className="mt-1 text-sm font-medium text-brand">
              {metric.label}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted">
              {metric.note}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
function ServicesSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Our expertise"
          title="End-to-end procurement solutions."
          description="A practical, coordinated approach to sourcing equipment, materials and supplies across markets."
        />
        <div className="mt-14 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap] ?? Compass;
            return (
              <article
                key={service.slug}
                className="group border-b border-r border-border py-8 pr-6 transition hover:bg-white sm:min-h-[250px] sm:pl-6 first:pl-0 lg:min-h-[275px] lg:first:pl-0"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold text-accent">
                    {service.number}
                  </span>
                  <Icon
                    size={22}
                    strokeWidth={1.2}
                    className="text-brand/65 transition group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-brand">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                  {service.description}
                </p>
                <TextLink href={`/services/${service.slug}`} className="mt-6">
                  Learn more
                </TextLink>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
function CategoriesSection() {
  return (
    <section className="bg-brand-dark py-24 text-white sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="What we source"
          title="Products & equipment across key categories."
          description="RFQ-driven sourcing for specialized products, equipment and recurring supply requirements."
          light
        />
        <div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.slice(0, 7).map((item, index) => (
            <a
              href={`/products/${item.slug}`}
              key={item.slug}
              className={`group relative min-h-[260px] overflow-hidden bg-brand-dark p-6 ${index === 0 ? 'lg:col-span-2 lg:row-span-2 lg:min-h-[525px]' : ''}`}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="mb-2 text-xs text-accent">0{index + 1}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-white/65">
                  View category <ArrowUpRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
function IndustriesSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Industries we serve"
            title="Procurement expertise across industries."
          />
          <TextLink href="/industries">View all industries</TextLink>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 4).map((industry) => (
            <a
              href={`/industries/${industry.slug}`}
              key={industry.slug}
              className="group"
            >
              <div className="relative aspect-[.85] overflow-hidden bg-brand">
                <Image
                  src={industry.image.src}
                  alt={industry.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="flex items-start justify-between border-b border-border py-5">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-brand">
                  {industry.title}
                </h3>
                <ArrowUpRight size={18} className="text-accent" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
function ProcessSection() {
  return (
    <section className="border-y border-border bg-white py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="How we work"
          title="From requirement to delivery."
          description="A clear procurement path designed to keep technical, commercial and delivery details moving together."
        />
        <div className="relative mt-16 grid gap-10 md:grid-cols-3 lg:grid-cols-6">
          {processSteps.map(([number, title, description]) => (
            <div key={number} className="relative">
              <div className="mb-6 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center border border-accent text-sm font-semibold text-brand">
                  {number}
                </span>
                <span className="hidden h-px flex-1 bg-border lg:block" />
              </div>
              <h3 className="text-lg font-semibold text-brand">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
function WhySection() {
  const benefits = [
    {
      title: 'Reliable supplier network',
      body: 'Source through carefully selected supplier and manufacturer relationships.',
      icon: UsersRound,
    },
    {
      title: 'Competitive procurement',
      body: 'Compare suitable sourcing options according to commercial and technical requirements.',
      icon: Zap,
    },
    {
      title: 'Quality focus',
      body: 'Coordinate product and specification verification before delivery.',
      icon: ShieldCheck,
    },
    {
      title: 'End-to-end coordination',
      body: 'Maintain one procurement workflow from requirement through final delivery.',
      icon: Factory,
    },
  ];
  return (
    <section className="bg-brand py-24 text-white sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <SectionHeader
          eyebrow="Why Space Enterprises"
          title="Procurement without the complexity."
          description="The detail matters. We keep the sourcing, supplier and delivery conversation connected."
          light
        />
        <div className="grid gap-10 sm:grid-cols-2">
          {benefits.map(({ title, body, icon: Icon }) => (
            <div key={title} className="border-t border-white/20 pt-5">
              <Icon size={22} strokeWidth={1.2} className="text-accent" />
              <h3 className="mt-7 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
function BrandsSection() {
  return (
    <section className="border-b border-border bg-white py-20">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Brands we source</Eyebrow>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand">
              Products we can source.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Illustrative source categories only. Availability and supplier
            status are confirmed against each requirement.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="border-b border-r border-border p-5 sm:p-7"
            >
              <p className="text-lg font-semibold tracking-[-0.03em] text-brand">
                {brand.name}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">
                {brand.category}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
function ProjectsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Our work"
            title="Selected procurement projects."
          />
          <TextLink href="/projects">View all projects</TextLink>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          {projects.map((project, index) => (
            <a
              href={`/projects/${project.slug}`}
              key={project.slug}
              className={`group ${index === 0 ? 'lg:row-span-2' : ''}`}
            >
              <div
                className={`relative overflow-hidden bg-brand ${index === 0 ? 'aspect-[1.18]' : 'aspect-[1.6]'}`}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-5 border-b border-border py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-accent">
                    {project.industry}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-brand">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                    {project.summary}
                  </p>
                </div>
                <ArrowUpRight size={20} className="mt-1 shrink-0 text-accent" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
