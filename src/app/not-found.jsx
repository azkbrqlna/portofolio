import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center font-mono text-xs">
      <h1 className="text-4xl font-serif text-[#e8e8f0] mb-2 font-bold">404</h1>
      <p className="text-white/60 mb-6">Page not found</p>
      <Link
        href="/"
        className="px-4 py-2 rounded bg-white/[0.06] hover:bg-white/[0.12] text-[#d4a853] transition-colors border border-white/10"
      >
        Return Home
      </Link>
    </div>
  );
}
