// Canonical project content. galleryOrder curates the main gallery; remaining media stays accessible.
// Status describes project maturity, never editorial progress or inferred business success.
export const projects = [
  {
    "id": "flyh-ai",
    "primaryDiscipline": "Product Design & Engineering",
    "disciplines": [
      "Product Thinking",
      "UX/UI Design",
      "Frontend Engineering"
    ],
    "archiveOrder": 2,
    "featuredOrder": 2,
    "title": "FLYH.AI – AI-Assisted Creator Commerce",
    "category": "Product Design & Engineering",
    "role": "Product Design Engineer",
    "year": "2026",
    "oneLiner": "Helping independent artists turn creative work into market-ready products through simpler, AI-assisted workflows.",
    "cardImpact": "Helping artists prepare products through clearer, AI-assisted creator workflows.",
    "summary": "FLYH.AI explores how AI can help independent artists handle the operational side of selling their work. I contributed to product thinking, user journeys, interface design and frontend implementation, with a focus on making complex creator-commerce workflows easier to understand and use.",
    "problem": "Independent artists often have to manage time-consuming tasks beyond creating artwork, including preparing product previews, organising listing information and getting products ready for marketplaces.",
    "solution": "An AI-assisted creator-commerce experience designed to reduce repetitive preparation work while keeping artists in control of creative decisions.",
    "image": "/images/flyh/art.png",
    "heroFit": "contain",
    "screenshots": [
      {
        "src": "/images/flyh/welcome.png",
        "alt": "Welcome screen introducing the creator workspace through Create, Present and Understand",
        "placement": "overview",
        "aspect": "wide"
      },
      {
        "src": "/images/flyh/newlisting.png",
        "alt": "New listing flow with Artwork, Direction, Listing and Review steps and an artwork upload area",
        "placement": "process",
        "aspect": "wide"
      },
      {
        "src": "/images/flyh/addedArtwork.png",
        "alt": "Uploaded artwork preview with source details, optional artist context and a rights confirmation",
        "placement": "process",
        "aspect": "wide"
      },
      {
        "src": "/images/flyh/listings.png",
        "alt": "Listings workspace showing artwork thumbnails, listing titles, mockup counts and status labels",
        "placement": "features",
        "aspect": "wide"
      }
    ],
    "platform": "Web application",
    "technologies": [
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    "responsibilities": [
      "Contributed to product and MVP discussions.",
      "Evaluated creator workflows and proposed simplifications.",
      "Contributed to dashboard, storefront and listing experiences.",
      "Contributed to UX/UI decisions, information hierarchy and interaction flows.",
      "Developed and refined frontend interfaces.",
      "Refined landing-page presentation and product communication."
    ],
    "caseStudy": {
      "productThinking": [
        "Explored ways to reduce repetitive product-preparation work while keeping artists in control of creative decisions."
      ],
      "designDecisions": [
        "The listing flow separates Artwork, Direction, Listing and Review into visible steps, giving artists a clear sense of where they are in the preparation process.",
        "The listing editor places product mockups beside editable titles, descriptions and tags. Artists can review the prepared content and choose its presentation before continuing."
      ],
      "engineeringDecisions": [
        "Translated interface and interaction decisions into frontend work, refining screens as the product direction developed."
      ],
      "outcome": "The current interface brings artwork upload, listing preparation and listing management into one creator workspace. Contributions covered product discussions, UX/UI decisions and frontend refinement; marketplace operation and public release remain outside the verified scope of this case study.",
      "reflection": "This work highlighted the importance of making AI-assisted workflows understandable and keeping creative decisions with the artist."
    },
    "reviewNotes": [
      "TODO: Confirm personal implementation scope, release status and outcomes before adding more specific claims."
    ],
    "status": "Design and frontend exploration",
    "galleryOrder": [
      "/images/flyh/welcome.png",
      "/images/flyh/newlisting.png",
      "/images/flyh/addedArtwork.png",
      "/images/flyh/listings.png"
    ],
    "cardTags": [
      "UX/UI Design",
      "React",
      "TypeScript"
    ]
  },
  {
    "id": "coach-canvas",
    "primaryDiscipline": "Product Design & Engineering",
    "disciplines": [
      "UX Research",
      "UX/UI Design",
      "Mobile Engineering"
    ],
    "archiveOrder": 1,
    "featuredOrder": 1,
    "title": "CoachCanvas – Club & Player Management App",
    "category": "Full Product Lifecycle",
    "year": "2025",
    "featured": true,
    "cardImpact": "Researched, designed and built role-aware club workflows with a teammate for an MSc capstone.",
    "oneLiner": "A research-informed football club-management mobile application designed and developed as an MSc capstone project.",
    "summary": "Developed with a teammate, CoachCanvas combines UX research, role-aware interface design and React Native implementation. The functional mobile prototype supports club and player workflows, event and match management, and lineup preparation, with Firebase Authentication and Firestore behind the experience.",
    "description": "CoachCanvas was designed to bring together scattered WhatsApp groups, spreadsheets, and ad-hoc tools with a structured system that still feels simple for non-technical coaches and players. It focuses on clear information hierarchy, multi-role onboarding, club creation and management, and state-aware navigation that always takes users to the right place based on their role and status.",
    "image": "/images/coachcanvas/coachcanvas.png",
    "platform": "Android mobile app",
    "timeline": "2025",
    "showcaseOverview": "CoachCanvas is a mobile club management app for grassroots football teams, bringing coach and player onboarding, club setup, member approval, squad information, match preparation, and performance views into one structured Android experience.",
    "problem": "Grassroots clubs often depend on scattered chats, spreadsheets, and informal coach memory, making onboarding, approvals, player information, and match preparation harder to manage consistently.",
    "solution": "CoachCanvas gives coaches and players role-specific flows, branded club spaces, join-code access, approval workflows, and state-aware navigation so each user lands in the right part of the club journey.",
    "technologies": [
      "React Native",
      "TypeScript",
      "Firebase Authentication",
      "Firestore",
      "Firebase Storage",
      "React Navigation",
      "Gradle",
      "Android Studio",
      "Metro bundler",
      "Figma"
    ],
    "liveUrl": "",
    "githubUrl": "",
    "role": "UX/UI Designer · UX Researcher · Full-Stack Developer",
    "contributions": {
      "UI / UX": [
        "Explored the product problem and used user research to inform interface decisions.",
        "Designed coach and player onboarding as separate guided flows.",
        "Created club identity, join-code, approval, and role-specific home experiences.",
        "Designed mobile screens for squads, player profiles, match history, and formation planning."
      ],
      "Full-Stack Development": [
        "Built the Android app with React Native, TypeScript, and React Navigation.",
        "Implemented Firebase Authentication, Firestore, and Firebase Storage workflows.",
        "Prepared and debugged the Android release build pipeline."
      ]
    },
    "keyFeatures": [
      "Coach and player onboarding",
      "Club creation and branding",
      "Join-code access",
      "Player approval workflow",
      "Role-specific home screens",
      "Squads and player profiles",
      "Match and performance views",
      "Formation planning"
    ],
    "documentLinks": [
      {
        "title": "UX Case Study",
        "description": "Explore the research, UX process and design decisions.",
        "href": "/images/coachcanvas/CoachCanvas-CaseStudy.pdf",
        "type": "Concise PDF"
      },
      {
        "title": "Final Project Report",
        "description": "Complete academic report covering research, implementation, testing and evaluation.",
        "href": "/images/coachcanvas/CoachCanvas_Major_Project_Report.pdf",
        "type": "Detailed PDF"
      }
    ],
    "responsibilities": [
      "Designed and implemented multi-step onboarding wizards for coaches and players, capturing rich club and player profiles.",
      "Built club creation and management flows, including visual identity, squads, and member approval workflows.",
      "Implemented a secure join-code based onboarding system that connects players to the correct club with branded previews.",
      "Designed role-specific home experiences for managers and players, reflecting states like pending approval or active membership.",
      "Structured Firestore collections and services for users, clubs, players, and join requests with clear separation of concerns.",
      "Set up and debugged the Android build and signing pipeline, producing stable release APKs for real devices."
    ],
    "highlights": [
      "Multi-role onboarding that feels like a guided conversation rather than a form, tailored separately for coaches and players.",
      "Club creation with real identity — logos, jersey colors, and descriptions that carry through the entire experience.",
      "Join-code and approval workflow that lets coaches fully review rich player profiles before accepting them into the club.",
      "Navigation that adapts to auth state, profile completion, club membership, and join-request status without dead-ends.",
      "Functional Android prototype with a release build prepared for academic delivery and further testing."
    ],
    "caseStudy": {
      "eyebrow": "Flagship product case study",
      "timeline": "2025",
      "status": "Functional mobile prototype / Android release build",
      "problem": "Grassroots football clubs often run on scattered WhatsApp threads, spreadsheets, informal approvals, and coach memory. That creates friction for onboarding, player management, and match preparation.",
      "opportunity": "Create a structured club workspace that still feels simple enough for non-technical coaches and players to use every week.",
      "users": [
        "Club managers",
        "Football coaches",
        "Players waiting to join a club"
      ],
      "productThinking": [
        "Separated coach and player onboarding so each role only sees the decisions that matter to them.",
        "Mapped the app around user state: unauthenticated, profile incomplete, club owner, pending join request, approved player.",
        "Made club identity visible across the experience so a join code feels connected to a real team, not a generic form."
      ],
      "designDecisions": [
        "Designed onboarding as a guided sequence instead of a long form.",
        "Used branded club previews to build trust before a player submits a join request.",
        "Kept home screens role-specific so managers and players land on different priorities."
      ],
      "engineeringDecisions": [
        "Built state-aware navigation with React Navigation so users always land in the correct flow.",
        "Structured Firestore around users, clubs, players, and join requests to keep ownership boundaries clear.",
        "Handled Android build, signing, and release APK debugging to move beyond prototype status."
      ],
      "outcome": "Delivered a functional mobile prototype and Android release build as a two-person MSc capstone. The work brought together research, role-aware UX, club and player workflows, event management and lineup preparation. Public app-store publication and organisational deployment are not established outcomes.",
      "reflection": "The biggest learning was that mobile product quality depends as much on state design as visual design. The app needed to understand where each user was in the club journey before any screen could feel simple.",
      "limitations": "Testing focused on local clubs and university players. Long-term adoption and administrative time savings were not measured. Richer tactical editing, advanced analytics and multi-manager governance remained future work."
    },
    "screenshots": [
      {
        "src": "/images/coachcanvas/coachcanvas-loading.png",
        "alt": "CoachCanvas onboarding and loading experience",
        "placement": "overview"
      },
      {
        "src": "/images/coachcanvas/coachcanvas-home.png",
        "alt": "CoachCanvas manager and player home screens",
        "placement": "features"
      },
      {
        "src": "/images/coachcanvas/coachcanvas-MH.png",
        "alt": "CoachCanvas match history and stats screens",
        "placement": "features"
      },
      {
        "src": "/images/coachcanvas/coachcanvas-formation.png",
        "alt": "CoachCanvas formation and lineup management screens",
        "placement": "process"
      }
    ],
    "status": "Functional mobile prototype / Android release build",
    "projectType": "Academic capstone",
    "team": "Two-person MSc project",
    "galleryOrder": [
      "/images/coachcanvas/coachcanvas-loading.png",
      "/images/coachcanvas/coachcanvas-home.png",
      "/images/coachcanvas/coachcanvas-MH.png",
      "/images/coachcanvas/coachcanvas-formation.png"
    ],
    "cardTags": [
      "UX Research",
      "React Native",
      "Firebase"
    ],
    "displayTechnologies": [
      "Figma",
      "React Native",
      "TypeScript",
      "Firebase Authentication",
      "Firestore",
      "Firebase Storage",
      "React Navigation",
      "Android Studio"
    ]
  },
  {
    "id": "waypoint-career-intelligence",
    "responsibilities": [
      "Shaped the product concept and information architecture around reusable career evidence.",
      "Designed editable career records and explainable job-fit workflows.",
      "Built the application with Next.js, TypeScript, Supabase and PostgreSQL."
    ],
    "primaryDiscipline": "Product Design & Engineering",
    "disciplines": [
      "Product Thinking",
      "UX/UI Design",
      "Frontend Engineering"
    ],
    "archiveOrder": 3,
    "title": "Waypoint – Career Intelligence Platform",
    "category": "AI Engineering / Product Design / Full-Stack Web Development",
    "cardCategory": "AI Product · Full-Stack",
    "year": "2026",
    "featured": true,
    "cardImpact": "Turns career evidence, job requirements and application work into explainable decisions in one private workspace.",
    "oneLiner": "A private career intelligence platform that evaluates job fit, recommends the right CV and simplifies applications.",
    "summary": "I shaped the product concept, information architecture and interface, then built an evidence-based workspace for career knowledge, CVs, job analysis and reusable application answers.",
    "description": "Waypoint creates a confirmed career knowledge base containing skills, experience, projects, preferences and evidence. It compares that knowledge with atomic job requirements, distinguishes supported evidence from unknowns and genuine conflicts, then recommends the best stored CV and explains what should be tailored.",
    "image": "/images/waypoint/waypoint.png",
    "heroFit": "contain",
    "platform": "Responsive web application · Career intelligence dashboard",
    "timeline": "Iterative personal project · 2026",
    "status": "Deployed prototype",
    "role": "Product Owner · UX/UI Designer · Full-Stack Developer · AI Systems Designer",
    "technologies": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "OpenAI / Groq APIs",
      "Zod",
      "Vitest",
      "GitHub",
      "Codex / ChatGPT"
    ],
    "liveUrl": "https://waypoint-career-intelligence.vercel.app/",
    "githubUrl": "https://github.com/hrishivuk/waypoint-career-intelligence",
    "problem": "General AI chats can understand a user over time, but that knowledge remains hidden inside conversations and is difficult to inspect, correct or reuse reliably. Job seekers also repeat the same work across job descriptions, different CVs and application forms.",
    "solution": "Waypoint creates a confirmed and editable career knowledge base, compares it with atomic job requirements, separates supported evidence from unknowns and conflicts, and recommends the most suitable stored CV with clear tailoring guidance.",
    "keyFeatures": [
      "Confirmed and editable career knowledge",
      "Evidence-backed job-fit analysis",
      "Supported, partial, unknown and conflicting requirement states",
      "Multiple-CV library with ranking and tailoring recommendations",
      "Reusable application details and copy-ready answers",
      "Account-based private career workspace"
    ],
    "caseStudy": {
      "eyebrow": "Career intelligence system",
      "timeline": "Iterative personal project · 2026",
      "status": "Deployed prototype",
      "problem": "Career information is usually scattered across CV files, job descriptions, application forms and opaque AI conversations. That makes it difficult to know what is proven, what is missing and what should be improved.",
      "opportunity": "Build a private, explainable workspace that turns a person’s career evidence into reusable intelligence for better job decisions and faster applications.",
      "users": [
        "Job seekers",
        "Career changers",
        "Professionals applying at scale"
      ],
      "productThinking": [
        "Separated a person’s career profile from any single CV so the underlying evidence can be reused across applications.",
        "Modelled job descriptions as atomic requirements so recommendations can explain fit instead of returning one opaque score.",
        "Separated each account’s career workspace so personal evidence remains private."
      ],
      "designDecisions": [
        "Made every recommendation traceable to confirmed evidence, an unknown or a genuine conflict.",
        "Designed career knowledge as editable records with proficiency and supporting evidence rather than a one-time import.",
        "Focused application support on reusable answers and clear tailoring actions instead of generating generic copy."
      ],
      "engineeringDecisions": [
        "Built the full-stack application with Next.js, TypeScript, Supabase and PostgreSQL.",
        "Used Zod and Vitest to validate boundaries and protect the reliability of analysis workflows.",
        "Used OpenAI and Groq provider adapters behind explicit product rules so AI assistance supports explainable system behaviour."
      ],
      "outcome": "Built and deployed a career workspace for editable career knowledge, evidence-based job analysis, CV selection and reusable application details. The public entry point offers account creation and sign-in; AI-assisted workflows use the user’s own supported provider key.",
      "reflection": "The central design challenge was making AI useful without making it mysterious. The product became clearer once every recommendation had to point back to evidence the user could inspect and correct.",
      "limitations": "Deployment demonstrates an accessible application, not measured adoption or hiring outcomes. Recommendations still require the user to review the underlying career evidence."
    },
    "websiteLabel": "View application",
    "galleryOrder": [],
    "cardTags": [
      "Product Design",
      "Next.js",
      "Supabase"
    ]
  },
  {
    "id": "flexsave-smart-savings",
    "primaryDiscipline": "UX & Interface Design",
    "disciplines": [
      "UX/UI Design",
      "Interaction Design",
      "Prototyping"
    ],
    "archiveOrder": 2,
    "title": "FlexSave – Coupon & Savings Experience",
    "category": "UX Design",
    "year": "2025",
    "featured": true,
    "cardImpact": "Designed a coupon wallet, offer details and sharing interactions in a five-day Figma sprint.",
    "oneLiner": "A mobile UX concept exploring a simpler way to save, organise and use offers and coupons.",
    "summary": "A five-day UX/UI design sprint exploring coupon discovery, organisation and redemption interactions through a high-fidelity Figma prototype. The concept includes a coupon wallet, an add-coupon flow, offer details and social sharing screens.",
    "description": "FlexSave explores how a mobile interface could bring scattered offers into one place. The prototype uses retailer-led coupon cards, offer details, an add-coupon scanning concept and sharing interactions. It is a design deliverable, not a working coupon service or a shipped application.",
    "image": "/images/flexsave/flexsave.png",
    "technologies": [
      "Figma",
      "UI Design",
      "Interaction Design",
      "Prototyping",
      "Design Systems"
    ],
    "liveUrl": "",
    "githubUrl": "",
    "role": "UX/UI Designer",
    "responsibilities": [
      "Defined a focused mobile concept for collecting and organising coupons.",
      "Designed coupon browsing, offer details, add-coupon and sharing interfaces.",
      "Established reusable cards, typography and colour treatments for the prototype.",
      "Created interactive Figma flows to communicate intended interactions.",
      "Delivered high-fidelity screens within a five-day design sprint."
    ],
    "highlights": [
      "Coupon wallet with retailer-led cards and visible redemption actions.",
      "Add-coupon concept using a barcode-scanning interface.",
      "Offer-detail screens with sharing controls.",
      "Social-feed concept with posts, likes and comments."
    ],
    "caseStudy": {
      "eyebrow": "Five-day UX sprint",
      "timeline": "5 days",
      "status": "High-fidelity prototype",
      "problem": "Discounts and coupons can become difficult to organise, remember and use, especially when offers are scattered across different sources.",
      "opportunity": "A mobile experience for collecting, browsing and managing coupons and savings opportunities in one place.",
      "users": [
        "Students",
        "Young professionals",
        "Casual savers"
      ],
      "productThinking": [
        "Kept the sprint focused on finding, storing and using coupons rather than broad financial planning.",
        "Grouped coupon management and social sharing within a mobile experience."
      ],
      "designDecisions": [
        "Used retailer names, discount values and clear actions to establish hierarchy on coupon cards.",
        "Separated the coupon wallet, offer details and add-coupon overlay into distinct interaction states.",
        "Explored sharing controls and a social feed as supporting ways to exchange offers."
      ],
      "outcome": "Delivered a high-fidelity coupon and savings-experience prototype during a five-day design sprint. The screens demonstrate the proposed interface and interaction flows; they do not establish functioning barcode scanning, coupon redemption or measured savings.",
      "reflection": "The short sprint made scope important: a small set of clear coupon interactions was more useful to develop than a broad collection of financial features.",
      "handoffDecisions": [
        "Used reusable interface patterns and a Figma prototype to communicate intended behaviour."
      ]
    },
    "screenshots": [
      {
        "src": "/images/flexsave/fs-all-coups.png",
        "alt": "FlexSave all coupons view - main dashboard showing available savings opportunities",
        "placement": "overview",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/fs-add-coupon.png",
        "alt": "Add-coupon overlay showing a proposed barcode-scanning interaction",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/fs-coup1.png",
        "alt": "Coupon detail concept with a retailer discount, placeholder offer information and sharing controls",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/fs-coup2.png",
        "alt": "FlexSave coupon interaction screen - engaging with savings offers",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/fs-posts.png",
        "alt": "Social-feed concept with placeholder posts, like and comment actions",
        "placement": "process",
        "aspect": "portrait"
      }
    ],
    "status": "High-fidelity prototype",
    "platform": "Mobile interface concept",
    "timeline": "Five-day design sprint · 2025",
    "projectType": "Five-day design sprint / High-fidelity prototype",
    "problem": "Discounts and coupons can become difficult to organise, remember and use, especially when offers are scattered across different sources.",
    "solution": "A mobile experience for collecting, browsing and managing coupons and savings opportunities in one place.",
    "galleryOrder": [
      "/images/flexsave/fs-all-coups.png",
      "/images/flexsave/fs-add-coupon.png",
      "/images/flexsave/fs-coup1.png",
      "/images/flexsave/fs-coup2.png",
      "/images/flexsave/fs-posts.png"
    ],
    "cardTags": [
      "Figma",
      "Interaction Design",
      "Prototyping"
    ]
  },
  {
    "id": "brightspace-learning-experience",
    "primaryDiscipline": "UX & Interface Design",
    "disciplines": [
      "UX Research",
      "Interaction Design",
      "Prototyping"
    ],
    "archiveOrder": 1,
    "featuredOrder": 3,
    "title": "Brightspace Pulse – Growth Hub Resume Builder",
    "category": "UX / Product Design",
    "year": "2025",
    "featured": true,
    "cardImpact": "Owned the Resume Builder experience and helped validate the wider concept through usability testing.",
    "oneLiner": "A career-growth extension for Brightspace Pulse centred on an end-to-end résumé builder.",
    "summary": "A research-led team UX concept extending Brightspace Pulse with career-growth tools, validated through moderated usability testing. I contributed to research and owned the end-to-end Resume Builder design.",
    "description": "Growth Hub explored how Brightspace Pulse could evolve from a learning companion into a platform that also supports employability and professional development. The team proposed Portfolio, Resume Builder, and Connect features, with my main contribution focused on designing the end-to-end Resume Builder experience.",
    "image": "/images/brightspace/brightspace.png",
    "heroFit": "contain",
    "platform": "Brightspace Pulse mobile concept",
    "timeline": "4 weeks · 2025",
    "team": "3 designers",
    "showcaseOverview": "Growth Hub is a concept extension for Brightspace Pulse that helps students showcase work, build professional resumes, and expand their academic network without leaving the university ecosystem.",
    "problem": "Brightspace Pulse helps students manage coursework, deadlines, and notifications, but offers limited support when they begin preparing for internships, placements, or graduate roles.",
    "solution": "The team proposed Growth Hub, a new Brightspace Pulse section containing Portfolio, Resume Builder, and Connect. My focus was the Resume Builder, helping students create, customise, upload, preview, edit, and download CVs directly inside the app.",
    "technologies": [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Product Strategy"
    ],
    "liveUrl": "",
    "githubUrl": "",
    "role": "UX/UI Designer · UX Research Contributor",
    "contributions": {
      "Research & Strategy": [
        "Participated in user research, market research, competitor analysis, and problem definition.",
        "Contributed to the shared Growth Hub concept for portfolio, resume, and networking support.",
        "Conducted moderated usability testing with TU Dublin students and reviewed participant feedback."
      ],
      "Resume Builder Design": [
        "Designed the complete Resume Builder experience from landing page to CV preview and download.",
        "Created user flows, wireframes, high-fidelity mobile UI, and an interactive Figma prototype.",
        "Extended Brightspace Pulse typography, buttons, forms, colour palette, and navigation patterns so the feature felt native."
      ]
    },
    "keyFeatures": [
      "Resume Builder",
      "Template Selection",
      "Upload Existing CV",
      "CV Editing",
      "Resume Preview",
      "Download Resume",
      "Integrated Student Profile",
      "Growth Hub Navigation"
    ],
    "documentLinks": [
      {
        "title": "View Case Study",
        "description": "Read the full Brightspace Pulse Growth Hub case study covering research, design process, testing, and outcomes.",
        "href": "/images/brightspace/BrightSpace Pulse Case Study.pdf",
        "type": "UX case study PDF"
      }
    ],
    "responsibilities": [
      "Conducted UX research and competitor analysis.",
      "Helped define the Growth Hub product concept.",
      "Designed the end-to-end Resume Builder experience.",
      "Created user flows and wireframes.",
      "Designed high-fidelity mobile interfaces in Figma.",
      "Built interactive prototypes for usability testing.",
      "Conducted user testing and analysed participant feedback.",
      "Iterated designs based on research findings."
    ],
    "highlights": [
      "Team UX project extending an existing university product rather than designing from scratch.",
      "Primary ownership of the Resume Builder feature inside the broader Growth Hub concept.",
      "Mobile-first Figma prototype covering CV creation, upload, edit, preview, and download flows.",
      "Moderated usability testing showed strong ratings for navigation, interface clarity, and task completion."
    ],
    "caseStudy": {
      "eyebrow": "University UX concept",
      "timeline": "4 weeks · 2025",
      "status": "High-fidelity prototype",
      "problem": "Brightspace Pulse helps students stay organised with coursework, deadlines, and notifications, but offers little support once students begin preparing for internships, placements, or graduate roles.",
      "opportunity": "Explore how Brightspace Pulse could support both academic success and career development by introducing professional growth features directly within the existing application.",
      "users": [
        "University students",
        "Students preparing for work placement",
        "Career support teams"
      ],
      "productSectionEyebrow": "UX planning",
      "productSectionTitle": "Why Growth Hub belonged inside Brightspace Pulse.",
      "designSectionEyebrow": "Feature design",
      "designSectionTitle": "My Resume Builder ownership.",
      "productThinking": [
        "Explored Brightspace Pulse as an existing student ecosystem rather than creating a separate career product.",
        "Defined Growth Hub around three career-support areas: Portfolio, Resume Builder, and Connect.",
        "Validated the proposed experience through moderated usability testing with TU Dublin students."
      ],
      "designDecisions": [
        "Designed Resume Builder as a native Brightspace Pulse feature rather than a separate tool.",
        "Supported two starting points: building a new CV from templates or uploading an existing CV.",
        "Created flows for template selection, resume creation, editing, preview, and download.",
        "Extended the existing visual language so the new feature felt familiar inside Brightspace Pulse."
      ],
      "outcome": "Delivered a Figma concept for student career support within Brightspace Pulse. The team explored Portfolio, Resume Builder and Connect, with personal design ownership of the Resume Builder and moderated usability testing with TU Dublin students.",
      "reflection": "Working within an existing product taught me how to extend a mature design system instead of designing from scratch. The challenge was introducing useful new functionality while keeping the experience familiar and aligned with existing navigation patterns.",
      "scopeNotes": [
        "No application development was included in this project.",
        "Deliverables focused on UX research, product strategy, user flows, wireframes, high-fidelity UI, interactive Figma prototyping, and usability testing."
      ]
    },
    "screenshots": [
      {
        "src": "/images/brightspace/GrowthSketch.png",
        "alt": "Initial sketch exploring the career growth addition inside Brightspace",
        "placement": "overview",
        "aspect": "portrait"
      },
      {
        "src": "/images/brightspace/ResumeSketch.png",
        "alt": "Initial sketch for the resume maker flow",
        "placement": "overview",
        "aspect": "portrait"
      },
      {
        "src": "/images/brightspace/beforeMenu.png",
        "alt": "Before: original Brightspace bottom navigation",
        "placement": "process",
        "aspect": "banner",
        "presentation": "comparison"
      },
      {
        "src": "/images/brightspace/AfterMenu.png",
        "alt": "After: updated bottom navigation with the new growth area",
        "placement": "process",
        "aspect": "banner",
        "presentation": "comparison"
      },
      {
        "src": "/images/brightspace/Addprojects.png",
        "alt": "Add projects screen for showcasing university work in a student portfolio",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/brightspace/BuildCV1.png",
        "alt": "Finished Build CV interface with Academic, Functional, General, Creative, Modern and Career Change template choices",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/brightspace/Connect Home Screen.png",
        "alt": "Networking home screen for connecting with people and career support",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/brightspace/GP Offer List.png",
        "alt": "Career opportunities screen showing available growth and job-related offers",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/brightspace/Open Resume Tab.png",
        "alt": "Resume navigation offering build, edit, upload, view and download actions",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/brightspace/Reference Screenshot.png",
        "alt": "Professor reference screen for notes and academic recommendations",
        "placement": "features",
        "aspect": "portrait"
      }
    ],
    "status": "High-fidelity prototype",
    "projectType": "University team UX project",
    "galleryOrder": [
      "/images/brightspace/BuildCV1.png",
      "/images/brightspace/Open Resume Tab.png",
      "/images/brightspace/ResumeSketch.png",
      "/images/brightspace/GrowthSketch.png",
      "/images/brightspace/beforeMenu.png",
      "/images/brightspace/AfterMenu.png"
    ],
    "cardTags": [
      "Figma",
      "Interaction Design",
      "Prototyping"
    ]
  },
  {
    "id": "portfolio-v3",
    "primaryDiscipline": "Frontend & Creative Development",
    "disciplines": [
      "Frontend Engineering",
      "Interface Design"
    ],
    "archiveOrder": 2,
    "title": "Portfolio v3 – Interactive Personal Site",
    "category": "Frontend Development",
    "year": "2025",
    "featured": false,
    "oneLiner": "A personally designed and developed portfolio focused on clear project storytelling, visual hierarchy, responsive layouts and interactive frontend experiences.",
    "summary": "A design-and-development exercise in organising multidisciplinary work, shaping visual hierarchy and translating interaction decisions into reusable Next.js and React components.",
    "description": "The current portfolio uses a single visual theme with shared CSS tokens, a subtle ambient background and responsive layouts. Project cards and case studies organise the work around problems, contributions, decisions and outcomes.",
    "image": "/images/portfolio/portfolio.png",
    "technologies": [
      "Next.js",
      "React",
      "Motion",
      "Tailwind CSS"
    ],
    "liveUrl": "https://hrishivuk.com",
    "githubUrl": "https://github.com/hrishivuk/developer-portfolio",
    "role": "Frontend Developer · Visual Design",
    "responsibilities": [
      "Designed the information architecture and visual hierarchy around project storytelling.",
      "Built reusable page layouts, project cards and case-study components with Next.js and React.",
      "Implemented Motion transitions, ambient backgrounds and responsive interface states.",
      "Applied keyboard-focus, reduced-motion and form-feedback considerations."
    ],
    "highlights": [
      "Single visual theme built with shared design tokens.",
      "Reusable PageContainer alignment and responsive card grids.",
      "Structured case studies covering contribution, decisions and outcomes."
    ],
    "caseStudy": {
      "eyebrow": "Personal product system",
      "timeline": "2025",
      "status": "Live portfolio",
      "problem": "The previous portfolio was functional but did not fully express the overlap between design thinking, frontend craft, and product storytelling.",
      "opportunity": "Turn the portfolio into a product experience that helps recruiters understand how the work was shaped, not just what tools were used.",
      "users": [
        "Recruiters",
        "Hiring managers",
        "Product teams"
      ],
      "productThinking": [
        "Audited the information architecture around recruiter scanning behavior.",
        "Moved from a vertical card stack toward editorial project storytelling.",
        "Repositioned the site around product building from idea to production."
      ],
      "designDecisions": [
        "Reduced repeated card patterns and introduced stronger section contrast.",
        "Adopted a single authored dark theme as the default visual identity.",
        "Used large typography and restrained motion to make the work easier to scan."
      ],
      "engineeringDecisions": [
        "Kept the redesign within the existing Next.js app structure.",
        "Centralized visual tokens and reusable studio utilities in global CSS.",
        "Moved homepage project rendering to Next Image for stronger media performance."
      ],
      "outcome": "The redesign reframes the site as a product/design engineering portfolio instead of a conventional React portfolio.",
      "reflection": "The main lesson was restraint: the strongest portfolio moments come from hierarchy and story before decoration.",
      "limitations": "Keyboard and reduced-motion improvements are part of ongoing accessibility work; this is not a claim of complete WCAG conformance."
    },
    "status": "Live portfolio",
    "platform": "Responsive website",
    "websiteLabel": "View website",
    "galleryOrder": [],
    "cardTags": [
      "Next.js",
      "React",
      "Motion"
    ]
  },
  {
    "id": "findaside-football-planner",
    "primaryDiscipline": "Frontend & Creative Development",
    "disciplines": [
      "Frontend Engineering",
      "Interface Design"
    ],
    "archiveOrder": 1,
    "featuredOrder": 4,
    "title": "FindAside – Football Match Planner",
    "category": "Frontend Development",
    "year": "2025",
    "featured": true,
    "cardImpact": "Contributed responsive game-management interfaces and developed the Next.js marketing website.",
    "oneLiner": "Frontend contribution to a sports game-management platform and its marketing website.",
    "summary": "Contributed to the frontend experience of a sports game-management platform, building responsive interfaces for game creation, player coordination, team organisation and payment-related workflows. Also developed the product’s Next.js marketing website.",
    "description": "Professional contract work associated with Pixel Forge Design Ltd in 2025. The scope covered React application interfaces, reusable UI components and a Next.js marketing website using Tailwind CSS v4. Exposure to Node.js/Express and Stripe-related tasks is distinct from ownership of backend or payment processing integrations.",
    "image": "/images/findaside/findaside.png",
    "heroFit": "contain",
    "platform": "Responsive web app",
    "timeline": "2025 · Pixel Forge contract work",
    "showcaseOverview": "Frontend interfaces for hosts and players, covering onboarding, dashboards, game creation and discovery, player coordination, team organisation and payment-related flows.",
    "problem": "Casual football organizers often coordinate through scattered messages, manual player lists, unclear payment status, and repeated setup work for each game.",
    "solution": "Responsive interfaces that organise game setup, discovery, player coordination, team management and payment-related information into clearer workflows.",
    "technologies": [
      "React",
      "Next.js",
      "Tailwind CSS v4",
      "JavaScript",
      "Reusable UI Components"
    ],
    "liveUrl": "https://findaside.app/",
    "githubUrl": "",
    "role": "Frontend Developer · Product UI Contributor",
    "contributions": {
      "Application interfaces": [
        "Built and refined responsive React interfaces for onboarding, dashboards, game creation, discovery, player management and payment-related flows.",
        "Developed reusable UI components and layouts for desktop and mobile.",
        "Worked with empty states, loading states, dialogs and confirmation flows to communicate interface behaviour."
      ],
      "Marketing website": [
        "Developed the product’s Next.js marketing website using Tailwind CSS v4.",
        "Translated product information into responsive marketing-page sections."
      ]
    },
    "keyFeatures": [
      "Game-creation interfaces",
      "Game discovery and detail views",
      "Player and team organisation",
      "Payment-related interfaces",
      "Responsive layouts",
      "Marketing website"
    ],
    "websiteLinks": [
      {
        "title": "View website",
        "description": "Visit the FindAside website.",
        "href": "https://findaside.app/",
        "type": "Website"
      }
    ],
    "responsibilities": [
      "Built and refined responsive React interfaces for onboarding, dashboards, game creation, discovery, player management and payment-related flows.",
      "Developed reusable UI components and layouts for desktop and mobile.",
      "Worked with empty states, loading states, dialogs and confirmation flows to communicate interface behaviour.",
      "Developed the product’s Next.js marketing website using Tailwind CSS v4.",
      "Translated product information into responsive marketing-page sections."
    ],
    "highlights": [
      "Professional frontend contribution within a product team.",
      "Responsive application interfaces and reusable UI components.",
      "Next.js and Tailwind CSS v4 marketing website."
    ],
    "caseStudy": {
      "eyebrow": "Contract frontend build",
      "timeline": "2025",
      "status": "Contract project",
      "problem": "Hosts and players needed clear interfaces for organising and joining games, coordinating participants and understanding payment-related information.",
      "opportunity": "Translate product requirements into responsive application interfaces and communicate the product through its marketing website.",
      "users": [
        "Match hosts",
        "Players"
      ],
      "productSectionEyebrow": "Build context",
      "productSectionTitle": "What the frontend needed to support.",
      "designSectionEyebrow": "Frontend scope",
      "designSectionTitle": "The screens and flows I implemented.",
      "productThinking": [
        "Separated host-oriented game-management interfaces from player discovery and joining flows.",
        "Kept game, player and payment-related information understandable across desktop and mobile."
      ],
      "designDecisions": [
        "Used reusable components and responsive layouts to maintain consistency across workflows.",
        "Represented loading, empty and confirmation states alongside the main interface flows."
      ],
      "engineeringDecisions": [
        "Worked on the React application’s user-facing interfaces and reusable components.",
        "Developed the marketing website using Next.js and Tailwind CSS v4."
      ],
      "outcome": "Contributed application interfaces for sports game-management workflows and developed the Next.js marketing website during professional contract work. The case study describes frontend delivery within a team, rather than ownership of the entire platform.",
      "reflection": "Working across application screens and marketing pages reinforced the importance of clear states, consistent components and communication with the wider product team.",
      "scopeNotes": [
        "Exposure included Node.js/Express and Stripe-related tasks. Personal ownership of completed backend, authentication, map or payment-processing integrations is not asserted."
      ]
    },
    "screenshots": [
      {
        "src": "/images/findaside/FSUpcoming.png",
        "alt": "Upcoming games screen with map view and empty-state game schedule",
        "placement": "overview",
        "aspect": "wide"
      },
      {
        "src": "/images/findaside/FSBooking.png",
        "alt": "Booking screen showing match details and location context",
        "placement": "overview",
        "aspect": "wide"
      },
      {
        "src": "/images/findaside/FSCreate.png",
        "alt": "Create game form built for hosts to add match details",
        "placement": "features",
        "aspect": "wide"
      },
      {
        "src": "/images/findaside/FSGame.png",
        "alt": "Game detail screen with match information and join action",
        "placement": "features",
        "aspect": "wide"
      },
      {
        "src": "/images/findaside/FSGroup.png",
        "alt": "Group screen for organizing players around a match",
        "placement": "process",
        "aspect": "wide"
      },
      {
        "src": "/images/findaside/FSPayments.png",
        "alt": "Payments screen for tracking match-related payment activity",
        "placement": "features",
        "aspect": "wide"
      }
    ],
    "status": "Contract project",
    "websiteLabel": "View website",
    "galleryOrder": [
      "/images/findaside/FSUpcoming.png",
      "/images/findaside/FSBooking.png",
      "/images/findaside/FSCreate.png",
      "/images/findaside/FSGame.png",
      "/images/findaside/FSGroup.png",
      "/images/findaside/FSPayments.png"
    ],
    "cardTags": [
      "React",
      "Next.js",
      "Tailwind CSS"
    ]
  },
  // {
  //   id: "android-expense-tracker",
  //   title: "Android Expense Tracker",
  //   category: "Android Development",
  //   year: "2023",
  //   summary:
  //     "A mobile app concept for tracking daily expenses with category breakdowns, simple input flows, and an interface tuned for one-handed use.",
  //   description:
  //     "The Android Expense Tracker experiment focuses on making expense input as fast as possible. The interface is optimized for quick-add actions and simple visual breakdowns rather than complex budgeting rules.",
  //   image: "",
  //   technologies: ["React Native", "JavaScript", "Firebase"],
  //   liveUrl: "",
  //   githubUrl: "",
  //   role: "Mobile Developer",
  //   responsibilities: [
  //     "Built core screens and navigation structure in React Native.",
  //     "Integrated Firebase as a simple backend for storing expenses.",
  //     "Explored input patterns that work well on small screens.",
  //   ],
  //   highlights: [
  //     "Quick-add flow with minimal required fields.",
  //     "Simple category visualization instead of heavy analytics.",
  //     "Concept built to explore mobile UX patterns.",
  //   ],
  // },
  // {
  //   id: "ghost-mouse-interaction",
  //   title: "Shader Trail Experiment",
  //   category: "Creative Digital Media",
  //   year: "2025",
  //   summary:
  //     "A creative coding experiment: a WebGL shader that turns mouse movement into soft, colourful trails — explored for interactive backgrounds.",
  //   description:
  //     "Built with Three.js and GLSL, this prototype tests how far ambient motion can go before it hurts readability. The learnings informed a calmer mesh-and-grain approach on the live portfolio instead.",
  //   image: "",
  //   technologies: ["Three.js", "GLSL", "WebGL", "JavaScript"],
  //   liveUrl: "",
  //   githubUrl: "",
  //   role: "Creative Technologist",
  //   responsibilities: [
  //     "Implemented the shader pipeline and render targets.",
  //     "Tuned intensity for hero vs. global background usage.",
  //     "Compared full vs. subtle intensity for different page types.",
  //   ],
  //   highlights: [
  //     "Shader pipeline with render targets and noise textures.",
  //     "Led to a simpler CSS ambient layer on the production site.",
  //     "Documents trade-offs between spectacle and accessibility.",
  //   ],
  // },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}

export const projectGroups = [
  "Product Design & Engineering",
  "UX & Interface Design",
  "Frontend & Creative Development",
];

export function getSortedProjects(list = projects) {
  const groupIndex = (project) => {
    const index = projectGroups.indexOf(project.primaryDiscipline);
    return index === -1 ? projectGroups.length : index;
  };
  return [...list].sort((a, b) =>
    groupIndex(a) - groupIndex(b) ||
    (a.archiveOrder ?? Infinity) - (b.archiveOrder ?? Infinity) ||
    a.id.localeCompare(b.id)
  );
}

export function getFeaturedProjects(list = projects) {
  return list.filter((project) => Number.isFinite(project.featuredOrder))
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
}
