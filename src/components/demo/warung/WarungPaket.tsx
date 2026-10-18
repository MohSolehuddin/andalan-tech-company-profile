import { Check, PackageOpen, Star } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Paket {
  name: string;
  price: string;
  desc: string;
  items: string[];
  popular?: boolean;
}

const paketList: Paket[] = [
  {
    name: "Paket Hemat",
    price: "Rp 15.000",
    desc: "Cukup untuk makan siang cepat di hari kerja.",
    items: [
      "Nasi putih porsi sedang",
      "1 lauk utama pilihan",
      "Sayur tumis hari ini",
      "Sambal & kerupuk",
    ],
  },
  {
    name: "Paket Komplit",
    price: "Rp 22.000",
    desc: "Paling sering dipesan pelanggan setia warung.",
    items: [
      "Nasi putih porsi besar",
      "2 lauk utama pilihan",
      "Sayur + tempe orek",
      "Sambal dadakan & kerupuk",
      "Es teh manis",
    ],
    popular: true,
  },
  {
    name: "Paket Jumbo",
    price: "Rp 28.000",
    desc: "Porsi ekstra untuk yang kerja berat atau berbagi.",
    items: [
      "Nasi putih tambah (unlimited)",
      "3 lauk utama pilihan",
      "Sayur + tempe orek",
      "Sambal dadakan & kerupuk",
      "Es teh manis jumbo",
    ],
  },
];

export default function WarungPaket() {
  return (
    <section id="paket" className="bg-stone-100/70 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-red-600">
            <PackageOpen className="h-4 w-4" />
            Paket Nasi Lengkap
          </span>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Satu Harga, Kenyang Tanpa Mikir
          </h2>
          <p className="mt-3 text-stone-600">
            Semua paket sudah termasuk nasi, lauk, sayur, dan sambal. Tinggal
            sebut nama paketnya saat order.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paketList.map((paket) => (
            <div
              key={paket.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-xs transition-shadow hover:shadow-md ${
                paket.popular ? "border-red-400 ring-1 ring-red-400" : "border-stone-200"
              }`}>
              {paket.popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3 fill-current" />
                  Paling Laris
                </span>
              )}

              <h3 className="text-xl font-bold text-stone-900">{paket.name}</h3>
              <p className="mt-1 text-sm text-stone-600">{paket.desc}</p>
              <p className="mt-4 text-3xl font-bold text-red-600">
                {paket.price}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-stone-200 pt-5 text-sm text-stone-700">
                {paket.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(
                  `Halo Warung Sederhana Jaya, saya mau pesan ${paket.name} (${paket.price}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  paket.popular
                    ? "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-600"
                    : "bg-stone-900 text-white hover:bg-red-600 focus-visible:ring-stone-900"
                }`}>
                Pesan {paket.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
