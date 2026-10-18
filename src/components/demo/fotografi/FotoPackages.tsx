import { Check } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Package {
  name: string;
  price: string;
  note: string;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    name: "Personal",
    price: "Rp 350rb",
    note: "per sesi",
    features: [
      "Sesi 1 jam di studio",
      "15 foto pilihan diedit",
      "1 fotografer",
      "File siap unggah media sosial",
    ],
  },
  {
    name: "Prewedding",
    price: "Rp 1.750rb",
    note: "per sesi",
    popular: true,
    features: [
      "Sesi 3 jam, 2 lokasi",
      "40 foto pilihan diedit",
      "Fotografer + asisten lighting",
      "Album digital + cetak 10R",
    ],
  },
  {
    name: "Wedding",
    price: "Rp 3.500rb",
    note: "per acara",
    features: [
      "Liputan penuh hari acara",
      "200+ foto diedit",
      "2 fotografer",
      "Album cetak + highlight video",
    ],
  },
];

export default function FotoPackages() {
  return (
    <section id="paket" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-700">
            Paket Harga
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Transparan sejak awal
          </h2>
          <p className="mt-3 text-neutral-600">
            Semua paket sudah termasuk konsultasi konsep dan pengiriman file
            digital. Butuh kebutuhan khusus? Chat kami.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                pkg.popular
                  ? "border-zinc-800 ring-2 ring-zinc-800"
                  : "border-neutral-200"
              }`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
                  Paling Populer
                </span>
              )}
              <h3 className="font-bold text-neutral-900">{pkg.name}</h3>
              <p className="mt-2 text-3xl font-bold text-neutral-900">
                {pkg.price}
                <span className="ml-1 text-sm font-normal text-neutral-500">
                  {pkg.note}
                </span>
              </p>
              <ul className="mt-5 flex-1 space-y-3 text-sm text-neutral-700">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-700" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(
                  `Halo Lumen Studio, saya mau booking Paket ${pkg.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-zinc-900 text-white hover:bg-zinc-700"
                    : "border border-neutral-300 text-neutral-800 hover:border-zinc-500"
                }`}>
                Pilih Paket Ini
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
