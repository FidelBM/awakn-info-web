import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Ingredients from "@/components/Ingredients";
import NavBar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import Problem from "@/components/Problem";
import Science from "@/components/Science";
import ScrollProgress from "@/components/ScrollProgress";
import Solution from "@/components/Solution";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AWAKN Pre-Workout Gummies",
  brand: {
    "@type": "Brand",
    name: "AWAKN"
  },
  description:
    "AWAKN pre-workout gummies deliver clean, vegan energy in a solid format designed for athletes and active lifestyles.",
  category: "Sports Nutrition Supplement",
  image: "/product-placeholder.svg",
  sku: "AWAKN-PRE-GUMMY-001",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  }
};

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ScrollProgress />
      <NavBar />
      <Hero />
      <div className="energy-divider" />
      <Problem />
      <div className="energy-divider" />
      <Solution />
      <div className="energy-divider" />
      <HowItWorks />
      <div className="energy-divider" />
      <Ingredients />
      <div className="energy-divider" />
      <Science />
      <div className="energy-divider" />
      <Benefits />
      <div className="energy-divider" />
      <Philosophy />
      <div className="energy-divider" />
      <FAQ />
      <Footer />
    </main>
  );
}
