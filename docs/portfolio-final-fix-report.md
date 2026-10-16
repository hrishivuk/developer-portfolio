# Portfolio accuracy and UX Engineering fix report

Completed locally on 16 October 2026. This report covers the final fix request, not a fresh redesign. Earlier local UX Engineering changes were preserved. No commit, push or deployment was performed.

## CV exclusion

All three PDFs under `public/resume/` are byte-for-byte unchanged. Their SHA-256 checksums match the pre-change values. CV labels, employment histories and experience totals were not rewritten. The résumé chooser component received keyboard accessibility fixes only. Replacement CVs and their factual reconciliation are deferred as requested.

The website About paragraph now uses the owner's newly supplied **2025 MSc completion year**. The older PDF graduation wording remains untouched; completion and graduation dates should be reconciled when the replacement CVs arrive, rather than guessed here.

## Exact files changed in this final fix pass

Existing files changed:

1. `README.md` — current architecture, content fields, verification and email configuration documentation.
2. `package.json` — added the dependency-free Node test command.
3. `src/data/projects.js` — corrected project content/statuses and explicit media/tag curation.
4. `src/app/page.js` — shared navigation, contact feedback, reduced-motion scrolling, keyboard focus, status strips and owner-confirmed education year.
5. `src/app/projects/page.js` — explicit card tags and accurate project status strips.
6. `src/app/projects/[id]/UnifiedProjectShowcase.js` — summaries, complete contributions, status/role context, curated galleries and supporting evidence, decisions and sequential section numbers.
7. `src/app/api/contact/route.js` — strict request parsing and provider-backed acceptance handling.
8. `src/app/api/github-activity/route.js` — honest missing-activity fallbacks.
9. `src/app/api/project-status/route.js` — repository activity only; removed URL-presence/HEAD-check implications of deployment status.
10. `src/app/components/DeveloperPulse.js` — repository-activity terminology and unavailable-data fallback.
11. `src/app/components/ProjectTelemetry.js` — explicit project status, link labels and timestamp-backed code-update dates.
12. `src/app/components/ProjectTransitionLink.js` — normal keyboard navigation and timer cleanup.
13. `src/app/components/ResumeDownloadButton.js` — dialog focus management, Escape and focus restoration.
14. `src/app/components/navbar.js` — shared section definitions, Skills label/tracking alignment and mobile dialog keyboard behaviour.

New files:

15. `src/data/navigation.js` — one source for navigation targets and scroll tracking.
16. `src/lib/contact.js` — injectable, testable validation and provider-acceptance logic.
17. `src/lib/projectPresentation.js` — evidence-preserving gallery/contribution/decision selection and section numbering.
18. `src/app/components/useModalFocus.js` — reusable modal focus containment, background inertness, Escape and restoration.
19. `tests/contact.test.mjs` — provider acceptance, failure, configuration and validation regression checks.
20. `tests/project-content.test.mjs` — ordering, galleries, asset preservation, contribution style and scope regression checks.
21. `docs/portfolio-final-fix-report.md` — this report.

The previous changes to `SkillsStack.js`, `layout.js`, project metadata and the original audit report remain in the working tree; those files were not rewritten in this pass. Existing public images, PDFs, fonts, CSS design tokens and animation styling were not modified.

## Factual corrections and evidence

