import type { Metadata } from "next";
import OlehHero from "@/components/demo/oleh-oleh/OlehHero";
import OlehCatalog from "@/components/demo/oleh-oleh/OlehCatalog";
import OlehHampers from "@/components/demo/oleh-oleh/OlehHampers";
import OlehShipping from "@/components/demo/oleh-oleh/OlehShipping";
import OlehContact from "@/components/demo/oleh-oleh/OlehContact";

export const metadata: Metadata = {
  title: "Oleh-Oleh Khas Situbondo — Demo Toko Khas Daerah | Andalan Tech",
  description:
    "Demo website toko oleh-oleh khas daerah dengan katalog produk tradisional, paket hampers, dan pemesanan instan via WhatsApp.",
};

export default function OlehOlehDemoPage() {
  return (
    <main className="bg-white">
      <OlehHero />
      <OlehCatalog />
      <OlehHampers />
      <OlehShipping />
      <OlehContact />
    </main>
  );
}
