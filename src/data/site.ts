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
    name: "Mad Monk Tattoo Studio",
    shortName: "Mad Monk Tattoo",
    wordmarkPrefix: "MAD",
    wordmarkSuffix: "MONK",
    submark: "CUSTOM TATTOO STUDIO",
    headline: "Your Story, Inked.",
    subheadline:
      "Sacred linework, dark neo-traditional, and bespoke custom blackwork by appointment in Malumichampatti (Coimbatore) & Palangarai (Avinashi), Tamil Nadu. Where raw storytelling meets monastic precision.",
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
      "Hi Midnight, I would like to inquire about booking a custom tattoo session at Mad Monk Tattoo.",
    get whatsappUrl() {
      return `https://wa.me/${this.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        this.whatsappMessage
      )}`;
    },
    instagram: "@mad.monk.tattoo",
    instagramUrl: "https://www.instagram.com/mad.monk.tattoo/",
    email: "ink@madmonktattoo.com",
    address: "Malumichampatti, Coimbatore & Palangarai, Avinashi, Tamil Nadu, India",
    studioTimings: "Sun – Sat: 9:00 AM – 11:00 PM (Daily / By Appointment)",
    studios: [
      {
        id: "coimbatore",
        name: "Malumichampatti, Coimbatore Studio",
        shortName: "Coimbatore",
        city: "Malumichampatti, Coimbatore, Tamil Nadu",
        address: "MAD MONK TATTOO STUDIO, Malumichampatti, Coimbatore, Tamil Nadu, India",
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
    name: "Midnight",
    title: "Founder & Lead Custom Artist",
    bio: [
      "Mad Monk Tattoo is a premier private tattoo studio in Coimbatore, also proudly serving Tirupur and Avinashi with uncompromising dedication to the craft. Founded by Midnight, our sanctuary specializes in custom, realistic, and portrait tattoos created exclusively through one-on-one rituals.",
      "With over 5+ years of dedicated studio experience and hundreds of custom permanent tattoo pieces inked, Midnight approaches every design as an intimate collaboration with your anatomy. We reject generic flash art in favor of authentic storytelling, rendering hyper-detailed realism, fine-needle portraits, and heavy sacred blackwork in a tranquil, clinical-grade setting. Whether you are getting your first tattoo or an extensive full-day composition, experience timeless artistry engineered to live with you forever.",
    ],
    stats: [
      { label: "Years of Craft", value: "5+ Years" },
      { label: "Custom Stencils", value: "100% Unique" },
      { label: "Hygiene Protocol", value: "Clinical" },
    ],
  },

  navLinks: [
    { label: "Home", href: "#" },
    { label: "Work", href: "#work" },
    { label: "Styles", href: "#styles" },
    { label: "Process", href: "#process" },
    { label: "Locations", href: "#locations" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#booking" },
  ] as NavLink[],

  // 7 Styles with 30-40 words descriptive paragraphs each
  styles: [
    {
      id: "portrait",
      title: "Portrait",
      description:
        "Lifelike portrait tattoos capturing loved ones, icons, and historical figures with hyper-accurate tonal depth. Midnight meticulously maps every facial contour, expressive shadow, and highlight to deliver an emotional, enduring homage with flawless skin transitions.",
      imageKey: "stylePortrait",
    },
    {
      id: "realistic",
      title: "Realistic",
      description:
        "High-definition realism combining three-dimensional lighting, fluid gradients, and photographic depth in rich black and grey inks. Each piece replicates organic textures, wildlife, architecture, and sacred statues that appear carved directly into your skin.",
      imageKey: "styleRealistic",
    },
    {
      id: "blackwork",
      title: "Blackwork",
      description:
        "Dense obsidian saturation, high-contrast graphic geometry, and sacred ornamental armor designed around natural muscle flow. Engineered with deep carbon blacks for dramatic presence, bold structural silhouettes, and lifelong intensity that never fades into ambiguity.",
      imageKey: "styleBlackwork",
    },
    {
      id: "fine-line",
      title: "Fine Line",
      description:
        "Micro-needle precision delivering delicate botanical illustrations, razor-sharp architectural geometry, and whispering typographical scripts. Crafted with surgical gentleness for collectors who appreciate understated luxury, zero blowout risk, and airy, sophisticated permanence.",
      imageKey: "styleFineLine",
    },
    {
      id: "custom",
      title: "Custom / Customized",
      description:
        "One-of-a-kind bespoke tattoo compositions drafted from scratch to reflect your personal story and anatomy. Midnight conducts deep conceptual consultations, crafting original stencils with zero replicated templates—ensuring your ink remains strictly unique in the world.",
      imageKey: "styleCustom",
    },
    {
      id: "cover-up",
      title: "Cover-up",
      description:
        "Transformative cover-up solutions that intelligently camouflage faded, aged, or unwanted ink into breathtaking new masterpieces. Using strategic deep shading, dimensional textures, and artistic redirection, we restore skin confidence with zero trace of old regrets.",
      imageKey: "styleCoverup",
    },
    {
      id: "minimal",
      title: "Minimal",
      description:
        "Subtle, meaningful micro-tattoos and elemental sigils stripped of unnecessary excess. Featuring clean, intentional linework and balanced placement, our minimalist pieces make a quiet yet profound statement designed to retain crisp clarity over decades.",
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
        "Midnight drafts an original, tailor-made stencil crafted specifically for your skin curvature. You review the mockups, tweak elements, and approve before needle meets skin.",
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
      badge: "Consultation Special",
      headline: "Free Design Consultation",
      description:
        "Book a consultation this month and get a free custom design sketch. Limited slots.",
      cta: "Claim Free Consult →",
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
      tattooType: "Realistic Portrait & Shading",
      rating: 5,
      quote:
        "Midnight didn't just tattoo me; he listened to the grief and renewal story behind it and drafted something breathtaking. The studio was dead quiet, clinical, and meditative. The realism linework after 6 months is still pitch-black and surgical.",
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
      tattooType: "Custom Blackwork Cover-up",
      rating: 5,
      quote:
        "Had a faded 10-year-old piece that other studios refused to touch. Midnight designed a bespoke dark neo-traditional blackwork raven that completely transformed the area. Absolutely legendary work.",
    },
  ] as Testimonial[],

  // 8 FAQs: 40-70 words each, no prices
  faqs: [
    {
      id: "location",
      question: "Where is the studio located?",
      answer:
        "Mad Monk Tattoo operates two dedicated private studio spaces in Tamil Nadu: one in Malumichampatti, Coimbatore (off Pollachi Main Road) and one in Palangarai, Avinashi (serving Tirupur and surrounding districts). Both locations are strictly by prior appointment to maintain complete privacy, individualized attention, and a serene atmosphere for every client.",
    },
    {
      id: "serve-tirupur",
      question: "Do you serve Tirupur?",
      answer:
        "Yes, we actively serve clients from Tirupur, Tiruppur textile district, and nearby towns. Our Palangarai studio in Avinashi is located just a short 15 to 20-minute drive from central Tirupur along the main highway, making it convenient for consultations, custom stencil approvals, and extended tattoo sessions without traveling far into city congestion.",
    },
    {
      id: "portrait-realistic",
      question: "Do you specialize in realistic and portrait tattoos?",
      answer:
        "Midnight specializes extensively in realistic and portrait tattoos using high-definition black and grey shading techniques. Whether commemorating a family member, a sacred icon, or a cinematic figure, each portrait is prepared with comprehensive anatomical reference mapping and micro-needle tonal blending to ensure lifelike expression and smooth, enduring skin transitions.",
    },
    {
      id: "session-duration",
      question: "How long does a session take?",
      answer:
        "Session length depends on your design’s scale, detail density, and placement. Minimal fine-line tattoos typically take 1 to 2 hours, half-day custom compositions run between 4 and 5 hours, while full-scale realism sleeves or backplates require full-day sessions of 7 to 8 hours. We always build in comfortable hydration and breathing breaks.",
    },
    {
      id: "aftercare",
      question: "What is the recommended tattoo aftercare?",
      answer:
        "We seal every completed tattoo with medical-grade, breathable second-skin protective film. Keep the film on for 3 to 4 days, gently wash with lukewarm water and mild fragrance-free antibacterial soap, pat dry, and apply our recommended soothing balm sparingly twice daily. Avoid sun exposure, swimming pools, gym workouts, and peeling flakes for two weeks.",
    },
    {
      id: "hygiene",
      question: "Is the studio hygienic and are needles single-use?",
      answer:
        "Hygiene and client safety are non-negotiable studio principles. We operate under strict hospital-grade sterilization protocols using 100% single-use EO-gas sterilized membrane needle cartridges, disposable grips, medical barrier film covers, and vegan, EU-certified inks. All needles are unsealed in front of you and safely discarded in certified sharps hazard containers immediately after.",
    },
    {
      id: "cover-ups",
      question: "Can you cover up an old tattoo?",
      answer:
        "Yes, custom cover-up and rework projects are a core studio strength. Midnight reviews your existing tattoo’s density, pigmentation, and skin texture during an in-depth consultation. We then compose bespoke blackwork, dark ornamental motifs, or realism elements that naturally integrate and disguise the old piece without requiring awkward dark solid blobs.",
    },
    {
      id: "quote",
      question: "How do I get a quote?",
      answer:
        "Getting an estimate is simple and free. Send us your tattoo idea, reference images, approximate dimensions, and preferred body placement through our online booking form or via direct WhatsApp message. Midnight reviews every concept personally and provides an honest, tailored estimate with recommended session time within 24 hours.",
    },
  ] as FAQItem[],
};
