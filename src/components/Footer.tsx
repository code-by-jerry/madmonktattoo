"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeStudioIndex, setActiveStudioIndex] = useState(0);

  const activeStudio = siteConfig.contact.studios[activeStudioIndex];

  return (
    <footer className="bg-theme-bg border-t border-theme-border pt-16 pb-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Wordmark (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="#" className="flex items-center space-x-3 mb-4 group">
                <div className="relative w-11 h-11 shrink-0 overflow-hidden rounded-full border border-theme-border group-hover:border-blood transition-colors bg-theme-surface">
                  <Image
                    src={images.logo.light}
                    alt={images.logo.alt}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5 dark:hidden"
                  />
                  <Image
                    src={images.logo.dark}
                    alt={images.logo.alt}
                    fill
                    sizes="48px"
                    className="object-cover hidden dark:block"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-blood rotate-45 inline-block" />
                    <span className="font-display font-bold text-xl sm:text-2xl tracking-[0.22em] text-theme-text-primary">
                      {siteConfig.brand.wordmarkPrefix} {siteConfig.brand.wordmarkSuffix}
                    </span>
                  </div>
                  <span className="text-[9px] tracking-[0.35em] text-theme-text-muted uppercase pl-3 font-mono">
                    {siteConfig.brand.submark}
                  </span>
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-theme-text-secondary font-light leading-relaxed max-w-sm mt-3">
                Sacred linework, bespoke dark neo-traditional, and anatomical blackwork. Operating by private appointment across Coimbatore & Palangarai (Avinashi), Tamil Nadu.
              </p>
            </div>

            {/* Social link */}
            <div className="mt-6 flex items-center space-x-4">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-theme-text-primary hover:text-blood transition-colors p-2 border border-theme-border hover:border-blood"
              >
                <Instagram className="w-4 h-4 text-blood" />
                <span>{siteConfig.contact.instagram}</span>
                <ArrowUpRight className="w-3 h-3 text-theme-text-muted" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-blood mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-theme-text-secondary hover:text-theme-text-primary hover:pl-1 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Details & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-blood mb-4">
              Studios & Contact
            </h4>

            {/* Two Studio Addresses */}
            <div className="space-y-3">
              {siteConfig.contact.studios.map((studio, sIdx) => (
                <div key={studio.id} className="flex items-start space-x-2.5 text-xs text-theme-text-secondary">
                  <MapPin className="w-4 h-4 text-blood shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-theme-text-primary block font-mono text-[11px]">
                      {studio.name}
                    </span>
                    <span className="leading-relaxed text-[11px] text-theme-text-muted">{studio.address}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start space-x-3 text-xs text-theme-text-secondary pt-1">
              <Clock className="w-4 h-4 text-blood shrink-0 mt-0.5" />
              <span className="leading-relaxed">{siteConfig.contact.studioTimings}</span>
            </div>

            <div className="flex items-center space-x-3 text-xs text-theme-text-secondary pt-1">
              <Phone className="w-4 h-4 text-blood shrink-0" />
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="hover:text-blood transition-colors font-mono font-medium"
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="flex items-center space-x-3 text-xs text-theme-text-secondary">
              <MessageCircle className="w-4 h-4 text-blood shrink-0" />
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blood transition-colors font-mono"
              >
                WhatsApp Direct: {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          {/* Dual Studio Google Maps Embed (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-blood">
                Map View
              </h4>

              {/* Studio selector tabs */}
              <div className="flex items-center border border-theme-border p-0.5 bg-theme-surface">
                {siteConfig.contact.studios.map((studio, idx) => (
                  <button
                    key={studio.id}
                    type="button"
                    onClick={() => setActiveStudioIndex(idx)}
                    className={`px-2 py-1 text-[10px] font-mono tracking-wider transition-colors ${
                      activeStudioIndex === idx
                        ? "bg-blood text-white font-semibold"
                        : "text-theme-text-muted hover:text-theme-text-primary"
                    }`}
                  >
                    {studio.shortName}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative aspect-video w-full border border-theme-border overflow-hidden bg-theme-card group shadow-sm">
              <iframe
                key={activeStudio.id}
                title={`${activeStudio.name} Map Location`}
                src={activeStudio.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="opacity-90 group-hover:opacity-100 transition-opacity grayscale contrast-125"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-theme-card/95 backdrop-blur-sm p-1.5 text-[9px] font-mono text-theme-text-muted flex items-center justify-between border border-theme-border">
                <span className="font-semibold text-theme-text-primary truncate pr-2">{activeStudio.city}</span>
                <span className="text-blood font-semibold shrink-0">Google Maps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Ethics */}
        <div className="pt-8 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between text-[11px] text-theme-text-muted font-mono">
          <p>© {currentYear} {siteConfig.brand.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 tracking-wider">
            Coimbatore & Avinashi • Sterile Single-Use Cartridges • Strictly By Appointment
          </p>
        </div>
      </div>
    </footer>
  );
}
