# Portfolio consistency audit

Audit date: 16 October 2026. Source of truth: the current local working tree, including the ongoing UX Engineering changes and supplied FLYH.AI images. This is a local content and source audit, not verification of the deployed website or external products. No commits, pushes or deployments were made.

## Change completed in this turn

Removed first-person openings from all affected contribution/responsibility bullets in `src/data/projects.js`: six FLYH.AI bullets, one CoachCanvas bullet and three Waypoint bullets. Contributions now start with actions such as “Contributed”, “Evaluated”, “Designed” and “Built”. Collaborative scope was retained. About copy, summaries and reflections were not globally rewritten. All active contribution and responsibility arrays were checked for remaining leading “I”.

The findings below remain unresolved intentionally. “Confirmed” means conflicting local text or a demonstrable rendering/data mismatch. “Confirm with owner” means the evidence does not establish which account is correct. Editorial alignment issues are not factual errors.

## Project content and supporting documents

### 1. FindAside: project dates conflict — confirmed

Source: `src/data/projects.js`, FindAside entry.

The project year and top-level timeline say 2025; `caseStudy.timeline` says 2024. The header uses 2025, hiding the conflicting nested value. The frontend CV describes the sports-platform contract at Pixel Forge as May–October 2025.

Needed: confirm the actual dates, and whether 2024 describes a separate phase or project.

### 2. FindAside: prototype and integrated application are mixed — confirmed

The description calls it a “complete frontend prototype”; a highlight says “prepared for backend integration”. The technology list includes JavaScript and Local React State. The case study instead claims TypeScript, Firebase Authentication/OAuth, Firestore and Maps API integration, and describes an authenticated application. The CVs also describe production work and API integrations.

Needed: identify the implementation/version represented by the case study, distinguish mocked interfaces from working integrations, and align the technology list with that scope. The existence of a live URL does not resolve personal implementation scope.

### 3. FindAside: screen-count and ownership scope differ — confirm with owner

The portfolio claims 30+ page-level screens and a complete frontend prototype. `HrishikeshVarma_FE.pdf` describes 13 responsive pages across 14 routes and three user journeys for a sports-management platform. These may count different versions or scopes, but the relationship is not explained.

Needed: confirm whether those CV claims refer to FindAside; distinguish personal contribution, team scope, pages, routes and interface states.

### 4. FlexSave: narrative does not match supplied screens — confirmed

Source: FlexSave entry and `public/images/flexsave/`.

The narrative describes budgeting, savings goals, progress-led goal cards and reward moments. The supplied dashboard visibly presents a coupon wallet, coupons shared, retailer discounts and redeem actions; other screenshot descriptions refer to adding coupons and a social feed.

Needed: confirm whether FlexSave is a coupon-sharing/savings app or a goal-based budgeting concept. Rewrite the problem, solution, contributions, decisions and outcomes around the actual project, or supply the correct screens. Do not infer goal-tracking functionality from the current images.

### 5. FlexSave: unfinished case study appears as unfinished product — confirmed

`workInProgressLabel` says “Case study rebuild in progress”, but cards/header ignore this field and use generic “Work in progress” or “In progress”. The data separately describes a completed five-day high-fidelity prototype.

Needed: distinguish project delivery status from case-study documentation status, and render the intended label consistently.

### 6. Portfolio v3: obsolete theme claims — confirmed

Its description claims four themes (Midnight, Slate, Paper, Forest), its contributions mention a theme context, and its highlights claim persisted theme preference. The current implementation uses a single CSS theme and has no theme-switching UI/context. Its design decisions also describe a single authored dark theme.

Needed: describe the current implementation, or explicitly identify multi-theme functionality as a previous version. Do not restore theme functionality merely to make old copy true.

### 7. Portfolio version and repository documentation disagree — confirmed

`README.md` ends with “portfolioV2.0”, while the project is Portfolio v3. The README says Geist and `app/page.js`; the implementation uses Space Grotesk and `src/app/page.js`. Project data also uses the older “Framer Motion” name while imports use `motion/react`.

Needed: update repository documentation and decide whether to standardise the animation-library name as Motion. Historical naming alone is not a functional fault.

