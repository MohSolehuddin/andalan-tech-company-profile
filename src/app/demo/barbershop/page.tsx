import type { Metadata } from "next";
import BarbershopHero from "@/components/demo/barbershop/BarbershopHero";
import BarbershopServices from "@/components/demo/barbershop/BarbershopServices";
import BarbershopPricing from "@/components/demo/barbershop/BarbershopPricing";
import BarbershopTeam from "@/components/demo/barbershop/BarbershopTeam";
import BarbershopContact from "@/components/demo/barbershop/BarbershopContact";

export const metadata: Metadata = {
  title: "Gents & Blade Barbershop — Demo Barbershop & Grooming | Andalan Tech",
  description:
    "Demo website barbershop pria modern dengan layanan haircut, clean shave, coloring, dan grooming, daftar harga transparan, profil barber, serta booking antrian WhatsApp.",
};

export default function BarbershopDemoPage() {
  return (
    <main className="bg-white">
      <BarbershopHero />
      <BarbershopServices />
      <BarbershopPricing />
      <BarbershopTeam />
      <BarbershopContact />
    </main>
  );
}
