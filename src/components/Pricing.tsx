"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Check, ShieldAlert, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-theme-bg border-t border-theme-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
            <span>// 05 INVESTMENT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-theme-text-primary">
            Session Tiers & Pricing
          </h2>
          <p className="mt-4 text-theme-text-secondary text-sm sm:text-base font-light tracking-wide">
            Transparent, unhurried craft. We price by dedicated studio sessions rather than rushing your skin by the minute.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteConfig.pricing.map((tier, index) => (
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

              {/* Title & Price */}
              <div className="mb-6 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-theme-text-muted block">
                  {tier.duration}
                </span>
                <h3 className="font-display text-2xl font-bold text-theme-text-primary mt-1">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-xs font-mono uppercase text-theme-text-muted mr-2">starting from</span>
                  <span className="font-display text-3xl sm:text-4xl font-bold text-theme-text-primary">
                    {tier.startingPrice}
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

              {/* Action Button */}
              <a
                href="#booking"
                className={`w-full py-3.5 text-center text-xs uppercase tracking-[0.2em] font-semibold transition-all inline-flex items-center justify-center space-x-2 ${
                  tier.recommended
                    ? "bg-blood hover:bg-blood-hover text-white shadow-lg"
                    : "border border-theme-border hover:border-blood text-theme-text-primary hover:bg-theme-surface"
                }`}
              >
                <span>Reserve Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Deposit and Policy Callout Note */}
        <div className="mt-12 max-w-3xl mx-auto p-5 bg-theme-card border border-theme-border flex items-start space-x-3 text-xs sm:text-sm text-theme-text-secondary shadow-sm">
          <ShieldAlert className="w-5 h-5 text-blood shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-theme-text-primary uppercase tracking-wider block mb-1">
              Booking Deposit Protocol
            </span>
            {siteConfig.pricingNote}
          </div>
        </div>
      </div>
    </section>
  );
}
