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

export interface SessionTier {
  id: string;
  name: string;
  sessionType: string;
  badge?: string;
  priceLabel: string;
  duration: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export type PricingTier = SessionTier;

export interface SessionOffer {
  badge: string;
  headline: string;
  description: string;
  cta: string;
  offerEndDate: string;
  offerEndDisplay: string;
  note: string;
}

export interface SessionsSection {
  eyebrow: string;
  heading: string;
  subtext: string;
  tiers: SessionTier[];
  offer: SessionOffer;
}

export interface Testimonial {
  id: string;
  client: string;
  location: string;
  tattooType: string;
  rating: number;
  quote: string;
}

export interface StudioLocation {
  id: string;
  name: string;
  shortName: string;
  city: string;
  address: string;
  embedUrl: string;
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
      "Sacred linework, dark neo-traditional, and bespoke custom blackwork by appointment in Coimbatore & Palangarai (Avinashi), Tamil Nadu. Where raw storytelling meets monastic precision.",
    bookingBadge: "Now Booking • Limited Monthly Sessions",
    trustRow: [
      "Custom designs only",
      "Sterile single-use needles",
      "Free touch-up consult",
      "Private studio comfort",
    ],
  },

  contact: {
    phone: "+91 90809 37352",
    phoneClean: "+919080937352",
    whatsapp: "+919080937352",
    whatsappDisplay: "+91 90809 37352",
    whatsappMessage:
      "Hi Mad Monk Tattoo, I would like to inquire about booking a custom tattoo session.",
    get whatsappUrl() {
      return `https://wa.me/${this.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        this.whatsappMessage
      )}`;
    },
    instagram: "@mad.monk.tattoo",
    instagramUrl: "https://www.instagram.com/mad.monk.tattoo/",
    email: "ink@madmonktattoo.com",
    address: "Coimbatore & Palangarai (Avinashi), Tamil Nadu, India",
    studioTimings: "Sun – Sat: 9:00 AM – 11:00 PM (Daily / By Appointment)",
    studios: [
      {
        id: "coimbatore",
        name: "Coimbatore Studio",
        shortName: "Coimbatore",
        city: "Coimbatore, Tamil Nadu",
        address: "MAD MONK TATTOO STUDIO, Coimbatore, Tamil Nadu, India",
        embedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250739.51543493313!2d76.69366836547853!3d10.902424830288496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b8fac8737e3%3A0xfa7622728c80d4d9!2sMAD%20MONK%20TATTOO%20STUDIO!5e0!3m2!1sen!2sin!4v1795369828417!5m2!1sen!2sin",
      },
      {
        id: "avinashi",
        name: "Palangarai, Avinashi Studio",
        shortName: "Avinashi",
        city: "Palangarai, Avinashi, Tamil Nadu",
        address: "MAD MONK TATTOO STUDIO, Palangarai, Avinashi, Tamil Nadu, India",
        embedUrl:
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3913.994869080696!2d77.27615342504788!3d11.188014988986847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba903002d58c19b%3A0x5cfd62ebe055cd52!2sMAD%20MONK%20TATTOO%20STUDIO!5e0!3m2!1sen!2sin!4v1795369862153!5m2!1sen!2sin",
      },
    ] as StudioLocation[],
  },

  artist: {
    name: "Joo",
    title: "Founder & Lead Custom Artist",
    bio: [
      "Trained in classical fine arts before dedicating his life to the ritual needle. Joo draws inspiration from sacred geometric mandalas, gothic linework, dark mythology, and ancient iconography.",
      "Every piece inked at Mad Monk Tattoo is custom-designed from scratch—never cloned from Pinterest, never repeated. Joo works one-on-one with clients across both our Coimbatore and Palangarai (Avinashi) studios in a quiet, zero-distraction sanctuary where each stroke is deliberate and permanent.",
    ],
    stats: [
      { label: "Years of Craft", value: "5+ years" },
      { label: "Custom Tattoos", value: "500+ tattoos" },
      { label: "Google Rating", value: "4.9 rating" },
    ],
  },

  navLinks: [
    { label: "Home", href: "#" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#booking" },
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
      description: "Vedic scriptures, deities, yantras, and symbolic talismans with spiritual gravity.",
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
        "Joo drafts an original, tailor-made stencil crafted specifically for your skin curvature. You review the mockups, tweak elements, and approve before needle meets skin.",
    },
    {
      number: "03",
      title: "The Session",
      subtitle: "Ritual & Precision",
      description:
        "Inked inside our private, hospital-grade sanitized studio in Coimbatore or Avinashi. We use 100% single-use sterile cartridges, vegan ink pigments, and take breaks at your pace.",
    },
    {
      number: "04",
      title: "Aftercare",
      subtitle: "Healing & Touch-up",
      description:
        "Wrapped in breathable second-skin film. You leave with an artisanal aftercare guide, organic healing balm, and a complimentary 60-day healed touch-up check.",
    },
  ] as ProcessStep[],

