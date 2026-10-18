import type { Metadata } from "next";
import UmrohHero from "@/components/demo/umroh/UmrohHero";
import UmrohPackages from "@/components/demo/umroh/UmrohPackages";
import UmrohSchedules from "@/components/demo/umroh/UmrohSchedules";
import UmrohFeatures from "@/components/demo/umroh/UmrohFeatures";
import UmrohContact from "@/components/demo/umroh/UmrohContact";

export const metadata: Metadata = {
  title: "Barokah Umroh & Haji — Demo Biro Perjalanan Umroh | Andalan Tech",
  description:
    "Demo website biro perjalanan umroh & haji dengan pilihan paket reguler/VIP, hotel dekat pelataran, jadwal pasti, dan konsultasi WhatsApp.",
};

export default function UmrohDemoPage() {
  return (
    <main className="bg-white">
      <UmrohHero />
      <UmrohPackages />
      <UmrohSchedules />
      <UmrohFeatures />
      <UmrohContact />
    </main>
  );
}
