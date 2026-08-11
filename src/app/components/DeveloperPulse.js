"use client";

import { useEffect, useState } from "react";

const fallback = {
  project: "Developer portfolio",
  updatedAt: null,
  url: "https://github.com/hrishivuk",
};

function relativeUpdate(value) {
  if (!value) return "Recently updated";

  const elapsedDays = Math.max(
    0,
    Math.floor((Date.now() - new Date(value).getTime()) / 86_400_000),
  );

  if (elapsedDays === 0) return "Updated today";
  if (elapsedDays === 1) return "Updated yesterday";
  if (elapsedDays < 30) return `Updated ${elapsedDays} days ago`;

  return `Updated ${new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(value))}`;
}

export default function DeveloperPulse() {
  const [activity, setActivity] = useState(fallback);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github-activity", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Activity unavailable");
        return response.json();
      })
      .then((data) => setActivity({ ...fallback, ...data }))
      .catch(() => {});

    return () => controller.abort();
  }, []);

  return (
    <div
      className="mt-8 max-w-4xl border-y border-[var(--border-primary)]"
      aria-label="Developer pulse"
    >
      <div className="flex items-center justify-between border-b border-[var(--border-primary)] py-2 font-mono text-[8px] uppercase text-[var(--text-muted)]">
        <span>Developer pulse</span>
        <span>GitHub API</span>
      </div>
      <a
        href={activity.url || fallback.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid min-h-16 items-center gap-2 py-3 sm:grid-cols-[0.25fr_0.45fr_0.3fr] sm:gap-5"
        aria-label={`View the most recently updated repository: ${activity.project}`}
      >
        <p className="font-mono text-[9px] uppercase text-[var(--accent-primary)]">
          <span className="mr-2 inline-block h-1.5 w-1.5 bg-[var(--accent-primary)]" />
          Last shipped
        </p>
        <p className="truncate text-sm font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)]" aria-live="polite">
          {activity.project}
        </p>
        <p className="font-mono text-[9px] uppercase text-[var(--text-muted)] sm:text-right">
          {relativeUpdate(activity.updatedAt)}
        </p>
      </a>
    </div>
  );
}