  sessions: {
    eyebrow: "// 05 SESSIONS",
    heading: "Sessions, Tailored to Your Story",
    subtext:
      "Every tattoo is custom, so every quote is too. Share your idea and we'll send a personalised quote within 24 hours.",
    tiers: [
      {
        id: "small-minimal",
        sessionType: "Small & Minimal",
        name: "Small & Minimal Piece",
        badge: "Signature Entry",
        priceLabel: "Quote on enquiry",
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
        sessionType: "Half-Day",
        name: "Half-Day Session",
        badge: "Most Popular",
        priceLabel: "Quote on enquiry",
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
        sessionType: "Full-Day",
        name: "Full-Day Immersion",
        badge: "Masterpiece",
        priceLabel: "Quote on enquiry",
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
    ] as SessionTier[],
    offer: {
      badge: "Launch Month Special",
      headline: "Launch Month Offer",
      description:
        "Book a consultation this month and get a free custom design sketch. Limited slots.",
      cta: "Claim Offer →",
      offerEndDate: "2026-12-31",
      offerEndDisplay: "Limited monthly slots available",
      note: "No hidden costs. Final quote shared after consultation.",
    },
  },

  get pricing() {
    return this.sessions.tiers;
  },

  get pricingNote() {
    return this.sessions.offer.note;
  },

  testimonials: [
    {
      id: "review-1",
      client: "Kabir S.",
      location: "Coimbatore",
      tattooType: "Geometric Mandala Half-Sleeve",
      rating: 5,
      quote:
        "Joo didn't just tattoo me; he listened to the grief and renewal story behind it and drafted something breathtaking. The studio was dead quiet, clinical, and meditative. The linework after 6 months is still pitch-black and surgical.",
    },
    {
      id: "review-2",
      client: "Ananya R.",
      location: "Tirupur",
      tattooType: "Fine-Line Spinal Inscription",
      rating: 5,
      quote:
        "Travelled to Mad Monk's Avinashi studio specifically for the fine line mastery. Zero blowout, zero scarring, and the single-needle work along my spine feels like velvet. Best studio experience in Tamil Nadu.",
    },
    {
      id: "review-3",
      client: "Rohan D.",
      location: "Coimbatore",
      tattooType: "Blackwork Cover-up",
      rating: 5,
      quote:
        "Had a hideous 10-year-old tribal piece that three other studios refused to touch. Joo designed a dark neo-traditional blackwork raven that completely consumed the old scar. Absolutely legendary work.",
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
      question: "How is the tattoo quote calculated?",
      answer:
        "Quotes are determined by design complexity, detail density, body placement, and session duration. Every piece is estimated individually based on whether it is a small minimal piece, half-day, or full-day session. We provide a transparent personalized quote before you commit.",
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
        "An advance deposit secures your calendar slot and compensates for the hours spent researching and drafting your custom stencil prior to your appointment. The deposit is non-refundable but 100% credited toward your final tattoo session.",
    },
    {
      id: "requirements",
      question: "What are the age, ID, and health requirements?",
      answer:
        "You must be at least 18 years of age with a valid government ID (Aadhaar, Passport, or Driver's License). We do not tattoo anyone pregnant or nursing. Please inform us of any skin conditions, blood thinning medications, or allergies beforehand.",
    },
  ] as FAQItem[],

  seo: {
    title: "Mad Monk Tattoo | Custom Tattoo Studio in Coimbatore & Avinashi, Tamil Nadu",
    description:
      "Bespoke custom tattoos, sacred linework, dark geometric mandalas, fine-line and cover-ups by Mad Monk Tattoo Studio in Coimbatore and Palangarai (Avinashi), Tamil Nadu. Book your private session.",
    keywords: [
      "Mad Monk Tattoo Studio",
      "tattoo studio Coimbatore",
      "best tattoo artist Coimbatore",
      "tattoo studio Avinashi",
      "tattoo studio Palangarai",
      "tattoo studio Tirupur",
      "fine line tattoo Tamil Nadu",
      "blackwork tattoo artist India",
      "geometric mandala tattoo Coimbatore",
      "cover up tattoo specialist Coimbatore",
    ],
    canonicalUrl: "https://madmonktattoo.com",
  },
};
