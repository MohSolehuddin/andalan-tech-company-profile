import type { Metadata } from "next";
import KursusHero from "@/components/demo/kursus-bahasa/KursusHero";
import KursusPrograms from "@/components/demo/kursus-bahasa/KursusPrograms";
import KursusModes from "@/components/demo/kursus-bahasa/KursusModes";
import KursusPricing from "@/components/demo/kursus-bahasa/KursusPricing";
import KursusTrial from "@/components/demo/kursus-bahasa/KursusTrial";

export const metadata: Metadata = {
  title: "Lingua Kursus Bahasa — Demo Kursus Bahasa | Andalan Tech",
  description:
    "Demo website kursus bahasa oleh Andalan Tech. Program Inggris, Arab, dan Mandarin level dasar–mahir, kelas online & offline, harga transparan, dan daftar trial via WhatsApp.",
};

export default function KursusBahasaDemoPage() {
  return (
    <main className="bg-white">
      <KursusHero />
      <KursusPrograms />
      <KursusModes />
      <KursusPricing />
      <KursusTrial />
    </main>
  );
}
