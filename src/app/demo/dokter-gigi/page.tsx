import type { Metadata } from "next";
import DokterHero from "@/components/demo/dokter-gigi/DokterHero";
import DokterServices from "@/components/demo/dokter-gigi/DokterServices";
import DokterDoctors from "@/components/demo/dokter-gigi/DokterDoctors";
import DokterSchedule from "@/components/demo/dokter-gigi/DokterSchedule";
import DokterBooking from "@/components/demo/dokter-gigi/DokterBooking";

export const metadata: Metadata = {
  title: "Klinik Gigi Senyum Sehat — Demo Dokter Gigi | Andalan Tech",
  description:
    "Demo website klinik gigi: layanan scaling, tambal, behel, dan whitening, profil dokter, jadwal praktik, serta booking via WhatsApp.",
};

export default function DokterGigiDemoPage() {
  return (
    <main className="bg-white">
      <DokterHero />
      <DokterServices />
      <DokterDoctors />
      <DokterSchedule />
      <DokterBooking />
    </main>
  );
}
