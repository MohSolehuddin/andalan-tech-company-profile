import { Award, Gem, MessageCircle, ShieldCheck, Pencil } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustBadges = [
  { icon: ShieldCheck, label: "Kadar Terjamin & Bersertifikat" },
  { icon: Award, label: "Buyback Harga Transparan" },
  { icon: Pencil, label: "Bisa Custom & Grafir Nama" },
];

export default function TokoEmasHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-amber-600/25 via-neutral-950 to-yellow-500/10" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-sm font-medium text-yellow-300">
            <Gem className="h-4 w-4 text-yellow-400" />
            Toko Emas & Perhiasan Mulia
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Kilau Abadi & Investasi Emas Terpercaya
          </h1>

          <p className="mt-4 text-lg text-neutral-300">
            Koleksi perhiasan emas 17K–24K dengan desain modern elegan, pembaruan
            harga harian terbuka, serta layanan custom cincin langsung lewat
            WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#koleksi"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-yellow-500 to-amber-600 px-6 py-3 font-semibold text-neutral-950 transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500">
              <Gem className="h-4 w-4" />
              Lihat Koleksi
            </a>
            <a
              href={waLink(
                "Halo Emas Mulia Perhiasan, saya ingin konsultasi model dan harga perhiasan."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50">
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              Konsultasi WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-neutral-200">
                <badge.icon className="h-4 w-4 shrink-0 text-yellow-400" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
