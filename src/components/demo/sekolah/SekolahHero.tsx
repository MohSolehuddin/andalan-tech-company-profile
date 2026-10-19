import { CalendarCheck, Check, GraduationCap, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trust = [
  { icon: GraduationCap, label: "Akreditasi A" },
  { icon: Check, label: "Kurikulum Merdeka" },
  { icon: CalendarCheck, label: "PPDB 2026/2027 dibuka" },
];

export default function SekolahHero() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-200">
            <GraduationCap className="h-4 w-4" />
            Sekolah &amp; Pendidikan
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            SMA Cendekia Nusantara
          </h1>
          <p className="mt-4 text-lg text-emerald-50/90">
            Membentuk generasi berprestasi, berkarakter, dan siap melanjutkan
            pendidikan ke perguruan tinggi. Penerimaan peserta didik baru tahun
            ajaran 2026/2027 telah dibuka.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo SMA Cendekia Nusantara, saya mau tanya PPDB."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-emerald-950 transition-colors hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Tanya PPDB
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Lihat Program
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-50/90">
            {trust.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-emerald-300" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
