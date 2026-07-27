import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Navbar from "../../components/navbar";
import PageContainer from "../../components/PageContainer";

function getProjectName(title) {
  return title.split("–")[0].trim();
}

export default function FlexSaveWipShowcase({ project, backHref = "/projects" }) {
  const projectName = getProjectName(project.title);
  const backLabel =
    backHref === "/#projects" ? "Back to selected projects" : "All projects";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
        <div className="spider-noise absolute inset-0 opacity-35" />
      </div>

      <Navbar activeSection="projects" />

      <PageContainer className="relative z-10 pt-24">
        <section className="w-full py-14">
          <Link
            href={backHref}
            className="mb-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-primary)] bg-white/[0.018] px-4 text-xs font-bold text-[var(--text-secondary)] transition-colors hover:border-[var(--border-secondary)] hover:bg-white/[0.04] hover:text-[var(--text-primary)]"
          >
            <FiArrowLeft aria-hidden />
            {backLabel}
          </Link>
          <div className="grid min-h-[calc(100vh-220px)] items-center gap-10 lg:grid-cols-[0.52fr_0.48fr]">
          <div>
            <span className="inline-flex rounded-full border border-[var(--border-secondary)] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--text-secondary)]">
              Case study in progress
            </span>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.86] tracking-[-0.065em] text-[var(--text-primary)]">
              {projectName}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
              {project.oneLiner}
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--text-muted)]">
              The project is being edited into the same concise case-study
              format as the rest of the portfolio. It will return when the
              story and supporting evidence are ready.
            </p>
            <Link
              href={backHref}
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--border-secondary)] px-5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:bg-white/[0.045]"
            >
              Explore finished projects
              <FiArrowRight aria-hidden />
            </Link>
          </div>

          {project.image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[var(--border-primary)] bg-white/[0.02]">
              <Image
                src={project.image}
                alt={`${projectName} preview`}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-contain p-5 opacity-75"
              />
            </div>
          ) : null}
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
