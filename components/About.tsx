export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-8 md:px-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-gray-300 tracking-widest">01 /</span>
          <span className="flex-1 h-px bg-gray-100" />
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">About</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
              Developer.<br />
              <span className="text-indigo-600">Learner.</span><br />
              Builder.
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
              <p>
                I am a BSIT student at{" "}
                <span className="text-gray-800 font-semibold">St. Paul University Philippines</span>,
                currently interning in Full-Stack AI Agent Development at Ausbiz Consulting.
              </p>
              <p>
                My focus is on bridging traditional software development with modern AI agent
                systems — understanding how tools like the Model Context Protocol (MCP) enable
                AI to interact with real-world data and APIs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Program", value: "BSIT" },
              { label: "University", value: "St. Paul University Philippines" },
              { label: "Role", value: "AI Agent Dev Intern" },
              { label: "Focus", value: "Full-Stack + MCP" },
              { label: "GitHub", value: "@mchristianjerald-byte" },
              { label: "Status", value: "Open to Opportunities" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-gray-100 rounded-xl p-4 hover:border-indigo-200 transition-colors"
              >
                <p className="text-xs font-mono text-gray-300 uppercase tracking-wide mb-2">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
