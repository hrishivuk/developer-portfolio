# Hrishikesh Varma — UX Engineering Portfolio

A Next.js App Router portfolio covering product design, UX/interface work and professional frontend development. The current Portfolio v3 uses one visual theme, Space Grotesk, shared CSS tokens, React components and Motion interactions.

## Development and checks

```sh
npm install
npm run dev
npm test
npm run lint
npm run build
npm start
```

Open `http://localhost:3000`. The homepage is `src/app/page.js`; project content is in `src/data/projects.js`. Tests use the Node.js 22 built-in test runner and do not send email.

## Content conventions

- `primaryDiscipline` and `archiveOrder` control archive grouping/order.
- `featuredOrder` selects homepage projects; the legacy `featured` field is not used for selection.
- `status` describes project maturity or context, never editorial progress or inferred business success.
- `summary` is the visible case-study introduction; `oneLiner` supports metadata.
- `cardTags` is an explicit card selection. `technologies` retains the documented toolset.
- `galleryOrder` selects and orders the main gallery by image path. Other screenshots remain available under supporting media.
- Design/implementation/handoff decisions are shown directly; product reasoning remains available in an expandable section. Use `scopeNotes` and `limitations` for relevant boundaries.
- Existing documents and images live in `public/`. Do not invent links, integrations or measured outcomes.

## Contact configuration

Server-only variables: `RESEND_API_KEY`, `CONTACT_EMAIL`, and `RESEND_FROM_EMAIL`. The recipient falls back to `RESEND_FROM_EMAIL` when `CONTACT_EMAIL` is absent. Configure a sender accepted by Resend; the development default sender may be restricted by the provider.

The API returns success only after Resend returns an acceptance ID. Missing configuration or provider failure returns an error and the form offers direct email. Provider acceptance does not guarantee inbox delivery. No secrets or provider error details are returned to the client.

Optional variables: `NEXT_PUBLIC_SITE_URL` for site metadata, and server-only `GITHUB_TOKEN` for repository activity. GitHub activity is labelled as code activity, not shipment or deployment.

No deployment or commit is performed by the verification commands.
