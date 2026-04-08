const skillGroups = [
  {
    label: "Frontend",
    skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend & DB",
    skills: ["Node.js", "REST APIs", "Prisma ORM", "PostgreSQL", "Vercel Neon"],
  },
  {
    label: "AI & MCP",
    skills: ["GitHub Copilot", "MCP Protocol", "AI SDK", "MCP Servers", "Agent Mode"],
  },
  {
    label: "DevOps",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "npm"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-stone-50">
      <div className="max-w-5xl mx-auto px-8 md:px-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-gray-300 tracking-widest">02 /</span>
          <span className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Skills</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16">
          Technical Stack
        </h2>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col md:flex-row gap-4 md:gap-10">
              <div className="md:w-28 shrink-0 pt-1">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                  {group.label}
                </span>
              </div>
              <div className="flex-1 h-px bg-gray-200 hidden md:block mt-3 shrink-0 max-w-6" />
              <div className="flex flex-wrap gap-2 flex-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
