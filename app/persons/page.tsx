import { auth, signIn, signOut } from "@/auth";
import PersonsClient from "./PersonsClient";
import Link from "next/link";

export const metadata = {
  title: "Person App | Christian Jerald Martinez",
  description: "Full-stack CRUD app built with Next.js 15, Prisma, and Auth.js",
};

export default async function PersonsPage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="min-h-screen bg-stone-50 flex items-center justify-center px-8">
        <div className="text-center max-w-sm">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-gray-700 transition-colors mb-12"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          <span className="text-xs font-mono text-gray-300 uppercase tracking-widest block mb-4">
            Person App — Week 3
          </span>
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Sign in to continue
          </h1>
          <p className="text-gray-400 text-sm mb-10 leading-relaxed">
            Authentication is required to access the Person App.
            Sign in with your GitHub account to proceed.
          </p>

          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/persons" });
            }}
          >
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Sign in with GitHub
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-16">

        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <div>
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-gray-700 transition-colors mb-4"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Portfolio
            </Link>
            <span className="text-xs font-mono text-gray-300 uppercase tracking-widest block mb-2">
              Week 3 — Full-Stack CRUD
            </span>
            <h1 className="text-3xl font-black text-gray-900">Person App</h1>
          </div>

          {/* User info + sign out */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2.5">
              {session.user.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={session.user.image}
                  alt={session.user.name ?? ""}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div>
                <p className="text-xs font-semibold text-gray-700 leading-none">
                  {session.user.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{session.user.email}</p>
              </div>
            </div>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="text-xs font-mono text-gray-400 hover:text-red-500 transition-colors border border-gray-200 rounded-lg px-3 py-1.5"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>

        {/* CRUD Client Component */}
        <PersonsClient />

      </div>
    </main>
  );
}
