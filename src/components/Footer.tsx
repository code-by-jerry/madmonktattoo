import Link from "next/link";
import { siteConfig } from "@/data/site";
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

  return (
    <footer className="bg-dark border-t border-ink-paper/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Wordmark (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="#" className="flex flex-col items-start mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blood rotate-45 inline-block" />
                  <span className="font-display font-bold text-2xl tracking-[0.22em] text-ink-paper">
                    {siteConfig.brand.wordmarkPrefix}{" "}
                    <span className="text-blood">{siteConfig.brand.wordmarkSuffix}</span>
                  </span>
                </div>
                <span className="text-[9px] tracking-[0.35em] text-ink-muted uppercase pl-4 font-mono">
                  {siteConfig.brand.submark}
                </span>
              </Link>
              <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed max-w-sm mt-3">
                Sacred linework, bespoke dark neo-traditional, and anatomical blackwork. Operating by private appointment in Bengaluru, India.
              </p>
            </div>

            {/* Social link */}
            <div className="mt-6 flex items-center space-x-4">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-ink-paper hover:text-blood transition-colors p-2 border border-ink-paper/10 hover:border-blood"
              >
                <Instagram className="w-4 h-4 text-blood" />
                <span>{siteConfig.contact.instagram}</span>
                <ArrowUpRight className="w-3 h-3 text-ink-dim" />
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
                    className="text-xs uppercase tracking-widest text-ink-muted hover:text-ink-paper hover:pl-1 transition-all"
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
              Studio & Hours
            </h4>

            <div className="flex items-start space-x-3 text-xs text-ink-muted">
              <MapPin className="w-4 h-4 text-blood shrink-0 mt-0.5" />
              <span className="leading-relaxed">{siteConfig.contact.address}</span>
            </div>

            <div className="flex items-start space-x-3 text-xs text-ink-muted">
              <Clock className="w-4 h-4 text-blood shrink-0 mt-0.5" />
              <span className="leading-relaxed">{siteConfig.contact.studioTimings}</span>
            </div>

            <div className="flex items-center space-x-3 text-xs text-ink-muted pt-2">
              <Phone className="w-4 h-4 text-blood shrink-0" />
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="hover:text-ink-paper transition-colors font-mono"
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="flex items-center space-x-3 text-xs text-ink-muted">
              <MessageCircle className="w-4 h-4 text-blood shrink-0" />
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blood transition-colors font-mono"
              >
                WhatsApp Direct Inquiries
              </a>
            </div>
          </div>

          {/* Google Maps Embed Placeholder (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-blood mb-4">
              Studio Location
            </h4>
            <div className="relative aspect-video w-full border border-ink-paper/10 overflow-hidden bg-dark-card group">
              <iframe
                title="Mad Monk Tattoo Studio Location Map"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-dark/90 p-1.5 text-[9px] font-mono text-ink-dim flex items-center justify-between">
                <span>Indiranagar, Bengaluru</span>
                <span className="text-blood">Google Maps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Ethics */}
        <div className="pt-8 border-t border-ink-paper/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ink-dim font-mono">
          <p>© {currentYear} {siteConfig.brand.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 tracking-wider">
            Sterile Single-Use Cartridges • 100% Custom Stencils • No Walk-ins
          </p>
        </div>
      </div>
    </footer>
  );
}
