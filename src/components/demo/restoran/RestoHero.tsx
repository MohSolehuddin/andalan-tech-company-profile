import { MapPin, Star, UtensilsCrossed } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const HERO_IMG =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=60";

export default function RestoHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMG}
        alt="Suasana makanan Rasa Nusantara"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/30" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-300">
            <Star className="h-4 w-4" />
            Rating 4.9 dari 320 ulasan
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Rasa Nusantara
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Masakan rumahan otentik dengan bumbu asli. Pesan langsung, kami antar
            hangat ke meja Anda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Rasa Nusantara, saya mau pesan makanan untuk hari ini."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-amber-400">
              <UtensilsCrossed className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Menu
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-300">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-400" />
              Jl. Merdeka No. 12, Situbondo
            </span>
            <span className="inline-flex items-center gap-2">
              Buka tiap hari 10.00–22.00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
