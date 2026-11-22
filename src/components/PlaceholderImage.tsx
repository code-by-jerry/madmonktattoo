"use client";

import Image from "next/image";
import { useState } from "react";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fallbackText?: string;
}

export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fallbackText = "Mad Monk Tattoo",
}: PlaceholderImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-dark-card border border-ink-paper/10 text-ink-muted text-center p-4 relative overflow-hidden ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-dark pointer-events-none" />
        <span className="relative z-10 text-xs font-mono uppercase tracking-widest text-blood mb-1">
          Archive
        </span>
        <span className="relative z-10 font-display text-sm tracking-wide text-ink-paper">
          {fallbackText}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`object-cover transition-all duration-700 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        priority={priority}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`object-cover transition-all duration-700 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      />
    </div>
  );
}
