import type { Metadata } from "next";
import ApotekHero from "@/components/demo/apotek/ApotekHero";
import ApotekServices from "@/components/demo/apotek/ApotekServices";
import ApotekProducts from "@/components/demo/apotek/ApotekProducts";
import ApotekWhy from "@/components/demo/apotek/ApotekWhy";
import ApotekContact from "@/components/demo/apotek/ApotekContact";

export const metadata: Metadata = {
  title: "Apotek Sehatra — Demo Apotek & Farmasi | Andalan Tech",
};

export default function ApotekDemoPage() {
  return (
    <main className="bg-white">
      <ApotekHero />
      <ApotekServices />
      <ApotekProducts />
      <ApotekWhy />
      <ApotekContact />
    </main>
  );
}
