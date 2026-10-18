import { Package, ShieldCheck, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: ShieldCheck, label: "Asuransi barang" },
  { icon: Truck, label: "Armada & driver sendiri" },
  { icon: Package, label: "Packing rapi & aman" },
];

export default function LogistikHero() {
  return (
    <section className="relative overflow-hidden bg-indigo-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/30 via-indigo-950 to-indigo-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1.5 text-sm text-blue-200">
            <Truck className="h-4 w-4" />
            PindahAja Logistik & Ekspedisi
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Pindahan & kirim barang tanpa drama
          </h1>
          <p className="mt-4 text-lg text-blue-50/90">
            Pindahan rumah, kantor, kirim barang, sampai kendaraan — ditangani tim
            profesional dengan estimasi biaya transparan dan barang diasuransikan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo PindahAja Logistik, saya mau minta estimasi biaya pindahan."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-400">
              <Truck className="h-5 w-5" />
              Minta Estimasi via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Layanan
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-50/90">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-blue-300" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
