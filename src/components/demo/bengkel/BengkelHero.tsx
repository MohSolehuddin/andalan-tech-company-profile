import { Wrench, ShieldCheck, Clock, Calendar } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: ShieldCheck, label: "Garansi servis 14 hari" },
  { icon: Wrench, label: "Mekanik bersertifikasi" },
  { icon: Clock, label: "Pengerjaan tepat waktu" },
];

export default function BengkelHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-red-700/30 via-zinc-950 to-amber-600/20" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-sm text-red-200">
            <Wrench className="h-4 w-4 text-red-400" />
            Bengkel Mobil & Motor Terpercaya
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Performa mesin optimal, perjalanan makin aman
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Layanan servis kendaraan profesional dengan diagnosa akurat, estimasi
            biaya transparan di awal, dan pengerjaan bergaransi resmi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <Calendar className="h-5 w-5" />
              Booking Jadwal Servis
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Lihat Layanan & Biaya
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-red-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
