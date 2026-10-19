import { CalendarCheck, Clock, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: CalendarCheck, label: "Booking tanpa antre" },
  { icon: Clock, label: "Buka Senin–Sabtu, 09.00–20.00" },
  { icon: ShieldCheck, label: "Dokter gigi berlisensi" },
];

export default function DokterHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-sky-700/50 via-neutral-950 to-blue-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-200">
            Klinik Gigi &amp; Dokter Gigi
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Klinik Gigi Senyum Sehat
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            Senyum sehat dimulai dari sini. Scaling, tambal, behel, dan
            whitening dengan alat modern dan dokter gigi yang ramah. Booking
            jadwal lewat WhatsApp, datang langsung dilayani.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Klinik Gigi Senyum Sehat, saya mau booking jadwal perawatan gigi."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <CalendarCheck className="h-5 w-5" />
              Booking via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Layanan
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-sky-400" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
