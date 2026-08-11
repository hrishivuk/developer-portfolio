"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiRefreshCw } from "react-icons/fi";
import Navbar from "./components/navbar";
import PageContainer from "./components/PageContainer";

export default function Error({ error, reset }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("Application error:", error);
    }
  }, [error]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--bg-primary)]">
      <div className="relative z-10">
        <Navbar />

        <section className="min-h-screen pt-32 flex items-center">
          <PageContainer>
            <div className="max-w-5xl">
              <p className="mb-5 font-mono text-[10px] uppercase text-[var(--accent-primary)]">Error</p>
              <h1 className="text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[0.9] text-[var(--text-primary)]">Something slipped in the interface.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                The page hit an unexpected state. Try reloading this view, or jump
                back to the one-page portfolio while the issue is checked.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--accent-primary)] px-5 text-sm font-bold text-[var(--on-accent)]"
                >
                  Try again
                  <FiRefreshCw aria-hidden />
                </button>
                <Link href="/#projects" className="inline-flex min-h-12 items-center justify-center border border-[var(--border-secondary)] px-5 text-sm font-bold text-[var(--text-primary)]">
                  View work
                </Link>
              </div>
            </div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}
