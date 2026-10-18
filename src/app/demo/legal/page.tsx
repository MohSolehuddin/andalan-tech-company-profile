import type { Metadata } from "next";
import LegalHero from "@/components/demo/legal/LegalHero";
import LegalServices from "@/components/demo/legal/LegalServices";
import LegalProcess from "@/components/demo/legal/LegalProcess";
import LegalTeam from "@/components/demo/legal/LegalTeam";
import LegalContact from "@/components/demo/legal/LegalContact";

export const metadata: Metadata = {
  title: "Pratama & Co — Demo Kantor Hukum & Notaris | Andalan Tech",
};

export default function LegalDemoPage() {
  return (
    <main className="bg-white">
      <LegalHero />
      <LegalServices />
      <LegalProcess />
      <LegalTeam />
      <LegalContact />
    </main>
  );
}