### 8. Waypoint: deployment status is ambiguous — confirm with owner

The data says “Ready for deployment” while providing a Vercel live URL, which the UI labels “Live product”. Nested status says “Portfolio-ready build”.

Needed: distinguish a deployed demo, private application and production launch. Do not infer launch status solely from URL presence.

### 9. CoachCanvas: release language is stronger than the documented maturity — confirm with owner

Portfolio copy includes “Production-ready Android build” and a pipeline “through to distribution”; other text says release preparation. The major report describes a working prototype, further staged deployment, a future pilot and no formal marketing. A working signed APK can coexist with a prototype, but the site does not explain the distinction.

Needed: confirm whether the outcome is an academic MVP, signed release APK, pilot distribution or public release. Use precise wording rather than treating these as equivalent.

### 10. CoachCanvas: documented limitations are missing from the web outcome — confirmed omission

The major report documents a small/local test sample, no consistent time-on-task or formal SUS/NPS measurement, no longitudinal adoption evidence, and deferred features such as drag-and-drop tactics, freehand drawing, drill tutorials and advanced multi-manager governance. The website outcome is broad and does not communicate these boundaries. Its generic “performance views” wording should be distinguished from advanced analytics listed as future work in the report.

Needed: add concise implemented-versus-deferred scope and an appropriate limitation. Do not claim demonstrated adoption or quantified impact without evidence.

### 11. Downloadable CVs: freelance dates conflict — confirmed

`public/resume/Hrishi_CV.pdf` lists freelance work as October 2024–March 2025. `public/resume/Hrishikesh_FS.pdf` lists freelance work as November 2022–August 2024, matching its Experion dates. Concurrent work could be valid, but the two versions give different periods without explanation.

Needed: confirm correct freelance dates and whether it overlapped employment; align CV variants without modifying employer dates by assumption.

### 12. Downloadable CVs: experience totals vary — confirm with owner

The general CV says “nearly 3 years”; the frontend CV says “2+ years”; the full-stack CV says “3 years”. These are not necessarily mutually exclusive, but no shared calculation/date is stated and overlapping work could be double-counted.

Needed: choose a consistent, defensible calculation based on the corrected employment history.

### 13. CV positioning does not fully follow the new homepage — editorial alignment

The site leads with UX Engineer. Available downloads are General CV, Frontend Engineer and Full-Stack Developer; the “General CV” itself leads with Frontend Developer. There is no UX Engineer/Product Design Engineer version. Distinct tailored CVs are valid, but the generic label does not signal its frontend focus.

Needed: decide whether to add a UX Engineering CV and/or rename the general option. Preserve useful tailored versions.

### 14. FLYH.AI: exact personal scope and release status remain unconfirmed — known evidence gap

The entry covers product/MVP discussions, dashboard, storefront, listings, frontend refinement and landing-page communication. Screenshots show onboarding, artwork upload, listing preparation and listing management. They do not establish storefront delivery, landing-page ownership, working AI/marketplace integrations, launch status or outcomes. React/TypeScript/Tailwind were supported by the nearby project configuration, not proof that every component was personally built.

Needed: confirm personal versus team scope and product maturity before adding specific implementation or delivery claims. No fake URLs or metrics should be introduced.

### 15. FLYH.AI and Waypoint: internal caveats appear in public outcome copy — editorial issue

FLYH.AI’s outcome explicitly says screenshots “do not establish public launch status or measured product outcomes”. Waypoint says broader automation “is not claimed as delivered”. These are cautious but read like audit notes rather than concrete portfolio outcomes.

Needed: after factual confirmation, state what was delivered and the actual limitation in natural language; retain unresolved evidence notes in project data. Do not simply delete limitations and imply stronger results.

## Content data versus rendered pages

### 16. Brightspace gallery hides the core finished work — confirmed

Source: `UnifiedProjectShowcase.js`, `screenshots.slice(0, 4)`.

Brightspace has ten screenshots. The page shows two sketches and two navigation strips, hiding finished Resume Builder screens such as `BuildCV1.png` and `Open Resume Tab.png`. This conflicts with the project’s emphasis on Resume Builder design. FindAside similarly hides its group and payment screenshots; FlexSave hides the social-feed image.

