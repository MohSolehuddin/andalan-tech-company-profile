import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface DesignPackage {
  id: string;
  name: string;
  price: string;
  unit: string;
  desc: string;
  points: string[];
  featured?: boolean;
}

const packages: DesignPackage[] = [
  {
    id: "konsultasi-konsep",
    name: "Konsultasi & Konsep",
    price: "Rp 1.500.000",
    unit: "per ruangan",
    desc: "Cocok untuk Anda yang ingin arahan desain sebelum mulai renovasi.",
    points: [
      "Sesi konsultasi & moodboard",
      "Layout denah alternatif",
      "Rekomendasi material & warna",
    ],
  },
  {
    id: "desain-penuh",
    name: "Desain Penuh",
    price: "Rp 4.500.000",
    unit: "per ruangan",
    desc: "Paket paling populer untuk desain detail siap eksekusi tanpa bingung.",
    points: [
      "Semua fitur Konsultasi & Konsep",
      "Gambar 3D realistic + revisi 2x",
      "Detail gambar kerja (DED)",
      "RAB & estimasi biaya",
    ],
    featured: true,
  },
  {
    id: "desain-pendampingan",
    name: "Desain + Pendampingan",
    price: "Rp 12.000.000",
    unit: "per proyek",
    desc: "Untuk proyek rumah, kantor, atau kafe yang ingin dikawal sampai selesai.",
    points: [
      "Semua fitur Desain Penuh",
      "Kurasi vendor & material",
      "Pendampingan tukang berkala",
      "Laporan progres pekerjaan",
    ],
  },
];

export default function InteriorPackages() {
  return (
    <section id="paket" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
            Paket Desain
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Pilih Paket Sesuai Kebutuhan
          </h2>
          <p className="mt-3 text-slate-600">
            Harga transparan sejak awal, bisa didiskusikan lewat WhatsApp untuk
            proyek dengan kebutuhan khusus.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                item.featured
                  ? "border-rose-500 bg-rose-50/60 shadow-lg"
                  : "border-slate-200 bg-white hover:border-rose-300 hover:shadow-md"
              }`}>
              {item.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white">
                  Terpopuler
                </span>
              )}
              <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                {item.price}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                {item.unit}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-slate-700">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <a
                  href={waLink(
                    `Halo Ruang Interior Studio, saya tertarik dengan paket "${item.name}" (${item.price} ${item.unit}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    item.featured
                      ? "bg-rose-600 text-white hover:bg-rose-500"
                      : "border border-rose-200 bg-white text-rose-700 hover:bg-rose-50"
                  }`}>
                  <MessageCircle className="h-4 w-4" />
                  Tanya Paket Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
