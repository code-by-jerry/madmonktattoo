"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for diagnostics
    console.error("[Application Error Boundary caught]:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-bg text-theme-text-primary px-4 text-center">
      <span className="text-xs font-mono uppercase tracking-[0.3em] text-blood mb-3">
        // UNEXPECTED DISTURBANCE
      </span>
      <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-4">
        Something Went Wrong
      </h1>
      <p className="text-sm text-theme-text-secondary max-w-md font-light mb-8">
        An unexpected error occurred while loading this page. Please try refreshing or return to the main studio page.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-blood hover:bg-blood-hover text-white text-xs uppercase font-mono tracking-widest transition-colors shadow-md"
        >
          <RefreshCcw className="w-3.5 h-3.5" />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 border border-theme-border hover:border-blood text-theme-text-primary text-xs uppercase font-mono tracking-widest transition-colors"
        >
          <Home className="w-3.5 h-3.5 text-blood" />
          <span>Back to Sanctuary</span>
        </Link>
      </div>
    </div>
  );
}
