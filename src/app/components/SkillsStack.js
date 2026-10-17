import { FiUsers, FiGitBranch, FiLayers, FiLink } from "react-icons/fi";
import {
  SiFigma,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

const skillGroups = [
  {
    name: "Design & Research",
    skills: [
      { name: "Figma", use: "Wireframing and interactive prototyping", Icon: SiFigma },
      { name: "UX Research", use: "Problem exploration and moderated usability testing", Icon: FiUsers },
      { name: "Interaction Design", use: "User flows and interface behaviour", Icon: FiGitBranch },
      { name: "Design Systems", use: "Consistent components and visual language", Icon: FiLayers },
    ],
  },
  {
    name: "Frontend & Interfaces",
    skills: [
      { name: "React", use: "Interface architecture and responsive UI", Icon: SiReact },
      { name: "Next.js", use: "Full-stack web applications", Icon: SiNextdotjs },
      { name: "TypeScript", use: "Reliable application code", Icon: SiTypescript },
      { name: "JavaScript", use: "Interactive product behaviour", Icon: SiJavascript },
      { name: "Tailwind CSS", use: "Responsive interface implementation", Icon: SiTailwindcss },
      { name: "React Native", use: "Role-aware mobile experiences", Icon: SiReact },
    ],
  },
  {
    name: "Backend & Data",
    skills: [
      { name: "Firebase", use: "Authentication and mobile backend", Icon: SiFirebase },
      { name: "Supabase", use: "Authentication and backend integrations", Icon: SiSupabase },
      { name: "PostgreSQL", use: "Structured relational data", Icon: SiPostgresql },
      { name: "REST APIs", use: "Connecting interfaces to backend services", Icon: FiLink },
    ],
  },
];

export default function SkillsStack() {
  return (
    <div className="space-y-8">
      {skillGroups.map((group, index) => (
        <section key={group.name} aria-labelledby={`skill-group-${index}`}>
          <h3 id={`skill-group-${index}`} className="mb-4 font-mono text-xs uppercase text-[var(--text-secondary)]">
            <span className="mr-3 text-[var(--text-muted)]">{String(index + 1).padStart(2, "0")}</span>
            {group.name}
          </h3>
          <ul className="grid border-l border-t border-[var(--border-primary)] sm:grid-cols-2 lg:grid-cols-3">
            {group.skills.map(({ name, use, Icon }) => (
              <li key={name} className="group grid min-h-28 grid-cols-[2.75rem_1fr] items-center gap-3 border-b border-r border-[var(--border-primary)] px-4 py-5 transition-colors duration-200 hover:bg-[var(--bg-secondary)] sm:px-5">
                <Icon aria-hidden="true" focusable="false" className="h-8 w-8 text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)]" />
                <div className="min-w-0">
                  <p className="font-bold text-[var(--text-primary)]">{name}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">{use}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
