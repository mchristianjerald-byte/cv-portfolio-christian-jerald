export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-stone-50 overflow-hidden pt-14 lg:pt-0"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #A8A89E 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-indigo-100 opacity-60" />
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-indigo-200 opacity-40" />

      <div className="relative max-w-5xl mx-auto px-8 md:px-16 py-24">
        {/* Role badge */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-indigo-500" />
          <span className="text-xs font-mono tracking-widest text-indigo-600 uppercase">
            AI Agent Developer Intern
          </span>
        </div>

        {/* Name — large stacked */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-gray-900 leading-none tracking-tighter mb-2">
          Christian
        </h1>
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black leading-none tracking-tighter mb-12" style={{ WebkitTextStroke: "2px #4F46E5", color: "transparent" }}>
          Jerald.
        </h1>

        {/* Bio */}
        <p className="text-gray-500 text-lg max-w-md mb-12 leading-relaxed">
          BSIT student at St. Paul University Philippines — building AI-powered
          full-stack systems with Next.js, React, and MCP Server Architecture.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-8">
          <a
            href="#projects"
            className="group flex items-center gap-2 font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
          >
            View my work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://github.com/mchristianjerald-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors font-mono"
          >
            GitHub ↗
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors font-mono"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-8 md:left-16 flex items-end gap-3">
        <div className="w-px h-12 bg-gray-300 animate-pulse" />
        <span className="text-xs text-gray-400 font-mono tracking-widest">scroll</span>
      </div>
    </section>
  );
}
