import type { Metadata } from "next";
import WarungHero from "@/components/demo/warung/WarungHero";
import WarungMenu from "@/components/demo/warung/WarungMenu";
import WarungPaket from "@/components/demo/warung/WarungPaket";
import WarungAntar from "@/components/demo/warung/WarungAntar";
import WarungContact from "@/components/demo/warung/WarungContact";

export const metadata: Metadata = {
  title: "Warung Sederhana Jaya — Demo Warung / Rumah Makan | Andalan Tech",
  description:
    "Demo website warung dan rumah makan dengan menu harian, paket nasi lengkap, layanan pesan antar, jam buka, dan order via WhatsApp.",
};

export default function WarungDemoPage() {
  return (
    <main className="bg-white">
      <WarungHero />
      <WarungMenu />
      <WarungPaket />
      <WarungAntar />
      <WarungContact />
    </main>
  );
}
