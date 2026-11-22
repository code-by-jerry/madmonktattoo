import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";

// Dynamic imports for below-the-fold components to maximize Core Web Vitals
const Gallery = dynamic(() => import("@/components/Gallery"));
const Styles = dynamic(() => import("@/components/Styles"));
const Artist = dynamic(() => import("@/components/Artist"));
const Process = dynamic(() => import("@/components/Process"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ServingLocations = dynamic(() => import("@/components/ServingLocations"));
const BookingForm = dynamic(() => import("@/components/BookingForm"));
const FAQ = dynamic(() => import("@/components/FAQ"));

export default function Home() {
  return (
    <>
      {/* 1. Structured Data JSON-LD (TattooParlor, FAQPage, WebSite) */}
      <JsonLd />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Portfolio Gallery */}
      <Gallery />

      {/* 4. Tattoo Styles */}
      <Styles />

      {/* 5. About the Artist */}
      <Artist />

      {/* 6. Process */}
      <Process />

      {/* 7. Offers & Sessions */}
      <Pricing />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Serving Coimbatore & Tirupur */}
      <ServingLocations />

      {/* 10. Booking Request Form */}
      <BookingForm />

      {/* 11. FAQ */}
      <FAQ />
    </>
  );
}
