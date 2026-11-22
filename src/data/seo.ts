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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
  headings: {
    h1: "Best Tattoo Studio in Coimbatore & Tirupur",
    h1Subline: "Custom, realistic and portrait tattoos by Joo.",
    h2s: {
      gallery: "Portrait & Realistic Tattoos",
      styles: "Custom Tattoo Styles",
      artist: "Meet Joo, Your Tattoo Artist",
      process: "Our Tattoo Process",
      sessions: "Sessions, Tailored to Your Story",
      faqs: "Tattoo FAQs in Coimbatore & Tirupur",
      studio: "Visit Our Studio",
    },
  },
};

export type SEOData = typeof seoData;
