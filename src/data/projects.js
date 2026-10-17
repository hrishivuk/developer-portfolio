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
    ],
    "deliverable": "Contributed creator-commerce workflows, interface design and frontend implementation for artwork and listing preparation.",
    "nextProjectId": "coach-canvas",
    "cardStatus": "Design & frontend exploration"
  },
  {
    "id": "coach-canvas",
    "revampInProgress": true,
    "primaryDiscipline": "Product Design & Engineering",
    "disciplines": [
      "UX Research",
      "UX/UI Design",
      "Mobile Engineering"
    ],
    "archiveOrder": 1,
    "featuredOrder": 3,
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
    ],
    "deliverable": "Designed and developed a functional mobile prototype with a teammate, including role-aware football club workflows and an Android release build.",
    "nextProjectId": "findaside-football-planner",
    "cardStatus": "Functional mobile prototype"
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
    ],
    "deliverable": "Built and deployed a prototype for career knowledge, job analysis, CV selection and reusable application details.",
    "nextProjectId": "flyh-ai"
  },
  {
    "id": "flexsave-smart-savings",
    "revampInProgress": true,
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
    "cardImpact": "Revisiting an early coupon-wallet concept to explore nearby offers, contextual discovery and clearer navigation.",
    "oneLiner": "An early university coupon-management concept, now being revisited as an offer-discovery experience.",
    "summary": "FlexSave began as a university UX/UI project focused on storing and managing coupons. The original design reflects an early stage of my design-learning journey. I’m now exploring a new direction around nearby offers, contextual recommendations, saving offers and more structured navigation.",
    "description": "The original five-day university concept explored a coupon wallet, offer details, an add-coupon flow and sharing. The redesign is in progress: the current screenshot explores a discovery-led home screen, with location context and more prominent offer presentation. The original screens remain here as historical design evidence, not as my current finished work.",
    "image": "/images/flexsave/flexsave-new.png",
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
      "Original university concept: defined a mobile experience for collecting and organising coupons.",
      "Original university concept: designed coupon browsing, offer details, an add-coupon concept and sharing interfaces.",
      "Original university concept: created reusable interface patterns and interactive Figma flows during a five-day sprint.",
      "Redesign in progress: exploring nearby offers, contextual discovery, offer-saving actions and a more structured navigation model."
    ],
    "highlights": [
      "Original concept: coupon storage and management, with retailer-led cards and offer details.",
      "Original concept: proposed barcode-scanning and social-sharing interfaces.",
      "Current exploration: location context, nearby/trending cues and a featured offer card.",
      "Redesign in progress: saving and recommendation behaviour remain design intentions."
    ],
    "caseStudy": {
      "eyebrow": "Original university concept · Redesign in progress",
      "timeline": "Original concept: five-day sprint · 2025; redesign in progress",
      "status": "Original university concept · Redesign in progress",
      "problem": "The original project explored how to store and manage scattered coupons. The redesign asks how people might discover relevant nearby offers before deciding what to save; this is a design question, not a validated user finding.",
      "opportunity": "Revisit the wallet-led concept with a discovery-led entry point, contextual offer presentation and more structured navigation. The new direction is still being explored.",
      "users": [
        "Students",
        "Young professionals",
        "Casual savers"
      ],
      "productThinking": [
        "Original scope: collect and organise coupons, with sharing as a supporting concept.",
        "New direction: explore discovery of nearby offers, contextual recommendations and saving offers. These are design intentions, not validated or implemented capabilities."
      ],
      "designDecisions": [
        "Information hierarchy: the original wallet leads with coupon counts and stored retailer cards. The new preview leads with location, nearby/trending cues and Today’s Discoveries, shifting attention towards finding an offer.",
        "Offer presentation: the older screens emphasise retailer logos, discount values and redemption controls. The preview uses a larger product image, discount, merchant name, rating and View Details action. Its counts, rating and offer details are sample interface content, not verified live data.",
        "Discoverability: the redesign introduces location and contextual recommendation cues. How offers would be selected or personalised is still an open design question; the screenshot does not demonstrate a recommendation system.",
        "Navigation and saving: the new bottom bar groups Wallet with compass and search icons, and the offer card includes an icon action. The intended discovery and saving flows, icon meanings and active navigation state still need refinement; the preview is not evidence of a completed journey."
      ],
      "outcome": "The original university sprint produced a coupon-wallet prototype. The redesign is ongoing, with one preview exploring nearby offer discovery and a different visual hierarchy. No completed redesign, working offer service, recommendation engine, barcode scanning or coupon redemption is claimed.",
      "reflection": "Revisiting this early project gives me a chance to question the structure as well as the visual treatment. The next step is to work through discovery, offer details and saving as a coherent flow, then evaluate whether the navigation and offer presentation are understandable.",
      "handoffDecisions": [
        "Original deliverable: reusable interface patterns and a Figma prototype communicated the proposed coupon-wallet interactions."
      ],
      "context": "I created FlexSave early in my university design journey. I’m revisiting it now to apply what I’ve learned about UX and interface design, starting with how people discover offers and find their way through the experience. The older screens document where the project began; the new preview shows a direction I’m still working through.",
      "galleryIntro": "The first image is the current redesign preview, a work-in-progress concept. The remaining six images are from the original university project and are preserved as historical design evidence. They show the earlier wallet, coupon details, add-coupon and sharing direction.",
      "limitations": "The redesign has not been presented here as usability-tested or validated. The available evidence is one static preview; no testing results, measured improvements or implemented functionality are documented."
    },
    "screenshots": [
      {
        "src": "/images/flexsave/flexsave-new.png",
        "alt": "Redesign preview — work in progress: nearby and trending cues, a featured offer card and revised bottom navigation. Sample offer data in a static concept preview.",
        "placement": "overview",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/fs-all-coups.png",
        "alt": "Original university concept — FlexSave all coupons view - main dashboard showing available savings opportunities",
        "placement": "overview",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/fs-add-coupon.png",
        "alt": "Original university concept — Add-coupon overlay showing a proposed barcode-scanning interaction",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/fs-coup1.png",
        "alt": "Original university concept — Coupon detail concept with a retailer discount, placeholder offer information and sharing controls",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/fs-coup2.png",
        "alt": "Original university concept — FlexSave coupon interaction screen - engaging with savings offers",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/fs-posts.png",
        "alt": "Original university concept — Social-feed concept with placeholder posts, like and comment actions",
        "placement": "process",
        "aspect": "portrait"
      },
      {
        "src": "/images/flexsave/flexsave.png",
        "alt": "Original university concept — retailer coupon detail preview previously used as the project cover",
        "placement": "process",
        "aspect": "portrait"
      }
    ],
    "status": "Original university concept · Redesign in progress",
    "platform": "Mobile interface concept",
    "timeline": "Original concept: five-day sprint · 2025; redesign in progress",
    "projectType": "University UX/UI concept / Ongoing redesign exploration",
    "problem": "The original project explored how to store and manage scattered coupons. The redesign asks how people might discover relevant nearby offers before deciding what to save; this is a design question, not a validated user finding.",
    "solution": "Revisit the wallet-led concept with a discovery-led entry point, contextual offer presentation and more structured navigation. The new direction is still being explored.",
    "galleryOrder": [
      "/images/flexsave/flexsave-new.png",
      "/images/flexsave/fs-all-coups.png",
      "/images/flexsave/fs-add-coupon.png",
      "/images/flexsave/fs-coup1.png",
      "/images/flexsave/fs-coup2.png",
      "/images/flexsave/fs-posts.png",
      "/images/flexsave/flexsave.png"
    ],
    "cardTags": [
      "Figma",
      "Interaction Design",
      "Prototyping"
    ],
    "deliverable": "Original coupon-wallet prototype; the current redesign is represented by one work-in-progress interface preview.",
    "nextProjectId": "brightspace-learning-experience",
    "workInProgress": true,
    "heroFit": "contain",
    "headerPortrait": true,
    "heroImageAlt": "FlexSave redesign preview — work-in-progress concept for nearby offer discovery, not an implemented product",
    "contributions": {
      "Original university concept": [
        "Designed the coupon wallet, offer-detail screens, add-coupon overlay and sharing concepts.",
        "Created interactive Figma flows and high-fidelity screens during an early five-day university sprint."
      ],
      "Redesign exploration": [
        "Revisiting the information hierarchy to introduce location and discovery before individual offer details.",
        "Exploring more prominent offer imagery, contextual cues, saving offers and clearer navigation. The supplied preview is an early design direction, not a completed flow."
      ]
    }
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
    "featuredOrder": 1,
    "title": "Brightspace Pulse – Growth Hub Resume Builder",
    "category": "UX / Product Design",
    "year": "2025",
    "featured": true,
    "cardImpact": "Owned the Resume Builder experience and helped validate the wider concept through usability testing.",
    "oneLiner": "Designing a Resume Builder experience within Brightspace Pulse to help students prepare for professional opportunities.",
    "summary": "A research-led team UX concept exploring career tools within an existing learning platform. Owned the Resume Builder experience, from user flows and interface design to interactive prototyping and moderated usability testing.",
    "description": "Growth Hub explored how Brightspace Pulse could evolve from a learning companion into a platform that also supports employability and professional development. The team proposed Portfolio, Resume Builder, and Connect features, with my main contribution focused on designing the end-to-end Resume Builder experience.",
    "image": "/images/brightspace/resume-preview.png",
    "heroFit": "contain",
    "platform": "Brightspace Pulse mobile concept",
    "timeline": "4 weeks · 2025",
    "team": "3 designers",
    "showcaseOverview": "Growth Hub is a concept extension for Brightspace Pulse that helps students showcase work, build professional resumes, and expand their academic network without leaving the university ecosystem.",
    "problem": "The team’s product review identified no integrated résumé builder or portfolio space in the Pulse experience they examined. Growth Hub explored whether career preparation could fit alongside coursework; this was a design opportunity, not a proven demand for a shipped feature.",
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
      "Reviewed participant feedback to assess the proposed experience."
    ],
    "highlights": [
      "Team UX project extending an existing university product rather than designing from scratch.",
      "Primary ownership of the Resume Builder feature inside the broader Growth Hub concept.",
      "Mobile-first Figma prototype covering CV creation, upload, edit, preview, and download flows.",
      "Moderated testing and a follow-up survey recorded participant ratings of task feasibility, navigation, UI and component findability."
    ],
    "caseStudy": {
      "eyebrow": "University UX concept",
      "timeline": "4 weeks · 2025",
      "status": "High-fidelity prototype",
      "problem": "The team’s product review identified no integrated résumé builder or portfolio space in the Pulse experience they examined. Growth Hub explored whether career preparation could fit alongside coursework; this was a design opportunity, not a proven demand for a shipped feature.",
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
        "Offer both Build CV and Upload CV so students can start a new document or bring an existing one. The flow diagram and upload screen document these separate entry points.",
        "Show template choices before personal details, making the document style visible before asking students to enter their information.",
        "Keep View CV, Edit CV and Download CV together on the preview so students can review the result and choose their next step.",
        "Reuse Brightspace’s blue palette, Roboto typography, form styles and navigation structure. Familiar patterns were the design rationale for limiting the learning required by the extension; no reduction in learning time was measured."
      ],
      "outcome": "Delivered an interactive Figma Resume Builder covering template selection, personal details, CV upload, preview, editing access and download access within the team’s Growth Hub concept. Moderated sessions and survey feedback tested the prototype; no production application, Brightspace adoption or commercial launch is claimed.",
      "reflection": "Extending an existing product meant balancing a new career workflow with familiar navigation and interface patterns. The testing also highlighted the difference between favourable interface ratings and evidence that a feature meets a sustained need. A next round would examine component findability and document the resulting design changes.",
      "scopeNotes": [
        "No application development was included in this project.",
        "Deliverables focused on UX research, product strategy, user flows, wireframes, high-fidelity UI, interactive Figma prototyping, and usability testing."
      ],
      "context": "Brightspace Pulse supports coursework, deadlines and course updates. In a four-week university brief, a team of three explored adding career-development tools without replacing the app’s existing navigation and visual language. Portfolio and Connect were shared team scope; Resume Builder was my individual design responsibility.",
      "research": [
        {
          "title": "Discovery and product review",
          "body": "Research, market study and user study formed the discovery stage. The documented gap analysis identified reliance on Word, Canva or external websites for CV creation, alongside missing spaces for project portfolios and academic networking. These are the team’s recorded opportunity statements; the case study does not provide interview transcripts or a detailed competitor comparison."
        },
        {
          "title": "From opportunity to a testable concept",
          "body": "The team proposed Portfolio, Resume Builder and Connect within Growth Hub. The assumption to test was that bringing these tools into a familiar student application would be useful and understandable. Later prototype feedback assessed that concept; it did not establish market demand."
        }
      ],
      "flow": [
        {
          "title": "An addition to the existing application",
          "body": "The documented flow places Growth Hub under the existing home experience, then branches into Portfolio, Resume and Connect. The navigation comparison adds Growth while retaining Upcoming, Courses and Notifications."
        },
        {
          "title": "The Resume Builder path",
          "body": "Within Resume, students can Build CV, Edit CV, Upload CV, View CV or Download CV. Build CV leads to template selection and personal details; Upload CV offers a separate entry point for an existing document. The finished preview exposes view, edit and download actions together."
        }
      ],
      "testing": [
        {
          "title": "Method and tasks",
          "body": "Moderated sessions took place on the TU Dublin campus using a Figma prototype, followed by a survey. Participants first explored the interface, then chose one of the three feature areas. The response table records seven responses: four Build CV tasks, two View Project tasks and one Get Endorsed task."
        },
        {
          "title": "What the feedback supports",
          "body": "Across all seven responses, navigation and UI design each received six ratings of 5/5 and one of 4/5. Among the four Build CV responses, task feasibility was rated 4, 5, 5 and 5; component findability was rated 5, 3, 4 and 4. These are self-reported ratings, not observed task-completion rates, and the overall results cover more than Resume Builder."
        },
        {
          "title": "What remained uncertain",
          "body": "Usefulness and willingness to use the wider concept varied. The material does not record a detailed task script, qualitative comments or a traceable sequence of changes after testing. The lower component-findability ratings suggest a useful focus for a further test; they do not establish a specific design defect or a completed iteration."
        }
      ],
      "galleryIntro": "The Resume Builder screens show the individual feature ownership: preview, creation, template selection, entry actions and upload. The original user flow and navigation comparison explain how it fits into Growth Hub. Team features and exploratory sketches remain available below."
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
        "alt": "Team concept: Connect entry screen for endorsements, career opportunities and networking",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/brightspace/GP Offer List.png",
        "alt": "Team concept: career opportunities list within Connect",
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
        "alt": "Existing Brightspace Courses screen used as a visual and navigation reference",
        "placement": "features",
        "aspect": "portrait"
      },
      {
        "src": "/images/brightspace/resume-preview.png",
        "alt": "Resume Builder preview with View CV, Edit CV and Download CV actions; extracted from the original case study, page 10",
        "aspect": "portrait",
        "placement": "process"
      },
      {
        "src": "/images/brightspace/resume-personal-details.png",
        "alt": "Build CV personal-details step with name, desired job title and description fields; original case study, page 10",
        "aspect": "portrait",
        "placement": "process"
      },
      {
        "src": "/images/brightspace/resume-upload.png",
        "alt": "Upload CV entry point for an existing document; original case study, page 10",
        "aspect": "portrait",
        "placement": "process"
      },
      {
        "src": "/images/brightspace/resume-user-flow.png",
        "alt": "Original user flow: existing application to Growth Hub, then Resume and its build, edit, upload, view and download branches; case study, page 7",
        "aspect": "wide",
        "placement": "process"
      },
      {
        "src": "/images/brightspace/brightspace.png",
        "alt": "Supporting overview of the Growth navigation within the course experience",
        "aspect": "wide",
        "placement": "process"
      }
    ],
    "status": "High-fidelity prototype",
    "projectType": "University team UX project",
    "galleryOrder": [
      "/images/brightspace/resume-preview.png",
      "/images/brightspace/resume-personal-details.png",
      "/images/brightspace/BuildCV1.png",
      "/images/brightspace/Open Resume Tab.png",
      "/images/brightspace/resume-upload.png",
      "/images/brightspace/resume-user-flow.png",
      "/images/brightspace/beforeMenu.png",
      "/images/brightspace/AfterMenu.png"
    ],
    "cardTags": [
      "Figma",
      "Interaction Design",
      "Prototyping"
    ],
    "deliverable": "Delivered and tested an interactive Resume Builder prototype as part of a wider student career-growth concept.",
    "nextProjectId": "flyh-ai",
    "heroImageAlt": "Resume Builder prototype preview with View CV, Edit CV and Download CV actions",
    "headerPortrait": true
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
    ],
    "deliverable": "Designed and built a responsive Next.js portfolio with shared components, project case studies and contact workflows.",
    "nextProjectId": "findaside-football-planner"
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
    ],
    "deliverable": "Built responsive game-management interfaces and a Next.js marketing website during professional contract work.",
    "nextProjectId": "brightspace-learning-experience"
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
