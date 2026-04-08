"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: right-side vertical dot nav */}
      <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
        {sections.map(({ id, label }) => (
          <a key={id} href={"#" + id} className="group flex items-center gap-3">
            <span
              className={
                "text-xs tracking-widest uppercase font-mono transition-all duration-300 " +
                (active === id
                  ? "opacity-100 text-indigo-600"
                  : "opacity-0 text-gray-400 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0")
              }
            >
              {label}
            </span>
            <span
              className={
                "block rounded-full transition-all duration-300 " +
                (active === id
                  ? "w-2.5 h-2.5 bg-indigo-600"
                  : "w-1.5 h-1.5 bg-gray-300 group-hover:bg-gray-500 group-hover:w-2 group-hover:h-2")
              }
            />
          </a>
        ))}
      </nav>

      {/* Mobile: top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 h-14 bg-white/90 backdrop-blur border-b border-gray-100">
        <a href="#hero" className="text-sm font-black tracking-tight text-gray-900">
          CJ.
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-gray-900 transition-all" />
          <span
            className={
              "block h-px bg-gray-900 transition-all " + (menuOpen ? "w-5" : "w-3.5")
            }
          />
          <span className="block w-5 h-px bg-gray-900 transition-all" />
        </button>
      </div>

      {/* Mobile: full-screen overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-10">
            {sections.map(({ id, label }, i) => (
              <a
                key={id}
                href={"#" + id}
                onClick={() => setMenuOpen(false)}
                className="group flex flex-col items-center"
              >
                <span className="text-xs text-gray-300 font-mono mb-1">
                  {"0" + (i + 1)}
                </span>
                <span className="text-4xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
