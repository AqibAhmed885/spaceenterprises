import { PageHero } from '../../../src/components/shared/PageHero';
import { Container } from '../../../src/components/layout/Container';
export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="A baseline terms page ready for the company’s confirmed legal review."
      />
      <Container className="prose prose-slate max-w-3xl py-20">
        <h2>Use of this website</h2>
        <p>
          This website provides general information about Space Enterprises’
          procurement and sourcing capabilities. Product availability, supplier
          status and delivery conditions are confirmed per requirement.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about these terms, contact the Space Enterprises team
          through the Contact page.
        </p>
      </Container>
    </>
  );
}
