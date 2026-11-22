"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { MessageSquareText, PenTool, Sparkles, HeartHandshake } from "lucide-react";

export default function Process() {
  const stepIcons = [
    MessageSquareText,
    PenTool,
    Sparkles,
    HeartHandshake,
  ];

  return (
    <section id="process" className="py-24 relative bg-theme-surface/30 border-t border-theme-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
            <span>// 04 THE JOURNEY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-theme-text-primary">
            The Studio Ritual
          </h2>
          <p className="mt-4 text-theme-text-secondary text-sm sm:text-base font-light tracking-wide">
            Four deliberate stages from your initial concept to permanent, fully-healed sacred art.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blood/60 to-transparent z-0" />

          {/* 4 Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {siteConfig.process.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col relative group"
                >
                  {/* Step Node & Icon */}
                  <div className="flex items-center justify-between lg:justify-start lg:flex-col lg:items-start mb-6">
                    <div className="relative w-14 h-14 bg-theme-card border border-theme-border group-hover:border-blood flex items-center justify-center transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5 text-blood" />
                      <span className="absolute -top-2.5 -right-2.5 px-1.5 py-0.5 bg-theme-card border border-blood/50 text-blood text-[10px] font-mono font-bold shadow-sm">
                        {step.number}
                      </span>
                    </div>

                    {/* Mobile vertical line connector */}
                    <div className="block lg:hidden flex-1 h-[1px] bg-theme-border ml-4" />
                  </div>

                  {/* Text Details */}
                  <div className="p-6 bg-theme-card border border-theme-border group-hover:border-blood/40 transition-colors flex-1 flex flex-col shadow-sm">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blood mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="font-display text-xl font-bold text-theme-text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
