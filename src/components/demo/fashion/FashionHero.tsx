import { Shirt, Sparkles, Truck, RefreshCcw } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: Truck, label: "Gratis ongkir min. Rp 250.000" },
  { icon: RefreshCcw, label: "Tukar ukuran 7 hari" },
  { icon: Sparkles, label: "Bahan premium lokal" },
];

export default function FashionHero() {
  return (
    <section className="relative overflow-hidden bg-violet-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-violet-600/30 via-violet-950 to-purple-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-400/10 px-4 py-1.5 text-sm text-violet-200">
            <Shirt className="h-4 w-4" />
            Fashion &amp; Distro Lokal
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Gaya lokal, kualitas distro
          </h1>
          <p className="mt-4 text-lg text-violet-50/90">
            Katalog baju, jaket, dan aksesoris dengan ukuran lengkap. Pesan
            langsung lewat WhatsApp, tanpa ribet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-400">
              <Shirt className="h-5 w-5" />
              Lihat Katalog
            </a>
            <a
              href={waLink("Halo Distro Style Nusantara, saya mau pesan baju.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Order via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-violet-50/90">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-violet-300" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
