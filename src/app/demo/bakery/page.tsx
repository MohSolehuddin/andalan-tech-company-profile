import type { Metadata } from "next";
import BakeryHero from "@/components/demo/bakery/BakeryHero";
import BakeryCatalog from "@/components/demo/bakery/BakeryCatalog";
import BakeryPackages from "@/components/demo/bakery/BakeryPackages";
import BakeryContact from "@/components/demo/bakery/BakeryContact";

export const metadata: Metadata = {
  title: "Dapur Roti Nusantara — Demo Toko Roti & Bakery | Andalan Tech",
  description:
    "Demo website toko roti dan pastry modern dengan katalog fresh oven harian, paket hampers acara, dan pemesanan praktis via WhatsApp.",
};

const BakeryDemoPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <BakeryHero />
      <BakeryCatalog />
      <BakeryPackages />
      <BakeryContact />
    </main>
  );
};

export default BakeryDemoPage;
