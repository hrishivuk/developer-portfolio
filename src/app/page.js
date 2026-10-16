"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import Navbar from "./components/navbar";
import DeveloperPulse from "./components/DeveloperPulse";
import PageContainer from "./components/PageContainer";
import ProjectTelemetry from "./components/ProjectTelemetry";
import ProjectTransitionLink from "./components/ProjectTransitionLink";
import ResumeDownloadButton from "./components/ResumeDownloadButton";
import SkillsStack from "./components/SkillsStack";
import { navigationSections } from "../data/navigation";
import { getFeaturedProjects } from "../data/projects";

const navSections = navigationSections;

const inputBase =
  "w-full min-h-12 border px-4 py-3 text-sm transition-colors focus:border-[var(--accent-primary)]";

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  node.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  node.focus({ preventScroll: true });
  window.history.replaceState(null, "", `#${id}`);
}

function SectionShell({ id, eyebrow, children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      tabIndex={-1}
      className={`relative scroll-mt-24 py-16 sm:py-24 ${className}`}
    >
      <PageContainer>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 border-b border-[var(--border-primary)] pb-4">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase text-[var(--text-muted)]">
              <span className="h-px w-6 bg-[var(--accent-primary)]" />
              {eyebrow}
            </p>
          </div>
          {children}
        </motion.div>
      </PageContainer>
    </section>
  );
}

function HeroTitle() {
  return (
    <div className="hero-title-wrap">
      <h1 className="hero-title font-extrabold text-[var(--text-primary)]">
        <span className="hero-title-line">
          <span className="hero-word hero-word-design">
            Designing
            <span className="hero-design-frame" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
          </span>{" "}experiences.
        </span>{" "}
        <span className="hero-title-line hero-build-line">
          <span className="hero-word hero-word-build">
            <span className="hero-code-grid" aria-hidden="true" />
            <span className="hero-code-bracket hero-code-open" aria-hidden="true">&lt;</span>
            Building
            <span className="hero-code-bracket hero-code-close" aria-hidden="true">&gt;</span>
          </span>{" "}products<span className="hero-title-period">.</span>
        </span>
      </h1>
    </div>
  );
}

function getProjectName(title) {
  return title.split("–")[0].trim();
}

