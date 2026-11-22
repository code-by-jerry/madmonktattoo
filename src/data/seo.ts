export const seoData = {
  domain: "https://madmonktattoo.online",
  metadataBase: "https://madmonktattoo.online",
  title: {
    default: "Best Tattoo Studio in Coimbatore & Tirupur | Mad Monk Tattoo",
    template: "%s | Mad Monk Tattoo",
  },
  description:
    "Mad Monk Tattoo: custom, realistic and portrait tattoos in Coimbatore & Tirupur. Hygienic studio, free design consultation. Book your session.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website" as const,
    locale: "en_IN",
    siteName: "Mad Monk Tattoo",
    url: "https://madmonktattoo.online",
    title: "Best Tattoo Studio in Coimbatore & Tirupur | Mad Monk Tattoo",
    description:
      "Mad Monk Tattoo: custom, realistic and portrait tattoos in Coimbatore & Tirupur. Hygienic studio, free design consultation. Book your session.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mad Monk Tattoo Studio - Coimbatore & Tirupur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Best Tattoo Studio in Coimbatore & Tirupur | Mad Monk Tattoo",
    description:
      "Mad Monk Tattoo: custom, realistic and portrait tattoos in Coimbatore & Tirupur. Hygienic studio, free design consultation. Book your session.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
  headings: {
    h1: "Best Tattoo Studio in Coimbatore & Tirupur",
    h1Subline: "Custom, realistic and portrait tattoos by Midnight.",
    h2s: {
      gallery: "Portrait & Realistic Tattoos",
      styles: "Custom Tattoo Styles",
      artist: "Meet Midnight, Your Tattoo Artist",
      process: "Our Tattoo Process",
      sessions: "Sessions, Tailored to Your Story",
      faqs: "Tattoo FAQs in Coimbatore & Tirupur",
      studio: "Visit Our Studio",
    },
  },
};

export type SEOData = typeof seoData;
