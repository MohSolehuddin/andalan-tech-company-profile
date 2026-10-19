import { Gift, MapPin, ShieldCheck, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Truck, label: "Kirim Aman ke Jabodetabek" },
  { icon: ShieldCheck, label: "Garansi Fresh & Higienis" },
  { icon: Gift, label: "Kemasan Besek & Hampers Cantik" },
];

export default function OlehHero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      {/* Background atmospheric gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-900/40 via-orange-950/60 to-stone-950" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300">
              Otentik dari Pesisir & Pegunungan Situbondo
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Oleh-Oleh Khas Situbondo
            </h1>
            <p className="mt-4 text-lg text-stone-300">
              Cita rasa legendaris Jawa Timur: dari legitnya tape manis besek,
              renyahnya kerupuk ikan pesisir, hingga terasi udang rebon asli.
              Langsung dikemas segar dan siap dikirim ke Jabodetabek.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Halo Oleh-Oleh Khas Situbondo, saya ingin pesan oleh-oleh khas daerah."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-stone-950 transition-colors hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500">
                <Gift className="h-5 w-5" />
                Pesan via WhatsApp
              </a>
              <a
                href="#katalog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
                Lihat Katalog Produk
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-300">
              {highlights.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-orange-400" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-xl border border-orange-500/30 bg-linear-to-b from-stone-900/90 to-stone-950/90 p-8 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                  Toko Resmi Situbondo
                </span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                  Ready Kirim Hari Ini
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-amber-600 text-3xl shadow-lg">
                  🎁
                </div>
                <div>
                  <h3 className="font-bold text-white">Paket Best Seller</h3>
                  <p className="text-sm text-stone-400">
                    Tape Besek + Terasi Udang + Kerupuk Ikan
                  </p>
                  <p className="mt-1 text-sm font-semibold text-orange-400">
                    Spesial Rp 95.000 / paket
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white/5 p-4 text-xs text-stone-300">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                  <span>
                    Outlet: Jl. Raya Pantura No. 88, Panarukan, Situbondo.
                    Melayani kirim kilat 1–2 hari sampai Jabodetabek via Paxel /
                    JNE YES.
                  </span>
                </div>
              </div>

              <a
                href={waLink(
                  "Halo, saya mau pesan Paket Best Seller (Tape + Terasi + Kerupuk)."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 py-3 text-sm font-semibold text-stone-950 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500">
                Ambil Paket Best Seller Ini
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
