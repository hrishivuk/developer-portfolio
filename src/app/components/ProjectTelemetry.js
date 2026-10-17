// Project maturity is editorial content, not inferred from repository activity.
export default function ProjectTelemetry({ projectStatus, revampInProgress = false }) {
  if (revampInProgress) {
    return (
      <span className="inline-flex items-center border border-[var(--accent-primary)] px-2 py-1 text-xs font-semibold leading-5 text-[var(--accent-primary)]">
        Revamp in progress
      </span>
    );
  }
  if (!projectStatus) return null;
  return <span className="text-xs leading-5 text-[var(--text-secondary)]">{projectStatus}</span>;
}
