import type { Metadata } from "next";
import HomeServiceHero from "@/components/demo/home-service/HomeServiceHero";
import HomeServiceServices from "@/components/demo/home-service/HomeServiceServices";
import HomeServicePackages from "@/components/demo/home-service/HomeServicePackages";
import HomeServiceWhy from "@/components/demo/home-service/HomeServiceWhy";
import HomeServiceBooking from "@/components/demo/home-service/HomeServiceBooking";

export const metadata: Metadata = {
  title:
    "ServisPro AC & Home Cleaning — Demo Servis AC & Home Cleaning | Andalan Tech",
};

export default function HomeServiceDemoPage() {
  return (
    <main className="bg-white">
      <HomeServiceHero />
      <HomeServiceServices />
      <HomeServicePackages />
      <HomeServiceWhy />
      <HomeServiceBooking />
    </main>
  );
}
