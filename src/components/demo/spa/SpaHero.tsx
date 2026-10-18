import { Clock, Leaf, MapPin, MessageCircle, Sparkles, Star } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trust = [
  { icon: Leaf, label: "Terapis bersertifikat & ramah" },
  { icon: Clock, label: "Buka setiap hari 09.00–21.00" },
  { icon: Star, label: "Ruang privat, tenang & higienis" },
];

export default function SpaHero() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-emerald-950 via-emerald-950/90 to-lime-950/70" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 text-sm font-medium text-lime-200">
            <Sparkles className="h-4 w-4" />
            Spa, Massage & Reflexology Keluarga
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Ayu Spa &amp; Reflexology
          </h1>
          <p className="mt-4 text-lg text-emerald-50/90">
            Lepaskan lelah dengan pijat tradisional dan perawatan tubuh alami.
            Booking mudah lewat WhatsApp, tanpa antre dan tanpa ribet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Ayu Spa & Reflexology, saya mau booking jadwal massage."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 font-semibold text-emerald-950 transition-colors hover:bg-lime-300">
              <MessageCircle className="h-5 w-5" />
              Booking via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Layanan &amp; Harga
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-50/90">
            {trust.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-lime-300" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-emerald-100/80">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-lime-400" />
              Jl. Kenanga No. 27, Situbondo, Jawa Timur
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-lime-400" />
              Reservasi terakhir 20.00 WIB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
