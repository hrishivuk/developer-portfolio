import { readdir } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

const resumeLabels = {
  "Hrishikesh_UXEngineer.pdf": "UX Engineer",
  "HrishikeshVarma_FE.pdf": "Frontend Engineer",
  "Hrishikesh_FS.pdf": "Full-Stack Developer",
};

export async function GET() {
  const resumeDirectory = path.join(process.cwd(), "public", "resume");
  const files = await readdir(resumeDirectory);
  const resumes = Object.keys(resumeLabels)
    .filter((fileName) => files.includes(fileName))
    .map((fileName) => ({
      fileName,
      href: `/resume/${encodeURIComponent(fileName)}`,
      label: resumeLabels[fileName],
      primary: fileName === "Hrishikesh_UXEngineer.pdf",
    }));

  return Response.json({ resumes });
}
