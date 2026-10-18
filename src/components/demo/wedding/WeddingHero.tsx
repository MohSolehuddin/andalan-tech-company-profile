import { Calendar, Clock, Heart, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Sparkles, label: "500+ Pesta Pernikahan Sukses" },
  { icon: Heart, label: "Vendor Rekanan Terkurasi & Terpercaya" },
  { icon: Calendar, label: "Pendampingan Penuh Hari-H" },
];

export default function WeddingHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-linear-to-br from-fuchsia-950/70 via-neutral-950 to-rose-950/60" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300">
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            Wedding Organizer & Event Planner Profesional
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Wujudkan Momen Sakral Impian Tanpa Khawatir & Ribet
          </h1>
          <p className="mt-4 text-lg text-rose-100/90">
            Mulai dari konsep dekorasi memukau, catering bercita rasa tinggi, busana pengantin elegan, hingga koordinasi hari-H sempurna bersama tim berpengalaman.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Mahligai Wedding, saya ingin konsultasi gratis untuk rencana pernikahan kami."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-fuchsia-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-fuchsia-500">
              <MessageCircle className="h-5 w-5" />
              Konsultasi Gratis via WhatsApp
            </a>
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Paket & Harga
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-fuchsia-100/90">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-fuchsia-300" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-rose-200/80">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-fuchsia-400" />
              Jl. Melati Indah No. 88, Kebayoran Baru, Jakarta Selatan
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-fuchsia-400" />
              Konsultasi Setiap Hari (09.00–21.00 WIB)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
