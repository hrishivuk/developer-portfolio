import { FiUsers, FiGitBranch, FiLayers } from "react-icons/fi";
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

const skills = [
  { name: "Figma", use: "Wireframing and prototyping", Icon: SiFigma },
  { name: "UX Research", use: "Problem exploration and usability testing", Icon: FiUsers },
  { name: "Interaction Design", use: "User flows and interface behaviour", Icon: FiGitBranch },
  { name: "Design Systems", use: "Consistent components and visual language", Icon: FiLayers },
  { name: "React Native", use: "Role-aware mobile experiences", Icon: SiReact },
  { name: "Tailwind CSS", use: "Responsive interface implementation", Icon: SiTailwindcss },
  { name: "Supabase", use: "Authentication and backend integrations", Icon: SiSupabase },
  { name: "React", use: "Interface architecture", Icon: SiReact },
  { name: "Next.js", use: "Full-stack web applications", Icon: SiNextdotjs },
  { name: "TypeScript", use: "Reliable application code", Icon: SiTypescript },
  { name: "JavaScript", use: "Interactive product behaviour", Icon: SiJavascript },
  { name: "PostgreSQL", use: "Structured relational data", Icon: SiPostgresql },
  { name: "Firebase", use: "Authentication and mobile backend", Icon: SiFirebase },
];

export default function SkillsStack() {
  return (
    <ol className="grid border-l border-t border-[var(--border-primary)] sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ name, use, Icon }, index) => (
        <li
          key={name}
          className="group grid min-h-28 grid-cols-[2rem_2.75rem_1fr] items-center gap-3 border-b border-r border-[var(--border-primary)] px-4 py-5 transition-colors duration-200 hover:bg-[var(--bg-secondary)] sm:px-5"
        >
          <span className="self-start pt-1 font-mono text-[10px] text-[var(--accent-primary)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Icon
            aria-hidden="true"
            focusable="false"
            className="h-8 w-8 text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)]"
          />
          <div className="min-w-0">
            <p className="font-bold text-[var(--text-primary)]">{name}</p>
            <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
              {use}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
