import { Camera, CalendarCheck, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: Sparkles, label: "Tim fotografer profesional" },
  { icon: Camera, label: "Studio & properti lengkap" },
  { icon: CalendarCheck, label: "Hasil edit siap dalam 7 hari" },
];

export default function FotoHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-zinc-600/30 via-zinc-950 to-neutral-800/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-400/40 bg-zinc-400/10 px-4 py-1.5 text-sm text-zinc-200">
            <Camera className="h-4 w-4" />
            Fotografi & Studio Foto
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Abadikan momen sebelum jadi kenangan
          </h1>
          <p className="mt-4 text-lg text-zinc-200/90">
            Wedding, prewedding, produk, sampai wisuda — tim Lumen Studio
            menangkap setiap detail dengan cahaya dan komposisi terbaik.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 py-3 font-semibold text-zinc-900 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <Camera className="h-5 w-5" />
              Lihat Paket
            </a>
            <a
              href={waLink("Halo Lumen Studio, saya mau booking sesi foto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Booking via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-200/90">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-zinc-400" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
