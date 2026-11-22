"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center space-x-3 pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip / Pill on Desktop */}
      <div
        className={`hidden sm:flex items-center bg-theme-card/95 backdrop-blur-sm border border-blood/60 text-theme-text-primary px-3 py-1.5 shadow-2xl transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <span className="text-xs font-mono tracking-wider">
          Chat with Vikram <span className="text-blood">• Fast Reply</span>
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 bg-blood hover:bg-blood-hover text-white rounded-full shadow-[0_0_20px_rgba(179,18,45,0.6)] hover:shadow-[0_0_30px_rgba(179,18,45,0.9)] transition-all transform hover:scale-110 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blood/50"
        aria-label="Direct WhatsApp chat with studio"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-blood opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 relative z-10 fill-white" />

        {/* Small live dot */}
        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-theme-card" />
      </a>
    </aside>
  );
}
