# Portfolio design direction

## Creative position

Technical Editorial Minimalism: a developer portfolio that combines the clarity
of an editorial layout with the precision of a well-designed developer tool.
The interface should feel calm, capable and authored, with a warm orange signal
colour that gives the system energy without turning it into a themed interface.
It must communicate frontend craft without imitating a terminal, IDE or
science-fiction dashboard.

The work is the primary visual content. Personality comes from typography,
composition, concise technical language and a small number of purposeful
interactions.

## Product goals

1. Identify Hrishikesh as a frontend-focused full-stack developer immediately.
2. Put the strongest shipped projects ahead of biography and resume content.
3. Help recruiters scan role, stack, contribution and outcome quickly.
4. Give developers enough technical evidence to judge implementation depth.
5. Preserve UX research and product design as supporting strengths.

## Experience principles

1. Evidence before decoration.
2. One visual system across every page.
3. Clear hierarchy before motion.
4. Technical details should inform, not perform.
5. Every repeated component follows the same spacing and geometry rules.
6. The site remains usable with keyboard, touch and reduced motion.

## Visual foundations

### Colour

- **Canvas:** `#0B0B0A`
- **Surface:** `#121210`
- **Raised surface:** `#191816`
- **Primary text:** `#F2F4EF`
- **Secondary text:** `#C6C3BD`
- **Muted text:** `#8F8B84`
- **Border:** `#302E2A`
- **Accent:** `#FF6D3B`
- **Accent hover:** `#FF835D`
- **Accent active:** `#E95627`
- **On accent:** `#160B07`
- **Error:** `#FF7D7D`

Use the accent for actions, focus, status and selected metadata. Do not add a
second decorative accent. Orange should occupy less than 10 percent of a typical
viewport. Large orange backgrounds are limited to a primary action or a single
intentional editorial moment. Use `#160B07` for text and icons on orange.
Glows are reserved for focus states and must remain subtle.

### Typography

- **Interface and display:** Space Grotesk
- **Technical metadata:** Geist Mono or a locally available monospace fallback
- **Body measure:** 60 to 70 characters
- **Display weight:** 700 to 800
- **Body weight:** 400 to 500
- **Letter spacing:** `0`

Hero-scale type is used only once per page. Monospace is limited to project
numbers, dates, stack labels, status and compact metadata.

### Geometry

- **Small radius:** `4px`
- **Standard radius:** `6px`
- **Large radius:** `8px`
- **Pill radius:** status indicators only
- **Border:** `1px` solid token colour
- **Control height:** `44px` minimum

Avoid glassmorphism, nested cards, decorative capsules and oversized rounded
containers. Structure comes from alignment, rules, tone and whitespace.

### Spacing

Use an 8px base rhythm.

- `4px`: icon and micro-label spacing
- `8px`: compact internal spacing
- `16px`: standard component spacing
- `24px`: grouped content spacing
- `32px`: component separation
- `64px`: mobile section spacing
- `96px`: desktop section spacing

## Layout system

- Use one shared responsive page container.
- Use a 12-column desktop grid and a 4-column mobile grid.
- Keep content aligned to stable column boundaries.
- Let project media carry more weight than metadata.
- Avoid horizontal scrolling for primary desktop content.
- Ensure the next section is visible or clearly indicated below the hero.
- Keep DOM order identical to visual and keyboard order.

## Component language

### Navigation

A compact rectangular navigation bar with the name or monogram, primary routes
and one contact action. Active state uses colour and a rule, not a floating pill.
Orange marks the current route or contact action, never the entire navigation.

### Buttons and links

Use icon plus text for explicit actions. Primary buttons use the accent or light
foreground. Secondary actions use a border or text treatment. Hover movement is
limited to 2px. Orange buttons use the on-accent token and cannot use white text.

### Project presentation

Projects use editorial rows or stable grids with:

1. Project index and year
2. Product name and technical outcome
3. Role and primary stack
4. Large readable product media
5. Live, source and case-study actions when available

Do not rely on category badges as the main explanation.

### Skills

Present a compact core-stack index. Each item includes a small icon, technology
name and one phrase describing how it is used. Do not use proficiency bars,
percentage scores, clouds or a software-launcher grid.

### Forms

Use visible labels, rectangular fields, clear focus states and concise status
messages. Do not place the form inside a decorative floating card.

## Motion

- Complete the static system before adding motion.
- Keep one signature interaction on the homepage.
- Reveal content once with opacity and no more than 12px movement.
- Keep hover transitions between 160ms and 240ms.
- Remove continuous particles, floating cards and ambient loops.
- Respect `prefers-reduced-motion` for every non-essential animation.

## Texture and imagery

- Retain one very faint grid or grain layer, never both at full visibility.
- Remove cursor-following glow from content-heavy sections.
- Use sharp, readable product screenshots with consistent art direction.
- Do not darken or blur screenshots that reviewers need to inspect.
- Use orange frames or annotations sparingly to connect project media to the
  interface system.

## Content order

1. Developer positioning and primary action
2. Selected development work
3. Compact core stack
4. Short multidisciplinary context
5. Contact, GitHub, LinkedIn and CV

Experience, education and full skill inventories remain in the CV.

## Non-goals

- Fake terminal interfaces
- Code rain or hacker motifs
- Experimental navigation
- Multiple colour themes
- Heavy 3D scenes
- Decorative metrics without evidence
- Long resume-style homepage sections
- Animation added only to demonstrate animation skill

## Quality bar

The finished portfolio should feel intentional at 375px, 768px, 1440px and
wide desktop sizes. It must have consistent typography, spacing, geometry,
focus states and project media. No section should look like it belongs to a
different template or design trend.
