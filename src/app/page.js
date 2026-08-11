"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  FiActivity,
  FiArrowUpRight,
  FiClock,
  FiCloud,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMusic,
  FiRadio,
  FiSend,
} from "react-icons/fi";
import Navbar from "./components/navbar";
import PageContainer from "./components/PageContainer";
import ProjectTransitionLink from "./components/ProjectTransitionLink";
import ResumeDownloadButton from "./components/ResumeDownloadButton";
import SkillsStack from "./components/SkillsStack";
import { getSortedProjects, projects } from "../data/projects";

const navSections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const particles = [
  { left: "6%", top: "18%", size: 2, delay: 0.1, duration: 9.2 },
  { left: "16%", top: "78%", size: 1, delay: 1.6, duration: 10.4 },
  { left: "28%", top: "38%", size: 2, delay: 2.2, duration: 11.8 },
  { left: "42%", top: "12%", size: 2, delay: 0.8, duration: 8.8 },
  { left: "58%", top: "84%", size: 1, delay: 2.9, duration: 12.1 },
  { left: "70%", top: "32%", size: 2, delay: 1.2, duration: 9.8 },
  { left: "82%", top: "68%", size: 1, delay: 3.1, duration: 10.8 },
  { left: "94%", top: "22%", size: 2, delay: 0.4, duration: 12.4 },
  { left: "88%", top: "90%", size: 1, delay: 2.4, duration: 9.6 },
  { left: "52%", top: "52%", size: 1, delay: 1.8, duration: 11.2 },
];

const inputBase =
  "w-full rounded-2xl border px-4 py-3.5 text-sm outline-none focus:border-[var(--border-secondary)] focus:ring-2 focus:ring-white/10";

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionShell({ id, eyebrow, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-16 sm:py-24 ${className}`}
    >
      <PageContainer>
        <div>
          <div className="mb-10">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              <span className="text-2xl leading-none text-[var(--accent-secondary)]">
                *
              </span>
              {eyebrow}
            </p>
          </div>
          {children}
        </div>
      </PageContainer>
    </section>
  );
}

function HeroTitle() {
  return (
    <h1 className="max-w-6xl text-[clamp(3.15rem,7vw,7.2rem)] font-black leading-[0.88] tracking-[-0.055em] text-[var(--text-primary)]">
      Frontend developer
      <span className="mt-2 block font-black tracking-[-0.045em] text-[var(--accent-secondary)]">
        building full-stack products.
      </span>
    </h1>
  );
}

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      setTime(
        new Intl.DateTimeFormat("en-IE", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Europe/Dublin",
        }).format(new Date()),
      );
    }

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2">
      <motion.div
        className="flex items-center gap-2 rounded-full border border-cyan-200/12 bg-black/24 px-3 py-2 text-[10px] font-bold text-cyan-50/90 shadow-[0_0_24px_rgba(53,214,255,0.08)] backdrop-blur-md"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.45 }}
      >
        <FiClock
          className="h-3.5 w-3.5 text-[var(--accent-secondary)]"
          aria-hidden
        />
        <span>DUBLIN</span>
        <span className="font-mono text-cyan-50/80">{time || "00:00:00"}</span>
      </motion.div>
    </div>
  );
}

function Equalizer() {
  return (
    <div className="flex h-7 items-end gap-1" aria-hidden>
      {[0, 1, 2, 3, 4].map((bar) => (
        <motion.span
          key={bar}
          className="w-1.5 rounded-full bg-gradient-to-t from-cyan-300 to-emerald-300 shadow-[0_0_12px_rgba(53,214,255,0.6)]"
          animate={{ height: ["32%", "88%", "44%", "70%", "32%"] }}
          transition={{
            duration: 1.05 + bar * 0.08,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar * 0.1,
          }}
        />
      ))}
    </div>
  );
}

function WeatherIcon() {
  return (
    <motion.div
      className="relative h-9 w-11"
      animate={{ y: [0, -3, 0], rotate: [0, 2, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <motion.span
        className="absolute left-1 top-0 h-6 w-6 rounded-full bg-cyan-200/90 shadow-[0_0_22px_rgba(53,214,255,0.75)]"
        animate={{ opacity: [0.72, 1, 0.72], scale: [1, 1.08, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="absolute bottom-1 left-2 h-4 w-8 rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.28)]" />
      <span className="absolute bottom-1 left-0 h-3 w-5 rounded-full bg-white/70" />
    </motion.div>
  );
}

function getWeatherLine(weather) {
  if (!weather) return "Loading Dublin weather.";
  if (weather._fallback) return "Weather fallback active.";

  const condition = weather.weather?.[0]?.main || "Current weather";
  return `${condition} in ${weather.name || "Dublin"}.`;
}

function FloatingCard({
  className = "",
  title,
  children,
  icon: Icon,
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`absolute z-30 rounded-2xl border border-cyan-200/14 bg-[#071014]/70 p-3.5 text-left shadow-[0_22px_80px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-4 ${className}`}
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{
        opacity: 1,
        y: reduceMotion ? 0 : [0, -8, 0],
        scale: 1,
      }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.025 }}
      transition={{
        opacity: { duration: 0.45, delay },
        scale: { type: "spring", stiffness: 180, damping: 20, delay },
        y: {
          duration: 6.5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_0%,rgba(53,214,255,0.14),transparent_52%)]" />
      <div className="relative">
        <div className="mb-2.5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-50/90 sm:text-[10px]">
          {Icon ? (
            <Icon
              className="h-3.5 w-3.5 text-[var(--accent-secondary)]"
              aria-hidden
            />
          ) : null}
          {title}
        </div>
        {children}
      </div>
    </motion.article>
  );
}

