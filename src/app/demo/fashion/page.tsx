import type { Metadata } from "next";
import FashionHero from "@/components/demo/fashion/FashionHero";
import FashionKatalog from "@/components/demo/fashion/FashionKatalog";
import FashionKoleksi from "@/components/demo/fashion/FashionKoleksi";
import FashionOrder from "@/components/demo/fashion/FashionOrder";
import FashionContact from "@/components/demo/fashion/FashionContact";

export const metadata: Metadata = {
  title: "Distro Style Nusantara — Demo Website Fashion | Andalan Tech",
};

export default function FashionDemoPage() {
  return (
    <main className="bg-white">
      <FashionHero />
      <FashionKatalog />
      <FashionKoleksi />
      <FashionOrder />
      <FashionContact />
    </main>
  );
}
