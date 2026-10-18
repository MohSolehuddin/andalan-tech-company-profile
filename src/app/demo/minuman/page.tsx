import type { Metadata } from "next";
import MinumanHero from "@/components/demo/minuman/MinumanHero";
import MinumanMenu from "@/components/demo/minuman/MinumanMenu";
import MinumanTopping from "@/components/demo/minuman/MinumanTopping";
import MinumanPaket from "@/components/demo/minuman/MinumanPaket";
import MinumanContact from "@/components/demo/minuman/MinumanContact";

export const metadata: Metadata = {
  title: "Segar Boba & Juice — Demo Minuman | Andalan Tech",
  description:
    "Demo website juice bar & boba: menu boba, jus buah segar, smoothie, pilihan topping kustom, paket bundling, dan pemesanan via WhatsApp.",
};

export default function MinumanDemoPage() {
  return (
    <main className="bg-white">
      <MinumanHero />
      <MinumanMenu />
      <MinumanTopping />
      <MinumanPaket />
      <MinumanContact />
    </main>
  );
}