function SpiderHeroArt({ weather }) {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(160);
  const glowY = useMotionValue(160);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24 });
  const artX = useTransform(
    smoothX,
    [-1, 1],
    reduceMotion ? [0, 0] : [-18, 18],
  );
  const artY = useTransform(
    smoothY,
    [-1, 1],
    reduceMotion ? [0, 0] : [-12, 12],
  );
  const cardX = useTransform(
    smoothX,
    [-1, 1],
    reduceMotion ? [0, 0] : [10, -10],
  );
  const cardY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [7, -7]);

  function handlePointerMove(event) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    mouseX.set((pointerX / rect.width) * 2 - 1);
    mouseY.set((pointerY / rect.height) * 2 - 1);
    glowX.set(pointerX - 160);
    glowY.set(pointerY - 160);
    cursorX.set(pointerX - 4);
    cursorY.set(pointerY - 4);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className="group relative min-h-[540px] overflow-hidden rounded-[32px] border border-[var(--border-primary)] bg-[var(--bg-secondary)] shadow-[0_34px_120px_rgba(0,0,0,0.3)] sm:min-h-[590px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Interactive HV typographic identity"
    >
      <motion.div
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-cyan-300/18 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
      <motion.div
        className="pointer-events-none absolute h-2 w-2 rounded-full bg-cyan-100 opacity-0 shadow-[0_0_18px_rgba(53,214,255,0.95)] transition-opacity duration-300 group-hover:opacity-80"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="pointer-events-none absolute h-8 w-8 rounded-full border border-cyan-200/20 opacity-0 shadow-[0_0_30px_rgba(53,214,255,0.18)] transition-opacity duration-300 group-hover:opacity-100"
        style={{ x: cursorX, y: cursorY }}
        animate={
          reduceMotion
            ? undefined
            : { scale: [0.78, 1.18, 0.78], opacity: [0.2, 0.58, 0.2] }
        }
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_58%_36%,rgba(53,214,255,0.2),transparent_34%),radial-gradient(circle_at_28%_76%,rgba(77,255,181,0.13),transparent_30%),radial-gradient(circle_at_78%_72%,rgba(255,31,61,0.1),transparent_26%)]"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.72, 1, 0.78], scale: [1, 1.04, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(53,214,255,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(53,214,255,0.26)_1px,transparent_1px)] bg-[size:30px_30px]"
        animate={
          reduceMotion
            ? undefined
            : { backgroundPosition: ["0px 0px", "30px 30px"] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="spider-noise absolute inset-0 opacity-45" />

      <motion.div className="absolute inset-0 hidden" style={{ x: cardX, y: cardY }}>
        <FloatingCard
          className="left-3 top-4 w-[calc(50%-1rem)] sm:left-5 sm:top-6 sm:w-48"
          icon={FiRadio}
          title="CURRENT STATUS"
          delay={0.16}
        >
          <div className="flex items-center gap-2">
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(77,255,181,0.85)]"
              animate={{ scale: [1, 1.35, 1], opacity: [0.75, 1, 0.75] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <p className="text-sm font-bold text-white">Open to Work</p>
          </div>
          <p className="mt-1 text-xs font-semibold text-cyan-50/90">
            EU & Remote
          </p>
        </FloatingCard>

        <FloatingCard
          className="right-3 top-4 w-[calc(50%-1rem)] sm:right-5 sm:top-12 sm:w-52"
          icon={FiMusic}
          title="CURRENTLY VIBING"
          delay={0.28}
        >
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <motion.p
                className="truncate text-sm font-bold text-white"
                animate={{ opacity: [0.78, 1, 0.78] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Humble
              </motion.p>
              <p className="mt-1 truncate text-xs font-semibold text-cyan-50/90">
                Kendrick Lamar
              </p>
            </div>
            <Equalizer />
          </div>
        </FloatingCard>

        <FloatingCard
          className="bottom-16 left-3 w-[calc(50%-1rem)] sm:bottom-20 sm:left-5 sm:w-48"
          icon={FiCloud}
          title={(weather?.name || "Dublin").toUpperCase()}
          delay={0.4}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-2xl font-black leading-none text-white">
                {weather?.main?.temp ?? 14}°C
              </p>
              <p className="mt-1.5 text-xs font-semibold leading-5 text-cyan-50/90">
                {getWeatherLine(weather)}
              </p>
            </div>
            <WeatherIcon />
          </div>
        </FloatingCard>

        <FloatingCard
          className="bottom-16 right-3 w-[calc(50%-1rem)] sm:bottom-28 sm:right-5 sm:w-52"
          icon={FiActivity}
          title="CURRENT MOOD"
          delay={0.52}
        >
          <div className="space-y-2">
            {["Building.", "Playing Football.", "Learning."].map(
              (item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-xs font-bold text-white/84"
                  animate={{ opacity: [0.54, 1, 0.64] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.42,
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(53,214,255,0.8)]" />
                  {item}
                </motion.div>
              ),
            )}
          </div>
        </FloatingCard>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20"
        style={{ x: artX, y: artY }}
      >
        <div className="absolute left-1/2 top-1/2 flex w-[min(74%,330px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-[360px]">
          <motion.div
            className="absolute top-4 h-72 w-72 rounded-full border border-cyan-200/10 bg-cyan-200/[0.025] shadow-[0_0_80px_rgba(53,214,255,0.16)] sm:h-80 sm:w-80"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.05, 1], rotate: [0, -2, 0] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative h-72 w-60 sm:h-80 sm:w-72"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -14, 0], rotate: [-2.4, 2.2, -2.4] }
            }
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={reduceMotion ? undefined : { scale: 1.035, rotate: 0 }}
          >
            <div className="absolute inset-6 rounded-full bg-[var(--accent-secondary)]/10 blur-3xl" />
            <div
              className="absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 bg-white/10"
              aria-hidden
            />
            <div
              className="absolute left-1/2 top-1/2 h-px w-[88%] -translate-x-1/2 -translate-y-1/2 bg-white/10"
              aria-hidden
            />
            <div className="relative flex h-full items-center justify-center" aria-label="HV monogram">
              <span className="absolute -translate-x-[24%] -translate-y-[5%] text-[11.5rem] font-black leading-none tracking-[-0.14em] text-[var(--text-primary)] sm:text-[13.5rem]">
                H
              </span>
              <span className="absolute translate-x-[27%] translate-y-[7%] text-[13rem] font-black leading-none tracking-[-0.12em] text-[var(--accent-secondary)] sm:text-[15.5rem]">
                V
              </span>
              <span className="absolute bottom-4 right-1 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                HV / 2026
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-x-6 bottom-6 z-30 flex items-end justify-between border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
        <span>Research · Design · Build</span>
        <span className="text-base normal-case font-semibold tracking-normal text-[var(--text-primary)]">
          Make it useful.
        </span>
      </div>

      <LiveClock />
    </motion.div>
  );
}

function HeroVisual() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadWeather() {
      try {
        const response = await fetch("/api/weather");
        if (!response.ok) throw new Error("Weather request failed");

        const data = await response.json();
        if (!ignore) setWeather(data);
      } catch {
        if (!ignore) {
          setWeather({
            name: "Dublin",
            main: { temp: 14 },
            weather: [{ main: "Cloudy" }],
            _fallback: true,
          });
        }
      }
    }

    loadWeather();
    const interval = window.setInterval(loadWeather, 5 * 60 * 1000);

    return () => {
      ignore = true;
      window.clearInterval(interval);
    };
  }, []);

  return <SpiderHeroArt weather={weather} />;
}

