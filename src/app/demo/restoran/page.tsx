import type { Metadata } from "next";
import RestoHero from "@/components/demo/restoran/RestoHero";
import RestoMenu from "@/components/demo/restoran/RestoMenu";
import RestoAbout from "@/components/demo/restoran/RestoAbout";
import RestoContact from "@/components/demo/restoran/RestoContact";

export const metadata: Metadata = {
  title: "Rasa Nusantara — Demo Restoran | Andalan Tech",
};

export default function RestoranDemoPage() {
  return (
    <main className="bg-white">
      <RestoHero />
      <RestoMenu />
      <RestoAbout />
      <RestoContact />
    </main>
  );
}
