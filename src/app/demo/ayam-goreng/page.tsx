import type { Metadata } from "next";
import AyamHero from "@/components/demo/ayam-goreng/AyamHero";
import AyamMenu from "@/components/demo/ayam-goreng/AyamMenu";
import AyamPromo from "@/components/demo/ayam-goreng/AyamPromo";
import AyamOutlets from "@/components/demo/ayam-goreng/AyamOutlets";
import AyamContact from "@/components/demo/ayam-goreng/AyamContact";

export const metadata: Metadata = {
  title: "Ayam Geprek Mantap — Demo Franchise Ayam Goreng | Andalan Tech",
  description:
    "Demo website franchise ayam goreng dan geprek: menu paket level pedas, promo harian, daftar outlet, pesan antar, dan order via WhatsApp.",
};

export default function AyamGorengDemoPage() {
  return (
    <main className="bg-white">
      <AyamHero />
      <AyamMenu />
      <AyamPromo />
      <AyamOutlets />
      <AyamContact />
    </main>
  );
}
