import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-theme-bg flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono">
          <span>// 404 SANCTUARY</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-theme-text-primary tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-theme-text-secondary font-light leading-relaxed">
          The ink line you are searching for does not exist or has moved. Return to our sanctuary home to explore our tattoo portfolio and studio rituals.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-blood hover:bg-blood-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_20px_rgba(179,18,45,0.4)]"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
