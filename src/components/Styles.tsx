"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Styles() {
  return (
    <section id="styles" className="py-24 relative bg-dark-surface/50 border-t border-ink-paper/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
            <span>// 02 EXPERTISE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink-paper">
            Tattoo Styles & Disciplines
          </h2>
          <p className="mt-4 text-ink-muted text-sm sm:text-base font-light tracking-wide">
            From single-needle delicate sacred scripts to heavy blackwork armor. We specialize in custom compositions tailored to anatomical muscle lines.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.styles.map((style, index) => {
            const styleImg = images.styles[style.id] || {
              src: `/placeholders/style-${style.id}.svg`,
              alt: style.title,
            };

            return (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col bg-dark-card border border-ink-paper/10 hover:border-blood/60 transition-all duration-300 overflow-hidden"
              >
                {/* Image Aspect Box */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-dark">
                  <Image
                    src={styleImg.src}
                    alt={style.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-80" />
                  
                  {/* Style number badge */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-dark/80 border border-ink-paper/20 text-ink-paper">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink-paper group-hover:text-blood transition-colors flex items-center justify-between">
                      <span>{style.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blood shrink-0" />
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
                      {style.description}
                    </p>
                  </div>

                  {/* Direct Link to booking pre-filtered */}
                  <div className="mt-5 pt-3 border-t border-ink-paper/5">
                    <a
                      href={`#booking?style=${style.id}`}
                      className="text-[11px] uppercase tracking-widest text-ink-paper/60 hover:text-blood transition-colors inline-block"
                    >
                      Inquire Style →
                    </a>
                  </div>
                </div>

                {/* Bottom Red Glow Line on Hover */}
                <div className="h-[2px] w-0 group-hover:w-full bg-blood transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
