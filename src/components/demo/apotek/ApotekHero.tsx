import { MessageCircle, Pill, ShieldCheck, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trust = [
  { icon: ShieldCheck, label: "100% obat asli & berizin BPOM" },
  { icon: Truck, label: "Antar cepat area Jabodetabek" },
  { icon: MessageCircle, label: "Apoteker siaga 07.00–23.00" },
];

export default function ApotekHero() {
  return (
    <section className="relative overflow-hidden bg-teal-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-teal-600/30 via-teal-950 to-emerald-700/20" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-sm text-teal-200">
            <Pill className="h-4 w-4 text-teal-300" />
            Apotek &amp; Farmasi Terpercaya
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Obat asli, antar cepat, apoteker siap bantu
          </h1>
          <p className="mt-4 text-lg text-teal-50/90">
            Belanja obat, vitamin, dan alat kesehatan tanpa keluar rumah. Tanya
            dosis langsung ke apoteker kami lewat WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Apotek Sehatra, saya mau tanya pesanan obat."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-400 px-6 py-3 font-semibold text-teal-950 transition-colors hover:bg-teal-300">
              <MessageCircle className="h-5 w-5" />
              Tanya Pesan via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Lihat Layanan
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-teal-50/90">
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
