"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { images, TattooImage } from "@/data/images";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
    setSelectedIndex((prev) => ((prev! + 1) % images.gallery.length));
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === 0 ? images.gallery.length - 1 : prev! - 1));
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
    <section id="work" className="py-24 relative bg-theme-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-theme-border pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
              <span>// 01 ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-theme-text-primary">
              Selected Work
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-theme-text-secondary text-sm max-w-md font-light tracking-wide">
            Every ink mark tells a private ritual. Click any piece to inspect high-resolution linework and stippling details.
          </p>
        </div>

        {/* Masonry Grid (9 images) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.gallery.map((tattoo, index) => (
            <motion.div
              key={tattoo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="break-inside-avoid group relative cursor-pointer overflow-hidden border border-theme-border bg-theme-card hover:border-blood/70 transition-all duration-500 shadow-md"
              onClick={() => openLightbox(index)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
              aria-label={`View ${tattoo.title} tattoo details`}
            >
              <div className="relative overflow-hidden w-full">
                <Image
                  src={tattoo.src}
                  alt={tattoo.alt}
                  width={tattoo.width}
                  height={tattoo.height}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-blood mb-1">
                    {tattoo.style}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {tattoo.title}
                  </h3>
                  <div className="mt-2 flex items-center space-x-1 text-ink-muted text-xs">
                    <Eye className="w-3.5 h-3.5 text-blood" />
                    <span>Click to inspect</span>
                  </div>
                </div>

                {/* Corner Frame Accents */}
                <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-theme-border group-hover:border-blood transition-colors" />
                <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-theme-border group-hover:border-blood transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
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
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2 text-white/80 hover:text-blood bg-dark-card/80 border border-white/20 hover:border-blood transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-blood bg-dark-card/70 border border-white/20 hover:border-blood transition-colors"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-blood bg-dark-card/70 border border-white/20 hover:border-blood transition-colors"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden border border-white/20 bg-dark-card">
                <Image
                  src={activeTattoo.src}
                  alt={activeTattoo.alt}
                  width={activeTattoo.width}
                  height={activeTattoo.height}
                  className="max-h-[70vh] w-auto object-contain"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 w-full flex flex-col sm:flex-row sm:items-center justify-between text-left border-t border-white/10 pt-3 text-white">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-blood">
                    {activeTattoo.style} • Piece {selectedIndex + 1} of {images.gallery.length}
                  </span>
                  <h4 className="font-display text-xl text-white font-semibold mt-0.5">
                    {activeTattoo.title}
                  </h4>
                </div>
                <a
                  href="#booking"
                  onClick={closeLightbox}
                  className="mt-3 sm:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white border border-white/20 hover:border-blood hover:text-blood px-4 py-2 transition-colors self-start"
                >
                  <span>Request Similar Custom Design</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
