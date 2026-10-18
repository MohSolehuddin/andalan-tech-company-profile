import { Clock, Flame, MapPin, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: Flame, label: "Sambal bawang level 1–5" },
  { icon: MapPin, label: "42 outlet se-Jawa Timur" },
  { icon: Clock, label: "Buka tiap hari 10.00–22.00" },
];

export default function AyamHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-red-700/40 via-neutral-950 to-amber-600/30" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-400/10 px-4 py-1.5 text-sm font-medium text-red-200">
            <Flame className="h-4 w-4" />
            Franchise Ayam Geprek — 42 Outlet
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Ayam Geprek Mantap
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            Geprek krispi dengan sambal bawang nampol level 1–5. Pesan via
            WhatsApp, diantar panas ke rumah atau ambil di outlet terdekat.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Ayam Geprek Mantap, saya mau pesan geprek untuk hari ini."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500">
              <MessageCircle className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
              Lihat Menu Paket
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-red-400" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
