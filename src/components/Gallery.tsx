"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { images, TattooImage } from "@/data/images";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const originalItems = images.gallery;
  const N = originalItems.length; // 10

  // 3 complete sets for seamless infinite looping:
  // Set 0 (0..9), Set 1 (10..19, active home range), Set 2 (20..29)
  const clonedItems = [...originalItems, ...originalItems, ...originalItems];

  // Responsive breakpoint configuration
  // Desktop: 4 cards visible + partial edge peeks
  // Tablet: 2 cards visible + partial edge peeks
  // Mobile: 1 card visible + partial edge peeks
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  const [currentIndex, setCurrentIndex] = useState(N); // Start at index 10 (home set)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Drag interaction state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const hasDraggedRef = useRef(false);
  const isResettingRef = useRef(false);

  // Responsive configuration in percentages (Zero pixel dependency = Zero blank screens)
  const layoutConfig = {
    mobile: {
      cardWidthPercent: 74,
      gapPercent: 4,
      leftOffsetPercent: 9,
      stepPercent: 78,
    },
    tablet: {
      cardWidthPercent: 44,
      gapPercent: 3,
      leftOffsetPercent: 4.5,
      stepPercent: 47,
    },
    desktop: {
      cardWidthPercent: 21.5,
      gapPercent: 1.5,
      leftOffsetPercent: 4,
      stepPercent: 23,
    },
  }[breakpoint];

  // Track responsive breakpoints safely
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setBreakpoint("mobile");
      } else if (w < 1024) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Safe navigation forward with seamless loop boundary wrap
  const handleNext = useCallback(() => {
    if (isResettingRef.current) return;
    setIsTransitioning(true);

    setCurrentIndex((prev) => {
      const next = prev + 1;

      // When advancing past set 1 into set 2 (e.g. index 20):
      if (next >= 2 * N) {
        isResettingRef.current = true;
        // Allow the smooth 500ms slide animation into index 20 to complete,
        // then invisibly snap back to index 10 without animation.
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(N);
          setTimeout(() => {
            setIsTransitioning(true);
            isResettingRef.current = false;
          }, 40);
        }, 500);
      }

      return next;
    });
  }, [N]);

  // Safe navigation backward with seamless loop boundary wrap
  const handlePrev = useCallback(() => {
    if (isResettingRef.current) return;
    setIsTransitioning(true);

    setCurrentIndex((prev) => {
      const next = prev - 1;

      // When retreating past set 1 into set 0 (e.g. index 9):
      if (next < N) {
        isResettingRef.current = true;
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(2 * N - 1);
          setTimeout(() => {
            setIsTransitioning(true);
            isResettingRef.current = false;
          }, 40);
        }, 500);
      }

      return next;
    });
  }, [N]);

  // Jump to specific dot
  const handleJumpTo = (dotIndex: number) => {
    if (isResettingRef.current) return;
    setIsTransitioning(true);
    setCurrentIndex(N + dotIndex);
  };

  // Auto-slide effect (Smooth 3.4s interval, pauses on hover / drag / lightbox)
  useEffect(() => {
    if (isPaused || isDragging || selectedIndex !== null) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3400);

    return () => clearInterval(timer);
  }, [isPaused, isDragging, selectedIndex, handleNext]);

  // Pointer drag events (Mouse & Touch unified)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
    hasDraggedRef.current = false;
    setIsPaused(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 6) {
      hasDraggedRef.current = true;
    }
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsPaused(false);

    if (dragOffset < -50) {
      handleNext();
    } else if (dragOffset > 50) {
      handlePrev();
    }

    setDragOffset(0);
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 50);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setIsPaused(false);
    setDragOffset(0);
    hasDraggedRef.current = false;
  };

  // Lightbox handlers
  const openLightbox = (originalIndex: number) => {
    if (hasDraggedRef.current) return;
    setSelectedIndex(originalIndex);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % N);
  }, [selectedIndex, N]);

  const prevImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === 0 ? N - 1 : prev! - 1));
  }, [selectedIndex, N]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, nextImage, prevImage]);

  // Active item in the 0..9 range for indicators
  const activeDotIndex = ((currentIndex % N) + N) % N;
  const activeTattoo =
    selectedIndex !== null ? originalItems[selectedIndex] : null;

  // Track transform percentage formula:
  // offset - (index * step) + dragOffset in px
  const transformStyle = `translate3d(calc(${layoutConfig.leftOffsetPercent}% - ${
    currentIndex * layoutConfig.stepPercent
  }% + ${dragOffset}px), 0, 0)`;

  return (
    <section
      id="work"
      className="py-24 relative bg-theme-bg overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-theme-border pb-8 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
              <span>// 01 PORTFOLIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-theme-text-primary">
              Portrait &amp; Realistic Tattoos
            </h2>
            <p className="mt-3 text-theme-text-secondary text-xs sm:text-sm max-w-xl font-light tracking-wide">
              Every ink mark tells a private ritual. Drag or swipe to explore the collection, and click any piece for full high-resolution details.
            </p>
          </div>

          {/* Desktop & Tablet Navigation Controls */}
          <div className="flex items-center space-x-3 self-start md:self-end">
            <span className="text-xs font-mono text-theme-text-muted uppercase tracking-widest mr-2 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blood" />
              <span>
                {String(activeDotIndex + 1).padStart(2, "0")} /{" "}
                {String(N).padStart(2, "0")}
              </span>
            </span>

            <button
              type="button"
              onClick={handlePrev}
              className="p-3 border border-theme-border hover:border-blood text-theme-text-primary hover:text-blood bg-theme-card transition-colors shadow-sm"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-3 border border-theme-border hover:border-blood text-theme-text-primary hover:text-blood bg-theme-card transition-colors shadow-sm"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Outer Slider Container (Edge-to-Edge with Peeking Cards) */}
      <div
        className="relative w-full overflow-hidden select-none touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {/* Floating Side Navigation Arrows (Desktop / Tablet) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-theme-card/90 hover:bg-blood text-theme-text-primary hover:text-white border border-theme-border hover:border-blood backdrop-blur-md rounded-full shadow-xl transition-all duration-200"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-theme-card/90 hover:bg-blood text-theme-text-primary hover:text-white border border-theme-border hover:border-blood backdrop-blur-md rounded-full shadow-xl transition-all duration-200"
          aria-label="Next card"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Sliding Track (100% Percentage Based, SSR-safe, Hardware Accelerated) */}
        <div
          style={{
            transform: transformStyle,
            transition:
              isTransitioning && !isDragging
                ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
          }}
          className={`flex items-center py-6 will-change-transform ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {clonedItems.map((tattoo, index) => {
            const originalIndex = index % N;
            const isFeatured = originalIndex === activeDotIndex;

            return (
              <div
                key={`${tattoo.id}-${index}`}
                style={{
                  width: `${layoutConfig.cardWidthPercent}%`,
                  marginRight: `${layoutConfig.gapPercent}%`,
                  flexShrink: 0,
                }}
                onClick={() => openLightbox(originalIndex)}
                className={`group relative overflow-hidden bg-theme-card border transition-all duration-300 ${
                  isFeatured
                    ? "border-blood shadow-[0_12px_32px_rgba(179,18,45,0.22)]"
                    : "border-theme-border hover:border-blood/80 shadow-md"
                }`}
              >
                {/* 3:4 Aspect Ratio Artwork Box */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                  <Image
                    src={tattoo.src}
                    alt={tattoo.alt}
                    fill
                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 25vw"
                    className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                    priority={index >= N && index < N + 4}
                  />

                  {/* Gradient Overlay for Typography Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Featured Badge */}
                  {isFeatured && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-blood text-white text-[9px] font-mono uppercase tracking-widest font-semibold shadow-md">
                      Featured
                    </div>
                  )}

                  {/* Artwork Meta Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white flex flex-col justify-end">
                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-blood mb-1 font-semibold truncate">
                      {tattoo.style}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wide line-clamp-1">
                      {tattoo.title}
                    </h3>
                    <div className="mt-2 flex items-center space-x-1.5 text-zinc-300 text-[11px] font-mono">
                      <Eye className="w-3.5 h-3.5 text-blood shrink-0" />
                      <span>Inspect Artwork</span>
                    </div>
                  </div>
                </div>

                {/* Corner Frame Accents */}
                <span
                  className={`absolute top-2 left-2 w-2 h-2 border-t border-l transition-colors ${
                    isFeatured
                      ? "border-blood"
                      : "border-white/20 group-hover:border-blood"
                  }`}
                />
                <span
                  className={`absolute bottom-2 right-2 w-2 h-2 border-b border-r transition-colors ${
                    isFeatured
                      ? "border-blood"
                      : "border-white/20 group-hover:border-blood"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Indicators (10 Dots / Pills) */}
        <div className="mt-4 pb-2 flex items-center justify-center space-x-2">
          {originalItems.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleJumpTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeDotIndex === i
                  ? "w-8 bg-blood"
                  : "w-2 bg-theme-border hover:bg-theme-text-muted"
              }`}
              aria-label={`Jump to piece ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && activeTattoo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2.5 text-white/80 hover:text-blood bg-zinc-900/80 border border-white/20 hover:border-blood transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3.5 text-white/80 hover:text-blood bg-zinc-900/80 border border-white/20 hover:border-blood transition-colors"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3.5 text-white/80 hover:text-blood bg-zinc-900/80 border border-white/20 hover:border-blood transition-colors"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[70vh] aspect-[3/4] flex items-center justify-center overflow-hidden border border-white/20 bg-zinc-950">
                <Image
                  src={activeTattoo.src}
                  alt={activeTattoo.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 800px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 w-full flex flex-col sm:flex-row sm:items-center justify-between text-left border-t border-white/10 pt-3 text-white">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-blood font-semibold">
                    {activeTattoo.style} • Piece {selectedIndex + 1} of {N}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl text-white font-semibold mt-0.5">
                    {activeTattoo.title}
                  </h4>
                </div>
                <a
                  href="#booking"
                  onClick={closeLightbox}
                  className="mt-3 sm:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white border border-white/20 hover:border-blood hover:text-blood px-5 py-2.5 transition-colors self-start sm:self-center"
                >
                  <span>Request Custom Consultation</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
