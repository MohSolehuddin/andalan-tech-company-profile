import type { Metadata } from "next";
import SkincareHero from "@/components/demo/skincare/SkincareHero";
import SkincareTreatments from "@/components/demo/skincare/SkincareTreatments";
import SkincarePricing from "@/components/demo/skincare/SkincarePricing";
import SkincareConsultation from "@/components/demo/skincare/SkincareConsultation";
import SkincareBooking from "@/components/demo/skincare/SkincareBooking";

export const metadata: Metadata = {
  title: "Glow Aesthetic Clinic — Demo Skincare & Klinik Estetika | Andalan Tech",
};

export default function SkincareDemoPage() {
  return (
    <main className="bg-white">
      <SkincareHero />
      <SkincareTreatments />
      <SkincarePricing />
      <SkincareConsultation />
      <SkincareBooking />
    </main>
  );
}
