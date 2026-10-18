import type { Metadata } from "next";
import SalonHero from "@/components/demo/salon/SalonHero";
import SalonServices from "@/components/demo/salon/SalonServices";
import SalonPriceList from "@/components/demo/salon/SalonPriceList";
import SalonTestimonials from "@/components/demo/salon/SalonTestimonials";
import SalonBooking from "@/components/demo/salon/SalonBooking";

export const metadata: Metadata = {
  title: "Glow & Glam Salon — Demo Salon & Kecantikan | Andalan Tech",
};

export default function SalonDemoPage() {
  return (
    <main className="bg-white">
      <SalonHero />
      <SalonServices />
      <SalonPriceList />
      <SalonTestimonials />
      <SalonBooking />
    </main>
  );
}
