# UX Refinement Implementation Report

## 1. Executive Summary

Refined the existing portfolio around a recruiter journey: understand the role, inspect relevant work, identify individual contributions, access the résumé, and make contact. The visual identity and headline interactions were retained.

Brightspace Pulse now leads the selected work and presents the Resume Builder as an individual contribution within a three-person Growth Hub concept. Original evidence was recovered from the supplied case-study PDF rather than creating new screens or inventing outcomes. All seven active projects remain available.

Other changes reorder hero actions, relocate GitHub activity to About, simplify cards, group skills, add deliverable summaries and onward actions to case studies, and remove the artificial project-navigation wait. These are heuristic improvements, not measured conversion or usability gains.

No commit, push, deployment, résumé PDF edit, or real contact-message submission was performed.

## 2. Baseline and Scope

- Branch: `main`.
- Baseline commit: `543034f39ccdf4a2de36cb9c1756d8e90148c29a`.
- Starting working tree: clean.
- Baseline contains the two-line headline and design/build hover effects, corrected project scopes, real FLYH imagery, SVG skill icons, three résumé options with UX Engineer prioritised, contact provider-acceptance checks, shared navigation, and modal focus management.
- Preserved those changes, the existing colour tokens and font, ambient background, headline CSS, all original media/PDFs, all active projects, external destinations, and CoachCanvas screenshots.
- Reviewed homepage, archive, shared case-study renderer, project data, gallery helper, cursor, navigation, résumé chooser, contact form, layout, CSS, and GitHub/resume APIs.
- Reviewed Laws of UX pages and the supplied Brightspace PDF. Captured baseline desktop/mobile homepage, archive and Brightspace views before implementation. Later intermediate captures reused some temporary filenames; final captures use `after-` filenames.
- Scope is local implementation and validation. No changes to deployment settings, dependencies, or unrelated application architecture.

## 3. Files Changed

| File | Changes made | Reason |
| --- | --- | --- |
| `src/app/page.js` | Hero action order/treatment, explicit frontend background, activity moved to About, résumé labels, card metadata, contact autocomplete | Recruiter priorities, proximity, readable cards |
| `src/app/projects/page.js` | Simplified card metadata; flexible text height; retained archive grouping | Remove misleading link/activity labels and avoid clipping |
| `src/data/projects.js` | Featured order, deliverable summaries, next-project IDs, concise card statuses, Brightspace narrative and gallery | Factual scannability and flagship UX evidence |
| `src/app/projects/[id]/UnifiedProjectShowcase.js` | Deliverable header, scope label, project-specific evidence sections, decisions before gallery, onward actions, larger meaningful labels, portrait hero option, gallery borders | Clearer reading sequence and useful endings |
| `src/lib/projectPresentation.js` | Conditional research/flow/testing sections and sequential numbering | Support Brightspace without forcing its narrative onto every project |
| `src/app/components/ProjectTelemetry.js` | Static maturity label; removed per-card activity request and availability labels | Status must not imply shipping or nested actions |
| `src/app/components/ProjectTransitionLink.js` | Next.js Link navigation starts immediately; existing overlay can run concurrently | Remove the intentional 190 ms wait, retain visual continuity |
| `src/app/components/DeveloperPulse.js` | Supporting presentation, visitor-facing labels, readable text | Retain functioning activity feature at lower prominence |
| `src/app/components/SkillsStack.js` | Three capability groups, preserved icons, combined related skills, added REST integration | Reduce effort needed to organise capabilities mentally |
| `src/app/components/navbar.js` | Minimum 44×44 home target and accessible home label | Mobile target size and clarity |
| `src/app/components/CustomCursor.js` | Enable replacement only after pointer movement; restore native cursor for text entry, touch events, blur and leaving the window | Preserve personality without obscuring native interaction |
| `src/app/components/ResumeDownloadButton.js` | Screen-reader description for primary UX résumé | Communicate the visual preference beyond colour/dot |
| `tests/project-content.test.mjs` | Updated order and media checks; onward-route and evidence-section checks | Guard against content and navigation regressions |
| `public/images/brightspace/resume-personal-details.png` | Original embedded screen extracted from PDF page 10 | Show actual creation flow |
| `public/images/brightspace/resume-upload.png` | Original embedded screen extracted from PDF page 10 | Show the existing-document entry point |
| `public/images/brightspace/resume-preview.png` | Original embedded screen extracted from PDF page 10 | Lead with completed interface and next actions |
| `public/images/brightspace/resume-user-flow.png` | Render of original PDF page 7 | Expose documented information architecture |
| `UX_REFINEMENT_REPORT.md` | This implementation and evidence handoff | Independent review |

