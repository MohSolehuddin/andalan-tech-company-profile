import type { Metadata } from "next";
import BaksoHero from "@/components/demo/bakso/BaksoHero";
import BaksoBranches from "@/components/demo/bakso/BaksoBranches";
import BaksoMenu from "@/components/demo/bakso/BaksoMenu";
import BaksoCatering from "@/components/demo/bakso/BaksoCatering";
import BaksoReviews from "@/components/demo/bakso/BaksoReviews";

export const metadata: Metadata = {
  title: "Bakso Warisan Nusantara — Demo Warung Bakso | Andalan Tech",
  description:
    "Demo website warung bakso multi-cabang: pencarian 20 cabang resmi ber-AC, menu andalan daging sapi asli kaldu sumsum, kalkulator katering acara, dan order via WhatsApp.",
};

const BaksoDemoPage = () => {
  return (
    <main className="bg-stone-50 text-stone-900">
      <BaksoHero />
      <BaksoBranches />
      <BaksoMenu />
      <BaksoCatering />
      <BaksoReviews />
    </main>
  );
};

export default BaksoDemoPage;
