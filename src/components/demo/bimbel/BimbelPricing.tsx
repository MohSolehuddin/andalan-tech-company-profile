import { Check, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const plans = [
  {
    name: "Reguler Group",
    price: "Rp 450.000",
    period: "/ bulan",
    desc: "Kelas interaktif kelompok kecil untuk penguatan materi harian sekolah.",
    popular: false,
    features: [
      "Kelas kelompok 6–8 siswa",
      "3x Sesi pertemuan seminggu (90 menit)",
      "Modul materi cetak & ringkasan rumus",
      "Bimbingan pengerjaan PR & tugas",
      "Kuis mingguan & tryout bulanan",
    ],
    waMsg: "Halo Bintang Prestasi, saya ingin mendaftar paket Reguler Group (Rp 450rb/bln).",
  },
  {
    name: "Intensif Juara",
    price: "Rp 750.000",
    period: "/ bulan",
    desc: "Persiapan terarah untuk lonjakan nilai ujian dan target tembus UTBK-SNBT.",
    popular: true,
    features: [
      "Kelas super kecil 4–6 siswa",
      "4x Sesi pertemuan seminggu (100 menit)",
      "Drilling soal TPS, SNBT, & TKA lengkap",
      "Tryout berkala dengan sistem scoring IRT",
      "Laporan evaluasi belajar mingguan ke WA ortu",
      "Sesi konsultasi strategi pemilihan jurusan",
    ],
    waMsg: "Halo Bintang Prestasi, saya ingin mendaftar paket Intensif Juara (Rp 750rb/bln).",
  },
  {
    name: "Privat 1-on-1",
    price: "Rp 1.350.000",
    period: "/ bulan",
    desc: "Pendampingan privat eksklusif dengan kurikulum dan ritme belajar personal.",
    popular: false,
    features: [
      "1 Tutor khusus untuk 1 siswa",
      "Jadwal fleksibel (offline datang ke rumah / online)",
      "3x Pertemuan seminggu (90 menit)",
      "Kurikulum disesuaikan target individu",
      "Konsultasi tanya soal 24/7 via WhatsApp",
      "Laporan perkembangan detail setiap sesi",
    ],
    waMsg: "Halo Bintang Prestasi, saya ingin mendaftar paket Privat 1-on-1 (Rp 1.35jt/bln).",
  },
];

export const BimbelPricing = () => {
  return (
    <section id="paket" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3.5 py-1 text-xs font-semibold text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            Investasi Pendidikan Terbaik
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Pilihan Paket Belajar Transparan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Pilih paket bimbingan yang paling cocok dengan kebutuhan akademik dan gaya belajar siswa.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-shadow ${
                plan.popular
                  ? "border-indigo-600 bg-neutral-950 text-white shadow-sm"
                  : "border-neutral-200 bg-white text-neutral-900 hover:shadow-lg"
              }`}>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-sky-400 to-indigo-500 px-4 py-1 text-xs font-bold tracking-wide text-indigo-950 uppercase shadow-xs">
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
                        className={`h-4 w-4 shrink-0 mt-0.5 ${
                          plan.popular ? "text-sky-400" : "text-indigo-600"
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
                      ? "bg-linear-to-r from-sky-400 to-indigo-400 text-indigo-950 font-bold shadow-sm"
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
};

export default BimbelPricing;
