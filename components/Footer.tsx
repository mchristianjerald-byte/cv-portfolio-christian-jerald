export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>
          &copy; 2026{" "}
          <span className="text-white font-medium">Christian Jerald U. Martinez</span>. Built with
          Next.js 15 &amp; Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/mchristianjerald-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a href="mailto:mchristianjerald@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
