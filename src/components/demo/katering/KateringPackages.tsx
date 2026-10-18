import { Check } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Package {
  id: string;
  name: string;
  category: string;
  price: string;
  unit: string;
  minOrder: string;
  popular?: boolean;
  features: string[];
  waMessage: string;
}

const packages: Package[] = [
  {
    id: "harian",
    name: "Katering Harian",
    category: "Rumah & Kantor",
    price: "Rp 25.000",
    unit: "/ porsi",
    minOrder: "Min. order 5 porsi / hari",
    features: [
      "Nasi putih pulen / merah",
      "1 lauk utama (ayam/daging/ikan)",
      "1 lauk pendamping & sayur segar",
      "Sambal, kerupuk & buah potong",
      "Jadwal rotasi menu variatif tiap hari",
    ],
    waMessage:
      "Halo Berkah Rasa Catering, saya mau pesan Paket Katering Harian untuk 10 porsi.",
  },
  {
    id: "nasi-box",
    name: "Nasi Box Acara",
    category: "Seminar & Syukuran",
    price: "Rp 28.000",
    unit: "/ box",
    minOrder: "Min. order 20 box",
    popular: true,
    features: [
      "Pilihan nasi (putih / kuning / uduk)",
      "Lauk utama olahan ayam atau daging",
      "Pelengkap telur, mie/bihun & sambal",
      "Packaging box bento higienis & tebal",
      "Air mineral cup, sendok & tisu",
    ],
    waMessage:
      "Halo Berkah Rasa Catering, saya mau pesan Paket Nasi Box Acara untuk 30 box.",
  },
  {
    id: "prasmanan",
    name: "Prasmanan / Wedding",
    category: "Pesta & Gathering",
    price: "Rp 45.000",
    unit: "/ porsi",
    minOrder: "Min. order 50 porsi",
    features: [
      "Lengkap sop pembuka & es buah",
      "2 pilihan lauk utama + 1 lauk pelengkap",
      "Sayuran tumis / kuah premium",
      "Peralatan saji chafing dish & piring keramik",
      "Tenaga pramusaji standby selama acara",
    ],
    waMessage:
      "Halo Berkah Rasa Catering, saya mau pesan Paket Prasmanan Acara untuk 50 porsi.",
  },
  {
    id: "snack-box",
    name: "Snack Box Rapat",
    category: "Meeting & Coffee Break",
    price: "Rp 15.000",
    unit: "/ box",
    minOrder: "Min. order 25 box",
    features: [
      "Kombinasi 3 macam kue (2 asin, 1 manis)",
      "Bahan segar buatan hari yang sama",
      "Air mineral botol 330ml",
      "Kotak kemasan elegan & tisu",
      "Bisa request kue basah tradisional / modern",
    ],
    waMessage:
      "Halo Berkah Rasa Catering, saya mau pesan Paket Snack Box Rapat untuk 40 box.",
  },
];

export default function KateringPackages() {
  return (
    <section id="paket" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Pilihan Paket Katering
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Harga Terjangkau, Kualitas Istimewa
          </h2>
          <p className="mt-3 text-neutral-600">
            Dipersiapkan oleh koki berpengalaman dengan bahan baku segar tiap
            subuh. Sesuaikan porsi dan menu dengan kebutuhan acara Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                pkg.popular
                  ? "border-amber-500 ring-2 ring-amber-500"
                  : "border-neutral-200"
              }`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-neutral-950">
                  Paling Diminati
                </span>
              )}
              <span className="text-xs font-medium text-amber-700">
                {pkg.category}
              </span>
              <h3 className="mt-1 text-lg font-bold text-neutral-900">
                {pkg.name}
              </h3>
              <div className="mt-3">
                <span className="text-2xl font-bold text-neutral-900">
                  {pkg.price}
                </span>
                <span className="text-xs text-neutral-500">{pkg.unit}</span>
              </div>
              <p className="mt-1 text-xs text-amber-600 font-medium">
                {pkg.minOrder}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5 border-t border-neutral-100 pt-4 text-xs text-neutral-700">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(pkg.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-amber-500 text-neutral-950 hover:bg-amber-400"
                    : "border border-amber-300 text-amber-900 hover:bg-amber-50"
                }`}>
                Pesan Paket Ini
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
