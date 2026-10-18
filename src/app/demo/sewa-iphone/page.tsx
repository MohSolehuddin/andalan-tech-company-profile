import type { Metadata } from "next";
import IRentHero from "@/components/demo/irent/IRentHero";
import IRentCatalog from "@/components/demo/irent/IRentCatalog";
import IRentCalculator from "@/components/demo/irent/IRentCalculator";
import IRentSteps from "@/components/demo/irent/IRentSteps";
import IRentBooking from "@/components/demo/irent/IRentBooking";
import IRentReviewsFaq from "@/components/demo/irent/IRentReviewsFaq";

export const metadata: Metadata = {
  title: "iRent Studio — Demo Sewa iPhone & Gadget Resmi | Andalan Tech",
  description:
    "Demo website rental iPhone flagship resmi untuk konser, liburan, wisuda, dan pembuatan konten: katalog unit ready, kalkulator sewa real-time, paket fullset, dan booking WhatsApp instan.",
};

const SewaIphoneDemoPage = () => {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      <IRentHero />
      <IRentCatalog />
      <IRentCalculator />
      <IRentSteps />
      <IRentBooking />
      <IRentReviewsFaq />
    </main>
  );
};

export default SewaIphoneDemoPage;
