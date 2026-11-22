"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-theme-bg/95 backdrop-blur-md border-b border-theme-border py-2.5 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Light/Dark studio emblem */}
          <Link
            href="#"
            className="group flex items-center space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood rounded-sm"
            aria-label={`${siteConfig.brand.name} Home`}
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 overflow-hidden rounded-full border border-theme-border group-hover:border-blood transition-colors shadow-sm bg-theme-surface">
              {/* Light mode logo */}
              <Image
                src={images.logo.light}
                alt={images.logo.alt}
                fill
                sizes="48px"
                priority
                className="object-contain p-0.5 dark:hidden"
              />
              {/* Dark mode logo */}
              <Image
                src={images.logo.dark}
                alt={images.logo.alt}
                fill
                sizes="48px"
                priority
                className="object-cover hidden dark:block"
              />
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 bg-blood rotate-45 inline-block group-hover:scale-125 transition-transform" />
                <span className="font-display font-bold text-lg sm:text-xl tracking-[0.2em] text-theme-text-primary transition-colors leading-none">
                  {siteConfig.brand.wordmarkPrefix} {siteConfig.brand.wordmarkSuffix}
                </span>
              </div>
              <span className="text-[9px] tracking-[0.32em] text-theme-text-muted uppercase pl-3 font-mono mt-1">
                {siteConfig.brand.submark}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main Navigation"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-theme-text-secondary hover:text-theme-text-primary hover:border-b hover:border-blood py-1 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons + Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />

            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="inline-flex items-center space-x-2 px-4 py-2 border border-theme-border rounded-none text-xs uppercase tracking-widest text-theme-text-primary hover:bg-theme-surface transition-colors"
              aria-label={`Call ${siteConfig.brand.name} at ${siteConfig.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-theme-text-muted" />
              <span>Call</span>
            </a>

            {/* Accent button: Book on WhatsApp in Blood Red */}
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2 bg-blood hover:bg-blood-hover text-white rounded-none text-xs uppercase font-medium tracking-widest transition-all shadow-[0_0_15px_rgba(179,18,45,0.35)] hover:shadow-[0_0_20px_rgba(179,18,45,0.6)]"
              aria-label="Book on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + Phone + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="p-2 border border-theme-border text-theme-text-primary hover:bg-theme-surface rounded-none"
              aria-label="Call studio"
            >
              <Phone className="w-4 h-4 text-theme-text-muted" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-theme-text-primary hover:text-blood transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-theme-surface border-b border-theme-border px-6 py-6 space-y-5 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-medium uppercase tracking-[0.2em] text-theme-text-secondary hover:text-blood py-2 border-b border-theme-border-subtle transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col space-y-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-blood text-white text-xs uppercase tracking-widest font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="flex items-center justify-center space-x-2 w-full py-3 border border-theme-border text-theme-text-primary text-xs uppercase tracking-widest hover:bg-theme-bg"
            >
              <Phone className="w-4 h-4 text-theme-text-muted" />
              <span>Call {siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
