import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/navbar";
import PageContainer from "../components/PageContainer";
import ProjectTransitionLink from "../components/ProjectTransitionLink";
import { getSortedProjects, projects } from "../../data/projects";

export const metadata = {
  title: "Projects — Hrishikesh Varma",
  description:
    "Selected UX, product design, research and frontend development projects by Hrishikesh Varma.",
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
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] pb-24 pt-8">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
        <div className="spider-noise absolute inset-0 opacity-35" />
      </div>

      <Navbar activeSection="projects" />

      <PageContainer className="relative z-10 pt-20">
        <header className="border-b border-[var(--border-primary)] pb-10 pt-16 sm:pb-14 sm:pt-24">
          <Link
            href="/"
            className="mb-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-primary)] bg-white/[0.018] px-4 text-xs font-bold text-[var(--text-secondary)] transition-colors hover:border-[var(--border-secondary)] hover:bg-white/[0.04] hover:text-[var(--text-primary)]"
          >
            <FiArrowLeft aria-hidden />
            Back home
          </Link>
          <p className="page-eyebrow text-[var(--accent-secondary)]">
            Project archive
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-black leading-[0.86] tracking-[-0.055em] text-[var(--text-primary)]">
            Work with
            <span className="block font-black text-[var(--accent-secondary)]">
              intention.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
            Product design, UX research and frontend development work—from
            early problem framing through to working digital experiences.
          </p>
        </header>

        <section
          className="grid gap-5 pt-10 sm:grid-cols-2 xl:grid-cols-3"
          aria-label="All projects"
        >
          {allProjects.map((project) => (
            <article key={project.id} className="group min-w-0">
              <ProjectTransitionLink
                href={`/projects/${project.id}?from=projects`}
                label={`Opening ${getProjectName(project.title)} case study`}
                className="flex h-[390px] flex-col rounded-[28px] border border-[var(--border-primary)] bg-white/[0.018] p-4 transition-colors duration-300 hover:border-[var(--border-secondary)] hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
              >
                <div className="flex h-[132px] items-start justify-between gap-4 px-1 pb-4 pt-1">
                  <div className="min-w-0">
                    <h2 className="line-clamp-2 text-[1.8rem] font-black leading-[0.95] tracking-[-0.035em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-secondary)]">
                      {getProjectName(project.title)}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm font-semibold leading-5 text-[var(--text-secondary)]">
                      {project.cardImpact ||
                        getProjectDescriptor(project.title) ||
                        project.summary}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-primary)] bg-white/[0.035] text-[var(--text-primary)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <FiArrowUpRight aria-hidden />
                  </span>
                </div>

                <div className="relative min-h-0 flex-1 overflow-hidden rounded-[20px] border border-[var(--border-primary)] bg-[var(--bg-secondary)]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${getProjectName(project.title)} project preview`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className={`transition-transform duration-500 group-hover:scale-[1.025] ${
                        project.heroFit === "contain"
                          ? "object-contain p-5"
                          : "object-cover"
                      }`}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3">
                    <span className="rounded-full border border-[var(--border-secondary)] bg-[var(--bg-primary)]/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-[var(--text-primary)] backdrop-blur-md">
                      {project.cardCategory || project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-[var(--text-secondary)]">
                      {project.year}
                    </span>
                  </div>
                  {project.workInProgress ? (
                    <span className="absolute right-3 top-3 rounded-full bg-yellow-300 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-black shadow-lg">
                      Work in progress
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
