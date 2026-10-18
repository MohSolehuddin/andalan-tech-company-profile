import type { Metadata } from "next";
import AsuransiHero from "@/components/demo/asuransi/AsuransiHero";
import AsuransiProducts from "@/components/demo/asuransi/AsuransiProducts";
import AsuransiWhy from "@/components/demo/asuransi/AsuransiWhy";
import AsuransiSteps from "@/components/demo/asuransi/AsuransiSteps";
import AsuransiContact from "@/components/demo/asuransi/AsuransiContact";

export const metadata: Metadata = {
  title: "Amanah Proteksi — Demo Asuransi & Perlindungan | Andalan Tech",
};

export default function AsuransiDemoPage() {
  return (
    <main className="bg-white">
      <AsuransiHero />
      <AsuransiProducts />
      <AsuransiWhy />
      <AsuransiSteps />
      <AsuransiContact />
    </main>
  );
}