function ProgressIndicator({ activeSection, onNavigate }) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <aside className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-3 xl:flex">
      <div className="relative h-32 w-1 overflow-hidden rounded-full bg-white/20">
        <motion.div
          className="absolute left-0 top-0 h-full w-full origin-top rounded-full bg-[var(--accent-secondary)] shadow-[0_0_18px_rgba(77,255,181,0.75)]"
          style={{ scaleY }}
        />
      </div>
      <div className="flex flex-col gap-2">
        {navSections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onNavigate(section.id)}
            className="group relative flex h-5 w-6 items-center justify-center"
            aria-label={`Scroll to ${section.label}`}
          >
            {activeSection === section.id ? (
              <motion.span
                layoutId="progress-active-glow"
                className="absolute h-5 w-6 rounded-full bg-cyan-100/[0.06]"
                transition={{ type: "spring", stiffness: 430, damping: 36 }}
              />
            ) : null}
            <motion.span
              className="relative z-10 h-2 rounded-full"
              animate={{
                width: activeSection === section.id ? 22 : 8,
                backgroundColor:
                  activeSection === section.id
                    ? "var(--accent-secondary)"
                    : "rgba(255,255,255,0.62)",
                boxShadow:
                  activeSection === section.id
                    ? "0 0 14px rgba(77,255,181,0.75)"
                    : "0 0 0 rgba(77,255,181,0)",
              }}
              transition={{ type: "spring", stiffness: 430, damping: 34 }}
            />
          </button>
        ))}
      </div>
    </aside>
  );
}

