import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { demoItems } from "@/lib/demo/demos";
import { DEMO_CATEGORIES } from "@/lib/demo/types";
import { DemoHubList } from "@/components/demo-hub/DemoHubList";

export const metadata: Metadata = {
  title: "Demo Website — Andalan Tech",
  description:
    "Kumpulan demo website siap pakai oleh Andalan Tech: restoran, klinik, toko online, dan lainnya.",
};

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="bg-neutral-950 px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-neutral-300">
            <Sparkles className="h-4 w-4 text-amber-400" />
            Demo Website
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Contoh Website Siap Pakai
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Setiap demo di bawah adalah website fungsional yang bisa langsung
            dibuka. Bingung mulai dari mana? Pilih yang paling mirip bisnis
            Anda, kami sesuaikan.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <DemoHubList categories={DEMO_CATEGORIES} items={demoItems} />
      </section>
    </div>
  );
}
