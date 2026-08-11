import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/navbar";
import PageContainer from "../components/PageContainer";
import ProjectTelemetry from "../components/ProjectTelemetry";
import ProjectTransitionLink from "../components/ProjectTransitionLink";
import { getSortedProjects, projects } from "../../data/projects";

export const metadata = {
  title: "Development Projects - Hrishikesh Varma",
  description:
    "Frontend, full-stack, mobile and UX-informed product work by Hrishikesh Varma.",
};

function getProjectName(title) {
  return title.split("–")[0].trim();
}

function getProjectDescriptor(title) {
  return title.split("–").slice(1).join("–").trim();
}

export default function ProjectsPage() {
  const allProjects = getSortedProjects(projects);

  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] pb-24 pt-16">
      <Navbar activeSection="projects" />

      <PageContainer className="relative z-10">
        <header className="border-b border-[var(--border-primary)] pb-12 pt-12 sm:pb-16 sm:pt-16">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 border-b border-[var(--border-primary)] text-xs font-bold text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
          >
            <FiArrowLeft aria-hidden />
            Home
          </Link>
          <p className="mt-10 font-mono text-[10px] uppercase text-[var(--accent-primary)] sm:mt-12">
            01 / Project archive
          </p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[0.64fr_0.36fr] lg:items-end lg:gap-12">
            <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,7.5rem)] font-extrabold leading-[0.88] tracking-normal text-[var(--text-primary)]">
              Work built to solve real problems<span className="text-[var(--accent-primary)]">.</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)] lg:pb-2">
              Frontend, full-stack and mobile products shaped by UX research,
              technical constraints and hands-on implementation.
            </p>
          </div>
        </header>

        <section
          className="grid gap-px bg-[var(--border-primary)] sm:grid-cols-2"
          aria-label="All projects"
        >
          {allProjects.map((project, index) => (
            <article key={project.id} className="group min-w-0 bg-[var(--bg-primary)]">
              <ProjectTransitionLink
                href={`/projects/${project.id}?from=projects`}
                label={`Opening ${getProjectName(project.title)} case study`}
                className="flex min-h-[460px] flex-col p-5 transition-colors duration-200 hover:bg-[var(--bg-secondary)] sm:p-6"
              >
                <div className="flex h-[200px] items-start justify-between gap-5 overflow-hidden pb-6 sm:h-[190px]">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-[var(--accent-primary)]">
                      {String(index + 1).padStart(2, "0")} / {project.year}
                    </p>
                    <h2 className="mt-5 text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-none tracking-normal text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)]">
                      {getProjectName(project.title)}
                    </h2>
                    <p className="mt-3 line-clamp-2 min-h-12 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                      {project.cardImpact ||
                        getProjectDescriptor(project.title) ||
                        project.summary}
                    </p>
                    <div className="mt-3 flex max-h-8 flex-wrap gap-x-3 gap-y-1 overflow-hidden font-mono text-[10px] font-medium uppercase text-[var(--text-primary)]">
                      {(project.technologies || []).slice(0, 3).map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--border-primary)] text-[var(--text-primary)] transition-colors group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]">
                    <FiArrowUpRight aria-hidden />
                  </span>
                </div>

                <div className="relative min-h-[240px] flex-1 overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-secondary)]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${getProjectName(project.title)} project preview`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className={`transition-transform duration-200 group-hover:scale-[1.015] ${
                        project.heroFit === "contain"
                          ? "object-contain p-5"
                          : "object-cover"
                      }`}
                    />
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 flex min-h-12 items-center justify-end border-t border-[var(--border-primary)] bg-[var(--bg-primary)]/95 px-3 py-2 backdrop-blur-sm">
                    <ProjectTelemetry
                      projectId={project.id}
                      fallbackYear={project.year}
                      hasLiveUrl={Boolean(project.liveUrl || project.websiteLinks?.length)}
                      hasSource={Boolean(project.githubUrl)}
                    />
                  </div>
                  {project.workInProgress ? (
                    <span className="absolute right-3 top-3 rounded-full bg-[var(--accent-primary)] px-3 py-1.5 font-mono text-[9px] uppercase text-[var(--on-accent)]">
                      In progress
                    </span>
                  ) : null}
                </div>
              </ProjectTransitionLink>
            </article>
          ))}
        </section>
      </PageContainer>
    </main>
  );
}
