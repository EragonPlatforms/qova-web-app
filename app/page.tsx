import AiInfoSection from "./components/AiInfoSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";

export default function Home() {
  return (
    <main className="min-h-[90vh]">
      <Hero />
      <InfoSection />
      <AiInfoSection />
      <Footer />
    </main>
  );
}
