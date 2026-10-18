import type { Metadata } from "next";
import TokoHero from "@/components/demo/toko/TokoHero";
import TokoCatalog from "@/components/demo/toko/TokoCatalog";
import TokoTrust from "@/components/demo/toko/TokoTrust";
import TokoContact from "@/components/demo/toko/TokoContact";

export const metadata: Metadata = {
  title: "TokoKita — Demo Toko Online | Andalan Tech",
};

export default function TokoDemoPage() {
  return (
    <main className="bg-white">
      <TokoHero />
      <TokoCatalog />
      <TokoTrust />
      <TokoContact />
    </main>
  );
}
