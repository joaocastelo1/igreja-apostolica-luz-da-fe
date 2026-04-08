import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Contribution from "@/components/Contribution";
import YouTubeSection from "@/components/YouTubeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Schedule />
      <Gallery />
      <Contribution />
      <YouTubeSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
