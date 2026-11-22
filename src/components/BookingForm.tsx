"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/data/site";
import {
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
} from "lucide-react";

// Form validation schema
const clientBookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone or WhatsApp number with at least 10 digits")
    .regex(/^[+0-9\s\-()]+$/, "Only numbers and valid phone characters allowed"),
  tattooIdea: z
    .string()
    .min(10, "Please describe your tattoo idea in at least 10 characters"),
  placement: z.string().min(1, "Please select a body placement"),
  size: z.string().min(1, "Please select an approximate size"),
  style: z.string().min(1, "Please select a preferred tattoo style"),
  preferredDate: z.string().optional(),
  website: z.string().max(0).optional(), // honeypot
});

type BookingFormData = z.infer<typeof clientBookingSchema>;

interface ImagePreview {
  name: string;
  size: number;
  type: string;
  dataUrl: string;
}

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

const SIZE_OPTIONS = [
  "Small / Micro (Up to 2.5 × 2.5 inches)",
  "Medium (Approx 4 × 5 inches)",
  "Large (Approx 6 × 8 inches / Half-Sleeve)",
  "Full Placement (Full Sleeve, Backplate, Chest)",
  "Not sure yet (Need Vikram's guidance)",
];

const STYLE_OPTIONS = [
  "Blackwork (Solid black & heavy contrast)",
  "Linework (Fine contours & anatomy flow)",
  "Fine Line (Delicate single needle)",
  "Geometric / Sacred Mandalas",
  "Realism (High detail black & grey)",
  "Cover-up (Rework existing tattoo)",
  "Religious / Spiritual / Vedic Iconography",
  "Small & Minimalist Sigil",
  "Undecided / Open to Vikram's recommendation",
];

