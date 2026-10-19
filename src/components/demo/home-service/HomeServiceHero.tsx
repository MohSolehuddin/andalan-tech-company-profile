import { CalendarCheck, Check, ShieldCheck, Wind } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: ShieldCheck, label: "Teknisi berpengalaman" },
  { icon: CalendarCheck, label: "Jadwal fleksibel, bisa weekend" },
  { icon: Check, label: "Alat & cairan pembersih lengkap" },
];

export default function HomeServiceHero() {
  return (
    <section className="relative overflow-hidden bg-sky-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-sky-600/30 via-sky-950 to-sky-800/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5 text-sm text-sky-200">
            <Wind className="h-4 w-4" />
            Servis AC & Home Cleaning
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            AC dingin, rumah bersih, tinggal duduk santai
          </h1>
          <p className="mt-4 text-lg text-sky-100/90">
            Cuci AC, bongkar-pasang, cleaning rumah & kantor, sampai plumbing —
            booking lewat WhatsApp dan teknisi kami datang sesuai jadwal Anda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <Wind className="h-5 w-5" />
              Lihat Layanan
            </a>
            <a
              href={waLink(
                "Halo ServisPro AC & Home Cleaning, saya mau booking jadwal servis."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Booking via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-sky-100/90">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-sky-300" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
