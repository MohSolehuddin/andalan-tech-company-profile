import { BadgeCheck, Banknote, Car, FileCheck2 } from "lucide-react";

const features = [
  {
    icon: FileCheck2,
    title: "Legalitas & Sertifikat Aman",
    desc: "Seluruh properti terverifikasi keaslian SHM, IMB/PBG, dan bebas dari sengketa hukum sebelum dipasarkan.",
  },
  {
    icon: Banknote,
    title: "Pendampingan KPR Bebas Ribet",
    desc: "Bekerjasama dengan bank terkemuka (BSI, Mandiri, BTN, BRI) untuk konsultasi suku bunga dan percepatan ACC berkas.",
  },
  {
    icon: BadgeCheck,
    title: "Transparansi Biaya Sejak Awal",
    desc: "Perhitungan simulasi DP, biaya notaris, BPHTB, dan akad dijelaskan gamblang tanpa ada biaya siluman.",
  },
  {
    icon: Car,
    title: "Layanan Survey Lokasi Gratis",
    desc: "Jadwalkan kunjungan kapan saja sesuai waktu luang Anda, tim kami siap mengantar langsung ke lokasi proyek.",
  },
];

export default function PropertiFeatures() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Keunggulan Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Beli Properti Lebih Tenang &amp; Aman
          </h2>
          <p className="mt-3 text-slate-600">
            Komitmen kami memberikan layanan profesional dan mendampingi Anda hingga serah terima kunci.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
