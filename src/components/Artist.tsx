"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import Image from "next/image";
import { Award, Compass, Sparkles } from "lucide-react";

export default function Artist() {
  return (
    <section id="artist" className="py-24 relative bg-dark overflow-hidden border-t border-ink-paper/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frames */}
              <div className="absolute -inset-4 border border-ink-paper/10 -rotate-1 pointer-events-none" />
              <div className="absolute -inset-4 border border-blood/30 rotate-1 pointer-events-none" />

              <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink-paper/20 bg-dark-card shadow-2xl">
                <Image
                  src={images.artist.src}
                  alt={images.artist.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter contrast-125 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-dark/90 backdrop-blur-sm border-l-2 border-blood">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-blood">
                    Lead Resident Artist
                  </p>
                  <p className="font-display text-lg text-ink-paper font-bold">
                    {siteConfig.artist.name}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story & Philosophy Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
              <span>// 03 THE INKSMITH</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-paper">
              The Monk Behind The Needle
            </h2>

            <div className="mt-6 space-y-4 text-ink-muted text-sm sm:text-base leading-relaxed font-light">
              {siteConfig.artist.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Ritual Philosophy Quote */}
            <blockquote className="mt-8 pl-5 border-l-2 border-blood italic text-ink-paper/90 text-sm sm:text-base font-serif">
              &ldquo;Skin is not a canvas to fill with clutter; it is a living manuscript. Every needle puncture must carry meaning, breath, and surgical stillness.&rdquo;
              <footer className="mt-2 text-xs uppercase font-mono tracking-widest text-ink-dim not-italic">
                — {siteConfig.artist.name}
              </footer>
            </blockquote>

            {/* 3 Stats Row */}
            <div className="mt-10 pt-8 border-t border-ink-paper/10 grid grid-cols-3 gap-6">
              {siteConfig.artist.stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-display text-2xl sm:text-4xl font-bold text-blood tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-ink-muted mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="mt-8">
              <a
                href="#process"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-ink-paper hover:text-blood transition-colors font-medium"
              >
                <span>Read Studio Ritual & Workflow →</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
