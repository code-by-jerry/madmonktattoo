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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Mouse drag state for desktop scrolling
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Center alignment detection on scroll
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    const items = container.querySelectorAll<HTMLElement>("[data-gallery-item]");

    let closestIndex = 0;
    let minDistance = Infinity;

    items.forEach((item, index) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  // Smooth programmatic scroll to card
  const scrollToItem = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const items = container.querySelectorAll<HTMLElement>("[data-gallery-item]");
    const normalizedIndex = (index + items.length) % items.length;
    const targetItem = items[normalizedIndex];
    if (targetItem) {
      const scrollPos =
        targetItem.offsetLeft - container.offsetWidth / 2 + targetItem.offsetWidth / 2;
      container.scrollTo({ left: scrollPos, behavior: "smooth" });
    }
  }, []);

  // Auto-slide effect (slow auto slider, pauses on hover / interaction)
  useEffect(() => {
    if (isPaused || isDragging || selectedIndex !== null) return;

    const timer = setInterval(() => {
      scrollToItem(activeIndex + 1);
    }, 3400);

    return () => clearInterval(timer);
  }, [isPaused, isDragging, selectedIndex, activeIndex, scrollToItem]);

  // Initial center alignment on mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToItem(0);
    }, 300);
    return () => clearTimeout(timeout);
  }, [scrollToItem]);

  // Mouse drag handlers for desktop smooth swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setStartScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = startScrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % images.gallery.length);
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! === 0 ? images.gallery.length - 1 : prev! - 1
    );
  }, [selectedIndex]);

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

  const activeTattoo: TattooImage | null =
    selectedIndex !== null ? images.gallery[selectedIndex] : null;

  return (
    <section
      id="work"
      className="py-24 relative bg-theme-bg overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-theme-border pb-8 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
              <span>// 01 ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-theme-text-primary">
              Selected Work
            </h2>
            <p className="mt-3 text-theme-text-secondary text-xs sm:text-sm max-w-xl font-light tracking-wide">
              Every ink mark tells a private ritual. Drag or scroll to browse the portfolio, and click any piece for high-resolution inspection.
            </p>
          </div>

          {/* Desktop & Tablet Navigation Controls */}
          <div className="flex items-center space-x-3 self-start md:self-end">
            <span className="text-xs font-mono text-theme-text-muted uppercase tracking-widest mr-2 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blood" />
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.gallery.length).padStart(2, "0")}</span>
            </span>

            <button
              type="button"
              onClick={() => scrollToItem(activeIndex - 1)}
              className="p-3 border border-theme-border hover:border-blood text-theme-text-primary hover:text-blood bg-theme-card transition-colors shadow-sm"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToItem(activeIndex + 1)}
              className="p-3 border border-theme-border hover:border-blood text-theme-text-primary hover:text-blood bg-theme-card transition-colors shadow-sm"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Auto Slider Container with Drag & Touch Support */}
      <div
        className="relative w-full py-8 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setIsDragging(false);
        }}
      >
        {/* Left & Right Subtle Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-theme-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-theme-bg to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className={`flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth px-8 sm:px-20 lg:px-36 py-6 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {images.gallery.map((tattoo, index) => {
            const isFocused = index === activeIndex;

            return (
              <div
                key={tattoo.id}
                data-gallery-item
                onClick={() => {
                  if (!hasDragged) {
                    openLightbox(index);
                  }
                }}
                className={`group relative shrink-0 transition-all duration-500 ease-out cursor-pointer ${
                  isFocused
                    ? "w-[270px] sm:w-[320px] md:w-[360px] scale-105 z-20 shadow-[0_15px_40px_rgba(0,0,0,0.35)] ring-1 ring-blood border-blood"
                    : "w-[240px] sm:w-[280px] md:w-[320px] scale-95 opacity-80 hover:opacity-100 hover:scale-100 border-theme-border shadow-md"
                } border bg-theme-card overflow-hidden`}
              >
                {/* 3:4 Aspect Artwork Box (NO GREYSCALE) */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                  <Image
                    src={tattoo.src}
                    alt={tattoo.alt}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 320px, 360px"
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gentle gradient overlay for typography readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Focused Center Glow Indicator */}
                  {isFocused && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-blood text-white text-[9px] font-mono uppercase tracking-widest font-semibold shadow-md">
                      Featured
                    </div>
                  )}

                  {/* Artwork Meta Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end">
                    <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-blood mb-1 font-semibold">
                      {tattoo.style}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                      {tattoo.title}
                    </h3>
                    <div className="mt-2.5 flex items-center space-x-1.5 text-zinc-300 text-xs font-mono">
                      <Eye className="w-3.5 h-3.5 text-blood shrink-0" />
                      <span>Inspect Artwork</span>
                    </div>
                  </div>
                </div>

                {/* Corner Frame Accents */}
                <span
                  className={`absolute top-2 left-2 w-2.5 h-2.5 border-t border-l transition-colors ${
                    isFocused ? "border-blood" : "border-white/30 group-hover:border-blood"
                  }`}
                />
                <span
                  className={`absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r transition-colors ${
                    isFocused ? "border-blood" : "border-white/30 group-hover:border-blood"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Indicators */}
        <div className="mt-6 flex items-center justify-center space-x-2">
          {images.gallery.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToItem(i)}
              className={`h-1.5 transition-all duration-300 ${
                activeIndex === i
                  ? "w-8 bg-blood"
                  : "w-2 bg-theme-border hover:bg-theme-text-muted"
              }`}
              aria-label={`Jump to slide ${i + 1}`}
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
                    {activeTattoo.style} • Piece {selectedIndex + 1} of{" "}
                    {images.gallery.length}
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