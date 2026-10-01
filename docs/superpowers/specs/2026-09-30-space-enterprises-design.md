# Space Enterprises production website design

## Intent

Create a premium, responsive corporate website for Space Enterprises, a procurement and sourcing company. The site must quickly explain what the company does, what it can source, who it serves, and how to submit a procurement requirement. The primary conversion is Request a Quote.

## Constraints and assumptions

- The repository is empty, so the site will be scaffolded from scratch.
- Use Next.js App Router, React, TypeScript strict mode, Tailwind CSS, Lucide icons, and lightweight Motion where it improves hierarchy or feedback.
- No factual company history, certifications, client identities, addresses, partnerships, or verified metrics were supplied. Such content will be centralized and clearly replaceable; placeholder metrics will be labeled as indicative in code comments/content ownership, not presented as proof.
- No e-commerce, checkout, user accounts, dashboard, or live database is required in the first release.
- RFQ and contact submissions will have route-handler boundaries and validation-ready services, but no external email, database, or file-storage credentials will be assumed.

## Visual direction

The visual thesis is “engineering precision with editorial confidence.” Use dark navy foundations, copper/gold accents, warm off-white surfaces, strong sans-serif typography, fine rules, generous whitespace, and industrial imagery. Avoid SaaS conventions such as gradients, floating glass cards, excessive pills, fake testimonials, and repetitive card grids.

Semantic tokens:

- `brand`: #102331
- `brand-dark`: #08151F
- `accent`: #C99345
- `surface`: #F6F5F1
- `text`: #36434D
- `muted`: #68737D
- `border`: #DDE2E5

The homepage will use a full-bleed industrial hero image with a controlled overlay, a compact trust strip, editorial split sections, a metrics row, six service cards, visual product categories, industry navigation, a process journey, a dark value-proposition section, source-brand markers, selected projects, and a high-contrast conversion CTA. Inner pages share the same page-hero, breadcrumb, section-header, related-content, and CTA language while varying the editorial composition.

## Information architecture

Public routes:

- `/` — homepage and primary story
- `/about` — company, mission, values, process, and placeholder-ready metrics
- `/services` and `/services/[slug]` — service index and detail pages
- `/industries` and `/industries/[slug]` — industry index and detail pages
- `/products` and `/products/[slug]` — procurement category index and detail pages
- `/projects` and `/projects/[slug]` — selected projects and case-study template
- `/brands` — brands Space Enterprises can source, without distributor claims
- `/rfq` — conversion-focused RFQ form
- `/contact` — contact details and inquiry form, with no unverified map/address
- `/privacy-policy` and `/terms` — baseline policy pages

System/API routes:

- `/api/rfq` — server boundary for validated RFQ submissions
- `/api/contact` — server boundary for validated contact submissions
- `/sitemap.xml` and `/robots.txt` — generated SEO files
- `not-found.tsx`, `error.tsx`, and `loading.tsx` — resilient page states

## Architecture

Use a feature-oriented `src/` structure:

```text
src/
  app/
  components/
    layout/
    ui/
    forms/
    shared/
  content/
  config/
  lib/
    seo/
    validation/
    utils/
  repositories/
  services/
  types/
```

Server Components are the default. Client Components are limited to mobile navigation, forms, scroll-reveal/animated counters, and any menu state. Shared primitives include `Container`, `Section`, `SectionHeader`, `Eyebrow`, `Button`, `Logo`, `PageHero`, `Breadcrumb`, `ImageCard`, `CTA`, and form controls.

All visible marketing content lives in typed collections (`services`, `industries`, `productCategories`, `projects`, `brands`, `navigation`, `company`) so content can later move to a CMS or database without hunting through JSX. Dynamic pages resolve content by slug and return `notFound()` when no record exists.

RFQ flow boundaries:

```text
RFQForm -> POST /api/rfq -> validateRFQ -> RFQService
        -> RFQRepository / FileStorage / NotificationService
```

The initial implementation uses safe no-op or in-memory-ready adapters only where needed to keep the route boundary honest. Domain interfaces are separate from infrastructure implementations, with no database calls from UI components.

## Content model

Typed domain models cover `Service`, `Industry`, `ProductCategory`, `Project`, `Brand`, `RFQ`, and `ContactInquiry`. The RFQ model includes a generated reference format such as `SE-RFQ-2026-00001`, status values `NEW | REVIEWING | QUOTED | WON | LOST | CLOSED`, and attachment metadata. The category, product, and industry detail pages are written for RFQ conversion, not browsing or purchasing.

## Interaction and accessibility

- Sticky header transitions from transparent/overlay to solid surface on scroll; desktop navigation exposes active states and keyboard-accessible dropdowns where used.
- Mobile menu is a client component with focusable controls and body-scroll lock.
- Forms include labels, inline errors, loading/success/error states, file-type and size checks, and anti-spam/rate-limit-ready server boundaries.
- Visible focus rings, semantic landmarks, alt text, sufficient contrast, reduced-motion support, and keyboard operation are part of the base implementation.
- Motion is limited to fade/translate reveals, restrained hover states, arrow movement, and a process-line accent; `prefers-reduced-motion` disables nonessential motion.

## SEO and performance

The root layout defines organization and website metadata, font loading, and semantic theme values. Important static and dynamic routes provide unique title/description metadata, canonical URLs, Open Graph text metadata, and breadcrumb context. No fake review or rating schema is used. `next/image` with responsive sizes is used for supplied imagery, and client-side JavaScript is kept to interactive surfaces.

## Verification

Before delivery, verify with:

- TypeScript/build command
- lint command
- route smoke checks for `/`, `/services/strategic-sourcing`, `/industries/oil-gas`, `/products/industrial-equipment`, `/projects/industrial-equipment-procurement`, `/rfq`, and `/contact`
- responsive layout review at 390px and 1440px through the supported local preview flow
- a requirements pass confirming no invented claims, no fake testimonials, and Request a Quote remains the primary CTA
