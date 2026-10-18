import { Building, CheckCircle2, KeyRound, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustBadges = [
  { label: "Unit Siap Huni & Terawat" },
  { label: "Bebas Biaya IPL & Admin" },
  { label: "Akses 24 Jam & Keamanan CCTV" },
];

export default function ApartemenHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background ambient gradients without external images */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
            <Building className="h-4 w-4" />
            Hunian Praktis, Nyaman &amp; Strategis
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Huni Apartemen &amp; Kost
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Temukan kenyamanan tinggal dengan pilihan sewa apartemen studio, 2BR,
            hingga kost eksklusif. Fasilitas lengkap, lingkungan kondusif, dan booking
            mudah langsung via WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Huni Apartemen & Kost, saya ingin konsultasi dan tanya ketersediaan unit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-500">
              <MessageCircle className="h-5 w-5" />
              Tanya Ketersediaan Unit
            </a>
            <a
              href="#listing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              <KeyRound className="h-5 w-5 text-indigo-400" />
              Lihat Pilihan Unit
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {trustBadges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
