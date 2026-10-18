import type { Metadata } from "next";
import KampusHero from "@/components/demo/kampus/KampusHero";
import KampusPrograms from "@/components/demo/kampus/KampusPrograms";
import KampusFacilities from "@/components/demo/kampus/KampusFacilities";
import KampusAdmission from "@/components/demo/kampus/KampusAdmission";
import KampusContact from "@/components/demo/kampus/KampusContact";

export const metadata: Metadata = {
  title: "Politeknik Nusantara — Demo Kampus | Andalan Tech",
  description:
    "Demo website kampus dan politeknik oleh Andalan Tech. Program studi D3 & D4, fasilitas kampus, jalur pendaftaran & beasiswa, serta info PMB via WhatsApp.",
};

export default function KampusDemoPage() {
  return (
    <main className="bg-white">
      <KampusHero />
      <KampusPrograms />
      <KampusFacilities />
      <KampusAdmission />
      <KampusContact />
    </main>
  );
}
