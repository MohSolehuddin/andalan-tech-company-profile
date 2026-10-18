import { CalendarCheck, Clock, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const HERO_IMG =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=60";

const trust = [
  { icon: CalendarCheck, label: "Buat janji online" },
  { icon: Clock, label: "Buka setiap hari 08.00–20.00" },
  { icon: ShieldCheck, label: "Tenaga medis berlisensi" },
];

export default function KlinikHero() {
  return (
    <section className="relative overflow-hidden bg-teal-950 text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMG}
        alt="Ruang tunggu Klinik Sehat Bersama"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-linear-to-r from-teal-950 via-teal-950/85 to-teal-950/40" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-sm text-teal-200">
            <ShieldCheck className="h-4 w-4" />
            Klinik & Kesehatan Keluarga
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Klinik Sehat Bersama
          </h1>
          <p className="mt-4 text-lg text-teal-50/90">
            Layanan kesehatan terpercaya untuk seluruh keluarga. Buat janji
            dalam hitungan detik, tanpa antre lama.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Klinik Sehat Bersama, saya mau buat janji temu."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-400 px-6 py-3 font-semibold text-teal-950 transition-colors hover:bg-teal-300">
              <CalendarCheck className="h-5 w-5" />
              Buat Janji via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Layanan Kami
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-teal-50/90">
            {trust.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-teal-300" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
