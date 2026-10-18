import type { Metadata } from "next";
import ElektronikHero from "@/components/demo/elektronik/ElektronikHero";
import ElektronikCatalog from "@/components/demo/elektronik/ElektronikCatalog";
import ElektronikFeatures from "@/components/demo/elektronik/ElektronikFeatures";
import ElektronikContact from "@/components/demo/elektronik/ElektronikContact";

export const metadata: Metadata = {
  title: "Elektronik Jaya Abadi — Demo Toko Elektronik | Andalan Tech",
};

export default function ElektronikDemoPage() {
  return (
    <main className="bg-white">
      <ElektronikHero />
      <ElektronikCatalog />
      <ElektronikFeatures />
      <ElektronikContact />
    </main>
  );
}
