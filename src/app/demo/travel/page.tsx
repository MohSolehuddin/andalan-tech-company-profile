import type { Metadata } from "next";
import TravelHero from "@/components/demo/travel/TravelHero";
import TravelPackages from "@/components/demo/travel/TravelPackages";
import TravelFeatures from "@/components/demo/travel/TravelFeatures";
import TravelItinerary from "@/components/demo/travel/TravelItinerary";
import TravelTestimonials from "@/components/demo/travel/TravelTestimonials";
import TravelContact from "@/components/demo/travel/TravelContact";

export const metadata: Metadata = {
  title: "Jelajah Andalan Travel — Demo Agen Travel & Wisata | Andalan Tech",
};

export default function TravelDemoPage() {
  return (
    <main className="bg-white">
      <TravelHero />
      <TravelPackages />
      <TravelFeatures />
      <TravelItinerary />
      <TravelTestimonials />
      <TravelContact />
    </main>
  );
}
