import { CheckCircle2, Compass, MessageCircle, Plane } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustMetrics = [
  { label: "1.200+ Wisatawan Berangkat" },
  { label: "Guide Lokal Bersertifikat" },
  { label: "Hotel & Transport Terverifikasi" },
];

export default function TravelHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background ambient gradients without external images */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            <Plane className="h-4 w-4" />
            Agen Travel &amp; Wisata Terpercaya
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Jelajah Andalan Travel
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Wujudkan liburan impian ke Bali, Bromo, Lombok, Labuan Bajo, hingga Raja Ampat.
            Itinerary jelas, guide berpengalaman, dan hotel nyaman — Anda tinggal bersiap,
            sisanya kami urus.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Jelajah Andalan Travel, saya mau tanya paket wisata.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400">
              <MessageCircle className="h-5 w-5" />
              Konsultasi Paket Wisata
            </a>
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              <Compass className="h-5 w-5 text-cyan-400" />
              Lihat Paket Wisata
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {trustMetrics.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
