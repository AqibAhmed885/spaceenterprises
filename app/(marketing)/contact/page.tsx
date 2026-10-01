import type { Metadata } from 'next';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { PageHero } from '../../../src/components/shared/PageHero';
import { Container } from '../../../src/components/layout/Container';
import { ContactForm } from '../../../src/components/forms/ContactForm';
import { company } from '../../../src/content/company';
export const metadata: Metadata = {
  title: 'Contact Space Enterprises',
  description:
    'Talk to Space Enterprises about a procurement requirement or specialized sourcing need.',
};
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let’s talk"
        title="Let’s talk procurement."
        description="Have a procurement requirement or need help sourcing a specialized product? Get in touch with our team."
      />
      <main>
        <Container className="grid gap-16 py-20 sm:py-28 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="max-w-sm text-lg leading-8 text-brand">
              A clear first conversation is often the fastest way to shape a
              sourcing path.
            </p>
            <div className="mt-12 grid gap-7 text-sm">
              <ContactItem icon={Phone} label="Phone" value={company.phone} />
              <ContactItem icon={Mail} label="Email" value={company.email} />
              <ContactItem
                icon={MessageCircle}
                label="WhatsApp"
                value={company.whatsapp}
              />
            </div>
            <p className="mt-10 border-t border-border pt-6 text-sm leading-6 text-muted">
              {company.address}
              <br />
              {company.hours}
            </p>
          </div>
          <div className="border border-border bg-white p-5 sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </main>
    </>
  );
}
function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <Icon size={20} className="mt-0.5 text-accent" />
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-muted">
          {label}
        </p>
        <p className="mt-1 text-base text-brand">{value}</p>
      </div>
    </div>
  );
}
