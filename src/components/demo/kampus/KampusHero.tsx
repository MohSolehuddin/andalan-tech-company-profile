import { Award, GraduationCap, MessageCircle, School } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trust = [
  { icon: Award, label: "Akreditasi Baik Sekali" },
  { icon: School, label: "24 program studi D3 & D4" },
  { icon: GraduationCap, label: "PMB 2026/2027 dibuka" },
];

export default function KampusHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-emerald-900 to-teal-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-200">
            <GraduationCap className="h-4 w-4" />
            Kampus Vokasi &amp; Politeknik
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Politeknik Nusantara
          </h1>
          <p className="mt-4 text-lg text-emerald-50/90">
            Kampus vokasi yang mencetak lulusan siap kerja melalui program D3
            dan D4 berbasis praktik, kemitraan industri, dan sertifikasi
            kompetensi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Politeknik Nusantara, saya mau tanya info PMB."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-emerald-950 transition-colors hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Tanya PMB
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Lihat Program Studi
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
