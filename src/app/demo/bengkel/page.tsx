import type { Metadata } from "next";
import BengkelHero from "@/components/demo/bengkel/BengkelHero";
import BengkelServices from "@/components/demo/bengkel/BengkelServices";
import BengkelBooking from "@/components/demo/bengkel/BengkelBooking";
import BengkelTestimonials from "@/components/demo/bengkel/BengkelTestimonials";
import BengkelContact from "@/components/demo/bengkel/BengkelContact";

export const metadata: Metadata = {
  title: "AutoPrima Motor — Demo Bengkel & Otomotif | Andalan Tech",
};

export default function BengkelDemoPage() {
  return (
    <main className="bg-white">
      <BengkelHero />
      <BengkelServices />
      <BengkelBooking />
      <BengkelTestimonials />
      <BengkelContact />
    </main>
  );
}
