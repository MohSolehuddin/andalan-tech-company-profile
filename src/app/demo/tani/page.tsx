import type { Metadata } from "next";
import TaniHero from "@/components/demo/tani/TaniHero";
import TaniProducts from "@/components/demo/tani/TaniProducts";
import TaniWhy from "@/components/demo/tani/TaniWhy";
import TaniServices from "@/components/demo/tani/TaniServices";
import TaniContact from "@/components/demo/tani/TaniContact";

export const metadata: Metadata = {
  title: "Tani Makmur Situbondo — Demo Toko Pertanian | Andalan Tech",
};

export default function TaniDemoPage() {
  return (
    <main className="bg-white">
      <TaniHero />
      <TaniProducts />
      <TaniWhy />
      <TaniServices />
      <TaniContact />
    </main>
  );
}
