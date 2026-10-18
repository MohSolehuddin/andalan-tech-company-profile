import type { Metadata } from "next";
import TokoEmasHero from "@/components/demo/toko-emas/TokoEmasHero";
import TokoEmasRates from "@/components/demo/toko-emas/TokoEmasRates";
import TokoEmasCollection from "@/components/demo/toko-emas/TokoEmasCollection";
import TokoEmasServices from "@/components/demo/toko-emas/TokoEmasServices";
import TokoEmasContact from "@/components/demo/toko-emas/TokoEmasContact";

export const metadata: Metadata = {
  title: "Emas Mulia Perhiasan — Demo Toko Emas & Perhiasan | Andalan Tech",
  description:
    "Demo website toko emas & perhiasan dengan pembaruan harga harian, katalog cincin kawin, layanan custom desain, dan konsultasi via WhatsApp.",
};

export default function TokoEmasPage() {
  return (
    <main className="bg-white">
      <TokoEmasHero />
      <TokoEmasRates />
      <TokoEmasCollection />
      <TokoEmasServices />
      <TokoEmasContact />
    </main>
  );
}
