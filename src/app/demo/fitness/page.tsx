import type { Metadata } from "next";
import FitnessHero from "@/components/demo/fitness/FitnessHero";
import FitnessPrograms from "@/components/demo/fitness/FitnessPrograms";
import FitnessPricing from "@/components/demo/fitness/FitnessPricing";
import FitnessTrainers from "@/components/demo/fitness/FitnessTrainers";
import FitnessContact from "@/components/demo/fitness/FitnessContact";

export const metadata: Metadata = {
  title: "PrimaFit Studio — Demo Gym & Fitness Center | Andalan Tech",
  description:
    "Demo website pusat kebugaran dan gym modern dengan jadwal kelas, paket keanggotaan, profil pelatih, dan pendaftaran WhatsApp.",
};

export default function FitnessDemoPage() {
  return (
    <main className="bg-white">
      <FitnessHero />
      <FitnessPrograms />
      <FitnessPricing />
      <FitnessTrainers />
      <FitnessContact />
    </main>
  );
}
