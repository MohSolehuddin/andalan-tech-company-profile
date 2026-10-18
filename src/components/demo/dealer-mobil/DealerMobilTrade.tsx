import { ArrowRightLeft, BadgeCheck, CarFront, MessageCircle, Wallet } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    title: "Kirim Data Mobil Anda",
    desc: "Foto unit, tahun, kilometer, dan kondisi mesin via WhatsApp untuk penilaian awal gratis.",
  },
  {
    title: "Inspeksi & Penawaran",
    desc: "Tim kami cek langsung kondisi unit, lalu memberi penawaran harga tukar tambah kompetitif.",
  },
  {
    title: "Pilih Unit Pengganti",
    desc: "Harga lama dipotong dari unit baru. Kurangnya bisa dikreditkan dengan DP ringan.",
  },
];

const benefits = [
  { icon: Wallet, label: "Penilaian harga transparan" },
  { icon: BadgeCheck, label: "Bebas biaya inspeksi" },
  { icon: CarFront, label: "Tukar dengan unit baru atau bekas" },
];

export default function DealerMobilTrade() {
  return (
    <section id="tukar-tambah" className="bg-slate-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-400/10 px-3.5 py-1 text-xs font-medium text-red-300">
              <ArrowRightLeft className="h-4 w-4" />
              Layanan Tukar Tambah
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl text-white">
              Mobil Lama Jadi DP Mobil Baru
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Tukar tambah mobil Anda tanpa repot jual sendiri. Cukup 3 langkah dan unit
              pengganti siap dibawa pulang dalam hitungan hari.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <p key={item.label} className="inline-flex items-center gap-3 text-sm text-slate-200">
                  <item.icon className="h-5 w-5 shrink-0 text-red-400" />
                  {item.label}
                </p>
              ))}
            </div>

            <a
              href={waLink("Halo Auto Prima Dealer Mobil, saya ingin tukar tambah mobil saya ke unit di dealer Anda.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600">
              <MessageCircle className="h-5 w-5" />
              Nilai Tukar Tambah via WhatsApp
            </a>
          </div>

          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
