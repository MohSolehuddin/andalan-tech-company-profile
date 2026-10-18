import type { Metadata } from "next";
import SekolahHero from "@/components/demo/sekolah/SekolahHero";
import SekolahPrograms from "@/components/demo/sekolah/SekolahPrograms";
import SekolahFacilities from "@/components/demo/sekolah/SekolahFacilities";
import SekolahPpdb from "@/components/demo/sekolah/SekolahPpdb";
import SekolahContact from "@/components/demo/sekolah/SekolahContact";

export const metadata: Metadata = {
  title: "SMA Cendekia Nusantara — Demo Sekolah | Andalan Tech",
  description:
    "Demo website sekolah oleh Andalan Tech. Profil program peminatan, fasilitas kampus, alur PPDB, dan konsultasi pendaftaran via WhatsApp.",
};

export default function SekolahDemoPage() {
  return (
    <main className="bg-white">
      <SekolahHero />
      <SekolahPrograms />
      <SekolahFacilities />
      <SekolahPpdb />
      <SekolahContact />
    </main>
  );
}
