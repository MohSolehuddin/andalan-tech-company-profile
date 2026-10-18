import type { Metadata } from "next";
import RentalHero from "@/components/demo/rental-mobil/RentalHero";
import RentalFleet from "@/components/demo/rental-mobil/RentalFleet";
import RentalServices from "@/components/demo/rental-mobil/RentalServices";
import RentalTerms from "@/components/demo/rental-mobil/RentalTerms";
import RentalBooking from "@/components/demo/rental-mobil/RentalBooking";

export const metadata: Metadata = {
  title: "Sewa Mobil Andalan — Demo Rental Mobil | Andalan Tech",
};

export default function RentalMobilDemoPage() {
  return (
    <main className="bg-white">
      <RentalHero />
      <RentalFleet />
      <RentalServices />
      <RentalTerms />
      <RentalBooking />
    </main>
  );
}
