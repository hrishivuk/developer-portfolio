import Image from "next/image";
import { getProjectById } from "../../../data/projects";
import { getProjectPresentation } from "../../../lib/projectPresentation";
import Link from "next/link";
import {
  FiArrowLeft,
  FiFileText,
  FiGithub,
  FiGlobe,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";
import Navbar from "../../components/navbar";
import PageContainer from "../../components/PageContainer";

function getProjectName(title) {
  return title.split("–")[0].trim();
}

function firstSentence(value = "") {
  const match = value.match(/^.*?[.!?](?:\s|$)/);
  return (match?.[0] || value).trim();
}

function ActionLink({ href, label, icon: Icon, primary = false }) {
  if (!href) return null;

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-11 max-w-full items-center gap-2 px-4 py-2 text-sm font-bold transition-colors ${
        primary
          ? "bg-[var(--accent-primary)] text-[var(--on-accent)] hover:bg-[var(--accent-hover)]"
          : "border border-[var(--border-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
      }`}
    >
      <Icon className="shrink-0" aria-hidden />
      {label}
    </Link>
  );
}

function SectionHeading({ index, title }) {
  return (
    <div>
      <p className="font-mono text-xs text-[var(--accent-primary)]">
        {index}
      </p>
      <h2 className="mt-4 max-w-sm text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[0.95] tracking-normal text-[var(--text-primary)]">
        {title}
      </h2>
    </div>
  );
}

function ScreenshotGrid({ screenshots }) {
  return (
    <div className="grid sm:grid-cols-2">
      {screenshots.map((shot, index) => (
        <figure key={shot.src} className="min-w-0 border-b border-[var(--border-primary)] bg-[var(--bg-primary)] p-4 sm:odd:border-r sm:p-5">
          <div className={`relative overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-secondary)] ${shot.aspect === "portrait" ? "aspect-[3/4]" : shot.aspect === "banner" ? "aspect-[4/1]" : "aspect-[4/3]"}`}>
            <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-contain p-2" />
          </div>
          <figcaption className="mt-3 flex gap-3 font-mono text-xs uppercase leading-5 text-[var(--text-muted)]">
            <span className="text-[var(--accent-primary)]">{String(index + 1).padStart(2, "0")}</span>
            {shot.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function EvidenceSection({ index, title, items, source, page }) {
  return (
    <section className="grid gap-10 border-b border-[var(--border-primary)] py-14 sm:py-20 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
      <SectionHeading index={index} title={title} />
      <div className="space-y-7">
        {items.map(item => (
          <div key={item.title}>
            <h3 className="text-base font-bold text-[var(--text-primary)]">{item.title}</h3>
            <p className="mt-3 text-base leading-8 text-[var(--text-secondary)]">{item.body}</p>
          </div>
        ))}
        {source ? <Link href={`${source}#page=${page}`} className="inline-flex min-h-11 items-center border-b border-[var(--border-primary)] text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-primary)]">View original case study · page {page}</Link> : null}
      </div>
    </section>
  );
}

