import Image from "next/image";

const skills = [
  { name: "React", use: "Interface architecture", icon: "/images/TechIcons/React.png" },
  { name: "Next.js", use: "Full-stack web applications", icon: "/images/TechIcons/Next.js.png" },
  { name: "TypeScript", use: "Reliable application code", icon: "/images/TechIcons/TypeScript.png" },
  { name: "JavaScript", use: "Interactive product behaviour", icon: "/images/TechIcons/JavaScript.png" },
  { name: "PostgreSQL", use: "Structured relational data", icon: "/images/TechIcons/PostgresSQL.png" },
  { name: "Firebase", use: "Authentication and mobile backend", icon: "/images/TechIcons/Firebase.png" },
];

export default function SkillsStack() {
  return (
    <ol className="grid border-l border-t border-[var(--border-primary)] sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <li
          key={skill.name}
          className="group grid min-h-28 grid-cols-[2rem_2.75rem_1fr] items-center gap-3 border-b border-r border-[var(--border-primary)] px-4 py-5 transition-colors duration-200 hover:bg-[var(--bg-secondary)] sm:px-5"
        >
          <span className="self-start pt-1 font-mono text-[10px] text-[var(--accent-primary)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Image
            src={skill.icon}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain grayscale transition duration-200 group-hover:grayscale-0"
          />
          <div className="min-w-0">
            <p className="font-bold text-[var(--text-primary)]">{skill.name}</p>
            <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
              {skill.use}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
