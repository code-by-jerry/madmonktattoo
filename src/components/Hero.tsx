"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import Image from "next/image";
import { MessageCircle, Calendar, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-28 sm:pt-36 pb-16">
      {/* Background Hero Image with Atmospheric Depth */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[80%_center] filter contrast-105"
        />
        {/* Soft Vignette Gradients ensuring left content readability while hero art shines on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-theme-bg/95 via-theme-bg/75 to-theme-bg/25 sm:via-theme-bg/50 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-theme-bg/60" />
      </div>

      {/* Hero Content: Left Side Compact Cleaner White Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full max-w-lg lg:max-w-xl bg-white/95 dark:bg-black/90 backdrop-blur-md p-6 sm:p-8 md:p-10 border border-zinc-200/90 dark:border-white/10 shadow-2xl text-left"
        >
          {/* Studio Location & Discipline Badge */}
          <div className="inline-flex items-center space-x-2 text-blood text-[10px] sm:text-xs uppercase tracking-[0.25em] font-mono mb-3">
            <span className="w-1.5 h-1.5 bg-blood rotate-45 inline-block" />
            <span>Coimbatore & Avinashi Studio</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.12]">
            Your Story, <span className="text-blood italic">Inked.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed font-light">
            {siteConfig.brand.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-blood hover:bg-blood-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_20px_rgba(179,18,45,0.35)] hover:shadow-[0_0_25px_rgba(179,18,45,0.6)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>

            <a
              href="#booking"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 border border-zinc-300 dark:border-zinc-700 hover:border-blood text-zinc-900 dark:text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <Calendar className="w-4 h-4 text-blood" />
              <span>Request a Session</span>
            </a>
          </div>

          {/* Compact Trust Row */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 gap-3">
            {siteConfig.brand.trustRow.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 text-[11px] tracking-wide"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blood shrink-0" />
                <span className="font-light">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}