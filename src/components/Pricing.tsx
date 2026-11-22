"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function Pricing() {
  const { eyebrow, heading, subtext, tiers, offer } = siteConfig.sessions;

  const handleSelectSession = (sessionType: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-session-type", { detail: sessionType })
      );
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="pricing" className="py-24 relative bg-theme-bg border-t border-theme-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
            <span>{eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-theme-text-primary">
            {heading}
          </h2>
          <p className="mt-4 text-theme-text-secondary text-sm sm:text-base font-light tracking-wide leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* 3 Session Tiers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 bg-theme-card border transition-all duration-300 shadow-md ${
                tier.recommended
                  ? "border-blood shadow-[0_0_30px_rgba(179,18,45,0.2)] md:-translate-y-2 ring-1 ring-blood"
                  : "border-theme-border hover:border-theme-border"
              }`}
            >
              {/* Badge if featured */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-3 py-1 text-[10px] font-mono uppercase tracking-widest font-semibold ${
                      tier.recommended
                        ? "bg-blood text-white shadow-md"
                        : "bg-theme-card border border-theme-border text-theme-text-primary"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Title & Duration */}
              <div className="mb-6 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-theme-text-muted block">
                  {tier.duration}
                </span>
                <h3 className="font-display text-2xl font-bold text-theme-text-primary mt-1">
                  {tier.name}
                </h3>
                
                {/* Replaced starting price with single line Quote on enquiry */}
                <div className="mt-4 pt-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-theme-text-muted block">
                    {tier.priceLabel}
                  </span>
                </div>

                <p className="mt-3 text-xs text-theme-text-secondary leading-relaxed font-light">
                  {tier.description}
                </p>
              </div>

              <div className="h-[1px] bg-theme-border w-full mb-6" />

              {/* Feature Checklist */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start space-x-3 text-xs sm:text-sm text-theme-text-primary">
                    <Check className="w-4 h-4 text-blood shrink-0 mt-0.5" />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button: Get a Quote */}
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectSession(tier.sessionType);
                }}
                className={`w-full py-3.5 text-center text-xs uppercase tracking-[0.2em] font-semibold transition-all inline-flex items-center justify-center space-x-2 ${
                  tier.recommended
                    ? "bg-blood hover:bg-blood-hover text-white shadow-lg"
                    : "border border-theme-border hover:border-blood text-theme-text-primary hover:bg-theme-surface"
                }`}
                aria-label={`Get a quote for ${tier.name}`}
              >
                <span>Get a Quote →</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Full-Width Dark Banner: Launch Month Offer */}
        <div className="mt-14 w-full bg-zinc-950 text-white border border-zinc-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Atmospheric background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blood/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-blood text-white font-semibold mb-3">
                <Sparkles className="w-3 h-3" />
                <span>{offer.badge}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {offer.headline}
              </h3>
              <p className="mt-2 text-zinc-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                {offer.description}
              </p>
            </div>

            <a
              href="#booking"
              onClick={() => {
                const el = document.getElementById("booking");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-blood hover:bg-blood-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_20px_rgba(179,18,45,0.4)] hover:shadow-[0_0_30px_rgba(179,18,45,0.7)] shrink-0 self-start md:self-center"
            >
              <span>{offer.cta}</span>
            </a>
          </div>
        </div>

        {/* Small Note Under Banner */}
        <p className="mt-4 text-center text-xs font-mono text-theme-text-muted tracking-wide">
          {offer.note}
        </p>
      </div>
    </section>
  );
}