export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-3">
          Education
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Academic Background
        </h2>

        <div className="space-y-6">
          {/* Degree */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-blue-600 font-medium">St. Paul University Philippines</p>
              </div>
              <span className="text-sm text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                In Progress
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Studying core IT disciplines including software development, system analysis, databases,
              networking, and emerging technologies. Focused on applying modern development practices
              to real-world problems.
            </p>
          </div>

          {/* Internship */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Full-Stack AI Agent Development & MCP Server Architecture
                </h3>
                <p className="text-blue-600 font-medium">Ausbiz Consulting — AI Agent Developer Workshop</p>
              </div>
              <span className="text-sm text-gray-500 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full whitespace-nowrap">
                2026 — Active
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              10-week intensive internship covering Next.js 15, React 19, TypeScript, Prisma ORM,
              Auth.js, MCP Server development, and production deployment. Building a professional
              digital portfolio as the core deliverable.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js 15",
                "React 19",
                "Prisma ORM",
                "Auth.js",
                "MCP Protocol",
                "Vercel",
                "GitHub Copilot",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