function getProjectDescriptor(title) {
  return title.split("–").slice(1).join("–").trim();
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const feedbackRef = useRef(null);
  useEffect(() => {
    if (submitStatus) feedbackRef.current?.focus();
  }, [submitStatus]);

  const fieldStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.035)",
    borderColor: "var(--border-primary)",
    color: "var(--text-primary)",
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok || result.accepted !== true) throw new Error("Contact request failed");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="border-t border-[var(--border-primary)] pt-6 sm:pt-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="page-eyebrow mb-2 block">Name</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required className={inputBase} style={fieldStyle} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="page-eyebrow mb-2 block">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className={inputBase} style={fieldStyle} placeholder="you@email.com" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="page-eyebrow mb-2 block">Subject</label>
        <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} required className={inputBase} style={fieldStyle} placeholder="Role, product, or hello" />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="page-eyebrow mb-2 block">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={7} className={`${inputBase} resize-y`} style={fieldStyle} placeholder="Tell me what you are building or hiring for..." />
      </div>

      {submitStatus === "success" && (
        <p ref={feedbackRef} tabIndex={-1} role="status" className="mt-5 text-sm font-medium text-[var(--accent-secondary)]">Message submitted successfully.</p>
      )}
      {submitStatus === "error" && (
        <p ref={feedbackRef} tabIndex={-1} role="alert" className="mt-5 text-sm font-medium text-red-300">Your message could not be submitted. <a className="underline" href="mailto:officialhrishivuk@gmail.com">Email me directly instead.</a></p>
      )}

      <button type="submit" disabled={isSubmitting} className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--accent-primary)] px-5 text-sm font-bold text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-50">
        {isSubmitting ? "Sending..." : "Send message"}
        <FiSend aria-hidden />
      </button>
    </form>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const pendingSectionRef = useRef(null);
  const pendingSectionTimerRef = useRef(null);

  const selectedProjects = useMemo(() => getFeaturedProjects(), []);

  useEffect(() => {
    const sectionNodes = navSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    let frameId;

    function updateActiveSection() {
      const activationLine = window.innerHeight * 0.38;
      const currentSection = sectionNodes.reduce((active, node) => {
        const { top } = node.getBoundingClientRect();
        return top <= activationLine ? node.id : active;
      }, sectionNodes[0]?.id || "home");

      const pendingSection = pendingSectionRef.current;
      if (pendingSection && currentSection !== pendingSection) return;
      pendingSectionRef.current = null;
      window.clearTimeout(pendingSectionTimerRef.current);

      setActiveSection((current) =>
        current === currentSection ? current : currentSection,
      );
    }

    function requestUpdate() {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.clearTimeout(pendingSectionTimerRef.current);
    };
  }, []);

  function handleNavigate(id) {
    pendingSectionRef.current = id;
    window.clearTimeout(pendingSectionTimerRef.current);
    pendingSectionTimerRef.current = window.setTimeout(() => {
      pendingSectionRef.current = null;
      window.dispatchEvent(new Event("scroll"));
    }, 1200);

    setActiveSection(id);
    scrollToSection(id);
  }

  return (
    <main className="relative overflow-x-hidden bg-[var(--bg-primary)]">
      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          sections={navSections}
          onNavigate={handleNavigate}
        />

        <div className="flex flex-col">

        <section
          id="home"
          tabIndex={-1}
          className="relative flex min-h-[86svh] scroll-mt-24 items-center pb-16 pt-24"
        >
          <PageContainer>
            <div className="flex min-h-[calc(82svh-9rem)] items-center py-8">
              <div className="w-full max-w-6xl">
                <p className="mb-7 font-mono text-[11px] uppercase text-[var(--text-muted)]">
                  <span className="text-[var(--accent-primary)]">00 /</span>{" "}
                  Hrishikesh Varma · UX Engineer · Dublin
                </p>
                <HeroTitle />
                <p className="mt-9 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl sm:leading-9">
                  I&apos;m a{" "}
                  <span className="relative inline-block font-semibold text-[var(--accent-primary)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--accent-primary)] after:transition-transform after:duration-200 hover:after:scale-x-100">
                    UX Engineer
                  </span>{" "}
                  who enjoys working between design and development — understanding problems, shaping interfaces, and bringing them to life with React, Next.js, and TypeScript.
                </p>
                <DeveloperPulse />
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => handleNavigate("projects")}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--accent-primary)] px-5 text-sm font-bold text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    Explore my work
                    <FiArrowUpRight aria-hidden />
                  </button>
                  <a
                    href="https://github.com/hrishivuk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--border-secondary)] px-5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)] hover:bg-[var(--bg-secondary)]"
                  >
                    <FiGithub aria-hidden />
                    GitHub
                  </a>
                  <ResumeDownloadButton
                    className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                  >
                    Download résumé
                  </ResumeDownloadButton>
                </div>
              </div>

            </div>
          </PageContainer>
        </section>

        <SectionShell id="projects" eyebrow="Selected work">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,4.6rem)] font-extrabold leading-[0.94] tracking-normal text-[var(--text-primary)]">
              From the problem to the product.
            </h2>
            <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)] lg:pb-1">
              A mix of products I&apos;ve helped shape and build, UX problems I&apos;ve explored, and interfaces I&apos;ve brought to life.
            </p>
          </div>
          <div className="grid gap-px bg-[var(--border-primary)] md:grid-cols-2">
            {selectedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="group min-h-[430px] min-w-0 bg-[var(--bg-primary)]"
                initial={false}
              >
                <ProjectTransitionLink
                  href={`/projects/${project.id}?from=home`}
                  label={`Opening ${getProjectName(project.title)} case study`}
                  className="flex h-full flex-col p-5 transition-colors duration-200 hover:bg-[var(--bg-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-primary)] focus-visible:-outline-offset-2"
                >
                  <div className="flex h-[190px] items-start justify-between gap-4 overflow-hidden pb-5 sm:h-[180px]">
                    <div className="min-w-0">
                      <p className="mb-4 font-mono text-[10px] text-[var(--accent-primary)]">
                        {String(index + 1).padStart(2, "0")} / {project.year}
                      </p>
                      <h3 className="line-clamp-2 text-[1.75rem] font-extrabold leading-none tracking-normal text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)]">
                        {getProjectName(project.title)}
                      </h3>
                      <p className="mt-3 line-clamp-2 min-h-12 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                        {project.cardImpact ||
                          getProjectDescriptor(project.title) ||
                          project.summary}
                      </p>
                      <div className="mt-3 flex max-h-8 flex-wrap gap-x-3 gap-y-1 overflow-hidden font-mono text-[10px] font-medium uppercase text-[var(--text-primary)]">
                        {(project.cardTags || project.technologies || []).map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                    </div>
                    <span
                      className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--border-primary)] text-[var(--text-primary)] transition-colors group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]"
                      aria-hidden
                    >
                      <FiArrowUpRight />
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
                        projectStatus={project.status}
                        hasLiveUrl={Boolean(project.liveUrl || project.websiteLinks?.length)}
                        hasSource={Boolean(project.githubUrl)}
                      />
                    </div>
                  </div>
                </ProjectTransitionLink>
              </motion.article>
            ))}

          </div>
          <div className="mt-7 flex justify-end">
            <Link
              href="/projects"
              className="group inline-flex min-h-12 items-center gap-2 border border-[var(--border-secondary)] px-5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            >
              View full project archive
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </SectionShell>

        <SectionShell id="skills" eyebrow="Design & engineering toolkit">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-none tracking-[-0.04em] text-[var(--text-primary)]">
              From design to code
            </h2>
            <p className="max-w-md text-sm leading-6 text-[var(--text-muted)] sm:text-right">
              The methods and tools I use to understand a problem, shape an experience and build it.
            </p>
          </div>
          <div>
            <SkillsStack />
          </div>
        </SectionShell>

        <SectionShell id="about" eyebrow="About">
          <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase text-[var(--accent-primary)]">
                Product thinking / Engineering execution
              </p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[0.98] tracking-normal text-[var(--text-primary)]">
                Thoughtful about the problem. Practical about the build.
              </h2>
            </div>
            <div className="border-l border-[var(--border-primary)] pl-6 sm:pl-8">
              <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                I&apos;m a designer-minded developer who likes being involved from the beginning — understanding what we&apos;re trying to solve, exploring how an experience should work, and figuring out how to build it.
              </p>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                My background combines professional frontend development with an MSc in Creative Digital Media &amp; UX. I&apos;ve worked on everything from UX research and Figma prototypes to React applications and mobile products. What I enjoy most is connecting those pieces, especially when a product is still taking shape.
              </p>
              <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                I&apos;ve worked in frontend development at Experion Technologies and Pixel Forge, and completed my MSc at TU Dublin in 2025 with First Class Honours.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <span className="inline-flex min-h-11 items-center gap-2 border border-[var(--border-primary)] px-3 text-xs text-[var(--text-secondary)]">
                  <FiMapPin aria-hidden /> Dublin / Remote / Hybrid
                </span>
                <ResumeDownloadButton className="inline-flex min-h-11 items-center border-b border-[var(--accent-primary)] text-sm font-bold text-[var(--text-primary)] transition-colors hover:text-[var(--accent-primary)]">
                  Download CV
                </ResumeDownloadButton>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="contact" eyebrow="Contact">
          <div className="mb-12 max-w-4xl">
            <h2 className="text-[clamp(2.6rem,6vw,5.8rem)] font-extrabold leading-[0.9] tracking-normal text-[var(--text-primary)]">
              Let&apos;s build something
              <span className="block text-[var(--accent-primary)]">useful.</span>
            </h2>
          </div>
          <div className="grid gap-10 border-t border-[var(--border-primary)] pt-9 lg:grid-cols-[0.38fr_0.62fr]">
            <aside className="space-y-8">
              <p className="text-lg leading-8 text-[var(--text-secondary)]">
                I&apos;m open to UX Engineer, Product Design Engineer, Frontend Engineer and design-minded Product Engineer roles.
              </p>
              <div className="border-t border-[var(--border-primary)]">
                <a
                  href="mailto:officialhrishivuk@gmail.com"
                  className="group flex min-h-14 items-center justify-between border-b border-[var(--border-primary)] px-1 transition-colors hover:text-[var(--accent-primary)]"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
                    <FiMail aria-hidden />
                    Email
                  </span>
                  <FiArrowUpRight className="text-[var(--accent-primary)]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hrishivuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-14 items-center justify-between border-b border-[var(--border-primary)] px-1 transition-colors hover:text-[var(--accent-primary)]"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
                    <FiLinkedin aria-hidden />
                    LinkedIn
                  </span>
                  <FiArrowUpRight className="text-[var(--accent-primary)]" />
                </a>
                <a
                  href="https://github.com/hrishivuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-14 items-center justify-between border-b border-[var(--border-primary)] px-1 transition-colors hover:text-[var(--accent-primary)]"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
                    <FiGithub aria-hidden />
                    GitHub
                  </span>
                  <FiArrowUpRight className="text-[var(--accent-primary)]" />
                </a>
              </div>
            </aside>

            <ContactForm />
          </div>
        </SectionShell>
        </div>
      </div>
    </main>
  );
}
