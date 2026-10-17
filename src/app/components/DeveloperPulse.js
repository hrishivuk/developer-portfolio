"use client";

import { useEffect, useState } from "react";

const fallback = {
  project: "View GitHub profile",
  updatedAt: null,
  url: "https://github.com/hrishivuk",
};

function relativeUpdate(value) {
  if (!value || !Number.isFinite(new Date(value).getTime())) return "Activity unavailable";

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
      className="mt-8 max-w-2xl border-y border-[var(--border-primary)]"
      aria-label="Developer pulse"
    >
      <div className="flex items-center justify-between border-b border-[var(--border-primary)] py-2 font-mono text-xs uppercase text-[var(--text-muted)]">
        <span>Recent code activity</span>
        <span>GitHub</span>
      </div>
      <a
        href={activity.url || fallback.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid min-h-16 items-center gap-2 py-3 sm:grid-cols-[1fr_1.4fr_1fr] sm:gap-5"
        aria-label={activity.updatedAt ? `View repository activity: ${activity.project}` : "View GitHub profile"}
      >
        <p className="font-mono text-xs uppercase text-[var(--accent-primary)]">
          <span className="mr-2 inline-block h-1.5 w-1.5 bg-[var(--accent-primary)]" />
          Public repository
        </p>
        <p className="truncate text-sm font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)]" aria-live="polite">
          {activity.project}
        </p>
        <p className="font-mono text-xs uppercase text-[var(--text-muted)] sm:text-right">
          {relativeUpdate(activity.updatedAt)}
        </p>
      </a>
    </div>
  );
}
