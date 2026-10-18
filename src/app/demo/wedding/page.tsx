import type { Metadata } from "next";
import WeddingHero from "@/components/demo/wedding/WeddingHero";
import WeddingServices from "@/components/demo/wedding/WeddingServices";
import WeddingPackages from "@/components/demo/wedding/WeddingPackages";
import WeddingGallery from "@/components/demo/wedding/WeddingGallery";
import WeddingContact from "@/components/demo/wedding/WeddingContact";

export const metadata: Metadata = {
  title: "Mahligai Wedding Organizer — Demo Website Pernikahan | Andalan Tech",
  description:
    "Demo website wedding organizer profesional: paket pernikahan all-in (dekorasi, catering, MUA, dokumentasi), galeri konsep impian, dan konsultasi gratis via WhatsApp.",
};

export default function WeddingDemoPage() {
  return (
    <main className="bg-white">
      <WeddingHero />
      <WeddingServices />
      <WeddingPackages />
      <WeddingGallery />
      <WeddingContact />
    </main>
  );
}
