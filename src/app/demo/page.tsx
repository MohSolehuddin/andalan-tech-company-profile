import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { demoItems } from "@/lib/demo/demos";

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demoItems.map((demo) => (
            <Link
              key={demo.slug}
              href={`/demo/${demo.slug}`}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${demo.ring}`}>
              <div
                className={`flex h-40 items-center justify-center bg-linear-to-br ${demo.accentBg}`}>
                <span className="text-6xl" aria-hidden="true">
                  {demo.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {demo.niche}
                </div>
                <h2 className="mt-1 text-xl font-bold text-neutral-900">
                  {demo.name}
                </h2>
                <p className="mt-2 flex-1 text-sm text-neutral-600">
                  {demo.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {demo.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                      {h}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 transition-all group-hover:gap-2.5">
                  Lihat demo <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
