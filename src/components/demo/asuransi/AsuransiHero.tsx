import { ShieldCheck, HeartHandshake, MessagesSquare } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: ShieldCheck, label: "Klaim didampingi penuh" },
  { icon: HeartHandshake, label: "Konsultasi gratis" },
  { icon: MessagesSquare, label: "Agen resmi berlisensi" },
];

export default function AsuransiHero() {
  return (
    <section className="relative overflow-hidden bg-blue-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-blue-700/30 via-blue-950 to-teal-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-sm text-teal-200">
            <ShieldCheck className="h-4 w-4" />
            Agen Asuransi Resmi &amp; Berlisensi
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Lindungi keluarga dengan proteksi yang tepat
          </h1>
          <p className="mt-4 text-lg text-blue-50/90">
            Dari asuransi kesehatan sampai pendidikan anak, kami bantu pilih
            proteksi sesuai kebutuhan dan anggaran Anda — konsultasi gratis,
            klaim dibantu sampai dana cair.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-400">
              <ShieldCheck className="h-5 w-5" />
              Lihat Produk
            </a>
            <a
              href={waLink("Halo Amanah Proteksi, saya mau konsultasi asuransi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Konsultasi via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-50/90">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-teal-300" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
