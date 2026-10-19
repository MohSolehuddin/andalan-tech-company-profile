import { Award, BookOpen, CalendarCheck, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trust = [
  { icon: Award, label: "Sanad Mu'tabar & Akreditasi A" },
  { icon: BookOpen, label: "Tahfidz & Kitab Kuning" },
  { icon: CalendarCheck, label: "PPDB 2026/2027 dibuka" },
];

export default function PesantrenHero() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-sm text-teal-200">
            Pondok Pesantren • Situbondo Kota Santri
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Pondok Pesantren Raudhatul Ulum Situbondo
          </h1>
          <p className="mt-4 text-lg text-emerald-100/90 leading-relaxed">
            Menjaga sanad keilmuan turats kitab kuning, mencetak para penghafal
            Al-Qur&apos;an bersanad, dan membekali santri dengan kurikulum madrasah
            formal berkualitas. Pendaftaran santri baru tahun ajaran 2026/2027
            telah dibuka.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Pondok Pesantren Raudhatul Ulum Situbondo, saya mau tanya info pendaftaran santri baru (PPDB)."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-400 px-6 py-3 font-semibold text-emerald-950 transition-colors hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Tanya PPDB Santri Baru
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Lihat Program Santri
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-100/80">
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
