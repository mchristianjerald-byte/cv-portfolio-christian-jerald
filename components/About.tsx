export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-3">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Who I Am
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              I&apos;m a 3rd year Bachelor of Science in Information Technology student at{" "}
              <span className="font-medium text-gray-900">St. Paul University Philippines</span>,
              currently undergoing an internship in{" "}
              <span className="font-medium text-gray-900">
                Full-Stack AI Agent Development & MCP Server Architecture
              </span>{" "}
              with Ausbiz Consulting.
            </p>
            <p>
              I&apos;m passionate about building AI-powered applications that bridge the gap between
              traditional software development and modern AI agent systems. Through this program,
              I&apos;m developing hands-on expertise in Next.js 15, React 19, TypeScript, and the
              Model Context Protocol (MCP).
            </p>
            <p>
              My focus is on understanding how AI agents can be integrated into production
              applications — from building MCP servers to deploying full-stack apps with Vercel and
              Neon Postgres.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Program", value: "BSIT" },
              { label: "University", value: "St. Paul University Philippines" },
              { label: "Internship", value: "AI Agent Developer" },
              { label: "Focus", value: "Full-Stack + AI/MCP" },
              { label: "GitHub", value: "mchristianjerald-byte" },
              { label: "Status", value: "Open to Opportunities" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-sm font-medium text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
