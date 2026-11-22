"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/data/site";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
} from "lucide-react";

// Form validation schema - simplified and streamlined
const clientBookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone or WhatsApp number with at least 10 digits")
    .regex(/^[+0-9\s\-()]+$/, "Only numbers and valid phone characters allowed"),
  placement: z.string().min(1, "Please select a body placement"),
  preferredStudio: z.string().optional(),
  preferredDate: z.string().optional(),
  tattooIdea: z.string().optional(), // Now optional as requested
  website: z.string().max(0).optional(), // honeypot
});

type BookingFormData = z.infer<typeof clientBookingSchema>;

const PLACEMENT_OPTIONS = [
  "Forearm (Inner/Outer)",
  "Upper Arm / Bicep",
  "Shoulder / Clavicle",
  "Chest / Sternum",
  "Spine / Full Back",
  "Ribs / Side Torso",
  "Thigh / Calf",
  "Wrist / Hand",
  "Neck / Throat",
  "Ankle / Foot",
  "Other / Custom Placement",
];

const STUDIO_OPTIONS = [
  "Malumichampatti, Coimbatore Studio",
  "Palangarai, Avinashi Studio",
  "Either Location (Flexible)",
];

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [minDate, setMinDate] = useState<string>("");
  const [customWhatsAppUrl, setCustomWhatsAppUrl] = useState<string>("");

  useEffect(() => {
    // Avoid server/client timezone mismatch on hydration
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(clientBookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      placement: "",
      preferredStudio: "Malumichampatti, Coimbatore Studio",
      preferredDate: "",
      tattooIdea: "",
      website: "",
    },
  });

  const generateWhatsAppEnquiryUrl = (data: BookingFormData): string => {
    const phone = "919080937352";
    const ideaText =
      data.tattooIdea && data.tattooIdea.trim()
        ? data.tattooIdea.trim()
        : "To be discussed during consultation";
    const dateText = data.preferredDate ? data.preferredDate : "Flexible / Next Available";
    const studioText = data.preferredStudio || "Malumichampatti, Coimbatore Studio";

    const message = [
      "🔥 *NEW TATTOO ENQUIRY // MAD MONK STUDIO*",
      "",
      "Hi Joo, I would like to book a custom tattoo consultation. Here are my details:",
      "",
      `👤 *Name:* ${data.fullName}`,
      `📱 *Phone / WhatsApp:* ${data.phone}`,
      `📍 *Placement:* ${data.placement}`,
      `🏛️ *Studio:* ${studioText}`,
      `🗓️ *Preferred Date:* ${dateText}`,
      "",
      "💡 *Tattoo Idea & Symbolism:*",
      `"${ideaText}"`,
      "",
      "Please let me know your available slots and personalized quote. Thank you!",
    ].join("\n");

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // 1. Build the custom WhatsApp link with the user's filled inputs
    const waUrl = generateWhatsAppEnquiryUrl(data);
    setCustomWhatsAppUrl(waUrl);

    // 2. Open WhatsApp in new tab immediately during user gesture
    try {
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      // If browser blocked popup, fallback button on the success screen provides 1-tap open
    }

    try {
      // 3. Simultaneously log to backend
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit booking request.");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      console.warn("API booking notice:", err);
      // Still show success since WhatsApp was prepared/opened
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-24 relative bg-theme-bg border-t border-theme-border transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-blood text-xs uppercase tracking-[0.3em] font-mono mb-3">
            <span>// 07 INK CONSULTATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-theme-text-primary">
            Request A Custom Session
          </h2>
          <p className="mt-4 text-theme-text-secondary text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto">
            Fill in your details below. Joo reviews every inquiry personally and responds within 24 hours.
          </p>
        </div>

        {/* Success Banner */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 bg-theme-card border border-blood/60 text-center shadow-2xl animate-in fade-in duration-300">
            <CheckCircle2 className="w-16 h-16 text-blood mx-auto mb-6" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-theme-text-primary">
              Enquiry Prepared for WhatsApp
            </h3>
            <p className="mt-3 text-theme-text-secondary text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-light">
              Your tattoo request has been formatted with your custom details. If WhatsApp didn&apos;t open automatically, tap the button below to send your message directly to Joo:
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={customWhatsAppUrl || siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-blood hover:bg-blood-hover text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-[0_0_20px_rgba(179,18,45,0.4)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open &amp; Send on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="w-full sm:w-auto px-6 py-4 border border-theme-border hover:border-blood text-theme-text-primary text-xs uppercase tracking-widest transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="p-6 sm:p-10 md:p-12 bg-theme-card border border-theme-border shadow-xl space-y-6"
          >
            {/* Honeypot field (hidden from view) */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              {...register("website")}
            />

            {submitError && (
              <div className="p-4 bg-blood/10 border border-blood/50 text-blood text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Row 1: Full Name & Phone/WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2"
                >
                  Full Name <span className="text-blood">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Arjun Mehta"
                  {...register("fullName")}
                  className={`w-full px-4 py-3 bg-theme-bg border text-sm text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-blood transition-colors ${
                    errors.fullName ? "border-blood" : "border-theme-border"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-blood flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 inline shrink-0" />
                    <span>{errors.fullName.message}</span>
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2"
                >
                  Phone / WhatsApp <span className="text-blood">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 90809 37352"
                  {...register("phone")}
                  className={`w-full px-4 py-3 bg-theme-bg border text-sm text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-blood transition-colors ${
                    errors.phone ? "border-blood" : "border-theme-border"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-blood flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 inline shrink-0" />
                    <span>{errors.phone.message}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Body Placement & Studio Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Placement */}
              <div>
                <label
                  htmlFor="placement"
                  className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2"
                >
                  Body Placement <span className="text-blood">*</span>
                </label>
                <select
                  id="placement"
                  {...register("placement")}
                  className={`w-full px-4 py-3 bg-theme-bg border text-sm text-theme-text-primary focus:outline-none focus:border-blood transition-colors ${
                    errors.placement ? "border-blood" : "border-theme-border"
                  }`}
                >
                  <option value="">Select body location</option>
                  {PLACEMENT_OPTIONS.map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                      className="bg-theme-bg text-theme-text-primary"
                    >
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.placement && (
                  <p className="mt-1.5 text-xs text-blood flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 inline shrink-0" />
                    <span>{errors.placement.message}</span>
                  </p>
                )}
              </div>

              {/* Studio Location */}
              <div>
                <label
                  htmlFor="preferredStudio"
                  className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2"
                >
                  Studio Location <span className="text-blood">*</span>
                </label>
                <select
                  id="preferredStudio"
                  {...register("preferredStudio")}
                  className="w-full px-4 py-3 bg-theme-bg border border-theme-border text-sm text-theme-text-primary focus:outline-none focus:border-blood transition-colors"
                >
                  {STUDIO_OPTIONS.map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                      className="bg-theme-bg text-theme-text-primary"
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Preferred Date (Optional) */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2"
              >
                Preferred Date (Optional)
              </label>
              <div className="relative">
                <input
                  id="preferredDate"
                  type="date"
                  min={minDate || undefined}
                  {...register("preferredDate")}
                  className="w-full px-4 py-3 bg-theme-bg border border-theme-border text-sm text-theme-text-primary focus:outline-none focus:border-blood transition-colors"
                />
              </div>
            </div>

            {/* Row 4: Tattoo Idea & Symbolism (Now Optional) */}
            <div>
              <label
                htmlFor="tattooIdea"
                className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2"
              >
                Tattoo Idea & Symbolism (Optional)
              </label>
              <textarea
                id="tattooIdea"
                rows={4}
                placeholder="Describe your story, symbolism, reference elements, or if this is a cover-up..."
                {...register("tattooIdea")}
                className="w-full px-4 py-3 bg-theme-bg border border-theme-border text-sm text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-blood resize-y transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blood hover:bg-blood-hover text-white text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-[0_0_20px_rgba(179,18,45,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing WhatsApp Consultation...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4 mr-1.5" />
                    <span>Send Booking Request on WhatsApp</span>
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-theme-text-muted mt-3 font-light">
                Transfers directly to WhatsApp with Joo at +91 90809 37352. No upfront fee required.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
