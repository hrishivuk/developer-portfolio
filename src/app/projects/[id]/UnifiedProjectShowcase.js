import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiFileText,
  FiGithub,
  FiGlobe,
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
      className={`inline-flex min-h-11 items-center gap-2 px-4 text-sm font-bold transition-colors ${
        primary
          ? "bg-[var(--accent-primary)] text-[var(--on-accent)] hover:bg-[var(--accent-hover)]"
          : "border border-[var(--border-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
      }`}
    >
      <Icon aria-hidden />
      {label}
    </Link>
  );
}

function SectionHeading({ index, title }) {
  return (
    <div>
      <p className="font-mono text-[10px] text-[var(--accent-primary)]">
        {index}
      </p>
      <h2 className="mt-4 max-w-sm text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[0.95] tracking-normal text-[var(--text-primary)]">
        {title}
      </h2>
    </div>
  );
}

export default function UnifiedProjectShowcase({ project, backHref = "/projects" }) {
  const projectName = getProjectName(project.title);
  const backLabel =
    backHref === "/#projects" ? "Selected projects" : "Project archive";
  const website = project.websiteLinks?.[0]?.href || project.liveUrl;
  const source = project.githubUrl;
  const documents = project.documentLinks || [];
  const contributionGroups = project.contributions
    ? Object.entries(project.contributions)
    : project.responsibilities?.length
      ? [["Contribution", project.responsibilities]]
      : [];
  const productDecisions = project.caseStudy?.productThinking || [];
  const engineeringDecisions = project.caseStudy?.engineeringDecisions || [];
  const decisions = [...productDecisions.slice(0, 2), ...engineeringDecisions.slice(0, 2)];
  const screenshots = project.screenshots || [];
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
              <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase">
                <span className="text-[var(--accent-primary)]">
                  {project.category}
                </span>
                <span className="text-[var(--text-muted)]">/ {project.year}</span>
                {project.workInProgress ? (
                  <span className="rounded-full bg-[var(--accent-primary)] px-2.5 py-1 text-[var(--on-accent)]">
                    In progress
                  </span>
                ) : null}
              </div>

              <h1 className="mt-6 text-[clamp(3.2rem,7vw,7rem)] font-extrabold leading-[0.88] tracking-normal text-[var(--text-primary)]">
                {projectName}<span className="text-[var(--accent-primary)]">.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                {project.oneLiner || firstSentence(project.summary)}
              </p>

              <dl className="mt-9 grid border-l border-t border-[var(--border-primary)] sm:grid-cols-3">
                {[
                  ["Platform", project.platform || project.category],
                  ["Role", project.role],
                  ["Timeline", project.timeline || project.year],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-r border-[var(--border-primary)] px-4 py-4">
                    <dt className="font-mono text-[9px] uppercase text-[var(--accent-primary)]">
                      {label}
                    </dt>
                    <dd className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase text-[var(--text-muted)]">
                {(project.technologies || []).slice(0, 8).map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href={website} label="Live product" icon={FiGlobe} primary />
                <ActionLink href={source} label="Source code" icon={FiGithub} primary={!website} />
                {documents.slice(0, 2).map((document) => (
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
              <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-secondary)]">
                <Image
                  src={project.image}
                  alt={`${projectName} product preview`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={project.heroFit === "contain" ? "object-contain p-5" : "object-cover"}
                />
              </div>
            ) : null}
          </header>

          <section className="grid gap-10 border-b border-[var(--border-primary)] py-14 sm:py-20 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <SectionHeading index="01 / CONTEXT" title="Problem and response" />
            <div className="grid gap-px bg-[var(--border-primary)] sm:grid-cols-2">
              <div className="bg-[var(--bg-primary)] p-6 sm:p-8">
                <p className="font-mono text-[9px] uppercase text-[var(--accent-primary)]">Challenge</p>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  {challenge || firstSentence(project.description)}
                </p>
              </div>
              <div className="bg-[var(--bg-primary)] p-6 sm:p-8">
                <p className="font-mono text-[9px] uppercase text-[var(--accent-primary)]">Response</p>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  {response}
                </p>
              </div>
            </div>
          </section>

          {contributionGroups.length ? (
            <section className="grid gap-10 border-b border-[var(--border-primary)] py-14 sm:py-20 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
              <SectionHeading index="02 / CONTRIBUTION" title="What I owned" />
              <div className="border-t border-[var(--border-primary)]">
                {contributionGroups.map(([group, items]) => (
                  <div key={group} className="grid gap-5 border-b border-[var(--border-primary)] py-6 sm:grid-cols-[0.3fr_0.7fr]">
                    <h3 className="font-mono text-[10px] uppercase text-[var(--accent-primary)]">
                      {group}
                    </h3>
                    <ul className="space-y-4">
                      {items.slice(0, 5).map((item) => (
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

          {screenshots.length ? (
            <section className="border-b border-[var(--border-primary)] py-14 sm:py-20">
              <div className="mb-10 grid gap-5 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
                <SectionHeading index="03 / PRODUCT" title="Selected interface" />
                <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                  A focused view of the product states and workflows that carry the core experience.
                </p>
              </div>
              <div className="grid gap-px bg-[var(--border-primary)] sm:grid-cols-2">
                {screenshots.slice(0, 4).map((shot, index) => (
                  <figure key={shot.src} className="bg-[var(--bg-primary)] p-4 sm:p-5">
                    <div className={`relative overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-secondary)] ${shot.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-contain p-2"
                      />
                    </div>
                    <figcaption className="mt-3 flex gap-3 font-mono text-[9px] uppercase leading-5 text-[var(--text-muted)]">
                      <span className="text-[var(--accent-primary)]">{String(index + 1).padStart(2, "0")}</span>
                      {shot.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          {decisions.length ? (
            <section className="grid gap-10 border-b border-[var(--border-primary)] py-14 sm:py-20 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
              <SectionHeading index="04 / DECISIONS" title="How the system took shape" />
              <ol className="border-t border-[var(--border-primary)]">
                {decisions.map((decision, index) => (
                  <li key={decision} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--border-primary)] py-6">
                    <span className="font-mono text-[10px] text-[var(--accent-primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-7 text-[var(--text-secondary)]">{decision}</p>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <section className="grid gap-10 border-b border-[var(--border-primary)] py-14 sm:py-20 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <SectionHeading index="05 / OUTCOME" title="Outcome and reflection" />
            <div className="max-w-3xl space-y-7 text-lg leading-8 text-[var(--text-secondary)]">
              <p>{project.caseStudy?.outcome || project.highlights?.[0] || project.summary}</p>
              {project.caseStudy?.reflection ? (
                <p className="border-l-2 border-[var(--accent-primary)] pl-6 text-[var(--text-primary)]">
                  {project.caseStudy.reflection}
                </p>
              ) : null}
            </div>
          </section>

          <footer className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={backHref}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
            >
              <FiArrowLeft aria-hidden /> {backLabel}
            </Link>
            <div className="flex flex-wrap gap-3">
              <ActionLink href={website} label="Live product" icon={FiGlobe} primary />
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
