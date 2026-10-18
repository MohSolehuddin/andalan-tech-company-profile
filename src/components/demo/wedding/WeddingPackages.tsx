import { Check } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Package {
  name: string;
  price: string;
  target: string;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    name: "Silver (Intimate)",
    price: "Rp 38.000.000",
    target: "Cocok untuk intimate wedding hingga 200 undangan",
    features: [
      "Dekorasi pelaminan 6 meter & pergola bunga",
      "Catering buffet 200 porsi + 2 food stall pilihan",
      "Rias & busana pengantin (akad & resepsi) + 2 ibu",
      "Dokumentasi foto 1 hari & album cetak 20 halaman",
      "MC akad & resepsi + sound system standar",
      "Tim Wedding Organizer hari-H (4 orang)",
    ],
  },
  {
    name: "Gold (Royal Ballroom)",
    price: "Rp 68.000.000",
    target: "Pilihan favorit untuk resepsi 500 undangan",
    popular: true,
    features: [
      "Dekorasi megah pelaminan 10-12 meter & photo booth 360",
      "Catering buffet 500 porsi + 4 food stall premium",
      "MUA pengantin retouch, busana pengantin + 4 pendamping",
      "Tim foto & sinematik video teaser hari-H + album eksklusif",
      "MC profesional + hiburan live acoustic band",
      "Website undangan digital + buku tamu digital QR",
      "Tim Wedding Organizer full-crew hari-H (6-8 orang)",
    ],
  },
  {
    name: "Platinum (Grand Majesty)",
    price: "Rp 115.000.000",
    target: "Perayaan mewah skala besar 1000+ undangan",
    features: [
      "Dekorasi custom tematik 14+ meter & moving head lighting",
      "Catering buffet 1000 porsi + 6 food stall gourmet",
      "Busana desainer khusus pengantin + perawatan pre-wedding",
      "Foto & video drone, same-day edit video tayang di venue",
      "MC kondang + mini chamber orchestra & sound panggung",
      "Website undangan premium + suvenir eksklusif terkurasi",
      "Tim WO komprehensif 10 personil & pendampingan sejak H-90",
    ],
  },
];

export default function WeddingPackages() {
  return (
    <section id="paket" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
            Paket Pernikahan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilihan Paket Transparan Sesuai Rencana Anda
          </h2>
          <p className="mt-3 text-neutral-600">
            Semua paket dapat disesuaikan (custom) dengan venue pilihan dan preferensi tema keluarga.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all hover:shadow-md ${
                pkg.popular
                  ? "border-fuchsia-600 ring-2 ring-fuchsia-600"
                  : "border-neutral-200"
              }`}>
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-fuchsia-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-xs">
                  Paling Populer
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold text-neutral-900">{pkg.name}</h3>
                <p className="mt-1 text-xs text-neutral-500">{pkg.target}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-neutral-900">
                    {pkg.price}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Sudah Termasuk:
                </p>
                <ul className="mt-4 flex-1 space-y-3 text-sm text-neutral-700">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={waLink(
                    `Halo Mahligai Wedding, saya ingin berkonsultasi mengenai Paket ${pkg.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-fuchsia-600 text-white hover:bg-fuchsia-500"
                      : "border border-neutral-300 text-neutral-800 hover:border-fuchsia-500 hover:text-fuchsia-600"
                  }`}>
                  Pilih Paket {pkg.name.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