function EmailRail() {
  return (
    <a
      href="mailto:officialhrishivuk@gmail.com"
      className="fixed bottom-8 left-5 z-40 hidden origin-left -rotate-90 text-xs font-semibold tracking-[0.18em] text-[var(--text-muted)] hover:text-cyan-100 lg:block"
    >
      officialhrishivuk@gmail.com
    </a>
  );
}

function AmbientParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-cyan-100/70 shadow-[0_0_14px_rgba(53,214,255,0.72)]"
          style={{
            left: particle.left,
            top: particle.top,
            height: particle.size,
            width: particle.size,
            opacity: 0.28,
          }}
        />
      ))}
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

      if (!response.ok) throw new Error("Contact request failed");

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
      className="rounded-[28px] border border-[var(--border-primary)] bg-white/[0.018] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8"
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
        <p className="mt-5 text-sm font-medium text-[var(--accent-secondary)]">Message sent. I&apos;ll be in touch soon.</p>
      )}
      {submitStatus === "error" && (
        <p className="mt-5 text-sm font-medium text-red-300">Something went wrong. Email me directly instead.</p>
      )}

      <button type="submit" disabled={isSubmitting} className="mt-7 inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-5 text-sm font-bold text-[var(--bg-primary)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50">
        {isSubmitting ? "Sending..." : "Send message"}
        <FiSend aria-hidden />
      </button>
    </form>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("home");
  const pendingSectionRef = useRef(null);
  const pendingSectionTimerRef = useRef(null);

  const sortedProjects = useMemo(() => getSortedProjects(projects), []);
  const selectedProjects = useMemo(() => {
    const priority = [
      "waypoint-career-intelligence",
      "findaside-football-planner",
      "coach-canvas",
      "portfolio-v3",
    ];

    return priority
      .map((id) => sortedProjects.find((project) => project.id === id))
      .filter(Boolean);
  }, [sortedProjects]);

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
    }, 1200);

    setActiveSection(id);
    scrollToSection(id);
  }

  return (
    <main className="relative overflow-x-hidden bg-[var(--bg-primary)]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="studio-grid absolute inset-0" />
        <div className="studio-cursor-glow absolute inset-[-10%]" />
        <div className="spider-noise absolute inset-0 opacity-35" />
      </div>
      <AmbientParticles />
      <ProgressIndicator
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <EmailRail />

      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          sections={navSections}
          onNavigate={handleNavigate}
        />

        <div className="flex flex-col">

        <section
          id="home"
          className="relative order-1 flex min-h-[82svh] scroll-mt-24 items-center pb-14 pt-28"
        >
          <PageContainer>
            <div className="flex min-h-[calc(82svh-9rem)] items-center py-8">
              <div className="mx-auto w-full max-w-5xl">
                <p className="mb-7 text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-secondary)]">
                  Hrishikesh Varma · Dublin, Ireland
                </p>
                <HeroTitle />
                <p className="mt-9 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl sm:leading-9">
                  I build responsive web and mobile applications with React,
                  Next.js and TypeScript. My UX research and product design
                  background helps me turn complex problems into clear, usable
                  experiences.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-y border-[var(--border-primary)] py-4 text-xs font-bold text-[var(--text-secondary)] sm:text-sm">
                  <span>3+ years in frontend</span>
                  <span>React · Next.js · TypeScript</span>
                  <span>Dublin · Open to opportunities</span>
                </div>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => scrollToSection("projects")}
                    className="group inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-5 text-sm font-bold text-[#0b0c0b] transition-transform hover:-translate-y-0.5"
                  >
                    View development work
                    <FiArrowUpRight aria-hidden />
                  </button>
                  <a
                    href="https://github.com/hrishivuk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full border border-[var(--border-secondary)] px-5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:bg-white/[0.05]"
                  >
                    <FiGithub aria-hidden />
                    GitHub
                  </a>
                  <ResumeDownloadButton
                    className="inline-flex min-h-[3.35rem] items-center justify-center px-2 text-sm font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    Download résumé
                  </ResumeDownloadButton>
                </div>
              </div>

            </div>
          </PageContainer>
        </section>

        <SectionShell id="about" eyebrow="About" className="order-4">
          <div className="space-y-14 border-t border-[var(--border-primary)] pt-9">
            <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
              <div>
                <p className="text-[clamp(1.75rem,3.1vw,2.8rem)] font-black leading-none tracking-[-0.035em] text-[var(--text-primary)]">
                  Curious about people.
                  <span className="mt-2 block font-black text-[var(--accent-secondary)]">
                    Practical about making.
                  </span>
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="studio-pill gap-2">
                    <FiMapPin aria-hidden />
                    Dublin / Remote / Hybrid
                  </span>
                  <span className="studio-pill">
                    MSc Creative Digital Media &amp; UX
                  </span>
                </div>
                <div className="mt-5">
                  <ResumeDownloadButton
                    className="studio-button studio-button-primary shadow-[0_18px_44px_rgba(77,255,181,0.08)] transition-transform hover:-translate-y-0.5"
                  >
                    Download Resume
                  </ResumeDownloadButton>
                </div>
              </div>
              <div className="space-y-5 text-lg leading-8 text-[var(--text-secondary)]">
                <p>
                  I&apos;m Hrishi, a frontend-focused full-stack developer based
                  in Dublin. I enjoy turning complex requirements into
                  responsive, accessible products that feel clear to use.
                </p>
                <p>
                  My background in computer science, UX research and product
                  design helps me understand what to build before working
                  through the architecture, interface and implementation.
                </p>
                <p className="text-sm leading-7 text-[var(--text-muted)]">
                  Around three years of professional frontend experience.
                  Currently completing an MSc in Creative Digital Media &amp; UX
                  at TU Dublin.
                </p>
              </div>
            </div>

          </div>
        </SectionShell>

        <SectionShell id="projects" eyebrow="Selected development projects" className="order-2">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)] font-black leading-[0.92] tracking-[-0.045em] text-[var(--text-primary)]">
              Products, not just
              <span className="block text-[var(--accent-secondary)]">prototypes.</span>
            </h2>
            <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)] lg:pb-1">
              Selected work spanning frontend architecture, full-stack systems,
              mobile development and UX-informed product decisions.
            </p>
          </div>
          <div className="grid gap-5 border-t border-[var(--border-primary)] pt-9 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <motion.article
                key={project.id}
                className="group h-[390px] min-w-0"
                initial={false}
              >
                <ProjectTransitionLink
                  href={`/projects/${project.id}?from=home`}
                  label={`Opening ${getProjectName(project.title)} case study`}
                  className="flex h-full flex-col rounded-[28px] border border-[var(--border-primary)] bg-white/[0.018] p-4 transition-colors duration-300 hover:border-[var(--border-secondary)] hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
                >
                  <div className="flex h-[116px] items-start justify-between gap-4 px-1 pb-4 pt-1">
                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-[1.65rem] font-black leading-[0.95] tracking-[-0.035em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-secondary)]">
                        {getProjectName(project.title)}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm font-semibold leading-5 text-[var(--text-secondary)]">
                        {project.cardImpact ||
                          getProjectDescriptor(project.title) ||
                          project.summary}
                      </p>
                    </div>
                    <span
                      className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-primary)] bg-white/[0.035] text-[var(--text-primary)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <motion.div
                    className="relative min-h-0 flex-1 overflow-hidden rounded-[20px] border border-[var(--border-primary)] bg-[var(--bg-secondary)]"
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${getProjectName(project.title)} project preview`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
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
                  </motion.div>
                </ProjectTransitionLink>
              </motion.article>
            ))}

          </div>
          <div className="mt-7 flex justify-end">
            <Link
              href="/projects"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--border-secondary)] px-5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:bg-white/[0.05]"
            >
              View full project archive
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </SectionShell>

        <SectionShell id="skills" eyebrow="Technical toolkit" className="order-3">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-none tracking-[-0.04em] text-[var(--text-primary)]">
              Core stack
            </h2>
            <p className="max-w-md text-sm leading-6 text-[var(--text-muted)] sm:text-right">
              The tools I use most to take product ideas from interface to data.
            </p>
          </div>
          <div>
            <SkillsStack />
          </div>
        </SectionShell>

        <SectionShell id="contact" eyebrow="Contact" className="order-5">
          <div className="grid gap-10 border-t border-[var(--border-primary)] pt-9 lg:grid-cols-[0.38fr_0.62fr]">
            <aside className="space-y-8">
              <p className="text-lg leading-8 text-[var(--text-secondary)]">
                I&apos;m open to frontend and full-stack development opportunities,
                especially with teams that value thoughtful product craft.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:officialhrishivuk@gmail.com"
                  className="group flex items-center justify-between rounded-2xl border border-[var(--border-primary)] bg-white/[0.018] p-4 transition-colors hover:border-[var(--border-secondary)] hover:bg-white/[0.035]"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
                    <FiMail aria-hidden />
                    Email
                  </span>
                  <FiArrowUpRight className="text-[var(--accent-secondary)]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hrishivuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-[var(--border-primary)] bg-white/[0.018] p-4 transition-colors hover:border-[var(--border-secondary)] hover:bg-white/[0.035]"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
                    <FiLinkedin aria-hidden />
                    LinkedIn
                  </span>
                  <FiArrowUpRight className="text-[var(--accent-secondary)]" />
                </a>
                <a
                  href="https://github.com/hrishivuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-[var(--border-primary)] bg-white/[0.018] p-4 transition-colors hover:border-[var(--border-secondary)] hover:bg-white/[0.035]"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
                    <FiGithub aria-hidden />
                    GitHub
                  </span>
                  <FiArrowUpRight className="text-[var(--accent-secondary)]" />
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
