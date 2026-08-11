"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { pageContainerClassName } from "./PageContainer";

const primarySections = [
  { id: "projects", label: "Work", index: "01" },
  { id: "skills", label: "Stack", index: "02" },
  { id: "about", label: "About", index: "03" },
];

export default function Navbar({ activeSection = "", onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = Boolean(onNavigate);

  function navigateHome(id) {
    setIsOpen(false);
    onNavigate?.(id);
  }

  function renderSection(item, mobile = false) {
    const sharedClass = mobile
      ? "flex min-h-14 items-center justify-between border-b border-[var(--border-primary)] py-3 text-lg font-bold text-[var(--text-primary)]"
      : `relative flex min-h-12 items-center px-3 text-sm font-semibold transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-px ${
          activeSection === item.id
            ? "text-[var(--text-primary)] after:bg-[var(--accent-primary)]"
            : "text-[var(--text-muted)] after:bg-transparent hover:text-[var(--text-primary)]"
        }`;

    const content = (
      <>
        <span>{item.label}</span>
        {mobile ? (
          <span className="font-mono text-xs font-normal text-[var(--accent-primary)]">
            {item.index}
          </span>
        ) : null}
      </>
    );

    return isHome ? (
      <button
        key={item.id}
        type="button"
        onClick={() => navigateHome(item.id)}
        className={sharedClass}
      >
        {content}
      </button>
    ) : (
      <Link
        key={item.id}
        href={`/#${item.id}`}
        onClick={() => setIsOpen(false)}
        className={sharedClass}
      >
        {content}
      </Link>
    );
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-primary)] bg-[var(--bg-primary)]/92 backdrop-blur-md">
        <nav
          className={`${pageContainerClassName()} flex min-h-16 items-center justify-between gap-6`}
          aria-label="Primary navigation"
        >
          {isHome ? (
            <button
              type="button"
              onClick={() => navigateHome("home")}
              className="group flex items-center gap-3 text-left"
            >
              <span className="flex h-8 w-8 items-center justify-center bg-[var(--accent-primary)] text-xs font-black text-[var(--on-accent)]">
                HV
              </span>
              <span className="hidden text-sm font-bold text-[var(--text-primary)] sm:block">
                Hrishikesh Varma
              </span>
            </button>
          ) : (
            <Link href="/" className="group flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center bg-[var(--accent-primary)] text-xs font-black text-[var(--on-accent)]">
                HV
              </span>
              <span className="hidden text-sm font-bold text-[var(--text-primary)] sm:block">
                Hrishikesh Varma
              </span>
            </Link>
          )}

          <div className="hidden items-stretch gap-1 lg:flex">
            {primarySections.map((item) => renderSection(item))}
            {isHome ? (
              <button
                type="button"
                onClick={() => navigateHome("contact")}
                className="ml-3 inline-flex min-h-11 items-center gap-2 bg-[var(--accent-primary)] px-4 text-sm font-bold text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-hover)]"
              >
                Contact <FiArrowUpRight aria-hidden />
              </button>
            ) : (
              <Link
                href="/#contact"
                className="ml-3 inline-flex min-h-11 items-center gap-2 bg-[var(--accent-primary)] px-4 text-sm font-bold text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-hover)]"
              >
                Contact <FiArrowUpRight aria-hidden />
              </Link>
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--border-primary)] text-[var(--text-primary)] lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </nav>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-[var(--bg-primary)] px-5 pt-24 lg:hidden">
          <nav className="mx-auto max-w-xl" aria-label="Mobile navigation">
            {primarySections.map((item) => renderSection(item, true))}
            {isHome ? (
              <button
                type="button"
                onClick={() => navigateHome("contact")}
                className="mt-8 flex min-h-12 w-full items-center justify-between bg-[var(--accent-primary)] px-4 text-sm font-bold text-[var(--on-accent)]"
              >
                Contact <FiArrowUpRight aria-hidden />
              </button>
            ) : (
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 flex min-h-12 items-center justify-between bg-[var(--accent-primary)] px-4 text-sm font-bold text-[var(--on-accent)]"
              >
                Contact <FiArrowUpRight aria-hidden />
              </Link>
            )}
          </nav>
        </div>
      ) : null}
    </>
  );
}
