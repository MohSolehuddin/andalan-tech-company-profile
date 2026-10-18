import type { Metadata } from "next";
import SpaHero from "@/components/demo/spa/SpaHero";
import SpaServices from "@/components/demo/spa/SpaServices";
import SpaPackages from "@/components/demo/spa/SpaPackages";
import SpaBooking from "@/components/demo/spa/SpaBooking";
import SpaContact from "@/components/demo/spa/SpaContact";

export const metadata: Metadata = {
  title: "Ayu Spa & Reflexology — Demo Spa & Massage | Andalan Tech",
};

export default function SpaDemoPage() {
  return (
    <main className="bg-white">
      <SpaHero />
      <SpaServices />
      <SpaPackages />
      <SpaBooking />
      <SpaContact />
    </main>
  );
}
