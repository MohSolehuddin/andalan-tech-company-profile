import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const paket = [
  {
    name: "Paket Hemat",
    price: "Rp 95.000",
    desc: "Cukup untuk kebutuhan 3–4 hari.",
    isi: ["Beras 5 kg", "Gula 1 kg", "Minyak 1 liter", "Mie instan 5 pcs"],
    best: false,
  },
  {
    name: "Paket Keluarga",
    price: "Rp 185.000",
    desc: "Paling laris untuk keluarga kecil.",
    isi: [
      "Beras 5 kg",
      "Gula 1 kg",
      "Minyak 2 liter",
      "Telur 1 kg",
      "Mie instan 1 dus",
    ],
    best: true,
  },
  {
    name: "Paket Warung",
    price: "Rp 320.000",
    desc: "Stok awal untuk warung & kios.",
    isi: [
      "Beras 10 kg",
      "Gula 2 kg",
      "Minyak 4 liter",
      "Mie instan 2 dus",
      "Kecap 2 botol",
    ],
    best: false,
  },
];

export default function KelontongPaket() {
  return (
    <section id="paket" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-700">
            Paket Belanja
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Belanja sekali klik, lebih hemat
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paket.map((item) => (
            <div
              key={item.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                item.best
                  ? "border-lime-400 bg-lime-50 shadow-md"
                  : "border-neutral-200 bg-white"
              }`}>
              {item.best && (
                <span className="mb-3 self-start rounded-full bg-lime-600 px-3 py-1 text-xs font-semibold text-white">
                  Paling Laris
                </span>
              )}
              <h3 className="text-lg font-bold text-neutral-900">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
              <p className="mt-4 text-3xl font-bold text-lime-700">
                {item.price}
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-neutral-700">
                {item.isi.map((isi) => (
                  <li key={isi} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-600" />
                    {isi}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(
                  `Halo Kelontong Sembako Murah, saya mau pesan ${item.name} (${item.price}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  item.best
                    ? "bg-lime-600 text-white hover:bg-lime-500 focus-visible:ring-lime-600"
                    : "border border-neutral-300 text-neutral-900 hover:border-lime-400 focus-visible:ring-neutral-900"
                }`}>
                <MessageCircle className="h-4 w-4" />
                Pesan Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
