import { BadgePercent, Boxes, HeadphonesIcon, Truck } from "lucide-react";

const advantages = [
  {
    icon: Boxes,
    title: "Stok Lengkap & Selalu Siap",
    desc: "Pupuk subsidi & non-subsidi, benih berlabel resmi, pestisida terdaftar, dan perlengkapan tani siap menjelang musim tanam serentak.",
  },
  {
    icon: BadgePercent,
    title: "Harga Grosir & Ramah Petani",
    desc: "Melayani pembelian eceran maupun partai besar untuk kelompok tani (Gapoktan) dengan potongan harga khusus dan transparan.",
  },
  {
    icon: Truck,
    title: "Antar Sampai Sawah & Lahan",
    desc: "Armada pengantaran siap kirim pesanan pupuk sak-sakan dan benih langsung ke titik lahan sawah Anda di wilayah Situbondo.",
  },
  {
    icon: HeadphonesIcon,
    title: "Konsultasi Pertanian Gratis",
    desc: "Bingung gejala wereng atau daun kuning? Konsultasikan masalah tanaman Anda dengan staf berpengalaman kami tanpa biaya tambahan.",
  },
];

export default function TaniWhy() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-green-700">
            Mengapa Memilih Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Mitra Setia Petani Situbondo Menuju Panen Melimpah
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Kami berkomitmen mendampingi petani sejak pengolahan tanah, pemilihan bibit, hingga masa panen tiba.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
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
