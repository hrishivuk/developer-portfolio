"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "./components/navbar";
import PageContainer from "./components/PageContainer";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--bg-primary)]">
      <div className="relative z-10">
        <Navbar />

        <section className="min-h-screen pt-32 flex items-center">
          <PageContainer>
            <div className="max-w-5xl">
              <p className="mb-5 font-mono text-[10px] uppercase text-[var(--accent-primary)]">404</p>
              <h1 className="text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[0.9] text-[var(--text-primary)]">This page moved off the canvas.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                The route you opened does not exist anymore. The portfolio now
                lives as one continuous page.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/#projects" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--accent-primary)] px-5 text-sm font-bold text-[var(--on-accent)]">
                  View work
                  <FiArrowUpRight aria-hidden />
                </Link>
                <Link href="/" className="inline-flex min-h-12 items-center justify-center border border-[var(--border-secondary)] px-5 text-sm font-bold text-[var(--text-primary)]">
                  Go home
                </Link>
              </div>
            </div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}
