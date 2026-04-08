export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-4">
          AI Agent Developer Intern
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Christian Jerald
          <br />
          <span className="text-blue-600">U. Martinez</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          BSIT student at St. Paul University Philippines, building production-ready AI agent
          systems with Next.js, React, TypeScript, and MCP Server Architecture.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/mchristianjerald-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Tech badges */}
        <div className="mt-14 flex flex-wrap gap-3">
          {["Next.js 15", "React 19", "TypeScript", "MCP Protocol", "GitHub Copilot", "Vercel"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600 shadow-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
