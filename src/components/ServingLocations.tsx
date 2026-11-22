"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { MapPin, Navigation, Car, Clock } from "lucide-react";

export default function ServingLocations() {
  return (
    <section
      id="locations"
      className="py-24 relative bg-theme-bg border-t border-theme-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
            <span>// 07 LOCATIONS</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-theme-text-primary">
            Serving Coimbatore &amp; Tirupur
          </h3>
          <p className="mt-4 text-theme-text-secondary text-sm sm:text-base font-light tracking-wide">
            Private, hygienic studio sanctuaries situated for seamless access across South Coimbatore and the Tirupur textile belt.
          </p>
        </div>

        {/* 2 City Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coimbatore Studio Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between p-8 sm:p-10 bg-theme-card border border-theme-border hover:border-blood/60 transition-all duration-300 shadow-md relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blood/5 rounded-bl-full pointer-events-none group-hover:bg-blood/10 transition-colors" />

            <div>
              <div className="inline-flex items-center space-x-2 text-blood text-[10px] font-mono uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5 text-blood" />
                <span>Primary Sanctuary</span>
              </div>

              <h4 className="font-display text-2xl font-bold text-theme-text-primary mb-3">
                Malumichampatti, Coimbatore Studio
              </h4>

              <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed font-light mb-6">
                Conveniently located off Pollachi Main Road in Malumichampatti, our south Coimbatore studio is easily accessible from Eachanari, Sundarapuram, Ukkadam, and Peelamedu. Clients visiting by car or cab enjoy private parking, tranquil surroundings away from city traffic, and a calm sanctuary tailored for focused full-day tattoo sessions.
              </p>

              <div className="space-y-3 pt-4 border-t border-theme-border-subtle text-xs text-theme-text-muted font-mono">
                <div className="flex items-center space-x-2.5">
                  <Navigation className="w-3.5 h-3.5 text-blood shrink-0" />
                  <span>10 mins from Eachanari Temple • 20 mins from Ukkadam</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Car className="w-3.5 h-3.5 text-blood shrink-0" />
                  <span>Dedicated client parking on premises</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-3.5 h-3.5 text-blood shrink-0" />
                  <span>Daily 9:00 AM – 11:00 PM (By Appointment)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-theme-border flex items-center justify-between">
              <a
                href={siteConfig.contact.studios[0].embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider font-mono text-blood hover:underline inline-flex items-center space-x-1.5"
              >
                <span>View Google Maps Location →</span>
              </a>
              <span className="text-[10px] uppercase font-mono text-theme-text-muted bg-theme-surface px-2.5 py-1 border border-theme-border">
                Coimbatore
              </span>
            </div>
          </motion.div>

          {/* Tirupur / Avinashi Studio Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between p-8 sm:p-10 bg-theme-card border border-theme-border hover:border-blood/60 transition-all duration-300 shadow-md relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blood/5 rounded-bl-full pointer-events-none group-hover:bg-blood/10 transition-colors" />

            <div>
              <div className="inline-flex items-center space-x-2 text-blood text-[10px] font-mono uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5 text-blood" />
                <span>Highway Sanctuary</span>
              </div>

              <h4 className="font-display text-2xl font-bold text-theme-text-primary mb-3">
                Palangarai, Avinashi (Serving Tirupur)
              </h4>

              <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed font-light mb-6">
                Situated in Palangarai, Avinashi along the National Highway, this location provides direct, hassle-free connectivity for clients from Tiruppur city center (just 15–20 minutes away), Erode, and Kangeyam. Regular express bus and highway routes ensure seamless transit for consultations and multi-hour portrait sittings.
              </p>

              <div className="space-y-3 pt-4 border-t border-theme-border-subtle text-xs text-theme-text-muted font-mono">
                <div className="flex items-center space-x-2.5">
                  <Navigation className="w-3.5 h-3.5 text-blood shrink-0" />
                  <span>15 mins from Tirupur Old &amp; New Bus Stands</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Car className="w-3.5 h-3.5 text-blood shrink-0" />
                  <span>Direct NH highway access with calm private setting</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-3.5 h-3.5 text-blood shrink-0" />
                  <span>Daily 9:00 AM – 11:00 PM (By Appointment)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-theme-border flex items-center justify-between">
              <a
                href={siteConfig.contact.studios[1].embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider font-mono text-blood hover:underline inline-flex items-center space-x-1.5"
              >
                <span>View Google Maps Location →</span>
              </a>
              <span className="text-[10px] uppercase font-mono text-theme-text-muted bg-theme-surface px-2.5 py-1 border border-theme-border">
                Tirupur
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
