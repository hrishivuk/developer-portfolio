"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const primarySections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({
  activeSection = "",
  onNavigate,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = Boolean(onNavigate);

  function navigateHome(id) {
    setIsOpen(false);
    onNavigate?.(id);
  }

  const brand = isHome ? (
    <button
      type="button"
      className="text-sm font-semibold tracking-normal text-[var(--text-primary)]"
      onClick={() => navigateHome("home")}
    >
      hrishi.
    </button>
  ) : (
    <Link
      href="/"
      className="text-sm font-semibold tracking-normal text-[var(--text-primary)]"
    >
      hrishi.
    </Link>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-2 sm:px-3 md:px-4">
        <nav
          className="mx-auto grid min-h-[56px] w-full max-w-full grid-cols-[1fr_auto] items-center rounded-full border px-4 backdrop-blur-xl sm:px-5 md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1320px] 2xl:max-w-[1560px] min-[1920px]:max-w-[1760px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--bg-primary) 82%, transparent)",
            borderColor: "var(--border-primary)",
            color: "var(--text-primary)",
          }}
          aria-label="Primary navigation"
        >
          <div className="flex items-center">{brand}</div>

          <div className="hidden items-center justify-end gap-1 lg:flex">
            {primarySections.map((item) =>
              isHome ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateHome(item.id)}
                  className="relative rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    color:
                      activeSection === item.id
                        ? "var(--text-primary)"
                        : "var(--text-muted)",
                  }}
                >
                  {activeSection === item.id ? (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.065]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-white/[0.065] text-[var(--text-primary)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center justify-self-end rounded-full border border-[var(--border-primary)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-secondary)] hover:bg-white/[0.05] lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </nav>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-[var(--bg-primary)]/96 px-4 pt-24 backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-xl flex-col gap-3"
            aria-label="Mobile navigation"
          >
            {primarySections.map((item, index) =>
              isHome ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateHome(item.id)}
                  className="flex min-h-[64px] items-center justify-between rounded-2xl border border-[var(--border-primary)] bg-white/[0.025] px-5 text-left text-xl font-black text-[var(--text-primary)]"
                >
                  {item.label}
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    0{index + 1}
                  </span>
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-[64px] items-center justify-between rounded-2xl border border-[var(--border-primary)] bg-white/[0.025] px-5 text-xl font-black text-[var(--text-primary)]"
                >
                  {item.label}
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    0{index + 1}
                  </span>
                </Link>
              ),
            )}

          </nav>
        </div>
      ) : null}
    </>
  );
}
