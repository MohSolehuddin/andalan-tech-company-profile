import type { Metadata } from "next";
import ApartemenHero from "@/components/demo/sewa-apartemen/ApartemenHero";
import ApartemenListings from "@/components/demo/sewa-apartemen/ApartemenListings";
import ApartemenFacilities from "@/components/demo/sewa-apartemen/ApartemenFacilities";
import ApartemenTouringBooking from "@/components/demo/sewa-apartemen/ApartemenTouringBooking";

export const metadata: Metadata = {
  title: "Huni Apartemen & Kost — Demo Sewa Apartemen & Kost | Andalan Tech",
};

export default function SewaApartemenPage() {
  return (
    <main className="bg-white">
      <ApartemenHero />
      <ApartemenListings />
      <ApartemenFacilities />
      <ApartemenTouringBooking />
    </main>
  );
}
