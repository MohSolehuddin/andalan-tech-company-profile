import type { Metadata } from "next";
import DealerMobilHero from "@/components/demo/dealer-mobil/DealerMobilHero";
import DealerMobilStock from "@/components/demo/dealer-mobil/DealerMobilStock";
import DealerMobilKredit from "@/components/demo/dealer-mobil/DealerMobilKredit";
import DealerMobilTrade from "@/components/demo/dealer-mobil/DealerMobilTrade";
import DealerMobilTestDrive from "@/components/demo/dealer-mobil/DealerMobilTestDrive";

export const metadata: Metadata = {
  title: "Auto Prima Dealer Mobil — Demo Dealer & Jual Beli Mobil | Andalan Tech",
};

export default function DealerMobilDemoPage() {
  return (
    <main className="bg-white">
      <DealerMobilHero />
      <DealerMobilStock />
      <DealerMobilKredit />
      <DealerMobilTrade />
      <DealerMobilTestDrive />
    </main>
  );
}
