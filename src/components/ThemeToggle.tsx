"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent SSR hydration mismatch
    return (
      <div
        className={`w-9 h-9 border border-theme-border flex items-center justify-center opacity-0 ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 border border-theme-border hover:border-blood text-theme-text-primary hover:text-blood transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood flex items-center justify-center group ${className}`}
      aria-label={`Switch to ${isDark ? "Light Parchment" : "Dark Noir"} theme`}
      title={`Switch to ${isDark ? "Light Parchment" : "Dark Noir"} theme`}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <Sun className="w-4 h-4 text-theme-text-muted group-hover:text-blood transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-theme-text-muted group-hover:text-blood transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