| Area | Correction | Evidence and confidence |
| --- | --- | --- |
| FindAside timeline | Unified project/case-study timeline to 2025; identified Pixel Forge contract context without claiming continuous work over the whole contract. | Explicit owner confirmation in the final prompt. |
| FindAside frontend scope | Describes contribution to React interfaces for game, player, team and payment-related workflows, plus the Next.js/Tailwind CSS v4 marketing website. | Explicit owner-confirmed scope; existing screenshots support the interface areas. |
| FindAside integrations | Removed personal-delivery claims for Firebase Authentication/OAuth, Firestore and Maps. Node.js/Express and Stripe remain exposure, not completed integration ownership. | No matching implementation codebase was found in the inspected Developer workspace; the owner explicitly restricted these claims. This is a conservative scope correction, not proof those technologies were never used. |
| FindAside counts | Removed 30+ screen claims and did not substitute the conflicting CV count. | Counts could not be reconciled from available local implementation evidence. |
| FlexSave product story | Rewritten as “FlexSave – Coupon & Savings Experience”: discovery, organisation, coupon details, add-coupon/scanning concept, sharing and social screens. Removed financial-goal/milestone claims. | Owner clarification and direct inspection of the supplied coupon wallet, add-coupon overlay, offer-detail and social-feed images. |
| FlexSave maturity | “High-fidelity prototype”; five-day Figma sprint, not a working coupon service. Removed the public development-in-progress badge and invented outcome implications. | Owner clarification, existing sprint documentation and visible prototype content. Scanning/redemption are described as interface concepts, not functioning integrations. |
| Portfolio v3 | Removed selectable four-theme, theme-context and persisted-preference claims. Updated Motion naming and README's stale version/font/path descriptions. | Current implementation has one CSS theme, Space Grotesk, `motion/react` and `src/app/page.js`. No full WCAG conformance claim is made. |
| Waypoint deployment | Retained its existing URL, removed “Ready for deployment”, and labelled it “Deployed prototype” with “View application”. Replaced stale public-demo wording with account-based private workspace wording. | Direct GET of `https://waypoint-career-intelligence.vercel.app/` returned HTTP 200. Its rendered page offers sign-in/account creation, profile evidence, job analysis, CV selection and reusable application information. Nearby Waypoint README documents the account model and supported OpenAI/Groq provider adapters. |
| Waypoint outcome | States documented workspace functionality and deployment, with human review and no adoption/hiring-result claims. | Public entry-point content and local documentation. “Deployed prototype” is a conservative classification; authenticated features were not exercised in this audit. |
| CoachCanvas | Describes a two-person MSc capstone, functional mobile prototype and Android release build. Preserves research, role-aware flows, Firebase/React Native implementation and adds relevant limitations. | Explicit owner clarification plus the previously reviewed project report. No public app-store publication, organisational rollout or measured adoption is asserted. |
| Brightspace | Status is “High-fidelity prototype”; actual research and Resume Builder ownership retained. Finished Build CV/template-selection and Resume navigation screens now lead the gallery. | Direct visual inspection of `BuildCV1.png` and `Open Resume Tab.png`; existing case-study PDF supports team scope, testing and Resume ownership. No new editing screen was invented. |
| FLYH.AI | Preserved contribution scope and all five supplied images. Uses “Design and frontend exploration” rather than inferring launch/integration status. Outcome describes the visible creator workflow and bounded contribution. | Supplied descriptions/screenshots and previously inspected frontend configuration. Exact personal integration ownership remains unverified. |
| Education | Website states MSc completed in 2025, retaining First Class Honours. | Owner's current instruction. PDF changes explicitly deferred. |

## Content-system inconsistencies resolved

- The complete concise summary now appears in the case-study header instead of being silently bypassed by a one-liner. One-liners remain useful for metadata.
- Complete role and team information is rendered, including CoachCanvas's teammate and Brightspace's team context.
- Platform labels describe a platform/concept rather than falling back to “UX Design”. Timelines can use the case-study duration, with FlexSave explicitly showing the five-day sprint.
- Project status is shown consistently on cards and detail pages. Editorial revision flags no longer imply development status.
- External URLs are labelled “View website” or “View application”, not universally “Live product”. Link presence is not presented as proof of production status.
- Brightspace has a six-image main sequence: finished template selection, Resume navigation, Resume sketch, Growth sketch and before/after navigation. Its four other original screenshots remain in an expandable supporting gallery.
- All other projects retain their original screenshot paths; FLYH.AI keeps its hero and four gallery images. FindAside's group/payment screenshots and FlexSave's social screen are no longer cut off by a four-image limit.
- Banner images use a banner aspect ratio instead of generic 4:3 presentation. Existing frames, borders, typography and contain-based screenshot treatment are reused.
- Design and implementation decisions are displayed without arbitrary first-two slicing. Product reasoning remains accessible in an expandable section. Exact duplicates are removed.
- Design-only project information was moved from misleading engineering fields to handoff/scope information. No engineering work was fabricated.
- Contributions remain direct action statements, without leading “I”. Empty contribution groups are filtered out.
- Outcomes now support explicit scope and limitations alongside reflections.
- Section numbering follows sections actually rendered, fixing gaps on projects without galleries.
- Explicit card tags balance design/engineering. CoachCanvas's visible technology selection includes Figma while retaining the full stored toolset.

## Functional and accessibility fixes

### Contact form

