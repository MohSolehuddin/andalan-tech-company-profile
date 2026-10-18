import type { Metadata } from "next";
import JasaHero from "@/components/demo/jasa/JasaHero";
import JasaServices from "@/components/demo/jasa/JasaServices";
import JasaPortfolio from "@/components/demo/jasa/JasaPortfolio";
import JasaTestimonials from "@/components/demo/jasa/JasaTestimonials";
import JasaContact from "@/components/demo/jasa/JasaContact";

export const metadata: Metadata = {
  title: "Nara Kreatif — Demo Jasa & Personal Brand | Andalan Tech",
};

export default function JasaDemoPage() {
  return (
    <main className="bg-white">
      <JasaHero />
      <JasaServices />
      <JasaPortfolio />
      <JasaTestimonials />
      <JasaContact />
    </main>
  );
}
