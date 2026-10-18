import { Building2, CheckCircle2, Home, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustMetrics = [
  { label: "150+ Unit Terjual" },
  { label: "100% Legalitas SHM Aman" },
  { label: "Pendampingan KPR s/d ACC" },
];

export default function PropertiHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background ambient gradients without external images */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300">
            <Building2 className="h-4 w-4" />
            Agen Properti &amp; Real Estate Terpercaya
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Griya Andalan Properti
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Temukan hunian idaman dan investasi properti terbaik di Situbondo &amp; sekitarnya.
            Pilihan terlengkap, legalitas terjamin, dan proses pengajuan KPR dibantu sampai tuntas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Griya Andalan Properti, saya sedang mencari hunian idaman.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-400">
              <MessageCircle className="h-5 w-5" />
              Konsultasi Properti
            </a>
            <a
              href="#listing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              <Home className="h-5 w-5 text-teal-400" />
              Lihat Listing
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {trustMetrics.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
