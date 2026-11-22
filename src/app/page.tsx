import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Styles from "@/components/Styles";
import Artist from "@/components/Artist";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
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

      {/* 7. Offers & Pricing */}
      <Pricing />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Booking Request Form */}
      <BookingForm />

      {/* 10. FAQ */}
      <FAQ />
    </>
  );
}
