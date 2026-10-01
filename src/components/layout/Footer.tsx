import Link from 'next/link';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { company } from '../../content/company';
import { navigation } from '../../content/navigation';
import { Container } from './Container';
import { Logo } from '../shared/Logo';

export function Footer() {
  return (
    <footer className="bg-brand-dark py-16 text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-7 max-w-xs text-sm leading-7 text-white/60">
              Reliable procurement, sourcing and supply solutions for
              organizations that need dependable coordination.
            </p>
            <Link
              href="/rfq"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Start a procurement conversation <ArrowUpRight size={16} />
            </Link>
          </div>
          <FooterColumn title="Company" items={navigation.slice(0, 3)} />
          <FooterColumn
            title="Services"
            items={[
              {
                label: 'Strategic Sourcing',
                href: '/services/strategic-sourcing',
              },
              {
                label: 'Procurement Management',
                href: '/services/procurement-management',
              },
              {
                label: 'Quality Assurance',
                href: '/services/quality-assurance',
              },
              {
                label: 'Logistics & Delivery',
                href: '/services/logistics-delivery',
              },
            ]}
          />
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <div className="space-y-4 text-sm text-white/70">
              <p className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                {company.phone}
              </p>
              <p className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                {company.email}
              </p>
              <p className="leading-6 text-white/50">
                {company.address}
                <br />
                {company.hours}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Space Enterprises. All rights reserved.
          </span>
          <span>Procurement · Sourcing · Supply</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
        {title}
      </p>
      <div className="grid gap-3 text-sm text-white/70">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
