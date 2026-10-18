import type { Metadata } from "next";
import AgencyHero from "@/components/demo/agency/AgencyHero";
import AgencyServices from "@/components/demo/agency/AgencyServices";
import AgencyPortfolio from "@/components/demo/agency/AgencyPortfolio";
import AgencyProcessPricing from "@/components/demo/agency/AgencyProcessPricing";
import AgencyContact from "@/components/demo/agency/AgencyContact";

export const metadata: Metadata = {
  title: "Andalan Digital Agency — Demo Software House & Agency | Andalan Tech",
  description:
    "Demo website digital agency & software house oleh Andalan Tech. Solusi website kustom, aplikasi mobile, SEO, branding, dan konsultasi proyek via WhatsApp.",
};

export default function AgencyDemoPage() {
  return (
    <main className="bg-white">
      <AgencyHero />
      <AgencyServices />
      <AgencyPortfolio />
      <AgencyProcessPricing />
      <AgencyContact />
    </main>
  );
}
