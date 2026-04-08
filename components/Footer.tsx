export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 bg-white">
      <div className="max-w-5xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-xs font-mono text-gray-400">
          &copy; 2026 Christian Jerald U. Martinez
        </span>
        <span className="text-xs font-mono text-gray-300">
          Built with Next.js 15 &middot; Deployed on Vercel
        </span>
      </div>
    </footer>
  );
}
