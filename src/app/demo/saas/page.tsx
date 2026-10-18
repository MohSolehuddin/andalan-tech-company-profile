import type { Metadata } from "next";
import SaasHero from "@/components/demo/saas/SaasHero";
import SaasFeatures from "@/components/demo/saas/SaasFeatures";
import SaasPricing from "@/components/demo/saas/SaasPricing";
import SaasTestimonials from "@/components/demo/saas/SaasTestimonials";
import SaasCta from "@/components/demo/saas/SaasCta";

export const metadata: Metadata = {
  title: "KelolaKu — Demo SaaS & Startup | Andalan Tech",
  description:
    "Demo platform SaaS & manajemen tim modern oleh Andalan Tech. Fitur automasi alur kerja, analitik realtime, dan paket fleksibel.",
};

const SaasDemoPage = () => {
  return (
    <main className="bg-white">
      <SaasHero />
      <SaasFeatures />
      <SaasPricing />
      <SaasTestimonials />
      <SaasCta />
    </main>
  );
};

export default SaasDemoPage;