export default function UnifiedProjectShowcase({ project, backHref = "/projects" }) {
  const projectName = getProjectName(project.title);
  const backLabel =
    backHref === "/#projects" ? "Selected projects" : "Project archive";
  const website = project.websiteLinks?.[0]?.href || project.liveUrl;
  const source = project.githubUrl;
  const nextProject = getProjectById(project.nextProjectId);
  const documents = project.documentLinks || [];
  const {
    contributions: contributionGroups, decisions, supportingDecisions,
    screenshots, supportingImages, sectionNumber,
  } = getProjectPresentation(project);
  const websiteLabel = project.websiteLabel || "View website";
  const challenge = project.caseStudy?.problem || project.problem;
  const response = project.solution || project.caseStudy?.opportunity || project.summary;

  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] pt-16">
      <Navbar activeSection="projects" />

      <PageContainer className="relative z-10">
        <article>
          <div className="border-b border-[var(--border-primary)] py-6">
            <Link
              href={backHref}
              className="inline-flex min-h-11 items-center gap-2 border-b border-[var(--border-primary)] text-xs font-bold text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            >
              <FiArrowLeft aria-hidden />
              {backLabel}
            </Link>
          </div>

          <header className="grid gap-10 border-b border-[var(--border-primary)] py-12 sm:py-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(320px,0.4fr)] lg:items-center lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase">
                <span className="text-[var(--accent-primary)]">
                  {project.primaryDiscipline || project.category}
                </span>
                <span className="text-[var(--text-muted)]">/ {project.year}</span>
                {project.status ? (
                  <span className="border border-[var(--border-primary)] px-2.5 py-1 text-[var(--text-secondary)]">
                    {project.status}
                  </span>
                ) : null}
              </div>

              <h1 className="mt-6 break-words text-[clamp(2.5rem,7vw,7rem)] font-extrabold leading-[0.88] tracking-normal text-[var(--text-primary)]">
                {projectName}<span className="text-[var(--accent-primary)]">.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                {project.summary || project.oneLiner}
              </p>

              {project.deliverable ? (
                <div className="mt-6 border-l-2 border-[var(--accent-primary)] pl-4">
                  <p className="font-mono text-xs uppercase text-[var(--text-muted)]">Delivered</p>
                  <p className="mt-2 text-base leading-7 text-[var(--text-primary)]">{project.deliverable}</p>
                </div>
              ) : null}

              <dl className="mt-9 grid border-l border-t border-[var(--border-primary)] sm:grid-cols-3">
                {[
                  ["Scope", project.projectType || project.platform || "Digital experience"],
                  ["Role", [project.role, project.team].filter(Boolean).join(" · ")],
                  ["Timeline", project.timeline || project.caseStudy?.timeline || project.year],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-r border-[var(--border-primary)] px-4 py-4">
                    <dt className="font-mono text-xs uppercase text-[var(--accent-primary)]">
                      {label}
                    </dt>
                    <dd className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase text-[var(--text-muted)]">
                {(project.displayTechnologies || project.technologies || []).map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href={website} label={websiteLabel} icon={FiGlobe} primary />
                <ActionLink href={source} label="Source code" icon={FiGithub} primary={!website} />
                {documents.map((document) => (
                  <ActionLink
                    key={document.href}
                    href={document.href}
                    label={document.buttonLabel || document.title}
                    icon={FiFileText}
                  />
                ))}
              </div>
            </div>

            {project.image ? (
              <div className={`relative w-full overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-secondary)] ${project.headerPortrait ? "mx-auto aspect-[3/4] max-w-md" : "aspect-[4/3]"}`}>
                <Image
                  src={project.image}
                  alt={project.heroImageAlt || `${projectName} product preview`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={project.heroFit === "contain" ? "object-contain p-5" : "object-cover"}
                />
              </div>
            ) : null}
          </header>

          {project.caseStudy?.context ? (
            <p className="max-w-3xl pt-10 text-lg leading-8 text-[var(--text-secondary)]">{project.caseStudy.context}</p>
          ) : null}

          <section className="grid gap-10 border-b border-[var(--border-primary)] py-14 sm:py-20 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <SectionHeading index={`${sectionNumber("context")} / CONTEXT`} title="Problem and response" />
            <div className="grid gap-px bg-[var(--border-primary)] sm:grid-cols-2">
              <div className="bg-[var(--bg-primary)] p-6 sm:p-8">
                <p className="font-mono text-xs uppercase text-[var(--accent-primary)]">Challenge</p>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  {challenge || firstSentence(project.description)}
                </p>
              </div>
              <div className="bg-[var(--bg-primary)] p-6 sm:p-8">
                <p className="font-mono text-xs uppercase text-[var(--accent-primary)]">Response</p>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  {response}
                </p>
              </div>
            </div>
          </section>

          {contributionGroups.length ? (
            <section className="grid gap-10 border-b border-[var(--border-primary)] py-14 sm:py-20 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
              <SectionHeading index={`${sectionNumber("contribution")} / CONTRIBUTION`} title="My contribution" />
              <div className="border-t border-[var(--border-primary)]">
                {contributionGroups.map(([group, items]) => (
                  <div key={group} className="grid gap-5 border-b border-[var(--border-primary)] py-6 sm:grid-cols-[0.3fr_0.7fr]">
                    <h3 className="font-mono text-xs uppercase text-[var(--accent-primary)]">
                      {group}
                    </h3>
                    <ul className="space-y-4">
                      {items.map((item) => (
                        <li key={item} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-7 text-[var(--text-secondary)]">
                          <span className="pt-0.5 text-[var(--accent-primary)]">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {[
            ["research", "Discovery and research", 5],
            ["flow", "From Growth Hub to Resume", 7],
          ].map(([key, title, page]) => project.caseStudy?.[key]?.length ? (
            <EvidenceSection key={key} index={`${sectionNumber(key)} / ${key.toUpperCase()}`} title={title} items={project.caseStudy[key]} source={documents[0]?.href} page={page} />
          ) : null)}

          {decisions.length || supportingDecisions.length ? (
            <section className="grid gap-10 border-b border-[var(--border-primary)] py-14 sm:py-20 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
              <SectionHeading index={`${sectionNumber("decisions")} / DECISIONS`} title="How the system took shape" />
              <div>
              <ol className="border-t border-[var(--border-primary)]">
                {decisions.map((decision, index) => (
                  <li key={decision} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--border-primary)] py-6">
                    <span className="font-mono text-xs text-[var(--accent-primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-7 text-[var(--text-secondary)]">{decision}</p>
                  </li>
                ))}
              </ol>
              {supportingDecisions.length ? (
                <details className="mt-6 border-b border-[var(--border-primary)] pb-6">
                  <summary className="cursor-pointer text-sm font-bold text-[var(--text-secondary)]">Product context and reasoning</summary>
                  <ul className="mt-4 space-y-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {supportingDecisions.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </details>
              ) : null}
              </div>
            </section>
          ) : null}

          {screenshots.length || supportingImages.length ? (
            <section className="border-b border-[var(--border-primary)] py-14 sm:py-20">
              <div className="mb-10 grid gap-5 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
                <SectionHeading index={`${sectionNumber("gallery")} / PRODUCT`} title="Selected interface" />
                <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                  {project.caseStudy?.galleryIntro || "A focused view of the product states and workflows that carry the core experience."}
                </p>
              </div>
              <ScreenshotGrid screenshots={screenshots} />
              {supportingImages.length ? (
                <details className="mt-7 border-t border-[var(--border-primary)] pt-5">
                  <summary className="cursor-pointer text-sm font-bold text-[var(--text-secondary)]">Supporting screens and process ({supportingImages.length})</summary>
                  <div className="mt-5"><ScreenshotGrid screenshots={supportingImages} /></div>
                </details>
              ) : null}
            </section>
          ) : null}


          {project.caseStudy?.testing?.length ? (
            <EvidenceSection index={`${sectionNumber("testing")} / TESTING`} title="Testing the prototype" items={project.caseStudy.testing} source={documents[0]?.href} page={11} />
          ) : null}

          <section className="grid gap-10 border-b border-[var(--border-primary)] py-14 sm:py-20 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <SectionHeading index={`${sectionNumber("outcome")} / OUTCOME`} title="Outcome and reflection" />
            <div className="max-w-3xl space-y-7 text-lg leading-8 text-[var(--text-secondary)]">
              {project.caseStudy?.scopeNotes?.map(note => <p key={note} className="text-base leading-7">{note}</p>)}
              <p>{project.caseStudy?.outcome || project.highlights?.[0] || project.summary}</p>
              {project.caseStudy?.limitations ? <p className="text-base leading-7">{project.caseStudy.limitations}</p> : null}
              {project.caseStudy?.reflection ? (
                <p className="border-l-2 border-[var(--accent-primary)] pl-6 text-[var(--text-primary)]">
                  {project.caseStudy.reflection}
                </p>
              ) : null}
            </div>
          </section>

          <div className="flex flex-col gap-4 border-b border-[var(--border-primary)] py-8 sm:flex-row sm:flex-wrap">
            {nextProject ? <ActionLink href={`/projects/${nextProject.id}`} label={`Explore another project: ${getProjectName(nextProject.title)}`} icon={FiArrowRight} /> : null}
            <ActionLink href="/#contact" label="Discuss a role" icon={FiMail} primary />
          </div>

          <footer className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={backHref}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
            >
              <FiArrowLeft aria-hidden /> {backLabel}
            </Link>
            <div className="flex flex-wrap gap-3">
              <ActionLink href={website} label={websiteLabel} icon={FiGlobe} primary />
              <ActionLink href={source} label="Source code" icon={FiGithub} />
              {documents.slice(0, 1).map((document) => (
                <ActionLink key={document.href} href={document.href} label={document.title} icon={FiFileText} />
              ))}
            </div>
          </footer>
        </article>
      </PageContainer>
    </main>
  );
}
