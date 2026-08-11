# Technical Editorial Minimalism redesign plan

## Approved direction

- **Style:** Technical Editorial Minimalism
- **Primary accent:** `#FF6D3B`
- **Personality:** precise, warm, technical and professional
- **Audience:** recruiters, frontend developers and product engineering teams
- **Primary proof:** shipped projects and implementation decisions
- **Supporting proof:** UX research and product design capability

## Working agreement

- Complete phases in order and review each approval gate.
- Treat `DESIGN_DIRECTION.md` as the source of truth.
- Keep orange below 10 percent of a normal viewport.
- Do not add a second accent colour.
- Complete static hierarchy before motion.
- Keep visual order, DOM order and keyboard order identical.
- Remove obsolete code as its replacement is approved.
- Do not run builds or development servers unless explicitly requested.

## Phase 0: Baseline audit

### Tasks

- [ ] Capture the current homepage at 375px, 768px and 1440px.
- [ ] Capture the project archive and one representative case study.
- [x] Inventory colour tokens, radii, shadows, borders and typography styles.
- [x] Inventory particles, glow, custom cursor and continuous animation.
- [x] Map shared components and page-specific duplicates.
- [x] Identify unused hero, theme and motion code.
- [x] Record DOM-order, keyboard, contrast and overflow issues.
- [ ] Confirm the final featured-project order and available links.

### Deliverable

A short audit grouped into keep, revise and remove decisions.

### Exit gate

No implementation begins until the audit identifies every legacy visual language
that conflicts with Technical Editorial Minimalism.

## Phase 1: Design foundations

### Tasks

- [x] Implement canvas, surface, text, border and orange accent tokens.
- [x] Define hover, active, focus and on-accent combinations.
- [ ] Check `#FF6D3B` combinations against WCAG contrast requirements.
- [x] Define the Space Grotesk and monospace type roles.
- [x] Create a restrained responsive type scale.
- [x] Implement the 8px spacing system.
- [x] Limit radii to 4px, 6px and 8px.
- [x] Define 1px border and focus-ring treatments.
- [x] Define 4-column mobile and 12-column desktop layout rules.
- [ ] Create a private foundations fixture for visual review.
- [x] Remove conflicting theme and decoration tokens.

### Deliverable

A foundations fixture showing typography, colour, buttons, links, fields,
metadata, icons, borders and surfaces in every interaction state.

### Exit gate

Approve the fixture before any page component is redesigned.

## Phase 2: Global shell and primitives

### Tasks

- [x] Rebuild the navigation with rectangular geometry.
- [x] Use orange only for the active route and primary contact action.
- [x] Standardize primary, secondary, text and icon actions.
- [x] Standardize section labels, rules and page containers.
- [x] Rebuild footer and contact links using the same system.
- [x] Simplify the background to one faint texture.
- [x] Remove particles, floating decoration and cursor-following glow.
- [x] Remove the custom cursor unless the audit proves a usability benefit.
- [x] Correct visual, DOM and keyboard section order.
- [ ] Check the shell at mobile, tablet and desktop widths.

### Deliverable

One consistent shell shared by the homepage, archive and case-study routes.

### Exit gate

Navigation, controls and page framing must already feel like one product before
homepage composition begins.

## Phase 3: Homepage static redesign

### Hero

- [x] Establish the developer role in the first line.
- [x] Keep the hero below a full viewport so work remains discoverable.
- [x] Use one primary action and two quiet supporting actions.
- [x] Add compact evidence such as experience, location and primary stack.
- [x] Use orange as a signal, not as a large decorative headline fill.

### Selected work

- [x] Build an editorial project layout with stable desktop alignment.
- [x] Show project number, year, role and technical outcome.
- [x] Show the primary stack without excessive badges.
- [x] Give readable project media more area than metadata.
- [x] Expose live, source and case-study availability clearly.
- [x] Avoid primary horizontal scrolling on desktop.

### Core stack

