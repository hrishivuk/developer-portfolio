import { NextResponse } from "next/server";
import { projects } from "../../../data/projects";

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "hrishivuk-portfolio",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

function repositoryPath(url = "") {
  const match = url.match(/github\.com\/([^/]+\/[^/#?]+)/i);
  return match?.[1]?.replace(/\.git$/, "") || null;
}

async function repositoryStatus(project) {
  const path = repositoryPath(project.githubUrl);
  if (!path) return null;

  try {
    const response = await fetch(`https://api.github.com/repos/${path}`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    const repository = await response.json();
    return {
      updatedAt: repository.pushed_at,
      language: repository.language,
    };
  } catch {
    return null;
  }
}

async function deploymentStatus(project) {
  const url = project.websiteLinks?.[0]?.href || project.liveUrl;
  if (!url) return null;

  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(5000),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function GET() {
  const entries = await Promise.all(
    projects.map(async (project) => {
      const [repository, online] = await Promise.all([
        repositoryStatus(project),
        deploymentStatus(project),
      ]);

      return [
        project.id,
        {
          online,
          updatedAt: repository?.updatedAt || null,
          language: repository?.language || null,
          liveAvailable: Boolean(project.websiteLinks?.[0]?.href || project.liveUrl),
          sourceAvailable: Boolean(project.githubUrl),
        },
      ];
    }),
  );

  return NextResponse.json(Object.fromEntries(entries), {
    headers: {
      "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
    },
  });
}
