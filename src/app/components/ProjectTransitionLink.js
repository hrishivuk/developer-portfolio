"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TRANSITION_DURATION = 0.22;

export default function ProjectTransitionLink({
  href,
  className = "",
  children,
  label = "Opening case study",
}) {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [isLeaving, setIsLeaving] = useState(false);

  function handleClick(event) {
    if (
      reduceMotion ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    setIsLeaving(true);
    window.setTimeout(() => {
      router.push(href);
    }, TRANSITION_DURATION * 1000 - 30);
  }

  return (
    <>
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>

      <AnimatePresence>
        {isLeaving ? (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center border-t-2 border-[var(--accent-primary)] bg-[var(--bg-primary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: TRANSITION_DURATION,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-live="polite"
            aria-label={label}
          >
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-[var(--text-muted)]">
              <span className="h-px w-6 bg-[var(--accent-primary)]" />
              <span>{label}</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
