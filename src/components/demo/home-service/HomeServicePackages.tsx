import { CheckCircle2, MessageCircle, Info } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const packages = [
  {
    name: "Paket Hemat",
    price: "Rp 65.000",
    unit: "per unit AC",
    desc: "Cocok untuk servis rutin satu unit AC.",
    features: ["Cuci indoor & outdoor", "Cek freon", "Garansi 7 hari"],
  },
  {
    name: "Paket Keluarga",
    price: "Rp 175.000",
    unit: "3 unit AC",
    desc: "Hemat untuk rumah dengan beberapa unit AC.",
    features: [
      "Cuci 3 unit AC",
      "Cek kebocoran & freon",
      "Gratis cek 1 keran/saluran",
      "Prioritas jadwal weekend",
    ],
    popular: true,
  },
  {
    name: "Paket Kantor Bulanan",
    price: "Rp 600.000",
    unit: "per bulan",
    desc: "Perawatan rutin kantor dan ruko tanpa repot.",
    features: [
      "Cleaning kantor 4x/bulan",
      "Maintenance 5 unit AC",
      "Laporan kondisi tiap kunjungan",
    ],
  },
];

export default function HomeServicePackages() {
  return (
    <section id="paket" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
            Paket & Harga
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Harga jelas sejak awal, tanpa biaya tersembunyi
          </h2>
          <p className="mt-3 text-neutral-600">
            Butuh cleaning saja atau plumbing? Tarif cleaning rumah mulai Rp
            300.000 — tanyakan lewat WhatsApp untuk rincian cepat.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                item.popular
                  ? "border-cyan-400 bg-cyan-50/60 ring-2 ring-cyan-500/15"
                  : "border-neutral-200 bg-white"
              }`}>
              <h3 className="text-lg font-bold text-neutral-900">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
              <p className="mt-4 text-3xl font-extrabold text-cyan-700">
                {item.price}
              </p>
              <p className="text-xs text-neutral-500">{item.unit}</p>

              <ul className="mt-5 flex-1 space-y-2 text-sm text-neutral-700">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(
                  `Halo ServisPro AC & Home Cleaning, saya mau pesan ${item.name} (${item.price}). Mohon info jadwalnya.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-500">
                <MessageCircle className="h-5 w-5" />
                Pesan via WhatsApp
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 inline-flex items-start gap-2 text-xs text-neutral-500">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-600" />
          Harga dapat menyesuaikan kondisi unit di lokasi. Survei dan estimasi
          awal gratis lewat WhatsApp.
        </p>
      </div>
    </section>
  );
}
