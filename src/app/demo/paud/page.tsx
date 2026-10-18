import type { Metadata } from "next";
import PaudHero from "@/components/demo/paud/PaudHero";
import PaudPrograms from "@/components/demo/paud/PaudPrograms";
import PaudFacilities from "@/components/demo/paud/PaudFacilities";
import PaudPpdb from "@/components/demo/paud/PaudPpdb";
import PaudContact from "@/components/demo/paud/PaudContact";

export const metadata: Metadata = {
  title: "PAUD Ceria & Daycare — Demo Website | Andalan Tech",
  description:
    "Demo website PAUD, TK, dan Daycare oleh Andalan Tech. Fitur program bermain, sentra belajar, fasilitas ramah anak, jadwal operasional, dan PPDB via WhatsApp.",
};

const PaudDemoPage = () => {
  return (
    <main className="bg-white">
      <PaudHero />
      <PaudPrograms />
      <PaudFacilities />
      <PaudPpdb />
      <PaudContact />
    </main>
  );
};

export default PaudDemoPage;
