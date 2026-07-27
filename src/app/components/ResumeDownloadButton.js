"use client";

import { useEffect, useState } from "react";
import { FiDownload, FiX } from "react-icons/fi";

function downloadResume(resume) {
  const link = document.createElement("a");
  link.href = resume.href;
  link.download = resume.fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function ResumeDownloadButton({
  children = "Download résumé",
  className = "",
  iconClassName = "",
}) {
  const [resumes, setResumes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  async function handleDownloadClick() {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/resumes", { cache: "no-store" });
      if (!response.ok) throw new Error("Could not load resumes");

      const data = await response.json();
      const availableResumes = data.resumes || [];
      setResumes(availableResumes);

      if (availableResumes.length === 1) {
        downloadResume(availableResumes[0]);
      } else if (availableResumes.length > 1) {
        setIsOpen(true);
      } else {
        setError("No resume files are available yet.");
      }
    } catch {
      setError("Resume downloads are temporarily unavailable.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleDownloadClick}
        className={className}
        aria-busy={isLoading}
        aria-haspopup="dialog"
      >
        {children}
        <FiDownload className={iconClassName} aria-hidden />
      </button>

      {error ? (
        <p className="mt-3 text-xs font-semibold text-red-200" role="alert">
          {error}
        </p>
      ) : null}

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className="w-full max-w-md rounded-[28px] border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-selector-title"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="page-eyebrow text-[var(--accent-secondary)]">
                  Resume library
                </p>
                <h2
                  id="resume-selector-title"
                  className="mt-2 text-2xl font-black tracking-[-0.04em] text-[var(--text-primary)]"
                >
                  Choose a version
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-secondary)] hover:text-[var(--text-primary)]"
                aria-label="Close resume selector"
              >
                <FiX aria-hidden />
              </button>
            </div>

            <div className="mt-6 space-y-2">
              {resumes.map((resume) => (
                <button
                  key={resume.fileName}
                  type="button"
                  onClick={() => {
                    downloadResume(resume);
                    setIsOpen(false);
                  }}
                  className="flex min-h-14 w-full items-center justify-between rounded-2xl border border-[var(--border-primary)] bg-white/[0.02] px-4 text-left text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--border-secondary)] hover:bg-white/[0.05]"
                >
                  <span>{resume.label}</span>
                  <FiDownload className="text-[var(--accent-secondary)]" aria-hidden />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