Needed: explicitly curate visible gallery items by story importance, or offer access to remaining screenshots within the existing design.

### 17. Case-study layout ignores supplied image presentation hints — confirmed

Only `aspect === "portrait"` is handled; everything else uses a 4:3 frame. Brightspace navigation strips marked `aspect: "banner"` and `presentation: "comparison"` are therefore displayed as generic framed images. `placement` values are not used to organise the gallery.

Needed: either honour relevant hints or simplify the data so it accurately describes the renderer. Preserve the visual system.

### 18. Important decisions are silently truncated — confirmed

Each decision category is sliced to two entries. Examples omitted include Brightspace’s visual-language consistency decision, CoachCanvas’s role-specific home-screen decision, Waypoint’s Groq/API decision and FindAside’s Maps API decision.

Needed: curate explicit selected decisions rather than relying on array position, or adjust the bounded presentation. Not every stored decision needs to be displayed.

### 19. Newly written summaries are usually not visible — confirmed

The hero prefers `oneLiner`; cards prefer `cardImpact`, then the title descriptor, before `summary`; context prefers `solution` or `caseStudy.opportunity`. All active projects have a one-liner. Consequently several summary updates, including FLYH.AI’s fuller context and FlexSave’s explicit prototype-only statement, are stored but not shown in the main page narrative.

Needed: decide which copy is canonical for cards, intro and context, and ensure essential qualifications appear visibly rather than only in fallback fields.

### 20. Platform and timeline fallbacks mislabel information — confirmed

The header renders `project.platform || project.category` under “Platform”. FlexSave therefore shows “UX Design”, and Portfolio v3 shows “Frontend Development”, neither of which is a platform. Timeline uses `project.timeline || project.year` and ignores `caseStudy.timeline`, so FlexSave’s five-day duration is omitted from the header.

Needed: define proper platform/timeline values or meaningful fallbacks.

### 21. Status data exists but is not rendered — confirmed

Top-level `status` and `caseStudy.status` are not displayed. The renderer only checks `workInProgress`. Prototype/release distinctions are therefore missing even when stored in data, and every external website action is labelled “Live product”.

Needed: use a consistent status model and appropriate link labels, distinguishing prototype, demo, release build and live product.

### 22. Case-study section numbering skips sections — confirmed

Section indices are hardcoded: context 01, contribution 02, gallery 03, decisions 04, outcome 05. Waypoint and Portfolio v3 have no screenshot galleries, so their pages jump from 02 to 04.

Needed: number only rendered sections, or use unnumbered section labels consistently.

### 23. Design-only work is stored in engineering fields — confirmed schema mismatch

FlexSave’s `engineeringDecisions` describe handoff/component preparation; Brightspace’s list says no application development occurred and summarises design deliverables. The visible heading is neutral, so the current page does not directly label these as engineering, but the schema encourages future misrepresentation.

Needed: introduce suitable design/handoff/scope fields or a neutral decision structure. Do not invent engineering work.

### 24. Duplicate and legacy data fields can drift — confirmed

`contributions` overrides `responsibilities`, leaving parallel lists for CoachCanvas, Brightspace and FindAside. Other fields such as `showcaseOverview`, `keyFeatures`, team details and custom case-study section titles are not rendered. `featured: true` remains on Waypoint and FlexSave although homepage selection now uses `featuredOrder`; FLYH.AI has a featured order without the old flag.

Needed: document the canonical fields, consolidate only after preserving useful facts, and clearly mark legacy flags. Current featured ordering works; this is a maintenance inconsistency, not a duplicate-card bug.

### 25. Technical tags can hide design skills — confirmed

The case-study header shows only the first eight technologies. CoachCanvas lists Figma tenth, so its design tool is hidden while build tools are visible. Card tags show only the first three technologies, not the new discipline fields. CoachCanvas’s disciplines also say Frontend Engineering despite its mobile/backend scope.

Needed: explicitly curate representative tags and accurate disciplines. This is a presentation balance issue, not evidence that those omitted skills are absent.

## Site behaviour and labels

### 26. “Last shipped” actually means recent repository activity — confirmed

