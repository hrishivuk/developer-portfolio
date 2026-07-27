import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiGlobe,
  FiFileText,
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

function ActionLink({
  href,
  label,
  icon: Icon,
  primary = false,
  placeholder = false,
}) {
  if (!href && !placeholder) return null;

  const className = `inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-bold transition-transform ${
    primary
      ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
      : "border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-white/[0.045]"
  }`;

  if (placeholder) {
    return (
      <span
        className={`${className} cursor-not-allowed opacity-55`}
        title="Website link coming soon"
        aria-disabled="true"
      >
        <Icon aria-hidden />
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${className} hover:-translate-y-0.5`}
    >
      <Icon aria-hidden />
      {label}
    </Link>
  );
}

export default function UnifiedProjectShowcase({ project, backHref = "/projects" }) {
  const projectName = getProjectName(project.title);
  const backLabel =
    backHref === "/#projects" ? "Back to selected projects" : "All projects";
  const caseStudies = project.documentLinks?.filter((link) =>
    /case study/i.test(link.title || ""),
  ) || [];
  const caseStudy = caseStudies[0];
  const additionalCaseStudies = caseStudies.slice(1);
  const report = project.documentLinks?.find((link) =>
    /report/i.test(link.title || ""),
  );
  const website =
    project.websiteLinks?.[0] ||
    (project.liveUrl ? { href: project.liveUrl } : null);
  const source = project.githubUrl ? { href: project.githubUrl } : null;
  const whyBuilt = firstSentence(
    project.caseStudy?.opportunity || project.problem || project.description,
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
        <div className="spider-noise absolute inset-0 opacity-35" />
      </div>

      <Navbar activeSection="projects" />

      <PageContainer className="relative z-10 pt-24">
        <article className="w-full">
          <div className="pt-8 sm:pt-12">
            <Link
              href={backHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-primary)] bg-white/[0.018] px-4 text-xs font-bold text-[var(--text-secondary)] transition-colors hover:border-[var(--border-secondary)] hover:bg-white/[0.04] hover:text-[var(--text-primary)]"
            >
              <FiArrowLeft aria-hidden />
              {backLabel}
            </Link>
          </div>

          <section className="grid gap-10 border-b border-[var(--border-primary)] py-12 sm:py-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)] lg:items-center lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
                {project.category} · {project.year}
              </p>
              <h1 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.86] tracking-[-0.065em] text-[var(--text-primary)]">
                {projectName}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
                {project.oneLiner || firstSentence(project.summary)}
              </p>

              <div className="mt-9 grid gap-6 border-t border-[var(--border-primary)] pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    Type
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-primary)]">
                    {project.platform || project.category}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    Role
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-primary)]">
                    {project.role}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    Built
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-primary)]">
                    {project.timeline || project.year}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {(project.technologies || []).slice(0, 6).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[var(--border-primary)] bg-white/[0.018] px-3 py-1.5 text-[10px] font-bold text-[var(--text-secondary)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink
                  href={caseStudy?.href}
                  label={caseStudy?.buttonLabel || "View case study"}
                  icon={FiFileText}
                  primary
                />
                {additionalCaseStudies.map((document) => (
                  <ActionLink
                    key={document.href}
                    href={document.href}
                    label={document.buttonLabel || `View ${document.title}`}
                    icon={FiFileText}
                  />
                ))}
                <ActionLink
                  href={report?.href}
                  label="View report"
                  icon={FiFileText}
                  primary={!report}
                />
                <ActionLink
                  href={website?.href}
                  label="View website"
                  icon={FiGlobe}
                  placeholder={project.websitePlaceholder && !website?.href}
                />
                <ActionLink
                  href={source?.href}
                  label="View source code"
                  icon={FiGithub}
                />
              </div>
            </div>

            {project.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[var(--border-primary)] bg-[var(--bg-secondary)]">
                <Image
                  src={project.image}
                  alt={`${projectName} project preview`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className={
                    project.heroFit === "contain"
                      ? "object-contain p-5"
                      : "object-cover"
                  }
                />
              </div>
            ) : null}
          </section>

          <section className="grid gap-8 border-b border-[var(--border-primary)] py-12 sm:py-16 lg:grid-cols-[0.3fr_0.7fr]">
            <div>
              <p className="font-mono text-xs text-[var(--text-muted)]">01</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl">
                Why I built this
              </h2>
            </div>
            <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--text-secondary)]">
              <p>{whyBuilt}</p>
              <p>{firstSentence(project.solution || project.summary)}</p>
            </div>
          </section>

          <footer className="flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {backLabel}
              <FiArrowUpRight aria-hidden />
            </Link>
            <div className="flex flex-wrap gap-3">
              <ActionLink
                href={report?.href}
                label="View report"
                icon={FiFileText}
              />
              <ActionLink
                href={caseStudy?.href}
                label={caseStudy?.buttonLabel || "View case study"}
                icon={FiFileText}
              />
              {additionalCaseStudies.map((document) => (
                <ActionLink
                  key={document.href}
                  href={document.href}
                  label={document.buttonLabel || `View ${document.title}`}
                  icon={FiFileText}
                />
              ))}
              <ActionLink
                href={website?.href}
                label="View website"
                icon={FiGlobe}
                placeholder={project.websitePlaceholder && !website?.href}
              />
              <ActionLink
                href={source?.href}
                label="View source code"
                icon={FiGithub}
              />
            </div>
          </footer>
        </article>
      </PageContainer>
    </main>
  );
}
