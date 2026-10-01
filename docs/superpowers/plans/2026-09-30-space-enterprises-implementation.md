# Space Enterprises Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a premium, responsive, SEO-ready Space Enterprises procurement website with data-driven marketing routes and RFQ/contact conversion flows.

**Architecture:** Scaffold a Next.js App Router project with strict TypeScript, centralized content/config, reusable server-rendered UI primitives, and narrowly scoped client components for navigation and forms. Keep RFQ/contact submission boundaries separate from UI through validation, service, repository, storage, and notification interfaces; use local adapters until external infrastructure is supplied.

**Tech Stack:** Next.js App Router, React, TypeScript strict mode, Tailwind CSS, Lucide React, Motion, Zod, React Hook Form, ESLint, Prettier.

**Spec:** `docs/superpowers/specs/2026-09-30-space-enterprises-design.md`

## Global Constraints

- The primary conversion is Request a Quote.
- Use semantic tokens: `brand #102331`, `brand-dark #08151F`, `accent #C99345`, `surface #F6F5F1`, `text #36434D`, `muted #68737D`, `border #DDE2E5`.
- Server Components are the default; client components are limited to mobile navigation, forms, and interactive motion/state.
- Do not invent company history, certifications, client identities, addresses, partnerships, verified metrics, testimonials, or distributor claims.
- Do not add e-commerce, checkout, user accounts, dashboard, or live database functionality.
- Use `next/image` with responsive sizes and respect `prefers-reduced-motion`.
- RFQ attachments accept PDF, DOC, DOCX, XLS, XLSX, CSV, JPG, PNG with server-side validation boundaries.

## Review Focus

- Unknown dynamic slugs must return a real not-found response; test in Task 5.
- Oversized or unsupported RFQ files must be rejected server-side even if client validation is bypassed; test in Task 6.
- Empty and malformed contact/RFQ payloads must return structured 4xx responses; test in Task 6.
- Mobile navigation must remain keyboard usable and close cleanly after route selection; test in Task 4.
- Reduced-motion users must not receive essential content only through animation; test in Task 4.

## File Map

- `app/` or `src/app/`: routes, layout, metadata, API handlers, sitemap, robots, errors.
- `src/content/`: typed services, industries, products, projects, brands, navigation, company copy.
- `src/types/`: domain and form types.
- `src/components/layout/`: header, footer, container, mobile navigation.
- `src/components/shared/`: page hero, breadcrumbs, section headers, cards, CTA, process journey.
- `src/components/forms/`: RFQ and contact form UI plus field primitives.
- `src/lib/`: tokens, metadata helpers, validation, URL and slug utilities.
- `src/services/`, `src/repositories/`: RFQ/contact application boundaries and local adapters.
- `public/`: selected industrial imagery and static assets.

### Task 1: Scaffold the Next.js project and shared theme

**Files:** Create package/config files, `src/app/layout.tsx`, `src/app/globals.css`, `src/lib/site-config.ts`, `src/components/layout/Container.tsx`, `src/components/shared/Button.tsx`, `src/components/shared/Logo.tsx`.

**Interfaces:** Produces `SiteConfig`, semantic CSS variables, `Container` and `Button` primitives consumed by all later tasks.

- [ ] Initialize the project with App Router, strict TypeScript, Tailwind, ESLint, and the required icon/form/validation/motion dependencies.
- [ ] Define the semantic color/font/spacing tokens and global focus/reduced-motion rules in `globals.css`.
- [ ] Add site metadata config with canonical base URL fallback and brand name.
- [ ] Verify `npm run build` and `npm run lint` succeed on the scaffold.

### Task 2: Add typed content and domain models

**Files:** Create `src/types/domain.ts`, `src/content/company.ts`, `src/content/services.ts`, `src/content/industries.ts`, `src/content/products.ts`, `src/content/projects.ts`, `src/content/brands.ts`, `src/content/navigation.ts`, `src/lib/content.ts`.

**Interfaces:** Exports `Service`, `Industry`, `ProductCategory`, `Project`, `Brand`, `CompanyProfile`, `getBySlug<T>()`, and the typed content arrays used by route pages.

- [ ] Define strict domain types including project metadata, related slugs, image metadata, and RFQ status enums.
- [ ] Populate the exact brief-provided service/category/industry/process copy and professional replaceable placeholder copy where facts are missing.
- [ ] Include at least the required slugs: `strategic-sourcing`, `procurement-management`, `oil-gas`, `industrial-equipment`, and `industrial-equipment-procurement`.
- [ ] Add unit tests for slug lookup success and missing lookup returning `undefined`.

### Task 3: Build the shared marketing shell

