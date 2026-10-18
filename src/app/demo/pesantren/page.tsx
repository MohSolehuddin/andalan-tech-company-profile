import type { Metadata } from "next";
import PesantrenHero from "@/components/demo/pesantren/PesantrenHero";
import PesantrenPrograms from "@/components/demo/pesantren/PesantrenPrograms";
import PesantrenFacilities from "@/components/demo/pesantren/PesantrenFacilities";
import PesantrenPpdb from "@/components/demo/pesantren/PesantrenPpdb";
import PesantrenContact from "@/components/demo/pesantren/PesantrenContact";

export const metadata: Metadata = {
  title: "Pondok Pesantren Raudhatul Ulum — Demo Pesantren | Andalan Tech",
  description:
    "Demo website pondok pesantren oleh Andalan Tech. Profil santri, kajian kitab kuning, tahfidz Al-Qur'an, fasilitas asrama, dan informasi PPDB santri baru via WhatsApp.",
};

export default function PesantrenDemoPage() {
  return (
    <main className="bg-white">
      <PesantrenHero />
      <PesantrenPrograms />
      <PesantrenFacilities />
      <PesantrenPpdb />
      <PesantrenContact />
    </main>
  );
}
