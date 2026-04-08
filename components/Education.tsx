export default function Education() {
  return (
    <section id="education" className="py-32 bg-stone-50">
      <div className="max-w-5xl mx-auto px-8 md:px-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-gray-300 tracking-widest">04 /</span>
          <span className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Education</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16">
          Academic Background
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-indigo-200 transition-colors">
            <span className="text-xs font-mono text-gray-300 uppercase tracking-widest mb-6 block">
              In Progress
            </span>
            <h3 className="text-xl font-black text-gray-900 mb-1">
              BS Information Technology
            </h3>
            <p className="text-indigo-600 font-mono text-sm mb-6">
              St. Paul University Philippines
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Core IT disciplines including software development, databases, networking,
              systems analysis, and emerging technologies with a focus on practical application.
            </p>
          </div>

          <div className="bg-white border border-indigo-100 rounded-2xl p-8 hover:border-indigo-300 transition-colors">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-6 block">
              Active — 2026
            </span>
            <h3 className="text-xl font-black text-gray-900 mb-1">
              AI Agent Developer Internship
            </h3>
            <p className="text-indigo-600 font-mono text-sm mb-6">
              Ausbiz Consulting
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              10-week intensive program covering Next.js 15, React 19, TypeScript, Prisma ORM,
              Auth.js, and MCP Server development. Building a professional digital portfolio.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Prisma", "Auth.js", "MCP", "Vercel"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg font-mono"
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