- [x] Replace the current skills widget with a compact technical index.
- [x] Show six core technologies only.
- [x] Use small icons as supporting elements.
- [x] Describe how each technology is applied.
- [x] Avoid proficiency bars, scores, clouds and launcher-style tiles.

### About and contact

- [x] Reduce About to one focused multidisciplinary statement.
- [x] Keep experience and education in the CV.
- [x] Create an unframed closing contact section.
- [x] Make email, GitHub, LinkedIn and CV actions immediately recognisable.

### Deliverable

A complete static homepage with no non-essential animation.

### Exit gate

At 375px and 1440px, a reviewer must understand role, strongest work, core stack
and contact path within two minutes.

## Phase 4: Archive and case-study system

### Tasks

- [x] Apply the same typography, rules and geometry to the archive.
- [x] Confirm filters are unnecessary for the current six-project archive.
- [x] Standardize project hero metadata and action priority.
- [x] Standardize challenge, contribution, decisions and outcome sections.
- [x] Add architecture and system evidence to engineering-led projects.
- [x] Keep UX evidence concise and relevant to implementation decisions.
- [x] Standardize screenshot ratios, captions and backgrounds.
- [x] Define one restrained orange media-annotation treatment.
- [x] Verify every live, source, report and prototype link from project data.

### Deliverable

One reusable project-story system demonstrated on an engineering-led project and
a UX-led project.

### Exit gate

Both examples must feel related without hiding their different disciplines.

## Phase 5: Motion and interaction

### Tasks

- [x] Choose one signature homepage interaction.
- [x] Add one-time reveals using opacity and no more than 12px movement.
- [x] Add consistent project-media hover feedback.
- [x] Keep hover transitions between 160ms and 240ms.
- [x] Simplify route transitions.
- [x] Remove all rendered motion without an orientation or feedback purpose.
- [x] Implement complete reduced-motion behaviour.
- [x] Check that orange focus states remain visible during motion.

### Deliverable

A motion specification and implementation using a small shared set of timings
and easing curves.

### Exit gate

The site must remain complete and understandable with motion disabled.

## Phase 6: Quality assurance

### Responsive

- [ ] Review 375px, 768px, 1440px and wide desktop.
- [ ] Check fixed-format elements for layout shift.
- [ ] Remove horizontal overflow and text clipping.
- [ ] Confirm screenshots remain readable at every breakpoint.

### Accessibility

- [x] Review keyboard order and visible focus in code.
- [x] Check heading hierarchy and semantic landmarks in code.
- [x] Check text, border and orange interaction contrast.
- [x] Verify interactive controls use at least 44px targets.
- [x] Verify reduced motion and screen-reader labels in code.

### Performance and code quality

- [x] Review image sizing and loading behaviour in code.
- [x] Review client-component and animation-library usage.
- [x] Remove dead components, homepage experiments, styles, assets and dependencies.
- [x] Confirm metadata and expand sitemap coverage.

### Exit gate

No known accessibility, responsive or performance regression remains.

## Phase 7: Professional review and release

- [ ] Compare every route against `DESIGN_DIRECTION.md`.
- [ ] Check that orange usage stays within the accent budget.
- [ ] Check that no legacy glass, pill or cyberpunk pattern remains.
- [ ] Proofread positioning and project summaries.
- [ ] Confirm CV, email, GitHub and LinkedIn actions.
- [ ] Complete final desktop and mobile visual review.
- [ ] Prepare a focused redesign commit and review summary.

### Final acceptance criteria

- The role is obvious in the first viewport.
- The strongest development work appears before biography.
- Every component belongs to one visual system.
- The interface feels technical without resembling a fake terminal.
- Orange creates energy and orientation without dominating the page.
- The result feels professional, stable and intentional rather than experimental.

## Approval gates

1. Audit decisions approved after Phase 0
2. Foundations fixture approved after Phase 1
3. Homepage static design approved after Phase 3
4. Project-story system approved after Phase 4
5. Motion approved after Phase 5
6. Release approved after Phase 7
