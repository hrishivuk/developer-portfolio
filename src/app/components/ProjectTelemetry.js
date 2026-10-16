"use client";

import { useEffect, useState } from "react";

let telemetryRequest;
function getTelemetry() {
  if (!telemetryRequest) {
    telemetryRequest = fetch("/api/project-status")
      .then(response => {
        if (!response.ok) throw new Error("Project activity unavailable");
        return response.json();
      })
      .catch(() => { telemetryRequest = null; return {}; });
  }
  return telemetryRequest;
}

export default function ProjectTelemetry({ projectId, projectStatus, hasLiveUrl = false, hasSource = false }) {
  const [activity, setActivity] = useState(null);
  useEffect(() => {
    let active = true;
    getTelemetry().then(data => { if (active) setActivity(data[projectId] || null); });
    return () => { active = false; };
  }, [projectId]);
  const date = activity?.updatedAt ? new Date(activity.updatedAt) : null;
  const updated = date && Number.isFinite(date.getTime())
    ? new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(date)
    : null;
  return (
    <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] font-medium uppercase text-[var(--text-secondary)]">
      {projectStatus ? <span className="text-[var(--accent-primary)]">{projectStatus}</span> : null}
      {hasLiveUrl ? <span>Website link</span> : null}
      {hasSource ? <span>Source link</span> : null}
      {updated ? <span>Last code update {updated}</span> : null}
    </span>
  );
}
