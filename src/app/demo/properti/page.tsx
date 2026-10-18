import type { Metadata } from "next";
import PropertiHero from "@/components/demo/properti/PropertiHero";
import PropertiListings from "@/components/demo/properti/PropertiListings";
import PropertiFeatures from "@/components/demo/properti/PropertiFeatures";
import PropertiAgent from "@/components/demo/properti/PropertiAgent";

export const metadata: Metadata = {
  title: "Griya Andalan Properti — Demo Agen Properti | Andalan Tech",
};

export default function PropertiDemoPage() {
  return (
    <main className="bg-white">
      <PropertiHero />
      <PropertiListings />
      <PropertiFeatures />
      <PropertiAgent />
    </main>
  );
}
