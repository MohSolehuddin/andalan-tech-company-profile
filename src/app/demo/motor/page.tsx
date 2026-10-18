import type { Metadata } from "next";
import MotorHero from "@/components/demo/motor/MotorHero";
import MotorInventory from "@/components/demo/motor/MotorInventory";
import MotorFinancing from "@/components/demo/motor/MotorFinancing";
import MotorServices from "@/components/demo/motor/MotorServices";
import MotorContact from "@/components/demo/motor/MotorContact";

export const metadata: Metadata = {
  title: "Motor Jaya Showroom — Demo Dealer & Showroom Motor | Andalan Tech",
  description:
    "Demo website showroom dan dealer motor resmi dengan katalog motor bebek, matic, sport, simulasi kredit ringan, serta booking servis via WhatsApp.",
};

export default function MotorDemoPage() {
  return (
    <main className="bg-white">
      <MotorHero />
      <MotorInventory />
      <MotorFinancing />
      <MotorServices />
      <MotorContact />
    </main>
  );
}
