const projects = [
  {
    index: "01",
    title: "Paulimentor",
    type: "Personal Project",
    description:
      "An AI-based academic support system designed to improve students programming literacy and independent learning. Analyzes coding environments, identifies errors, explains programming terms, and gives step-by-step guidance without generating the actual code — fostering genuine understanding.",
    tags: ["AI", "Decision Support", "Education Technology", "Programming Literacy"],
    repo: null,
    demo: null,
    status: "Personal",
  },
  {
    index: "02",
    title: "AI Agent Dev Environment",
    type: "Week 1 — Internship",
    description:
      "Established a professional AI Agent Developer environment with VS Code, GitHub Copilot, and 4 MCP server integrations (Rolldice, Bootcamp AI Agent, Calendar Booking, GitHub) using the Model Context Protocol.",
    tags: ["MCP Protocol", "GitHub Copilot", "VS Code", "Git"],
    repo: "https://github.com/mchristianjerald-byte/ai-agent-dev-setup-christian-jerald",
    demo: null,
    status: "Complete",
  },
  {
    index: "03",
    title: "CV Portfolio Website",
    type: "Week 2 — Internship",
    description:
      "Production-ready personal portfolio built with Next.js 15, React 19, and Tailwind CSS. Features an innovative vertical dot navigation, editorial layout with outlined stroke typography, and a minimal yet distinctive design language. Deployed to Vercel.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/mchristianjerald-byte/cv-portfolio-christian-jerald",
    demo: null,
    status: "Complete",
  },
  {
    index: "04",
    title: "Person App — Full-Stack CRUD",
    type: "Week 3 — Internship",
    description:
      "Full-stack Person App with Prisma ORM, Vercel Neon Postgres, and Auth.js Google OAuth. Complete CRUD operations, protected routes, and session management with production-grade security patterns.",
    tags: ["Next.js", "Prisma ORM", "PostgreSQL", "Auth.js", "OAuth"],
    repo: null,
    demo: null,
    status: "Upcoming",
  },
  {
    index: "05",
    title: "MCP Server — CRUD Agent",
    type: "Week 4 — Internship",
    description:
      "Custom MCP Server exposing Person App CRUD operations as AI-callable tools. Enables AI agents to perform database operations through natural language, bridging traditional web APIs with the Model Context Protocol.",
    tags: ["MCP Server", "TypeScript", "AI SDK", "CRUD"],
    repo: null,
    demo: null,
    status: "Upcoming",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-gray-300 tracking-widest">03 /</span>
          <span className="flex-1 h-px bg-gray-100" />
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Work</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16">
          Selected Projects
        </h2>

        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.index}
              className="group border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-indigo-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <span className="text-xs font-mono text-gray-200 shrink-0 mt-1 group-hover:text-indigo-300 transition-colors">
                  {project.index}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start gap-x-4 gap-y-2 mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <span className="text-xs font-mono text-gray-400 mt-0.5">{project.type}</span>
                    <span
                      className={
                        "ml-auto text-xs font-mono px-2.5 py-1 rounded-full shrink-0 " +
                        (project.status === "Complete"
                          ? "bg-emerald-50 text-emerald-600"
                          : project.status === "Personal"
                          ? "bg-indigo-50 text-indigo-600"
                          : "bg-gray-50 text-gray-400")
                      }
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-gray-50 rounded-lg text-gray-500 border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                    <div className="ml-auto flex gap-4">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-indigo-600 hover:underline font-mono"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-emerald-600 hover:underline font-mono"
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
