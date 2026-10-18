import type { Metadata } from "next";
import MinimarketHero from "@/components/demo/minimarket/MinimarketHero";
import MinimarketPromo from "@/components/demo/minimarket/MinimarketPromo";
import MinimarketCatalog from "@/components/demo/minimarket/MinimarketCatalog";
import MinimarketBranches from "@/components/demo/minimarket/MinimarketBranches";

export const metadata: Metadata = {
  title: "Minimart Sejahtera — Demo Website Minimarket | Andalan Tech",
  description:
    "Demo website minimarket modern dengan katalog sembako, promo mingguan JSM, info cabang, dan order pesan antar via WhatsApp.",
};

export default function MinimarketDemoPage() {
  return (
    <main className="bg-white">
      <MinimarketHero />
      <MinimarketPromo />
      <MinimarketCatalog />
      <MinimarketBranches />
    </main>
  );
}
