import type { Metadata } from "next";
import PercetakanHero from "@/components/demo/percetakan/PercetakanHero";
import PercetakanServices from "@/components/demo/percetakan/PercetakanServices";
import PercetakanPricing from "@/components/demo/percetakan/PercetakanPricing";
import PercetakanContact from "@/components/demo/percetakan/PercetakanContact";

export const metadata: Metadata = {
  title: "Cetak Cepat Digital Printing — Demo Percetakan & Digital Printing | Andalan Tech",
  description:
    "Website demo percetakan dan digital printing cepat untuk cetak banner, stiker, kartu nama, undangan, dan sablon kaos via WhatsApp.",
};

export default function PercetakanDemoPage() {
  return (
    <main className="bg-white">
      <PercetakanHero />
      <PercetakanServices />
      <PercetakanPricing />
      <PercetakanContact />
    </main>
  );
}
