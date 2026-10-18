import type { Metadata } from "next";
import KateringHero from "@/components/demo/katering/KateringHero";
import KateringPackages from "@/components/demo/katering/KateringPackages";
import KateringMenu from "@/components/demo/katering/KateringMenu";
import KateringArea from "@/components/demo/katering/KateringArea";
import KateringContact from "@/components/demo/katering/KateringContact";

export const metadata: Metadata = {
  title: "Berkah Rasa Catering — Demo Katering & Prasmanan | Andalan Tech",
  description:
    "Demo website katering harian, nasi box acara, prasmanan pesta, dan snack box dengan pemesanan langsung via WhatsApp.",
};

export default function KateringDemoPage() {
  return (
    <main className="bg-white">
      <KateringHero />
      <KateringPackages />
      <KateringMenu />
      <KateringArea />
      <KateringContact />
    </main>
  );
}
