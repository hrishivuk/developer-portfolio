import { readdir } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

const resumeLabels = {
  "Hrishi_CV.pdf": "General CV",
  "HrishikeshVarma_FE.pdf": "Frontend Engineer",
  "Hrishikesh_FS.pdf": "Full-Stack Developer",
};

function getResumeLabel(fileName) {
  if (resumeLabels[fileName]) return resumeLabels[fileName];

  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\b(cv|resume)\b/i, "CV")
    .trim();
}

export async function GET() {
  const resumeDirectory = path.join(process.cwd(), "public", "resume");
  const files = await readdir(resumeDirectory);
  const resumes = files
    .filter((fileName) => /\.(pdf|docx?)$/i.test(fileName))
    .sort((a, b) => a.localeCompare(b))
    .map((fileName) => ({
      fileName,
      href: `/resume/${encodeURIComponent(fileName)}`,
      label: getResumeLabel(fileName),
    }));

  return Response.json({ resumes });
}