- Parses malformed JSON as a 400 response.
- Validates required string fields, whitespace, email format and sensible field lengths.
- Returns 503 for missing provider/recipient configuration.
- Handles provider-returned errors, thrown errors and missing acceptance IDs as failures.
- Returns 200 only when Resend returns an acceptance ID, with `accepted: true`.
- Client success requires both an OK response and `accepted: true`.
- Success wording is “Message submitted successfully.” It does not claim inbox delivery.
- Failure preserves entered content and provides the direct-email link.
- Feedback uses status/alert semantics and receives focus after submission.
- Uses a plain-text email payload, avoiding HTML interpretation of user input.
- Does not expose secrets/provider error details or log submitted personal content.
- No provider or paid dependency was added; Resend was already installed.

### Navigation, keyboard and motion

- Homepage tracking and navbar now share definitions including Skills.
- Section navigation updates the hash, scrolls appropriately and moves focus to the target.
- Reduced-motion preference disables smooth section scrolling; the existing cursor/Motion reduced-motion behaviour remains.
- Mobile navigation supports Escape, trapped Tab navigation, background inertness and focus restoration. It closes when returning to desktop layout.
- Résumé dialog supports initial focus, wrapped Tab/Shift+Tab, Escape and return focus.
- Keyboard activation of a project link follows normal navigation instead of entering the pointer transition overlay; transition timers are cleaned up.
- Project cards have visible accent-coloured keyboard focus. Contact fields retain the global focus treatment rather than suppressing it.
- No assertion of complete WCAG compliance is made.

### Activity labels

- “Last shipped” became “Repository activity”.
- No timestamp means “Activity unavailable”, not “Recently updated”.
- “Last code update” appears only for a valid repository timestamp; the project year is no longer presented as an update date.
- Website/source labels mean a configured link exists, not a verified release or repository-access guarantee.
- Project-status API no longer uses HEAD request success/failure as a proxy for deployment maturity.

## Verification

- `npm test`: **11 tests passed**. Covers contact validation/configuration/provider acceptance and failure, secret-safe responses, project order, galleries, assets, contribution style, decision deduplication and scope regressions.
- `npm run lint`: **passed, no ESLint errors or warnings**. The existing Next.js lint command prints its deprecation notice.
- `npm run build`: **passed**, generating all seven project detail routes and 17 build pages.
- `git diff --check`: **passed**.
- Production preview HTTP checks: homepage, archive and all seven case studies returned **200**; rendered status text was checked.
- All referenced project image URLs returned successfully; Next Image optimisation for FLYH.AI and Brightspace representative images returned **200**.
- All three résumé downloads returned **200** and their PDF checksums were unchanged.
- Gallery data tests confirm every original screenshot is either in the main gallery or accessible supporting media; document links were compared with the pre-change snapshot.
- Browser checks: desktop homepage/Skills styling, hash navigation and active Skills underline; résumé focus wrap/Escape/restoration; mobile 390px homepage/menu and keyboard activation of Skills; Brightspace mobile gallery; FLYH.AI desktop header/gallery.
- Browser contact check with sending disabled: form displayed honest failure, retained entered text and exposed direct-email fallback.
- HTTP contact checks with sending disabled: valid submission returned **503**, malformed JSON **400**.
- Provider-success and error paths were tested with an injected provider, without sending real messages. The final feedback-focus addition and field-focus cleanup passed the final build/lint; the earlier browser failure check established the visible error path.

## Remaining factual questions and limits

1. Replacement CVs remain entirely deferred. Older PDF dates/titles may still differ from the owner-confirmed website account.
2. FindAside's precise route/screen count and exact personal backend/Stripe task scope remain unverified. Numerical and integration-ownership claims were removed rather than guessed.
3. FLYH.AI's public release status, exact individually implemented components, functioning marketplace integrations and measured outcomes still need owner evidence.
4. Waypoint's public entry point was verified, but signup/authenticated workflows, provider billing and user adoption were not tested. No account was created.
5. CoachCanvas pilot distribution/app-store publication and long-term outcomes were not verified; the website does not claim them.
6. No real email was sent. The local preview deliberately disabled email delivery. Production acceptance/deliverability depends on actual Resend configuration and its approved sender.
7. Browser verification sampled desktop and a 390px mobile viewport, not every browser/device. This is not a complete accessibility certification. Existing Vercel analytics produced a browser-blocked local script warning; it was not changed.
8. The earlier 32-item audit also noted optional maintenance items such as sitemap generation dates and conditional robots-domain alignment. These were not part of the enumerated final fix scope and were not changed. Legacy stored fields remain where removing them would discard useful historical/detail information; README now documents the canonical rendering fields.

Visual identity is preserved: no palette, typography, CSS token, ambient-effect or screenshot redesign. Structural changes are limited to content hierarchy, evidence access, honest status/feedback and keyboard behaviour.
