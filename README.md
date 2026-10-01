# Space Enterprises

Production-ready marketing site for Space Enterprises, a procurement and sourcing company.

## Local development

```bash
npm install
npm run dev
```

The public content is centralized in `src/content`. RFQ and contact routes are validation-ready and currently use local adapters until a database, notification service, and file storage are connected.

## Verification

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```
