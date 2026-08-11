import { NextResponse } from "next/server";

const GITHUB_USER = "hrishivuk";
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "hrishivuk-portfolio",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

function projectName(repository = "") {
  return repository
    .replace(/^.*\//, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export async function GET() {
  try {
    const [eventsResponse, repositoriesResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=30`, {
        headers,
        next: { revalidate: 900 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?type=owner&sort=pushed&per_page=100`,
        { headers, next: { revalidate: 3600 } },
      ),
    ]);

    if (!eventsResponse.ok || !repositoriesResponse.ok) {
      throw new Error("GitHub request failed");
    }

    const events = await eventsResponse.json();
    const repositories = await repositoriesResponse.json();
    const activeRepositories = repositories.filter(
      (repository) => !repository.fork && !repository.archived,
    );
    const push = events.find(
      (event) => event.type === "PushEvent" && event.payload?.commits?.length,
    );
    const repositoryName = push?.repo?.name || activeRepositories[0]?.full_name;
    const repository = activeRepositories.find(
      (item) => item.full_name === repositoryName,
    );
    const commit = push?.payload?.commits?.at(-1);

    return NextResponse.json(
      {
        repository: repositoryName || null,
        project: repositoryName
          ? projectName(repositoryName)
          : "Developer portfolio",
        message: commit?.message?.split("\n")[0] || "Recent project update",
        updatedAt: push?.created_at || repository?.pushed_at || null,
        language: repository?.language || null,
        url: repository?.html_url ||
          (repositoryName ? `https://github.com/${repositoryName}` : null),
        activeProjects: activeRepositories.length,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
        },
      },
    );
  } catch {
    return NextResponse.json(
      {
        repository: null,
        project: "Developer portfolio",
        message: "Recent project update",
        updatedAt: null,
        language: null,
        url: `https://github.com/${GITHUB_USER}`,
        activeProjects: null,
        fallback: true,
      },
      { status: 200 },
    );
  }
}
