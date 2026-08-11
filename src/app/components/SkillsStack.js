import Image from "next/image";

const skills = [
  {
    name: "React",
    use: "Interface architecture",
    icon: "/images/TechIcons/React.png",
  },
  {
    name: "Next.js",
    use: "Full-stack web apps",
    icon: "/images/TechIcons/Next.js.png",
  },
  {
    name: "TypeScript",
    use: "Reliable application code",
    icon: "/images/TechIcons/TypeScript.png",
  },
  {
    name: "JavaScript",
    use: "Interactive experiences",
    icon: "/images/TechIcons/JavaScript.png",
  },
  {
    name: "PostgreSQL",
    use: "Structured product data",
    icon: "/images/TechIcons/PostgresSQL.png",
  },
  {
    name: "Firebase",
    use: "Auth and mobile backend",
    icon: "/images/TechIcons/Firebase.png",
  },
];

export default function SkillsStack() {
  return (
    <div className="overflow-hidden border-y border-[var(--border-primary)]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`group flex min-h-28 items-center gap-4 border-[var(--border-primary)] px-4 py-5 transition-colors hover:bg-white/[0.025] sm:px-6 ${
              index < skills.length - 1 ? "border-b" : ""
            } ${index % 2 === 0 ? "sm:border-r" : ""} ${
              index < 4 ? "sm:border-b" : "sm:border-b-0"
            } ${
              index < 3 ? "lg:border-b" : "lg:border-b-0"
            } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[var(--border-primary)] bg-white/[0.025]">
              <Image
                src={skill.icon}
                alt=""
                width={34}
                height={34}
                className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
            <div className="min-w-0">
              <p className="text-base font-black text-[var(--text-primary)]">
                {skill.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                {skill.use}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
