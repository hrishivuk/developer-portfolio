import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import PageContainer from "../components/PageContainer";
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
    <main className="relative min-h-screen overflow-hidden bg-[#050608] pb-24 pt-8">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
        <div className="spider-noise absolute inset-0 opacity-35" />
      </div>

      <PageContainer className="relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-bold text-white transition-colors hover:border-cyan-200/30 hover:bg-white/[0.06]"
        >
          <FiArrowLeft aria-hidden />
          Back home
        </Link>

        <header className="border-b border-white/10 pb-10 pt-20 sm:pb-14 sm:pt-28">
          <p className="page-eyebrow text-[var(--accent-secondary)]">
            Project archive
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-black leading-[0.86] tracking-[-0.05em] text-white">
            All projects.
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
              <Link
                href={`/projects/${project.id}`}
                className="flex h-[390px] flex-col rounded-[28px] border border-white/10 bg-white/[0.025] p-4 transition-colors duration-300 hover:border-cyan-200/25 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60"
              >
                <div className="flex h-[132px] items-start justify-between gap-4 px-1 pb-4 pt-1">
                  <div className="min-w-0">
                    <h2 className="line-clamp-2 text-[1.8rem] font-black leading-[0.95] tracking-[-0.035em] text-white transition-colors group-hover:text-cyan-100">
                      {getProjectName(project.title)}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm font-semibold leading-5 text-[var(--text-secondary)]">
                      {getProjectDescriptor(project.title) || project.summary}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <FiArrowUpRight aria-hidden />
                  </span>
                </div>

                <div className="relative min-h-0 flex-1 overflow-hidden rounded-[20px] border border-white/10 bg-black/30">
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
                    <span className="rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-cyan-50 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-white/70">
                      {project.year}
                    </span>
                  </div>
                  {project.workInProgress ? (
                    <span className="absolute right-3 top-3 rounded-full bg-yellow-300 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-black shadow-lg">
                      Work in progress
                    </span>
                  ) : null}
                </div>
              </Link>
            </article>
          ))}
        </section>
      </PageContainer>
    </main>
  );
}
