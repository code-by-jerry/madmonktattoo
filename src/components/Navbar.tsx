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
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-lg"
          : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: HOME | WORK | CONTACT in White Text */}
          <nav
            className="hidden md:flex flex-1 items-center justify-start space-x-3 lg:space-x-4 font-mono text-xs uppercase tracking-[0.22em]"
            aria-label="Main Navigation"
          >
            <a
              href="#"
              className="text-white hover:text-blood transition-colors py-1 font-medium drop-shadow-sm"
            >
              Home
            </a>
            <span className="text-white/40 select-none text-[10px]">|</span>
            <a
              href="#work"
              className="text-white hover:text-blood transition-colors py-1 font-medium drop-shadow-sm"
            >
              Work
            </a>
            <span className="text-white/40 select-none text-[10px]">|</span>
            <a
              href="#booking"
              className="text-white hover:text-blood transition-colors py-1 font-medium drop-shadow-sm"
            >
              Contact
            </a>
          </nav>

          {/* Center: Big White Logo (No border, No bg box, Pure white artwork) */}
          <div className="flex items-center justify-center">
            <Link
              href="#"
              className="group relative flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood rounded-sm transition-transform duration-300 hover:scale-105"
              aria-label={`${siteConfig.brand.name} Home`}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]">
                <Image
                  src={images.logo.light}
                  alt={images.logo.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  className="object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Right: Theme Toggle + Book Button */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle className="text-white hover:text-blood border-white/30 hover:border-white bg-black/25 backdrop-blur-sm" />

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blood hover:bg-blood-hover text-white rounded-none text-xs uppercase font-semibold tracking-widest transition-all shadow-[0_0_15px_rgba(179,18,45,0.45)] hover:shadow-[0_0_25px_rgba(179,18,45,0.7)]"
              aria-label="Book on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Book</span>
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + Phone + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle className="text-white hover:text-blood border-white/30 hover:border-white bg-black/30" />
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="p-2 border border-white/30 text-white hover:text-blood hover:border-white bg-black/30 rounded-none"
              aria-label="Call studio"
            >
              <Phone className="w-4 h-4 text-white" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-blood transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Home, Work, Contact in white text) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-white/10 px-6 py-6 space-y-5 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-4 font-mono text-sm uppercase tracking-[0.25em]" aria-label="Mobile Navigation">
            <a
              href="#"
              onClick={handleNavClick}
              className="text-white hover:text-blood py-2 border-b border-white/10 transition-colors"
            >
              Home
            </a>
            <a
              href="#work"
              onClick={handleNavClick}
              className="text-white hover:text-blood py-2 border-b border-white/10 transition-colors"
            >
              Work
            </a>
            <a
              href="#booking"
              onClick={handleNavClick}
              className="text-white hover:text-blood py-2 border-b border-white/10 transition-colors"
            >
              Contact
            </a>
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
              className="flex items-center justify-center space-x-2 w-full py-3 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white/10"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call {siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}