**Files:** Create/modify `src/components/layout/Header.tsx`, `MobileMenu.tsx`, `Footer.tsx`, `src/components/shared/PageHero.tsx`, `Breadcrumb.tsx`, `SectionHeader.tsx`, `CTA.tsx`, `ImageCard.tsx`, `src/app/layout.tsx`.

**Interfaces:** Consumes Task 1 tokens and Task 2 navigation/content; produces accessible site-wide layout and metadata helpers.

- [ ] Implement desktop navigation, active states, Request a Quote CTA, and a client mobile menu with focusable controls and body-scroll lock.
- [ ] Implement footer columns from typed navigation/content and dynamic current year.
- [ ] Add root metadata, organization/website JSON-LD, font loading, and viewport/theme configuration.
- [ ] Add shared breadcrumbs/page heroes/section headers with semantic headings.
- [ ] Verify the root route renders without hydration or accessibility warnings.

### Task 4: Build the homepage experience

**Files:** Create `src/app/page.tsx`, `src/components/home/*`, `public/images/*`.

**Interfaces:** Consumes shared shell, typed content, and image helpers; produces the complete homepage described in the brief.

- [ ] Add the hero, trust bar, about preview, indicative metrics, services, product categories, industries, process, why-us, brands, projects, and final CTA sections.
- [ ] Use responsive `next/image` imagery with meaningful alt text and industrial subject matter.
- [ ] Add restrained Motion reveal/hover behavior with reduced-motion fallback.
- [ ] Verify the homepage at 390px and 1440px through the supported local preview, checking the primary CTA and section order.

### Task 5: Add index/detail marketing routes and SEO

**Files:** Create route pages under `src/app/(marketing)/about`, `services`, `industries`, `products`, `projects`, `brands`, `privacy-policy`, `terms`; create `src/lib/seo.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/not-found.tsx`, `src/app/error.tsx`, `src/app/loading.tsx`.

**Interfaces:** Consumes typed collections and shared shell; produces all public content routes and `generateMetadata()` for dynamic pages.

- [ ] Implement index routes with editorial grids and internal links.
- [ ] Implement dynamic service, industry, product, and project detail templates with `generateStaticParams`, `generateMetadata`, breadcrumbs, related content, and RFQ CTA.
- [ ] Implement About and Brands pages without unsupported claims; preserve “Brands We Source” wording.
- [ ] Add route-level loading/error/not-found states and generated sitemap/robots.
- [ ] Smoke-test all required routes and verify an unknown slug renders the not-found response.

### Task 6: Implement RFQ/contact forms and server boundaries

**Files:** Create `src/lib/validation/rfq.ts`, `contact.ts`, `src/components/forms/RFQForm.tsx`, `ContactForm.tsx`, `FileUpload.tsx`, `src/services/rfq-service.ts`, `contact-service.ts`, `src/repositories/*`, `src/app/rfq/page.tsx`, `contact/page.tsx`, `src/app/api/rfq/route.ts`, `contact/route.ts`.

**Interfaces:** Consumes Task 2 domain types and Task 3 shared UI; produces `validateRFQ`, `validateContactInquiry`, `createRFQ`, `createContactInquiry`, and structured API responses.

- [ ] Write Zod schemas for required fields, attachment extension/MIME/size limits, and safe normalized values.
- [ ] Implement accessible React Hook Form UIs with loading, success, error, inline validation, and file-selection states.
- [ ] Implement repository/service abstractions with local no-op adapters and generated `SE-RFQ-YYYY-#####` references; do not persist or notify externally without credentials.
- [ ] Implement POST route handlers returning `201` with reference data, `400` for malformed payloads, `413` for oversized files, and `415` for unsupported attachments.
- [ ] Add tests covering valid payloads, missing required fields, invalid file type/size, and structured API errors.

### Task 7: Final hardening and production verification

**Files:** Modify any affected source files; add `README.md`, `.env.example`, `prettier.config.mjs`, and route smoke-test tooling if needed.

**Interfaces:** Consumes all previous tasks; produces a documented, buildable, linted, production-ready project.

- [ ] Add security-minded headers/config, environment placeholders, and clear local setup instructions.
- [ ] Run formatting, lint, typecheck/build, unit tests, and route smoke checks from a clean install state.
- [ ] Recheck responsive behavior, keyboard focus, reduced-motion behavior, image loading, and the no-invented-claims requirement.
- [ ] Fix only verified issues found in the final pass, then rerun the complete verification suite.

## Verification Commands

```bash
npm run format:check
npm run lint
npm run typecheck
npm test -- --runInBand
npm run build
```

If the chosen starter does not provide a format check or test script, add the smallest equivalent script during Task 1 and document the command in `README.md`.
