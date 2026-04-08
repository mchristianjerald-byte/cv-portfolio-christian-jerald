const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "REST APIs", "Prisma ORM", "PostgreSQL", "Vercel Neon"],
  },
  {
    category: "AI & MCP",
    skills: ["GitHub Copilot", "MCP Protocol", "AI SDK", "Model Context Protocol Servers", "Agent Mode"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "npm", "ESLint"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
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
