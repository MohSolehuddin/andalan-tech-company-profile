import { Award, CheckCircle2, MessageCircle, Moon, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustMetrics = [
  { label: "Izin Resmi Kemenag RI (PPIU A)" },
  { label: "Hotel Dekat Pelataran Masjid" },
  { label: "Tiket Pesawat Direct Confirmed" },
  { label: "Muthawif Berpengalaman Sesuai Sunnah" },
];

export default function UmrohHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background ambient gradients */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-950/50 via-slate-950 to-green-950/40" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald-600/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-green-500/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 md:text-sm">
            <Award className="h-4 w-4 text-emerald-400" />
            Izin Resmi Kemenag RI PPIU No. 412/2021 · Terakreditasi A
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Barokah Umroh &amp; Haji
          </h1>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Wujudkan rindu ke Baitullah dengan bimbingan ibadah khusyuk sesuai tuntunan sunnah,
            fasilitas hotel bintang dekat pelataran Masjidil Haram &amp; Nabawi, serta kepastian jadwal keberangkatan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Halo Barokah Umroh & Haji, saya ingin konsultasi pendaftaran paket umroh.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-500">
              <MessageCircle className="h-5 w-5" />
              Konsultasi WhatsApp
            </a>
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              <Moon className="h-5 w-5 text-emerald-400" />
              Lihat Paket Pilihan
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-sm text-slate-300">
            {trustMetrics.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
