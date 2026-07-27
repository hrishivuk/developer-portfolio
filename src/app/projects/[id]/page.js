import { notFound } from "next/navigation";
import FlexSaveWipShowcase from "./FlexSaveWipShowcase";
import UnifiedProjectShowcase from "./UnifiedProjectShowcase";
import { getProjectById, projects } from "../../../data/projects";

function getProjectName(title) {
  return title.split("–")[0].trim();
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${getProjectName(project.title)} — Hrishikesh Varma`,
    description: project.oneLiner || project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  if (project.workInProgress) {
    return <FlexSaveWipShowcase project={project} />;
  }

  return <UnifiedProjectShowcase project={project} />;
}
