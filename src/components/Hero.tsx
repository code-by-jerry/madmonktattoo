"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import Image from "next/image";
import { MessageCircle, Calendar, ShieldCheck, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background with Dark Ink Ambience & Placeholder Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20 dark:opacity-25 scale-105"
        />
        {/* Gradients blending into current theme background */}
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-theme-bg/85 to-theme-bg/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(179,18,45,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* "Now Booking" Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blood/10 border border-blood/40 text-blood text-xs uppercase tracking-[0.25em] font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blood animate-ping" />
          <span className="w-1.5 h-1.5 rounded-full bg-blood" />
          <span>{siteConfig.brand.bookingBadge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-theme-text-primary leading-[1.08] max-w-4xl"
        >
          Your Story, <span className="text-blood italic">Inked.</span>
        </motion.h1>

        {/* Short Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-theme-text-secondary max-w-2xl font-light leading-relaxed tracking-wide"
        >
          {siteConfig.brand.subheadline}
        </motion.p>

        {/* Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-blood hover:bg-blood-hover text-white text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-[0_0_25px_rgba(179,18,45,0.4)] hover:shadow-[0_0_35px_rgba(179,18,45,0.7)] group"
          >
            <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 border border-theme-border hover:border-blood bg-theme-card/60 hover:bg-theme-surface text-theme-text-primary text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-sm"
          >
            <Calendar className="w-4 h-4 text-blood" />
            <span>Request a Booking</span>
          </a>
        </motion.div>

        {/* Small Trust Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-theme-border w-full max-w-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {siteConfig.brand.trustRow.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 text-theme-text-secondary text-xs tracking-wider"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blood shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-12 hidden md:flex flex-col items-center text-theme-text-muted hover:text-theme-text-primary transition-colors">
          <a href="#work" className="flex flex-col items-center" aria-label="Scroll to portfolio">
            <span className="text-[10px] uppercase tracking-[0.3em] mb-1 font-mono">Explore</span>
            <ChevronDown className="w-4 h-4 text-blood animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
