"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? siteConfig.testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % siteConfig.testimonials.length);
  };

  const current = siteConfig.testimonials[currentIndex];

  return (
    <section className="py-24 relative bg-dark-surface/50 border-t border-ink-paper/10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blood/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
            <span>// 06 HEALED STORIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-paper">
            Client Testimonials
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-dark-card border border-ink-paper/10 p-8 sm:p-12 md:p-16 shadow-2xl">
          <Quote className="w-12 h-12 text-blood/20 absolute top-8 left-8" />

          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="text-center max-w-3xl flex flex-col items-center"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 mb-6 text-blood">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blood text-blood" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-ink-paper font-light leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Client info & Tattoo piece */}
                <div className="mt-8">
                  <div className="font-display text-lg font-bold text-ink-paper tracking-wider">
                    {current.client}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-ink-muted mt-1">
                    {current.location} • <span className="text-blood">{current.tattooType}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="mt-10 pt-6 border-t border-ink-paper/10 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {siteConfig.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 transition-all ${
                    currentIndex === i ? "w-8 bg-blood" : "w-2 bg-ink-paper/20 hover:bg-ink-paper/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevReview}
                className="p-2.5 border border-ink-paper/20 hover:border-blood text-ink-paper hover:text-blood transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="p-2.5 border border-ink-paper/20 hover:border-blood text-ink-paper hover:text-blood transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
