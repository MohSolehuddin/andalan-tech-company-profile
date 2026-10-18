import type { Metadata } from "next";
import PerikananHero from "@/components/demo/perikanan/PerikananHero";
import PerikananProducts from "@/components/demo/perikanan/PerikananProducts";
import PerikananFresh from "@/components/demo/perikanan/PerikananFresh";
import PerikananArea from "@/components/demo/perikanan/PerikananArea";
import PerikananContact from "@/components/demo/perikanan/PerikananContact";

export const metadata: Metadata = {
  title: "Samudra Situbondo — Supplier Seafood & Ikan Segar | Andalan Tech",
  description:
    "Demo website supplier hasil laut dan perikanan segar Situbondo: ikan kerapu, kakap, udang vaname, cumi, dan produk olahan cold-chain.",
};

export default function PerikananDemoPage() {
  return (
    <main className="bg-white">
      <PerikananHero />
      <PerikananProducts />
      <PerikananFresh />
      <PerikananArea />
      <PerikananContact />
    </main>
  );
}
