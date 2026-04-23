import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import Pricing from "@/components/Pricing";
import Coaches from "@/components/Coaches";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Activities />
      <Pricing />
      <Coaches />
      <Contact />
      <Footer />
    </main>
  );
}
