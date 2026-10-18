import { Car, CheckCircle2, KeyRound, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustMetrics = [
  { label: "Armada Lengkap & Terawat" },
  { label: "Lepas Kunci / Dengan Driver" },
  { label: "Booking Mudah via WhatsApp" },
];

export default function RentalHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background ambient gradients without external images */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300">
            <Car className="h-4 w-4" />
            Rental &amp; Sewa Mobil Terpercaya
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Sewa Mobil Andalan
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Sewa mobil harian untuk perjalanan pribadi, dinas, wisata, dan antar tamu
            di Situbondo &amp; sekitarnya. Armada bersih, harga transparan, bisa lepas
            kunci atau dengan driver profesional.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Sewa Mobil Andalan, saya ingin booking sewa mobil.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-400">
              <MessageCircle className="h-5 w-5" />
              Booking via WhatsApp
            </a>
            <a
              href="#armada"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              <KeyRound className="h-5 w-5 text-sky-400" />
              Lihat Armada
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {trustMetrics.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
