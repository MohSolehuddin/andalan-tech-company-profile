import { CalendarCheck, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: ShieldCheck, label: "Dokter Berlisensi & Bersertifikat" },
  { icon: Sparkles, label: "Teknologi Laser & Medis Mutakhir" },
  { icon: Star, label: "10.000+ Pasien Puas & Terbukti" },
];

export default function SkincareHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background Gradient & Glow Effect (Tailwind v4) */}
      <div className="absolute inset-0 bg-linear-to-br from-fuchsia-950/60 via-neutral-950 to-pink-950/40" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-600/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fuchsia-300">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
            Klinik Estetika &amp; Skincare Medis
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Pancarkan Kilau Sehat Kulit Wajah Anda
          </h1>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg">
            Glow Aesthetic Clinic menghadirkan perawatan estetika medis modern
            yang dipersonalisasi oleh dokter profesional. Kulit cerah, kenyal,
            dan bercahaya bebas masalah.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Glow Aesthetic Clinic, saya ingin booking jadwal treatment."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-fuchsia-600 to-pink-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:from-fuchsia-500 hover:to-pink-500 hover:shadow-fuchsia-500/40">
              <CalendarCheck className="h-5 w-5" />
              Booking via WhatsApp
            </a>
            <a
              href={waLink(
                "Halo Dokter Glow Aesthetic Clinic, saya ingin konsultasi seputar kondisi kulit wajah saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/10">
              <MessageCircle className="h-5 w-5 text-fuchsia-400" />
              Konsultasi Dokter
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-neutral-300 sm:text-sm">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-fuchsia-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
