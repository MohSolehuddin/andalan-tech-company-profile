import type { Metadata } from "next";
import InteriorHero from "@/components/demo/interior/InteriorHero";
import InteriorServices from "@/components/demo/interior/InteriorServices";
import InteriorPortfolio from "@/components/demo/interior/InteriorPortfolio";
import InteriorPackages from "@/components/demo/interior/InteriorPackages";
import InteriorConsult from "@/components/demo/interior/InteriorConsult";

export const metadata: Metadata = {
  title: "Ruang Interior Studio — Demo Desain Interior | Andalan Tech",
};

export default function InteriorDemoPage() {
  return (
    <main className="bg-white">
      <InteriorHero />
      <InteriorServices />
      <InteriorPortfolio />
      <InteriorPackages />
      <InteriorConsult />
    </main>
  );
}
