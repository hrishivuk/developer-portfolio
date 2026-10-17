"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { navigationSections } from "../../data/navigation";
import useModalFocus from "./useModalFocus";
import { pageContainerClassName } from "./PageContainer";

const primarySections = navigationSections.filter(section => section.index);

export default function Navbar({ activeSection = "", onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = Boolean(onNavigate);
  const navigationRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  useModalFocus(isOpen, navigationRef, closeMenu, menuButtonRef);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function navigateHome(id) {
    setIsOpen(false);
    if (isOpen) window.requestAnimationFrame(() => onNavigate?.(id));
    else onNavigate?.(id);
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
        aria-current={activeSection === item.id ? "location" : undefined}
      >
        {content}
      </button>
    ) : (
      <Link
        key={item.id}
        href={`/#${item.id}`}
        onClick={() => setIsOpen(false)}
        className={sharedClass}
        aria-current={activeSection === item.id ? "location" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <div ref={navigationRef} role={isOpen ? "dialog" : undefined} aria-modal={isOpen ? true : undefined} aria-label={isOpen ? "Navigation menu" : undefined}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-primary)] bg-[var(--bg-primary)]/92 backdrop-blur-md">
        <nav
          className={`${pageContainerClassName()} flex min-h-16 items-center justify-between gap-6`}
          aria-label="Primary navigation"
        >
          {isHome ? (
            <button
              type="button"
              onClick={() => navigateHome("home")}
              aria-label="Go to homepage"
              className="group flex min-h-11 min-w-11 items-center gap-3 text-left"
            >
              <span className="flex h-8 w-8 items-center justify-center bg-[var(--accent-primary)] text-xs font-black text-[var(--on-accent)]">
                HV
              </span>
              <span className="hidden text-sm font-bold text-[var(--text-primary)] sm:block">
                Hrishikesh Varma
              </span>
            </button>
          ) : (
            <Link href="/" aria-label="Go to homepage" className="group flex min-h-11 min-w-11 items-center gap-3">
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
            ref={menuButtonRef}
            aria-controls={isOpen ? "mobile-navigation" : undefined}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </nav>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-[var(--bg-primary)] px-5 pt-24 lg:hidden">
          <nav id="mobile-navigation" className="mx-auto max-w-xl" aria-label="Mobile navigation">
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
    </div>
  );
}
