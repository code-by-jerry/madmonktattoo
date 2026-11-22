import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-bg text-theme-text-primary px-4 text-center">
      <span className="text-xs font-mono uppercase tracking-[0.3em] text-blood mb-3">
        // 404 UNCHARTED INK
      </span>
      <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mb-4">
        Page Not Inked
      </h1>
      <p className="text-sm text-theme-text-secondary max-w-md font-light mb-8">
        The ritual piece or page you are looking for does not exist in our archives.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blood text-white text-xs uppercase font-mono tracking-widest hover:bg-blood-hover transition-colors"
      >
        Return to Sanctuary
      </Link>
    </div>
  );
}
