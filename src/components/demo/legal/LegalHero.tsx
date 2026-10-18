import { Scale, ShieldCheck, FileCheck, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustBadges = [
  { icon: ShieldCheck, label: "Advokat Berlisensi PERADI" },
  { icon: FileCheck, label: "Notaris & PPAT Resmi" },
  { icon: Scale, label: "Kerahasiaan Terjamin (NDA)" },
];

export default function LegalHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-slate-800/40 via-slate-950 to-blue-950/60" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200">
            <Scale className="h-4 w-4 text-blue-300" />
            Kantor Hukum, Notaris &amp; Konsultan Bisnis
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Solusi Legalitas &amp; Perlindungan Hukum Bisnis Terpercaya
          </h1>

          <p className="mt-5 text-lg text-slate-300">
            Membantu pengusaha, UMKM, dan korporasi di Jabodetabek mengurus
            pendirian badan usaha, perizinan OSS RBA, perjanjian komersial,
            hingga mitigasi risiko hukum secara transparan dan berlandaskan hukum
            positif.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Pratama & Co, saya ingin konsultasi terkait legalitas dan izin usaha."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Konsultasi via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Lihat Layanan Kami
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {trustBadges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2">
                <badge.icon className="h-4 w-4 text-blue-400" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