## 4. Laws of UX Applied

| UX Principle | Original issue | Implementation | Expected benefit | Validation status |
| --- | --- | --- | --- | --- |
| [Law of Proximity](https://lawsofux.com/law-of-proximity/) | Activity panel separated introduction and actions | Actions immediately follow introduction; activity moved to About | Clearer relationship between positioning and next steps | Source and rendered layout reviewed |
| [Hick’s Law](https://lawsofux.com/hicks-law/) | GitHub had more emphasis than résumé | Work primary, résumé secondary, GitHub tertiary; UX résumé remains first | Easier identification of the intended path | Order verified in source and homepage screenshots |
| [Von Restorff Effect](https://lawsofux.com/von-restorff-effect/) | Orange status text and technical metadata competed with actions | Neutral maturity labels; quieter indexing; orange retained for important actions | More selective emphasis | Visual review, not attention measurement |
| [Chunking](https://lawsofux.com/chunking/) | Mixed skill list and insufficient UX evidence structure | Three skill groups; conditional discovery, flow and testing sections | Faster scanning and clearer relationships | Source and section-order tests; full skills interaction check not completed |
| [Cognitive Load](https://lawsofux.com/cognitive-load/) | Tiny activity/link labels and clipped card content | Fewer labels, meaningful text at readable sizes, flexible card text | Less irrelevant processing and less hidden information | Source/render checks |
| [Jakob’s Law](https://lawsofux.com/jakobs-law/) | Inconsistent résumé labels and native text cursor replacement | Consistent labels, standard Link navigation, native text-entry cursor | Familiar controls and predictable behaviour | Source reviewed; expanded interaction run not completed |
| [Fitts’s Law](https://lawsofux.com/fittss-law/) | Mobile home icon was a small target | 44 px minimum hit area without enlarging the visible logo | Easier targeting | 44 px minimum verified in source; browser target measurement not completed |
| [Doherty Threshold](https://lawsofux.com/doherty-threshold/) | Navigation was deliberately held for about 190 ms | Route starts without a timer; existing feedback remains concurrent | Immediate response without manufactured waiting | Code inspection; browser navigation timing not measured |
| [Serial Position Effect](https://lawsofux.com/serial-position-effect/) | UX flagship and deliverable evidence were less prominent | Brightspace first; factual deliverables near the top | Important evidence encountered earlier | Content-order checks |
| [Peak–End Rule](https://lawsofux.com/peak-end-rule/) | Case studies ended mainly in back/external links | Relevant next project and Discuss a role actions | A useful continuation after reading | Destination validation |
| [Aesthetic–Usability Effect](https://lawsofux.com/aesthetic-usability-effect/) | Readability needed attention without losing identity | Targeted metadata sizing; preserved established design | Maintain visual coherence while reducing friction | Visual preservation review |

These principles guided implementation choices. They do not prove improved recruitment outcomes, and no before/after user study was conducted.

## 5. Homepage Changes

Before: headline → introduction → Developer Pulse → Work → GitHub → résumé.

After: unchanged headline/hover effects → introduction explicitly naming the frontend background → Work → résumé → GitHub. Developer Pulse now sits in About below location and résumé access.

- Work retains the orange filled primary treatment.
- Résumé uses the existing bordered secondary-button language.
- GitHub becomes a tertiary text/icon link with a generous target.
- The introduction now says: “I’m a UX Engineer with a strong frontend development background, working between product thinking, interface design and implementation with React, Next.js and TypeScript.”
- Both portfolio résumé triggers use “Download résumé.” In-product Brightspace labels such as “Download CV” remain unchanged because they describe the actual prototype.
- Developer Pulse remains functional and honest about unavailable activity. “Recent code activity,” “GitHub” and “Public repository” replace implementation-facing labels. Its smallest 8–9 px labels are now 12 px.
- Shared card metadata uses neutral 11–12 px text. The headline and global typography scale were not changed.

## 6. Featured Project Strategy

Final homepage sequence:

1. **Brightspace Pulse** — research, individual Resume Builder ownership, information architecture, interface decisions, Figma prototype and testing.
2. **FLYH.AI** — product thinking, creator workflows, interface design and frontend contribution.
3. **CoachCanvas** — research, mobile UX, implementation and role-aware workflows with a teammate.
4. **FindAside** — professional frontend delivery and responsive marketing work.

The three archive disciplines are preserved. Brightspace remains first within UX & Interface Design. Waypoint, FlexSave and the portfolio case study remain in the archive. CoachCanvas was not redesigned and its product imagery was not modified.

## 7. Brightspace Case-Study Improvements

### Original problems

The baseline was already better than the earlier four-image gallery: it showed six selected assets, including Build CV and Resume entry screens, with four supporting images. However, its hero was a cropped course/navigation image rather than a Resume Builder screen. Creation, upload and preview evidence remained inside the PDF. Research and testing were described broadly without showing the available method and responses. One screenshot’s alt text incorrectly described professor references even though it depicts Courses.

### Revised narrative

Header/finished preview and deliverable → context → problem/response → individual contribution → discovery/research → Growth Hub and Resume flow → design decisions → interface evidence → testing → outcome/reflection → onward actions.

The shared renderer only adds discovery, flow and testing sections when the project provides them. Other projects retain their own technical/design content and are not forced into Brightspace’s research narrative.

### Role and contribution clarity

Retained the role “UX/UI Designer · UX Research Contributor.” The text explicitly distinguishes the three-person team’s Portfolio, Resume and Connect concept from individual Resume Builder ownership. This is a university UX prototype, not a commissioned Brightspace product or a shipped application.

### Research presentation

PDF pages 3–6 document a discovery process and a gap/opportunity analysis. The page now reports those as the team’s recorded opportunity statements: external CV tools, no integrated portfolio space, and networking/endorsement opportunities. It does not convert those statements into proven customer demand.

The available material names research and market study but does not contain a detailed competitor matrix or discovery interview transcripts. This limitation is stated. The hypothesis that a familiar student application could support career preparation is distinguished from later prototype feedback.

### User flows

PDF page 7 is exposed as an original evidence image. It connects the existing application to Growth Hub and its three areas. Resume branches into Build CV, Edit CV, Upload CV, View CV and Download CV; Build leads to template selection and Upload leads to device upload.

The written explanation also connects that diagram to the finished personal-details and preview screens. It does not describe implemented production file processing.

### Design decisions

Four specific decisions are explained:

- New CV creation and existing CV upload support different starting points.
- Templates are presented before personal-details entry.
- Preview groups view, edit and download actions.
- Existing blue/Roboto/form/navigation patterns support familiarity. Reduced learning time is a rationale, not a measured outcome.

### Screenshots selected and order

The header and first homepage card now use the original finished preview screen.

| Order | Asset | Evidence |
| --- | --- | --- |
| 1 | `resume-preview.png` | Finished preview with View, Edit and Download actions, extracted from PDF p.10 |
| 2 | `resume-personal-details.png` | Creation form: name, desired job title and description, PDF p.10 |
| 3 | `BuildCV1.png` | Existing template-selection screen |
| 4 | `Open Resume Tab.png` | Existing Resume entry/actions screen |
| 5 | `resume-upload.png` | Existing-document upload screen, PDF p.10 |
| 6 | `resume-user-flow.png` | Render of original flow diagram, PDF p.7 |
| 7 | `beforeMenu.png` | Navigation before Growth |
| 8 | `AfterMenu.png` | Navigation with Growth |

Seven supporting images remain available under the existing disclosure: Growth sketch, Resume sketch, Add projects, Connect home, Career opportunities, Courses reference, and the previous `brightspace.png` overview. The old hero is retained rather than deleted.

The three extracted phone screens preserve the PDF image masks/transparency. They were not redrawn or generated. Original assets and the original PDF are unchanged. Captions identify sources and distinguish shared team features from personal Resume Builder work.

### Usability testing presentation

Source: PDF p.11 for method/questions and pp.12–14 for responses. These are historical project results, distinct from validation of the portfolio changes in section 11.

- Moderated sessions at TU Dublin using a Figma prototype followed by a survey.
- Participants explored the prototype before selecting a feature area.
- The response table contains **seven responses**: four Build CV, two View Project, one Get Endorsed.
- Across all seven responses, navigation and UI each received six 5/5 ratings and one 4/5 rating.
- Build CV task-feasibility ratings were 4, 5, 5, 5; component-findability ratings were 5, 3, 4, 4.
- These are self-reported ratings, not observed completion rates. Whole-concept results are not attributed exclusively to Resume Builder.
- Usefulness and willingness to use varied. No invented qualitative quotations, task scripts, completion percentages, or post-test changes were added.
- Lower findability ratings are described as a possible focus for another test, not proof of a specific defect.

### Outcome/reflection copy

Outcome: “Delivered an interactive Figma Resume Builder covering template selection, personal details, CV upload, preview, editing access and download access within the team’s Growth Hub concept. Moderated sessions and survey feedback tested the prototype; no production application, Brightspace adoption or commercial launch is claimed.”

Reflection: “Extending an existing product meant balancing a new career workflow with familiar navigation and interface patterns. The testing also highlighted the difference between favourable interface ratings and evidence that a feature meets a sustained need. A next round would examine component findability and document the resulting design changes.”

The reflection is editorial synthesis grounded in the existing reflection and evidence; the proposed next round is explicitly future work.

### Unsupported or conflicting data

- PDF response timestamps are November 2024, while existing project metadata says 2025. The four-week duration is supported; the displayed year is preserved pending owner confirmation rather than silently guessed.
- Detailed competitor findings, interview material, full task script, qualitative feedback and a post-test iteration log are absent from the supplied PDF.
- No Figma prototype URL is available in the current project data. No link was invented.
- “Iterated designs based on research findings” was replaced in the responsibilities data with the supported statement about reviewing feedback; the artifact does not establish a specific revision history.

## 8. Project Card and Case-Study Changes

Cards retain their borders, grid, hover treatment, titles and previews. Descriptions can grow rather than being clipped inside a fixed-height text area. Metadata is reduced to year/index, discipline and a concise status. Full technology lists remain inside case studies.

“Website link,” “Source link” and repository update labels have been removed from cards. Actual destinations remain in case studies. `ProjectTelemetry` now renders static maturity content without network requests; the existing API endpoint is retained but cards no longer call it.

Every project has a concise deliverable near its header, based on existing project scope. CoachCanvas and FLYH receive shorter card-only status labels; their detailed case-study status is retained. Case-study status is neutral rather than another orange primary-looking pill.

Decisions precede the main gallery. Meaningful captions/metadata use 12 px text. Gallery borders are applied to figures, preventing an odd final item from exposing a solid divider-colour block. No new gallery interaction was introduced.

All case studies preserve their back links and external/document links, and add a relevant next project plus `/#contact` (“Discuss a role”). The next-project map is explicit and tested; it contains no self-links or nonexistent IDs.

## 9. Skills and Hiring Journey

- **Design & Research:** Figma (wireframes/prototypes), UX Research (including moderated usability testing), Interaction Design (including user flows), Design Systems.
- **Frontend & Interfaces:** React (including responsive UI), Next.js, TypeScript, JavaScript, Tailwind CSS, React Native.
- **Backend & Data:** Firebase, Supabase, PostgreSQL, REST API integration.

Related methods are combined in descriptions to avoid a long list of near-duplicate tiles. All 13 previous skills and their icons are retained; REST integration adds one relevant capability backed by the existing application/API work. No proficiency scores or unsupported Node.js claim were added.

UX Engineer remains the first résumé option with the accent dot and initial keyboard focus. A screen-reader description now also identifies it as primary. The three available résumé files and their content are unchanged. A byte-for-byte comparison with baseline Git objects confirmed all three PDFs are unchanged; a separate comparison confirmed all 19 original Brightspace/CoachCanvas assets are unchanged.

Skills remains in navigation and scroll tracking. Contact keeps native labels, required-field validation, provider-acceptance handling and direct-email failure fallback; name/email autocomplete hints were added.

## 10. Interaction, Accessibility and Performance

- Removed the project-link timer and manual `router.push`. Standard Next.js links preserve modifier-click and keyboard behaviour and support prefetching. The existing 220 ms visual feedback runs concurrently and does not intercept pointer events.
- Kept the signature cursor. Native cursor replacement begins only after a fine-pointer movement, and is released for text entry, touch events, window blur and pointer exit. Existing reduced-motion disabling remains.
- Increased the home-logo hit area to at least 44×44 px and provided “Go to homepage” as its accessible name.
- Preserved global focus outlines, mobile menu semantics/focus management, résumé dialog trapping/Escape/restoration, contact feedback focus, and existing reduced-motion headline handling.
- Corrected the Courses reference image description and added factual alt text/source captions for extracted evidence.
- Preserved Next/Image usage and lazy gallery loading; the case-study hero remains priority-loaded.
- Removed per-card GitHub telemetry requests. About activity still has an honest fallback.
- Palette spot checks against the primary background: primary text 17.78:1; secondary 11.20:1; muted 5.81:1; accent 7.03:1. Muted on secondary background is 5.53:1; dark button text on orange is 6.91:1. These are token-pair checks, not a full contrast audit of every state/image.
- No Lighthouse benchmark, real-user performance measurement or complete WCAG audit is claimed.

## 11. Validation Results

Completed checks and limitations are recorded below. Local browser diagnostics and screenshots are stored under `/private/tmp/ux-refinement/`; they are temporary evidence, not deployed content.

| Check | Command / method | Result |
| --- | --- | --- |
| Lint | `npm run lint` | Passed, no ESLint errors or warnings. CLI itself reports the existing Next 16 deprecation notice. |
| Build | `npm run build` | Passed: 17 generated pages, all seven case-study routes included. |
| Diff check | `git diff --check` | Passed after removing one trailing-whitespace line. |
| Unit/content tests | `npm test` | 12 passed, 0 failed. |
| Route testing | Local development browser navigation; build route output; content tests | Homepage, archive and Brightspace rendered at both tested widths. All seven case studies generated during build and all next-project IDs resolve in tests. Full nine-route HTTP sweep was not completed. |
| Desktop checks | Headless Chrome, 1440×1000 | Updated homepage, archive and Brightspace captured; no horizontal document overflow in the page checks. Homepage, archive and Brightspace screenshots visually inspected. Full section-by-section/FLYH/CoachCanvas browser pass not completed. |
| Mobile checks | Headless Chrome, 390×1000 | Updated homepage, archive and Brightspace rendered without horizontal document overflow. Homepage and Brightspace screenshots visually inspected. Further 320/768 px, menu and gallery interaction checks not completed. |
| Keyboard checks | Source review of focus management, semantics and links | Existing trap/Escape/restoration implementations preserved. Final interactive keyboard script was not executed successfully; not claimed as a pass. |
| Image checks | `npm test`; PDF rendering and image inspection | All referenced local images/documents exist; gallery accounting preserves every screenshot. New evidence images and rendered Brightspace preview visually inspected. Full lazy-image decode sweep not completed. |
| Contact/résumé checks | Contact unit tests; résumé route/source/file comparison | Five provider/contact tests pass. Résumé manifest still yields UX, Frontend, Full-Stack; PDFs unchanged. Mocked browser submission and chooser keyboard checks remain unexecuted. No message was sent. |

An initial production-preview attempt encountered a local `.next` cache conflict with an independently running development server on port 3000. That browser attempt was stopped and is not counted as a pass. An expanded browser run against the existing development server on port 3000 was requested to avoid this conflict, but permission was declined; that run did not execute. Build compilation itself passed. The successful six updated-page captures were obtained earlier using the authorised local development preview. No live deployment was tested or changed.

## 12. Remaining Issues

| Severity | Impact | Recommended next action |
| --- | --- | --- |
| Medium — validation | Expanded keyboard, all-route, image-decoding and mocked contact browser checks remain incomplete after the preview conflict and declined follow-up browser permission | Run the prepared local QA script after authorising browser access; review the remaining page sections and interaction states before publishing |
| Medium — content | Brightspace’s 2025 metadata conflicts with November 2024 survey timestamps | Confirm project year versus presentation/graduation year before changing dates |
| Medium — evidence | No detailed competitor comparison, qualitative feedback, task script or revision log in the supplied source | Add original supporting records if available; do not reconstruct historical evidence from memory as fact |
| Low — evidence | Screens extracted from the PDF are limited to their original embedded resolution | Supply original Figma exports if sharper media are available |
| Low — validation | Automated/headless checks cannot establish real recruiting effectiveness or screen-reader usability | Conduct target-reader and assistive-technology testing |
| Low — existing tooling | `next lint` is deprecated in the installed Next.js line | Migrate separately when upgrading tooling; no unrelated migration included |

## 13. Content and Factual Accuracy Notes

Primary source for new Brightspace detail: `public/images/brightspace/BrightSpace Pulse Case Study.pdf`, especially pp.2–11 and the response table on p.14. Standalone images were visually inspected; names alone were not used to determine content.

Verified from the supplied artifact: three-person university project; individual Resume ownership; four-week duration; three Growth Hub areas; flow structure; original interface screens; TU Dublin testing method; seven response rows and their task/rating values.

Owner-provided/current-project evidence: professional positioning, project roles, FLYH contribution scope, CoachCanvas functional prototype/release build, FindAside frontend scope, and the other project deliverables. These were preserved/summarised, not independently audited against private repositories or employment records.

Inference/editorial interpretation: the reasons expressed for grouping preview actions and offering alternative entry points, plus the reflection’s proposed next test. These are presented as design rationale or future work, not measured improvements.

No placeholder achievements, fabricated research, shipped Brightspace claims, business metrics, new professional responsibilities, or résumé content changes were introduced. External product availability was not reverified as part of this local pass.

## 14. Visual Preservation Confirmation

Preserved palette, Space Grotesk, background effects, border/grid language, overall page composition, logo, SVG icons, headline wording, headline styling/animation, signature cursor, card hover styling and existing form/button language.

Intentional visual adjustments: CTA priority; activity relocation; skill group headings; readable metadata; neutral status treatment; flexible card text; portrait Brightspace preview; factual deliverable block; existing-style evidence sections and ending actions. No new decorative effect, animation, CoachCanvas redesign or generated product imagery was added. `globals.css` and `layout.js` are unchanged.

## 15. Final Assessment

The recruiter path is more direct: the role and frontend background are explicit, résumé access is prominent, UX evidence leads the selected work, and case studies explain deliverables and individual scope before asking for extensive reading. Brightspace now offers substantially more inspectable design evidence and a more careful account of what testing establishes.

Remaining weaknesses are evidence quality and validation rather than a need for further decoration. Historical research documentation is incomplete, the Brightspace date needs confirmation, and no real-user study has established that readers understand or navigate the site more effectively.

## 16. Suggested Next Iteration

1. Confirm Brightspace’s date and add original research/testing records where available.
2. Run recruiter/hiring-manager tasks to test role comprehension, contribution attribution, résumé access and contact discovery.
3. Review the complete journey with a screen reader and on physical mobile devices.
4. Supply higher-resolution original Resume Builder exports and a shareable prototype link if available.
5. Redesign CoachCanvas’s product UI as the separate future project requested; keep its present case study historically accurate.
