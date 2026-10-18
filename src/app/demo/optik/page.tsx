import type { Metadata } from "next";
import OptikHero from "@/components/demo/optik/OptikHero";
import OptikServices from "@/components/demo/optik/OptikServices";
import OptikCatalog from "@/components/demo/optik/OptikCatalog";
import OptikPromo from "@/components/demo/optik/OptikPromo";
import OptikContact from "@/components/demo/optik/OptikContact";

export const metadata: Metadata = {
  title: "Optik Melihat Jernih — Demo Optik & Kacamata | Andalan Tech",
};

export default function OptikDemoPage() {
  return (
    <main className="bg-white">
      <OptikHero />
      <OptikServices />
      <OptikCatalog />
      <OptikPromo />
      <OptikContact />
    </main>
  );
}
