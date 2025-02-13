import About from "./_components/about";
import HowQovaWorks from "./_components/carousel-section";
import Download from "./_components/download-section";
import FAQs from "./_components/faqs";
import Features from "./_components/features";
import Footer from "./_components/footer";
import Hero from "./_components/hero-section";
import Smiley from "./_components/smiley";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <HowQovaWorks />
      <Smiley />
      <Download />
      <FAQs />
      <Footer />
    </main>
  );
}
