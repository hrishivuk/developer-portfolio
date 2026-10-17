import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/navbar";
import PageContainer from "../components/PageContainer";
import ProjectTelemetry from "../components/ProjectTelemetry";
import ProjectTransitionLink from "../components/ProjectTransitionLink";
import { getSortedProjects, projects, projectGroups } from "../../data/projects";

const archiveTitle = "UX Engineering & Design Projects | Hrishikesh Varma";
const archiveDescription = "Product design, UX research, interface design and frontend engineering work by Hrishikesh Varma.";

export const metadata = {
  title: archiveTitle,
  description: archiveDescription,
  openGraph: { title: archiveTitle, description: archiveDescription, url: "/projects" },
  twitter: { card: "summary", title: archiveTitle, description: archiveDescription },
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
              Product design and engineering, UX explorations and frontend work — from understanding a problem to shaping and building an interface.
            </p>
          </div>
        </header>

        {projectGroups.map((group) => (
        <section key={group} className="pt-10" aria-label={group}>
          <h2 className="mb-8 border-b border-[var(--border-primary)] pb-4 font-mono text-[11px] uppercase text-[var(--text-muted)]">{group}</h2>
        <div
          className="grid sm:grid-cols-2"
        >
          {allProjects.filter((project) => project.primaryDiscipline === group).map((project, index) => (
            <article key={project.id} className="group min-w-0 border-b border-[var(--border-primary)] bg-[var(--bg-primary)] sm:odd:border-r">
              <ProjectTransitionLink
                href={`/projects/${project.id}?from=projects`}
                label={`Opening ${getProjectName(project.title)} case study`}
                className="flex h-full min-h-[460px] flex-col p-5 transition-colors duration-200 hover:bg-[var(--bg-secondary)] sm:p-6"
              >
                <div className="flex min-h-[200px] items-start justify-between gap-5 pb-6">
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-[var(--text-muted)]">
                      {String(index + 1).padStart(2, "0")} / {project.year}
                    </p>
                    <h3 className="mt-5 text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-none tracking-normal text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)]">
                      {getProjectName(project.title)}
                    </h3>
                    <p className="mt-3 min-h-12 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                      {project.cardImpact ||
                        getProjectDescriptor(project.title) ||
                        project.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs leading-5 text-[var(--text-muted)]">{project.primaryDiscipline}</span>
                      <ProjectTelemetry projectStatus={project.cardStatus || project.status} revampInProgress={project.revampInProgress} />
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

                </div>
              </ProjectTransitionLink>
            </article>
          ))}
        </div>
        </section>
        ))}
      </PageContainer>
    </main>
  );
}
