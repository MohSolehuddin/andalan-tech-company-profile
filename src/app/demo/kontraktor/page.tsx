import type { Metadata } from "next";
import KontraktorHero from "@/components/demo/kontraktor/KontraktorHero";
import KontraktorServices from "@/components/demo/kontraktor/KontraktorServices";
import KontraktorProjects from "@/components/demo/kontraktor/KontraktorProjects";
import KontraktorRAB from "@/components/demo/kontraktor/KontraktorRAB";
import KontraktorContact from "@/components/demo/kontraktor/KontraktorContact";

export const metadata: Metadata = {
  title: "Bangun Karya Kontraktor — Demo Kontraktor & Renovasi Bangunan | Andalan Tech",
  description:
    "Demo website kontraktor & renovasi bangunan profesional dengan portofolio proyek, simulasi estimasi RAB transparan, dan konsultasi survei via WhatsApp.",
};

const KontraktorDemoPage = () => {
  return (
    <main className="bg-white">
      <KontraktorHero />
      <KontraktorServices />
      <KontraktorProjects />
      <KontraktorRAB />
      <KontraktorContact />
    </main>
  );
};

export default KontraktorDemoPage;
