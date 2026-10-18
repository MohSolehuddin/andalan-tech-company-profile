import type { Metadata } from "next";
import KursusHero from "@/components/demo/kursus-it/KursusHero";
import KursusPrograms from "@/components/demo/kursus-it/KursusPrograms";
import KursusSchedulePrice from "@/components/demo/kursus-it/KursusSchedulePrice";
import KursusCertificates from "@/components/demo/kursus-it/KursusCertificates";
import KursusContact from "@/components/demo/kursus-it/KursusContact";

export const metadata: Metadata = {
  title: "Kode Kursus Komputer & IT — Demo Kursus & Coding | Andalan Tech",
  description:
    "Demo website lembaga kursus komputer dan coding oleh Andalan Tech. Program office, desain grafis, web dev, coding anak, jadwal & harga, serta pendaftaran via WhatsApp.",
};

export default function KursusItDemoPage() {
  return (
    <main className="bg-white">
      <KursusHero />
      <KursusPrograms />
      <KursusSchedulePrice />
      <KursusCertificates />
      <KursusContact />
    </main>
  );
}
