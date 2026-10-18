import type { Metadata } from "next";
import KlinikHero from "@/components/demo/klinik/KlinikHero";
import KlinikServices from "@/components/demo/klinik/KlinikServices";
import KlinikDoctors from "@/components/demo/klinik/KlinikDoctors";
import KlinikContact from "@/components/demo/klinik/KlinikContact";

export const metadata: Metadata = {
  title: "Klinik Sehat Bersama — Demo Klinik | Andalan Tech",
};

export default function KlinikDemoPage() {
  return (
    <main className="bg-white">
      <KlinikHero />
      <KlinikServices />
      <KlinikDoctors />
      <KlinikContact />
    </main>
  );
}