export default function BookingForm() {
  const [images, setImages] = useState<ImagePreview[]>([]);
  const [imageError, setImageError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
      tattooIdea: "",
      placement: "",
      size: "",
      style: "",
      preferredDate: "",
      website: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageError(null);
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (images.length + files.length > 3) {
      setImageError("You can upload a maximum of 3 reference images.");
      return;
    }

    const newPreviews: ImagePreview[] = [];
    const maxSizeBytes = 5 * 1024 * 1024; // 5MB

    Array.from(files).forEach((file) => {
      if (file.size > maxSizeBytes) {
        setImageError(`File "${file.name}" exceeds 5MB size limit.`);
        return;
      }
      if (!file.type.startsWith("image/")) {
        setImageError(`File "${file.name}" is not a valid image format.`);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push({
          name: file.name,
          size: file.size,
          type: file.type,
          dataUrl: reader.result as string,
        });

        if (newPreviews.length === files.length) {
          setImages((prev) => [...prev, ...newPreviews].slice(0, 3));
        }
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImageError(null);
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        ...data,
        referenceImages: images,
      };

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit booking request.");
      }

      setIsSuccess(true);
      reset();
      setImages([]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again or WhatsApp us.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 relative bg-theme-bg border-t border-theme-border transition-colors duration-300">
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
            Fill in your concept details below. Vikram reviews every inquiry personally and responds within 24 hours.
          </p>
        </div>

        {/* Success Banner */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 bg-theme-card border border-blood/60 text-center shadow-2xl animate-in fade-in duration-300">
            <CheckCircle2 className="w-16 h-16 text-blood mx-auto mb-6" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-theme-text-primary">
              Request Received
            </h3>
            <p className="mt-3 text-theme-text-secondary text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-light">
              Thank you for reaching out. Vikram has received your tattoo inquiry and will connect with you on WhatsApp shortly with initial thoughts and scheduling availability.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-blood text-white text-xs uppercase tracking-widest font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Follow Up Instantly on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="w-full sm:w-auto px-6 py-3.5 border border-theme-border hover:border-blood text-theme-text-primary text-xs uppercase tracking-widest"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2">
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
                <label htmlFor="phone" className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2">
                  Phone / WhatsApp <span className="text-blood">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
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

            {/* Select Row: Placement & Approximate Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Placement */}
              <div>
                <label htmlFor="placement" className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2">
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
                    <option key={opt} value={opt} className="bg-theme-bg text-theme-text-primary">
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

              {/* Size */}
              <div>
                <label htmlFor="size" className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2">
                  Approximate Size <span className="text-blood">*</span>
                </label>
                <select
                  id="size"
                  {...register("size")}
                  className={`w-full px-4 py-3 bg-theme-bg border text-sm text-theme-text-primary focus:outline-none focus:border-blood transition-colors ${
                    errors.size ? "border-blood" : "border-theme-border"
                  }`}
                >
                  <option value="">Select target size</option>
                  {SIZE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-theme-bg text-theme-text-primary">
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.size && (
                  <p className="mt-1.5 text-xs text-blood flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 inline shrink-0" />
                    <span>{errors.size.message}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Select Row: Style & Preferred Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preferred Style */}
              <div>
                <label htmlFor="style" className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2">
                  Preferred Style <span className="text-blood">*</span>
                </label>
                <select
                  id="style"
                  {...register("style")}
                  className={`w-full px-4 py-3 bg-theme-bg border text-sm text-theme-text-primary focus:outline-none focus:border-blood transition-colors ${
                    errors.style ? "border-blood" : "border-theme-border"
                  }`}
                >
                  <option value="">Select aesthetic style</option>
                  {STYLE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-theme-bg text-theme-text-primary">
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.style && (
                  <p className="mt-1.5 text-xs text-blood flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 inline shrink-0" />
                    <span>{errors.style.message}</span>
                  </p>
                )}
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2">
                  Preferred Date (Optional)
                </label>
                <div className="relative">
                  <input
                    id="preferredDate"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    {...register("preferredDate")}
                    className="w-full px-4 py-3 bg-theme-bg border border-theme-border text-sm text-theme-text-primary focus:outline-none focus:border-blood transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Tattoo Idea (Textarea) */}
            <div>
              <label htmlFor="tattooIdea" className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2">
                Tattoo Idea & Symbolism <span className="text-blood">*</span>
              </label>
              <textarea
                id="tattooIdea"
                rows={4}
                placeholder="Describe your story, symbolism, reference elements, or if this is a cover-up..."
                {...register("tattooIdea")}
                className={`w-full px-4 py-3 bg-theme-bg border text-sm text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-blood resize-y transition-colors ${
                  errors.tattooIdea ? "border-blood" : "border-theme-border"
                }`}
              />
              {errors.tattooIdea && (
                <p className="mt-1.5 text-xs text-blood flex items-center space-x-1">
                  <AlertCircle className="w-3 h-3 inline shrink-0" />
                  <span>{errors.tattooIdea.message}</span>
                </p>
              )}
            </div>

            {/* Reference Image Upload (Up to 3 images, max 5MB each) */}
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-theme-text-primary mb-2">
                Reference Images (Up to 3 photos, Max 5MB each)
              </label>

              {images.length < 3 && (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border border-dashed border-theme-border hover:border-blood p-6 text-center cursor-pointer transition-colors bg-theme-surface/50"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                  aria-label="Upload reference images"
                >
                  <Upload className="w-6 h-6 text-blood mx-auto mb-2" />
                  <p className="text-xs text-theme-text-primary font-medium">
                    Click to browse or drop reference photos here
                  </p>
                  <p className="text-[11px] text-theme-text-muted mt-1 font-mono">
                    JPEG, PNG, WebP up to 5MB each ({3 - images.length} remaining)
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              )}

              {imageError && (
                <p className="mt-2 text-xs text-blood flex items-center space-x-1">
                  <AlertCircle className="w-3 h-3 inline shrink-0" />
                  <span>{imageError}</span>
                </p>
              )}

              {/* Thumbnails preview */}
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square border border-theme-border bg-theme-bg overflow-hidden group shadow-sm"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.dataUrl}
                        alt={`Reference thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="absolute top-1.5 right-1.5 p-1 bg-black/80 hover:bg-blood text-white transition-colors"
                        aria-label={`Remove image ${idx + 1}`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <span className="absolute bottom-1 left-1.5 text-[9px] font-mono text-white bg-black/70 px-1">
                        {(img.size / 1024 / 1024).toFixed(1)} MB
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blood hover:bg-blood-hover text-white text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-[0_0_20px_rgba(179,18,45,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting To Studio...</span>
                  </>
                ) : (
                  <span>Send Booking Request</span>
                )}
              </button>
              <p className="text-center text-[11px] text-theme-text-muted mt-3 font-light">
                No payment charged now. Session date and stencil deposit are agreed upon after consultation.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
