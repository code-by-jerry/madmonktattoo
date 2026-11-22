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
      setIsScrolled(window.scrollY > 20);
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
          ? "bg-theme-bg/95 backdrop-blur-md border-b border-theme-border/60 py-2 shadow-sm"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Desktop Left: Home & Work Navigation Links */}
          <nav
            className="hidden md:flex flex-1 items-center justify-start space-x-10"
            aria-label="Main Navigation Left"
          >
            <a
              href="#"
              className="text-xs uppercase tracking-[0.25em] font-medium text-theme-text-secondary hover:text-blood transition-colors py-1 relative group"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blood transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#work"
              className="text-xs uppercase tracking-[0.25em] font-medium text-theme-text-secondary hover:text-blood transition-colors py-1 relative group"
            >
              <span>Work</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blood transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Center: Big Mad Monk Logo (No border, No background, Pure emblem) */}
          <div className="flex items-center justify-center">
            <Link
              href="#"
              className="group relative flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood rounded-sm transition-transform duration-300 hover:scale-105"
              aria-label={`${siteConfig.brand.name} Home`}
            >
              {/* Responsive prominent sizing: 56px on mobile, 72px on tablet, 84px on desktop */}
              <div className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22">
                {/* Light mode: crisp dark ink artwork on transparent background */}
                <Image
                  src={images.logo.light}
                  alt={images.logo.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 56px, (max-width: 768px) 72px, 88px"
                  className="object-contain dark:hidden transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dark mode: crisp white artwork with 100% transparent background (no box, no border) */}
                <Image
                  src={images.logo.light}
                  alt={images.logo.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 56px, (max-width: 768px) 72px, 88px"
                  className="object-contain hidden dark:block invert brightness-125 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Right: Contact Link + Theme Toggle + Book Button */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
            <a
              href="#booking"
              className="text-xs uppercase tracking-[0.25em] font-medium text-theme-text-secondary hover:text-blood transition-colors py-1 relative group"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blood transition-all duration-300 group-hover:w-full" />
            </a>

            <ThemeToggle />

            {/* Direct WhatsApp Call-to-action */}
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blood hover:bg-blood-hover text-white rounded-none text-xs uppercase font-semibold tracking-widest transition-all shadow-[0_0_15px_rgba(179,18,45,0.35)] hover:shadow-[0_0_20px_rgba(179,18,45,0.6)]"
              aria-label="Book on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Book</span>
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

      {/* Mobile Drawer Menu (Home, Work, Contact + Action CTAs) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-theme-surface border-b border-theme-border px-6 py-6 space-y-5 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-medium uppercase tracking-[0.25em] text-theme-text-secondary hover:text-blood py-2 border-b border-theme-border-subtle transition-colors"
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
              onClick={handleNavClick}
              className="flex items-center justify-center space-x-2 w-full py-3.5 bg-blood text-white text-xs uppercase tracking-widest font-semibold shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              onClick={handleNavClick}
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