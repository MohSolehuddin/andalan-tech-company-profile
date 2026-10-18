import type { Metadata } from "next";
import LogistikHero from "@/components/demo/logistik/LogistikHero";
import LogistikServices from "@/components/demo/logistik/LogistikServices";
import LogistikEstimasi from "@/components/demo/logistik/LogistikEstimasi";
import LogistikSteps from "@/components/demo/logistik/LogistikSteps";
import LogistikContact from "@/components/demo/logistik/LogistikContact";

export const metadata: Metadata = {
  title: "PindahAja Logistik & Ekspedisi — Demo Jasa Pindahan & Ekspedisi | Andalan Tech",
  description:
    "Demo website jasa pindahan & ekspedisi dengan kalkulator estimasi biaya, layanan packing, pengiriman barang dan kendaraan, serta order cepat via WhatsApp.",
};

export default function LogistikDemoPage() {
  return (
    <main className="bg-white">
      <LogistikHero />
      <LogistikServices />
      <LogistikEstimasi />
      <LogistikSteps />
      <LogistikContact />
    </main>
  );
}
