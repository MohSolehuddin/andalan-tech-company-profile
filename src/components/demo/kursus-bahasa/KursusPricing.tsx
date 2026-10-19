import { Check } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const plans = [
  {
    name: "Reguler",
    price: "Rp 350.000",
    period: "/ bulan",
    desc: "Kelas kelompok kecil untuk membangun dasar bahasa secara rutin.",
    popular: false,
    features: [
      "Kelas kelompok maksimal 10 siswa",
      "2x pertemuan seminggu (90 menit)",
      "Modul digital & buku latihan",
      "Grup latihan harian WhatsApp",
      "Evaluasi progres bulanan",
    ],
    waMsg:
      "Halo Lingua Kursus Bahasa, saya ingin mendaftar paket Reguler (Rp 350rb/bln).",
  },
  {
    name: "Intensif",
    price: "Rp 650.000",
    period: "/ bulan",
    desc: "Program cepat untuk target percakapan lancar atau persiapan tes.",
    popular: true,
    features: [
      "Kelas super kecil maksimal 6 siswa",
      "3x pertemuan seminggu (120 menit)",
      "Latihan speaking dengan native speaker",
      "Tryout TOEFL/IELTS/HSK berkala",
      "Laporan progres mingguan ke WhatsApp",
      "Konsultasi jadwal & target belajar",
    ],
    waMsg:
      "Halo Lingua Kursus Bahasa, saya ingin mendaftar paket Intensif (Rp 650rb/bln).",
  },
  {
    name: "Privat 1-on-1",
    price: "Rp 1.200.000",
    period: "/ bulan",
    desc: "Pendampingan personal dengan kurikulum sesuai target kamu.",
    popular: false,
    features: [
      "1 tutor khusus untuk 1 siswa",
      "Jadwal bebas (online atau offline)",
      "3x pertemuan seminggu (90 menit)",
      "Materi disesuaikan kebutuhan",
      "Tanya jawab via WhatsApp setiap hari",
    ],
    waMsg:
      "Halo Lingua Kursus Bahasa, saya ingin mendaftar paket Privat 1-on-1 (Rp 1.2jt/bln).",
  },
];

export default function KursusPricing() {
  return (
    <section id="harga" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
            Harga Transparan
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Pilih paket sesuai targetmu
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Semua paket sudah termasuk biaya pendaftaran, modul, dan akses grup
            latihan. Trial pertama gratis.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-xl border p-6 transition-shadow sm:p-8 ${
                plan.popular
                  ? "border-blue-600 bg-neutral-950 text-white shadow-sm"
                  : "border-neutral-200 bg-white text-neutral-900 hover:shadow-lg"
              }`}>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-400 px-4 py-1 text-xs font-bold tracking-wide text-blue-950 uppercase shadow-xs">
                  Paling Diminati
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p
                  className={`mt-1 text-xs sm:text-sm ${
                    plan.popular ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                  {plan.desc}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ${
                      plan.popular ? "text-neutral-400" : "text-neutral-500"
                    }`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-3 text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.popular ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                      <span
                        className={
                          plan.popular ? "text-neutral-200" : "text-neutral-700"
                        }>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-neutral-100/20 pt-6">
                <a
                  href={waLink(plan.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.popular
                      ? "bg-blue-400 font-bold text-blue-950 shadow-sm"
                      : "border border-neutral-300 bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}>
                  Daftar Paket Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
