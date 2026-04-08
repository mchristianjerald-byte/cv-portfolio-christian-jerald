const projects = [
  {
    week: "Week 1",
    title: "AI Agent Dev Environment Setup",
    description:
      "Established a professional AI Agent Developer environment with VS Code, GitHub Copilot, and MCP server integrations. Configured and documented 4 MCP servers (Rolldice, Bootcamp AI Agent, Calendar Booking, GitHub) using the Model Context Protocol.",
    tags: ["MCP Protocol", "GitHub Copilot", "VS Code", "Git"],
    repo: "https://github.com/mchristianjerald-byte/ai-agent-dev-setup-christian-jerald",
    demo: null,
    status: "Complete",
  },
  {
    week: "Week 2",
    title: "CV Portfolio Website",
    description:
      "Built a production-ready personal portfolio using Next.js 15, React 19, and Tailwind CSS. Features responsive design, smooth navigation, project showcase, and skills overview. Deployed to Vercel with CI/CD.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/mchristianjerald-byte/cv-portfolio-christian-jerald",
    demo: null,
    status: "Complete",
  },
  {
    week: "Week 3",
    title: "Person App — Full-Stack CRUD",
    description:
      "Full-stack Person App with Prisma ORM, Vercel Neon Postgres, and Auth.js Google OAuth. Implements complete CRUD operations, protected routes, and session management with production-grade security patterns.",
    tags: ["Next.js", "Prisma ORM", "PostgreSQL", "Auth.js", "OAuth"],
    repo: null,
    demo: null,
    status: "Coming Soon",
  },
  {
    week: "Week 4",
    title: "MCP Server — Person App CRUD",
    description:
      "Custom MCP Server exposing Person App CRUD operations as AI-callable tools. Enables AI agents to perform database operations through natural language, bridging traditional web APIs with the Model Context Protocol.",
    tags: ["MCP Server", "TypeScript", "AI SDK", "CRUD", "Agentic AI"],
    repo: null,
    demo: null,
    status: "Coming Soon",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-3">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Internship Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.week}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {project.week}
                </span>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    project.status === "Complete"
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    GitHub →
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-600 hover:underline"
                  >
                    Live Demo →
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
