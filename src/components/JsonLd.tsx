import { siteConfig } from "@/data/site";
import { seoData } from "@/data/seo";

export default function JsonLd() {
  // 1. TattooParlor (LocalBusiness) Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: "Mad Monk Tattoo Studio",
    url: seoData.domain,
    logo: `${seoData.domain}/android-chrome-512x512.png`,
    image: `${seoData.domain}/og-image.jpg`,
    description: seoData.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Malumichampatti, Coimbatore & Palangarai, Avinashi",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.902425,
      longitude: 76.693668,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "23:00",
      },
    ],
    sameAs: [siteConfig.contact.instagramUrl],
    areaServed: ["Coimbatore", "Tirupur"],
  };

  // 2. FAQPage Schema generated from FAQ data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 3. WebSite Schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mad Monk Tattoo Studio",
    url: seoData.domain,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
}
