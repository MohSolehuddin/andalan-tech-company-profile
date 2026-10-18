import type { Metadata } from "next";
import TokoKueHero from "@/components/demo/toko-kue/TokoKueHero";
import TokoKueCatalog from "@/components/demo/toko-kue/TokoKueCatalog";
import TokoKueCustom from "@/components/demo/toko-kue/TokoKueCustom";
import TokoKueOrderWA from "@/components/demo/toko-kue/TokoKueOrderWA";

export const metadata: Metadata = {
  title: "Manis Kue & Dessert — Demo Toko Kue & Dessert | Andalan Tech",
  description:
    "Demo website toko kue & dessert: katalog kue ulang tahun, dessert box, brownies fudgy, custom order dan pemesanan via WhatsApp.",
};

export default function TokoKueDemoPage() {
  return (
    <main className="bg-white">
      <TokoKueHero />
      <TokoKueCatalog />
      <TokoKueCustom />
      <TokoKueOrderWA />
    </main>
  );
}
