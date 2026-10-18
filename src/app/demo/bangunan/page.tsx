import type { Metadata } from "next";
import BangunanHero from "@/components/demo/bangunan/BangunanHero";
import BangunanCatalog from "@/components/demo/bangunan/BangunanCatalog";
import BangunanDelivery from "@/components/demo/bangunan/BangunanDelivery";
import BangunanTrust from "@/components/demo/bangunan/BangunanTrust";
import BangunanContact from "@/components/demo/bangunan/BangunanContact";

export const metadata: Metadata = {
  title: "Toko Bangunan Kokoh — Demo Toko Bangunan & Material | Andalan Tech",
};

export default function BangunanDemoPage() {
  return (
    <main className="bg-white">
      <BangunanHero />
      <BangunanCatalog />
      <BangunanDelivery />
      <BangunanTrust />
      <BangunanContact />
    </main>
  );
}
