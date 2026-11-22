import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Sans-serif body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Display monk/linework serif heading font
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.canonicalUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.artist.name, url: siteConfig.seo.canonicalUrl }],
  creator: siteConfig.brand.name,
  publisher: siteConfig.brand.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.seo.canonicalUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.brand.name,
    images: [
      {
        url: "/placeholders/hero-tattoo.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand.name} - Custom Tattoo Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/placeholders/hero-tattoo.svg"],
    creator: siteConfig.contact.instagram,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Structured Data JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": siteConfig.brand.name,
    "image": `${siteConfig.seo.canonicalUrl}/placeholders/hero-tattoo.svg`,
    "description": siteConfig.seo.description,
    "telephone": siteConfig.contact.phone,
    "priceRange": "₹₹ - ₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Studio 104, Nirvana Courtyard, 100ft Road, Indiranagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560038",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.972778,
      "longitude": 77.638515,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "11:00",
        "closes": "20:00",
      },
    ],
    "sameAs": [
      siteConfig.contact.instagramUrl,
      siteConfig.contact.whatsappUrl,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-dark text-ink-paper antialiased selection:bg-blood selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
