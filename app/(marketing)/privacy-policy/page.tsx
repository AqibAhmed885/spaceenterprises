import { PageHero } from '../../../src/components/shared/PageHero';
import { Container } from '../../../src/components/layout/Container';
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="A baseline policy page ready to be replaced with the company’s confirmed legal text."
      />
      <Container className="prose prose-slate max-w-3xl py-20">
        <h2>Information we receive</h2>
        <p>
          When you submit an inquiry or quotation request, we receive the
          information you choose to provide so our team can respond to your
          procurement requirement.
        </p>
        <h2>How we use it</h2>
        <p>
          We use submitted information to review requirements, coordinate
          sourcing conversations and respond to requests. Confirmed retention
          and processing details should be added before launch.
        </p>
      </Container>
    </>
  );
}
