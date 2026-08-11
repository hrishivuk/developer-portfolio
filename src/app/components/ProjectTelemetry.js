"use client";

import { useEffect, useState } from "react";

let telemetryRequest;

function getTelemetry() {
  if (!telemetryRequest) {
    telemetryRequest = fetch("/api/project-status")
      .then((response) => {
        if (!response.ok) throw new Error("Project status unavailable");
        return response.json();
      })
      .catch(() => ({}));
  }

  return telemetryRequest;
}

function updatedLabel(value, fallbackYear) {
  if (!value) return fallbackYear ? `Updated ${fallbackYear}` : null;

  return `Updated ${new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(value))}`;
}

export default function ProjectTelemetry({
  projectId,
  fallbackYear,
  hasLiveUrl = false,
  hasSource = false,
}) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    let active = true;
    getTelemetry().then((data) => {
      if (active) setStatus(data[projectId] || null);
    });
    return () => {
      active = false;
    };
  }, [projectId]);

  const liveAvailable = status?.liveAvailable ?? hasLiveUrl;
  const sourceAvailable = status?.sourceAvailable ?? hasSource;
  const updated = updatedLabel(status?.updatedAt, fallbackYear);

  return (
    <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] font-medium uppercase text-[var(--text-secondary)]">
      {liveAvailable ? (
        <span className="inline-flex items-center gap-1.5 text-[var(--accent-primary)]">
          <span
            className={`h-1.5 w-1.5 ${status?.online === false ? "bg-[var(--text-muted)]" : "bg-[var(--accent-primary)]"}`}
            aria-hidden
          />
          {status?.online === false ? "Live link" : "Live"}
        </span>
      ) : null}
      {sourceAvailable ? <span>Source available</span> : null}
      {updated ? <span>{updated}</span> : null}
    </span>
  );
}
