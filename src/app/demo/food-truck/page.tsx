import type { Metadata } from "next";
import FoodTruckHero from "@/components/demo/food-truck/FoodTruckHero";
import FoodTruckMenu from "@/components/demo/food-truck/FoodTruckMenu";
import FoodTruckSchedule from "@/components/demo/food-truck/FoodTruckSchedule";
import FoodTruckEvents from "@/components/demo/food-truck/FoodTruckEvents";
import FoodTruckContact from "@/components/demo/food-truck/FoodTruckContact";

export const metadata: Metadata = {
  title: "Roda Rasa Food Truck & Jasa Boga — Demo Kuliner | Andalan Tech",
  description:
    "Demo website food truck dengan menu andalan, jadwal lokasi, sewa acara, catering, dan pemesanan langsung via WhatsApp.",
};

export default function FoodTruckDemoPage() {
  return (
    <main className="bg-white">
      <FoodTruckHero />
      <FoodTruckMenu />
      <FoodTruckSchedule />
      <FoodTruckEvents />
      <FoodTruckContact />
    </main>
  );
}
