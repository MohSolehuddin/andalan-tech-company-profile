import type { Metadata } from "next";
import HotelHero from "@/components/demo/hotel/HotelHero";
import HotelRooms from "@/components/demo/hotel/HotelRooms";
import HotelFacilities from "@/components/demo/hotel/HotelFacilities";
import HotelLocation from "@/components/demo/hotel/HotelLocation";

export const metadata: Metadata = {
  title: "Hotel Nyaman Stay — Demo Hotel & Penginapan | Andalan Tech",
};

export default function HotelDemoPage() {
  return (
    <main className="bg-white">
      <HotelHero />
      <HotelRooms />
      <HotelFacilities />
      <HotelLocation />
    </main>
  );
}
