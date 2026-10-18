import type { Metadata } from "next";
import VetHero from "@/components/demo/klinik-hewan/VetHero";
import VetServices from "@/components/demo/klinik-hewan/VetServices";
import VetProducts from "@/components/demo/klinik-hewan/VetProducts";
import VetContact from "@/components/demo/klinik-hewan/VetContact";

export const metadata: Metadata = {
  title: "VetCare Klinik Hewan & Petshop — Demo Website | Andalan Tech",
  description:
    "Demo website profil klinik hewan dan petshop: layanan dokter hewan, vaksinasi, salon grooming, belanja pakan & reservasi via WhatsApp.",
};

export default function KlinikHewanDemoPage() {
  return (
    <main className="bg-white">
      <VetHero />
      <VetServices />
      <VetProducts />
      <VetContact />
    </main>
  );
}
