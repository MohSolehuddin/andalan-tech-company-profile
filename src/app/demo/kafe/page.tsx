import type { Metadata } from "next";
import KafeHero from "@/components/demo/kafe/KafeHero";
import KafeMenu from "@/components/demo/kafe/KafeMenu";
import KafeVibe from "@/components/demo/kafe/KafeVibe";
import KafeEvents from "@/components/demo/kafe/KafeEvents";
import KafeContact from "@/components/demo/kafe/KafeContact";

export const metadata: Metadata = {
  title: "Kopi Titik Temu — Demo Kafe & Coffee Shop | Andalan Tech",
  description:
    "Demo website coffee shop modern dengan menu kopi signature, artisan pastry, ruang coworking, jadwal event musik akustik, dan reservasi meja via WhatsApp.",
};

export default function KafeDemoPage() {
  return (
    <main className="bg-white">
      <KafeHero />
      <KafeMenu />
      <KafeVibe />
      <KafeEvents />
      <KafeContact />
    </main>
  );
}
