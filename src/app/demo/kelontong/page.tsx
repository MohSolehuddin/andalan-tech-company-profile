import type { Metadata } from "next";
import KelontongHero from "@/components/demo/kelontong/KelontongHero";
import KelontongProduk from "@/components/demo/kelontong/KelontongProduk";
import KelontongPaket from "@/components/demo/kelontong/KelontongPaket";
import KelontongAntar from "@/components/demo/kelontong/KelontongAntar";
import KelontongContact from "@/components/demo/kelontong/KelontongContact";

export const metadata: Metadata = {
  title: "Kelontong Sembako Murah — Demo Toko Sembako | Andalan Tech",
};

export default function KelontongDemoPage() {
  return (
    <main className="bg-white">
      <KelontongHero />
      <KelontongProduk />
      <KelontongPaket />
      <KelontongAntar />
      <KelontongContact />
    </main>
  );
}
