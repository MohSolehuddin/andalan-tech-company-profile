import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, TrendingUp } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const metrics = [
  { label: "Tim Bisnis Aktif", value: "500+" },
  { label: "Waktu Hemat Tiap Pekan", value: "15+ Jam" },
  { label: "Tingkat Kepuasan Klien", value: "99.4%" },
];

const SaasHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
      {/* Background radial & linear gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-950/40 via-slate-950 to-slate-950" />
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Kolom Kiri: Teks & CTA */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300 md:text-sm">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Platform SaaS & Operasional Modern #1
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Otomasi Alur Kerja,{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Tingkatkan Efisiensi
              </span>{" "}
              Tim Bisnis.
            </h1>

            <p className="mt-5 text-base text-slate-300 sm:text-lg">
              KelolaKu menyatukan manajemen proyek, automasi tugas berulang, dan
              pantauan performa keuangan dalam satu dasbor cerdas tanpa instalasi
              rumit.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Halo KelolaKu, saya ingin coba demo gratis aplikasi SaaS ini untuk bisnis saya."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-600 hover:to-cyan-600 hover:shadow-cyan-500/30">
                <MessageSquare className="h-5 w-5" />
                Coba Demo via WhatsApp
              </a>
              <a
                href="#harga"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 font-semibold text-slate-200 transition-colors hover:bg-slate-800">
                Lihat Paket Harga <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800 pt-6">
              {metrics.map((item) => (
                <div key={item.label}>
                  <div className="text-xl font-bold text-cyan-400 sm:text-2xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Mockup UI Dashboard */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-slate-400">
                  dashboard.kelolaku.id
                </span>
              </div>

              {/* Konten mini widget */}
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      Pertumbuhan Bulanan
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">
                      <TrendingUp className="h-3 w-3" /> +32.8%
                    </span>
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">
                    Rp 148.500.000
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-4/5 rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <span className="text-xs text-slate-400">Tugas Selesai</span>
                    <div className="mt-1 text-lg font-bold text-white">142 / 150</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <span className="text-xs text-slate-400">Status Server</span>
                    <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" /> 99.9% Uptime
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-blue-500/30 bg-blue-950/30 p-3 text-xs text-blue-200">
                  <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>AI otomatis menyusun 3 laporan mingguan untuk tim Anda.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasHero;
