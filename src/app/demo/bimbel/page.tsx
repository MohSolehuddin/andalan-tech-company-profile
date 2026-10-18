import type { Metadata } from "next";
import BimbelHero from "@/components/demo/bimbel/BimbelHero";
import BimbelPrograms from "@/components/demo/bimbel/BimbelPrograms";
import BimbelWhy from "@/components/demo/bimbel/BimbelWhy";
import BimbelPricing from "@/components/demo/bimbel/BimbelPricing";
import BimbelContact from "@/components/demo/bimbel/BimbelContact";

export const metadata: Metadata = {
  title: "Bimbel Bintang Prestasi — Demo Bimbingan Belajar | Andalan Tech",
  description:
    "Demo website bimbingan belajar & les privat modern oleh Andalan Tech. Menampilkan program belajar SD–SMA, persiapan UTBK, paket harga, dan pendaftaran trial gratis via WhatsApp.",
};

export default function BimbelDemoPage() {
  return (
    <main className="bg-white">
      <BimbelHero />
      <BimbelPrograms />
      <BimbelWhy />
      <BimbelPricing />
      <BimbelContact />
    </main>
  );
}
