export interface NavLink {
  label: string;
  href: string;
}

export interface TattooStyle {
  id: string;
  title: string;
  description: string;
  imageKey: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  startingPrice: string;
  duration: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  client: string;
  location: string;
  tattooType: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const siteConfig = {
  brand: {
    name: "Mad Monk Tattoo",
    wordmarkPrefix: "MAD",
    wordmarkSuffix: "MONK",
    submark: "CUSTOM TATTOO STUDIO",
    headline: "Your Story, Inked.",
    subheadline:
      "Sacred linework, dark neo-traditional, and bespoke custom blackwork by appointment in Bengaluru, India. Where raw storytelling meets monastic precision.",
    bookingBadge: "Now Booking • Limited Monthly Sessions",
    trustRow: [
      "Custom designs only",
      "Sterile single-use needles",
      "Free touch-up consult",
      "Private studio comfort",
    ],
  },

  contact: {
    phone: "+91 98765 43210",
    phoneClean: "+919876543210",
    whatsapp: "+919876543210",
    whatsappDisplay: "+91 98765 43210",
    whatsappMessage:
      "Hi Mad Monk Tattoo, I would like to inquire about booking a custom tattoo session.",
    get whatsappUrl() {
      return `https://wa.me/${this.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        this.whatsappMessage
      )}`;
    },
    instagram: "@madmonktattoo",
    instagramUrl: "https://instagram.com/madmonktattoo",
    email: "ink@madmonktattoo.com",
    address: "Studio 104, Nirvana Courtyard, 100ft Road, Indiranagar, Bengaluru, Karnataka 560038, India",
    studioTimings: "Tue – Sun: 11:00 AM – 8:00 PM (Mondays Closed / strictly by appointment)",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9855523996767!2d77.6385150757962!3d12.972778387342617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a792372c05%3A0x6b1d120a1cfcbb02!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  artist: {
    name: "Vikram \"Monk\" Dev",
    title: "Founder & Lead Custom Artist",
    bio: [
      "Trained in classical fine arts before dedicating his life to the ritual needle. Vikram draws inspiration from Tibetan iconography, sacred geometric mandalas, gothic linework, and dark Indian mythology.",
      "Every piece inked at Mad Monk Tattoo is custom-designed from scratch—never cloned from Pinterest, never repeated. Vikram works one-on-one with clients in a quiet, zero-distraction sanctuary where each stroke is deliberate and permanent.",
    ],
    stats: [
      { label: "Years of Craft", value: "5+ years" },
      { label: "Custom Tattoos", value: "500+ tattoos" },
      { label: "Google Rating", value: "4.9 rating" },
    ],
  },

  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Styles", href: "#styles" },
    { label: "Artist", href: "#artist" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ] as NavLink[],

  styles: [
    {
      id: "blackwork",
      title: "Blackwork",
      description: "Bold solid blacks, high contrast graphic motifs and intense saturation that commands presence.",
      imageKey: "styleBlackwork",
    },
    {
      id: "linework",
      title: "Linework",
      description: "Razor-sharp contours, anatomical flow, and illustrative elegance without unnecessary shading.",
      imageKey: "styleLinework",
    },
    {
      id: "fine-line",
      title: "Fine Line",
      description: "Delicate single-needle craftsmanship, micro-details, and refined whispering permanence.",
      imageKey: "styleFineLine",
    },
    {
      id: "geometric",
      title: "Geometric",
      description: "Sacred geometry, intricate mandalas, dotwork (stippling) and mathematical precision.",
      imageKey: "styleGeometric",
    },
    {
      id: "realism",
      title: "Realism",
      description: "High-fidelity micro-textures, cinematic shadows, and lifelike portraits in deep black and grey.",
      imageKey: "styleRealism",
    },
    {
      id: "cover-ups",
      title: "Cover-ups",
      description: "Masterful spatial redesigns transforming faded or regretful ink into breathtaking new art.",
      imageKey: "styleCoverups",
    },
    {
      id: "religious-spiritual",
      title: "Religious / Spiritual",
      description: "Vedic scriptures, Tibetan deities, yantras, and symbolic talismans with spiritual gravity.",
      imageKey: "styleSpiritual",
    },
    {
      id: "small-minimal",
      title: "Small & Minimal",
      description: "Understated personal emblems, micro-sigils, and minimalist statements engineered for longevity.",
      imageKey: "styleMinimal",
    },
  ] as TattooStyle[],

  process: [
    {
      number: "01",
      title: "Consultation",
      subtitle: "Idea & Placement",
      description:
        "We discuss your story, symbolism, reference imagery, and exact body anatomy over Chai or a WhatsApp video call. We align on size, flow, and longevity.",
    },
    {
      number: "02",
      title: "Custom Design",
      subtitle: "Bespoke Linework",
      description:
        "Vikram drafts an original, tailor-made stencil crafted specifically for your skin curvature. You review the mockups, tweak elements, and approve before needle meets skin.",
    },
    {
      number: "03",
      title: "The Session",
      subtitle: "Ritual & Precision",
      description:
        "Inked inside our private, hospital-grade sanitized studio. We use 100% single-use sterile cartridges, vegan ink pigments, and take breaks at your pace with calming soundscapes.",
    },
    {
      number: "04",
      title: "Aftercare",
      subtitle: "Healing & Touch-up",
      description:
        "Wrapped in breathable second-skin film. You leave with an artisanal aftercare guide, organic healing balm, and a complimentary 60-day healed touch-up check.",
    },
  ] as ProcessStep[],

  pricing: [
    {
      id: "small",
      name: "Small & Minimal Piece",
      badge: "Signature Entry",
      startingPrice: "₹3,500",
      duration: "1 – 2 Hours",
      description:
        "Ideal for first-timers, micro-tattoos, finger sigils, or clean fine-line quotes and symbols.",
      features: [
        "Up to 2.5 × 2.5 inches in size",
        "Single-needle or fine linework",
        "Custom design sketch included",
        "Sterile single-use setup & aftercare kit",
        "Complimentary touch-up within 60 days",
      ],
      recommended: false,
    },
    {
      id: "half-day",
      name: "Half-Day Session",
      badge: "Most Popular",
      startingPrice: "₹12,000",
      duration: "4 – 5 Hours",
      description:
        "Perfect for forearm pieces, calf panels, geometric mandalas, or detailed dark linework compositions.",
      features: [
        "Medium-to-large custom piece (approx. 5 × 7 inches)",
        "Intricate dotwork, shading & black fills",
        "In-depth design consultation & iterations",
        "Breathable second-skin healing wrap",
        "Beverage & snack breaks included",
        "Priority scheduling",
      ],
      recommended: true,
    },
    {
      id: "full-day",
      name: "Full-Day Immersion",
      badge: "Masterpiece",
      startingPrice: "₹22,000",
      duration: "7 – 8 Hours",
      description:
        "Dedicated to large scale work: full sleeves, backplates, chest panels, or complex cover-up projects.",
      features: [
        "Full studio exclusivity for the day",
        "Large-scale multi-element compositions",
        "Comprehensive anatomical stencil mapping",
        "Premium aftercare bundle & organic balm",
        "Lifetime healed check-ups",
        "Pre-session dietary & skin prep guide",
      ],
      recommended: false,
    },
  ] as PricingTier[],

  pricingNote:
    "Note: A 30% advance deposit is required to confirm your session date and start custom stencil development. The deposit is fully deducted from your final session total.",

  testimonials: [
    {
      id: "review-1",
      client: "Kabir S.",
      location: "Bengaluru",
      tattooType: "Geometric Mandala Half-Sleeve",
      rating: 5,
      quote:
        "Vikram didn't just tattoo me; he listened to the grief and renewal story behind it and drafted something breathtaking. The studio was dead quiet, clinical, and meditative. The linework after 6 months is still pitch-black and surgical.",
    },
    {
      id: "review-2",
      client: "Ananya R.",
      location: "Mumbai",
      tattooType: "Fine-Line Spinal Inscription",
      rating: 5,
      quote:
        "I flew in from Mumbai specifically for Mad Monk's fine line mastery. Zero blowout, zero scarring, and the single-needle work along my spine feels like velvet. Best studio experience in India by a mile.",
    },
    {
      id: "review-3",
      client: "Rohan D.",
      location: "Goa",
      tattooType: "Blackwork Cover-up",
      rating: 5,
      quote:
        "Had a hideous 10-year-old tribal piece that three other studios refused to touch. Vikram designed a dark neo-traditional blackwork raven that completely consumed the old scar. Absolutely legendary work.",
    },
  ] as Testimonial[],

  faqs: [
    {
      id: "pain",
      question: "How much does a tattoo actually hurt?",
      answer:
        "Pain is subjective and varies by placement. Fleshy areas like outer arms, forearms, and thighs feel like a scratchy vibration, while bony or thin-skinned spots (ribs, spine, ankles) have more bite. We take regular breathing pauses and maintain a relaxed, calm atmosphere so you stay comfortable.",
    },
    {
      id: "aftercare",
      question: "How do I care for my tattoo during healing?",
      answer:
        "We apply medical-grade second-skin protective film at the end of the session. Leave it on for 3 to 4 days, gently peel in a warm shower, wash with mild fragrance-free soap, and moisturize with the aftercare balm provided. Avoid swimming, direct sun, gyms, and soaking for 2 weeks.",
    },
    {
      id: "cost",
      question: "How is the final tattoo cost calculated?",
      answer:
        "Pricing is determined by design complexity, detail density, body placement, and session duration rather than a flat rate. Small pieces have fixed minimums, while larger pieces are booked as half-day or full-day sessions. We provide a transparent quote before you commit.",
    },
    {
      id: "cover-ups",
      question: "Can you rework or cover up an old or faded tattoo?",
      answer:
        "Yes! Cover-ups and blast-overs are one of our specialties. We examine the saturation, scarring, and tone of your existing ink to integrate dark blackwork, dense geometric textures, or organic shading that makes the old tattoo disappear naturally.",
    },
    {
      id: "deposit",
      question: "Why do you require an advance deposit?",
      answer:
        "A 30% advance deposit secures your calendar slot and compensates for the hours spent researching and drafting your custom stencil prior to your appointment. The deposit is non-refundable but 100% credited toward your final tattoo bill.",
    },
    {
      id: "requirements",
      question: "What are the age, ID, and health requirements?",
      answer:
        "You must be at least 18 years of age with a valid government ID (Aadhaar, Passport, or Driver's License). We do not tattoo anyone pregnant or nursing. Please inform us of any skin conditions, blood thinning medications, or allergies beforehand.",
    },
  ] as FAQItem[],

  seo: {
    title: "Mad Monk Tattoo | Custom Tattoo Studio & Artist in Bengaluru, India",
    description:
      "Bespoke custom tattoos, sacred linework, dark geometric mandalas, fine-line and cover-ups by Mad Monk Tattoo in Indiranagar, Bengaluru. Book your private session.",
    keywords: [
      "Mad Monk Tattoo",
      "custom tattoo studio Bangalore",
      "best tattoo artist Bengaluru",
      "fine line tattoo India",
      "blackwork tattoo artist",
      "geometric mandala tattoo",
      "cover up tattoo specialist India",
      "private tattoo studio Indiranagar",
    ],
    canonicalUrl: "https://madmonktattoo.com",
  },
};
