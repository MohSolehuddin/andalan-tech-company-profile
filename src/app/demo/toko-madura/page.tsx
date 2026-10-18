import type { Metadata } from "next";
import TokoMaduraHero from "@/components/demo/toko-madura/TokoMaduraHero";
import TokoMaduraFeatures from "@/components/demo/toko-madura/TokoMaduraFeatures";
import TokoMaduraCatalog from "@/components/demo/toko-madura/TokoMaduraCatalog";
import TokoMaduraGrosir from "@/components/demo/toko-madura/TokoMaduraGrosir";
import TokoMaduraContact from "@/components/demo/toko-madura/TokoMaduraContact";

export const metadata: Metadata = {
  title:
    "Toko Madura Barokah — Demo Toko Madura (Sembako & Kebutuhan Pokok) | Andalan Tech",
};

export default function TokoMaduraDemoPage() {
  return (
    <main className="bg-white">
      <TokoMaduraHero />
      <TokoMaduraFeatures />
      <TokoMaduraCatalog />
      <TokoMaduraGrosir />
      <TokoMaduraContact />
    </main>
  );
}
