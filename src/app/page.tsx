import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import Subscriptions from "@/components/Subscriptions";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen -mt-20">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <Subscriptions />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}