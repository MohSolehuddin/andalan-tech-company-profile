import {
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Car,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const products = [
  {
    icon: HeartPulse,
    title: "Asuransi Kesehatan",
    desc: "Rawat inap, rawat jalan, dan cashless di 1.200+ rumah sakit rekanan.",
    price: "Rp 150rb",
    coverage: "Manfaat s.d. Rp 500 juta/tahun",
  },
  {
    icon: ShieldCheck,
    title: "Asuransi Jiwa",
    desc: "Santunan untuk ahli waris agar keluarga tetap aman secara finansial.",
    price: "Rp 100rb",
    coverage: "Santunan s.d. Rp 1 miliar",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan Anak",
    desc: "Dana pendidikan terencana plus proteksi untuk orang tua.",
    price: "Rp 250rb",
    coverage: "Dana s.d. Rp 300 juta saat kuliah",
  },
  {
    icon: Car,
    title: "Asuransi Kendaraan",
    desc: "Perlindungan all risk untuk mobil dan motor kesayangan Anda.",
    price: "Rp 180rb",
    coverage: "Ganti rugi s.d. 100% nilai kendaraan",
  },
];

export default function AsuransiProducts() {
  return (
    <section id="produk" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Produk
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilih proteksi sesuai kebutuhan
          </h2>
          <p className="mt-3 text-neutral-600">
            Ilustrasi premi di bawah adalah contoh. Hubungi kami untuk simulasi
            sesuai usia, profil, dan anggaran Anda.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <product.icon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">
                {product.title}
              </h3>
              <p className="mt-1 flex-1 text-sm text-neutral-600">
                {product.desc}
              </p>
              <div className="mt-4 rounded-xl bg-neutral-50 p-3">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Premi mulai
                </p>
                <p className="text-xl font-bold text-blue-700">
                  {product.price}
                  <span className="text-sm font-medium text-neutral-500">
                    /bulan
                  </span>
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {product.coverage}
                </p>
              </div>
              <a
                href={waLink(
                  `Halo Amanah Proteksi, saya tertarik dengan ${product.title}. Bisa minta ilustrasi preminya?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700">
                Minta Ilustrasi
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
