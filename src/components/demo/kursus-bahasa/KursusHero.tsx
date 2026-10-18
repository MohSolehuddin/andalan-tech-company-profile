import {
  BadgeCheck,
  Languages,
  MessageCircle,
  MonitorSmartphone,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trust = [
  { icon: Languages, label: "Inggris, Arab & Mandarin" },
  { icon: MonitorSmartphone, label: "Kelas online & offline" },
  { icon: BadgeCheck, label: "Tutor bersertifikat" },
];

export default function KursusHero() {
  return (
    <section className="relative overflow-hidden bg-blue-950 text-white">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1.5 text-sm text-blue-200">
            <Languages className="h-4 w-4" />
            Kursus Bahasa Asing
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Lingua Kursus Bahasa
          </h1>
          <p className="mt-4 text-lg text-blue-50/90">
            Kuasai bahasa Inggris, Arab, dan Mandarin dari level dasar sampai
            mahir. Pilih kelas online atau offline, lalu daftar trial gratis
            lewat WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Lingua Kursus Bahasa, saya mau daftar trial gratis."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-blue-950 transition-colors hover:bg-cyan-300">
              <MessageCircle className="h-5 w-5" />
              Daftar Trial via WhatsApp
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Program
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-50/90">
            {trust.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-cyan-300" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
