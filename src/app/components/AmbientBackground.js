"use client";

export default function AmbientBackground() {
  return (
    <div
      className="ambient-background fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <div className="studio-grid absolute inset-0 opacity-70" />
      <div className="ambient-grain" />
    </div>
  );
}
