"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

export default function ProjectTransitionLink({ href, className = "", children, label = "Opening case study" }) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [leavingFrom, setLeavingFrom] = useState(null);

  return (
    <>
      <Link href={href} className={className} onClick={(event) => {
        if (!reduceMotion && event.detail !== 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) {
          setLeavingFrom(pathname);
        }
      }}>
        {children}
      </Link>
      <AnimatePresence>
        {leavingFrom === pathname && !reduceMotion ? (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center border-t-2 border-[var(--accent-primary)] bg-[var(--bg-primary)]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            role="status" aria-live="polite"
          >
            <div className="flex items-center gap-3 font-mono text-xs uppercase text-[var(--text-muted)]">
              <span className="h-px w-6 bg-[var(--accent-primary)]" />
              <span>{label}</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
