import type { Metadata } from "next";
import LaundryHero from "@/components/demo/laundry/LaundryHero";
import LaundryServices from "@/components/demo/laundry/LaundryServices";
import LaundryPricing from "@/components/demo/laundry/LaundryPricing";
import LaundryOrder from "@/components/demo/laundry/LaundryOrder";
import LaundryContact from "@/components/demo/laundry/LaundryContact";

export const metadata: Metadata = {
  title: "Kilat Bersih Laundry — Demo Laundry & Kebersihan | Andalan Tech",
};

export default function LaundryDemoPage() {
  return (
    <main className="bg-white">
      <LaundryHero />
      <LaundryServices />
      <LaundryPricing />
      <LaundryOrder />
      <LaundryContact />
    </main>
  );
}
