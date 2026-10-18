import type { Metadata } from "next";
import FotoHero from "@/components/demo/fotografi/FotoHero";
import FotoServices from "@/components/demo/fotografi/FotoServices";
import FotoGallery from "@/components/demo/fotografi/FotoGallery";
import FotoPackages from "@/components/demo/fotografi/FotoPackages";
import FotoContact from "@/components/demo/fotografi/FotoContact";

export const metadata: Metadata = {
  title: "Lumen Studio — Demo Fotografi & Studio Foto | Andalan Tech",
  description:
    "Demo website studio fotografi: layanan wedding, prewedding, produk, event, wisuda, galeri, dan paket harga dengan booking via WhatsApp.",
};

export default function FotografiDemoPage() {
  return (
    <main className="bg-white">
      <FotoHero />
      <FotoServices />
      <FotoGallery />
      <FotoPackages />
      <FotoContact />
    </main>
  );
}
