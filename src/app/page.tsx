import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Schedule from "@/components/Schedule";
import Coaches from "@/components/Coaches";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Schedule />
      <Coaches />
      <Pricing />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
