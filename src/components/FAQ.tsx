"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("pain");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative bg-theme-surface/30 border-t border-theme-border transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
            <span>// 08 PROTOCOLS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-theme-text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-theme-text-secondary text-sm sm:text-base font-light tracking-wide">
            Everything you need to know about preparing for your session, pain management, and ink longevity.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border transition-colors shadow-sm ${
                  isOpen
                    ? "border-blood/60 bg-theme-card shadow-md"
                    : "border-theme-border bg-theme-card hover:border-theme-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-blood"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-theme-text-primary pr-4">
                    {faq.question}
                  </span>
                  <span className="p-1 text-blood shrink-0 transition-transform duration-200">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-theme-text-secondary text-xs sm:text-sm leading-relaxed border-t border-theme-border-subtle font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-12 text-center text-xs text-theme-text-muted">
          Have an unanswered question?{" "}
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blood hover:underline font-mono uppercase tracking-wider"
          >
            Chat directly with Joo on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