`DeveloperPulse.js` labels GitHub push/repository activity “Last shipped”. `api/github-activity/route.js` does not inspect deployments or releases. Its fallback can say “Recently updated” without a timestamp.

Needed: label it as repository activity, or provide real release/deployment evidence for shipment language. Use a truthful unavailable-data fallback.

### 27. Project telemetry implies dates and verification it does not have — confirmed

`ProjectTelemetry.js` turns the project year into “Updated [year]” when no repository timestamp exists. A project year is not an update date. A configured URL initially displays “Live” before verification; source availability means a URL exists, not that access succeeded. A failed HEAD request can mean a site blocks HEAD, not that the site is offline. Detail buttons remain “Live product” regardless of telemetry.

Needed: separate project year, last code update, link presence and verified availability. Keep labels consistent across cards and detail pages.

### 28. Skills navigation is absent from scroll tracking — confirmed

`navbar.js` includes a Skills/Stack link, but the homepage `navSections` list used by the scroll observer omits `skills`. Clicking can set Skills active temporarily, but scrolling does not consistently track that section. “Stack” also no longer describes the expanded design-and-engineering content as clearly as “Skills”.

Needed: synchronise section definitions; decide whether to rename the label.

### 29. Contact success message can disagree with actual sending — confirmed code path

`api/contact/route.js` returns success when no Resend API key is configured. In development it also returns success after caught sending failures. The result of `resend.emails.send` is not checked for a returned error, so only thrown exceptions are handled. The UI says “Message sent. I'll be in touch soon.” on any successful HTTP response.

Needed: handle configuration and provider errors explicitly; distinguish local test mode from actual accepted sending. This audit did not send an email or establish that production is misconfigured.

### 30. Accessibility claims need more qualification — confirmed implementation gaps, not a full compliance audit

Portfolio copy uses “accessible” and “WCAG-conscious”. The résumé dialog sets `aria-modal` but has no explicit focus trap, initial focus or focus restoration. The mobile navigation does not explicitly handle Escape/focus containment. Homepage project links apply `focus-visible:outline-none`, suppressing the global keyboard focus outline without an equivalent explicit focus treatment.

Needed: audit and fix keyboard behaviour before implying broad accessibility compliance. The presence of these gaps does not mean every accessibility feature is broken.

### 31. SEO modification dates are build dates, not content dates — confirmed

`sitemap.js` assigns `new Date()` to every route on generation. This represents build/generation time rather than a tracked content modification date. Metadata/sitemap honour `NEXT_PUBLIC_SITE_URL`, while `public/robots.txt` hardcodes the production domain. The latter only becomes a mismatch when the environment URL changes.

Needed: use real content timestamps or omit unsupported dates; decide whether robots/domain settings should share one source.

### 32. Small naming and formatting inconsistencies — editorial

CV, resume and résumé are used interchangeably; organisation/organize and colour/color mix British and American spelling. FLYH.AI project branding differs from “Flyh”/“flyh.ai” within supplied screenshots, which may be intentional. New project fields mix quoted and unquoted keys and uneven formatting. No branding or formatting issue should be treated as evidence of incorrect project work.

Needed: choose a content style guide and normalise source formatting without changing screenshots or proper brand names unnecessarily.

## Boundaries and checks

The MSc completion claim is consistent with the frontend/full-stack CVs (graduated March 2026); a 2025 academic project is not inherently inconsistent with that graduation date. Tailored CV titles, different role descriptions across projects and missing public source URLs are not automatically errors.

Existing media/document paths were checked in the preceding implementation work. This audit examined local source, all active project data, supplied FLYH images, the FlexSave dashboard, extracted text from all three CVs and both CoachCanvas documents plus the Brightspace document. It did not independently verify every historical claim, external URL, PDF chart, responsive state or deployed behaviour. Brightspace research and Resume Builder ownership are supported by its PDF; no unsupported claim that its research was invented is being made.

Suggested next-step scope: resolve factual items 1–15 with owner input, then fix rendering/label issues 16–32 while preserving visual identity, assets and current functionality. Keep uncertain facts explicit rather than guessing. Only the contribution wording was changed in this turn.
