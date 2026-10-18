import { Check, Gift, HeartHandshake } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface HamperPackage {
  id: string;
  name: string;
  price: string;
  popular?: boolean;
  tagline: string;
  items: string[];
  packaging: string;
  waText: string;
}

const hampers: HamperPackage[] = [
  {
    id: "pesisir",
    name: "Paket Sedap Pesisir",
    price: "Rp 125.000",
    tagline: "Koleksi bumbu & cemilan gurih khas pesisir Panarukan",
    items: [
      "2 Kotak Terasi Udang Rebon Besuki",
      "2 Bungkus Kerupuk Ikan Tenggiri Segar",
      "1 Toples Rengginang Lorjuk Spesial",
      "1 Botol Petis Ikan Tongkol Madura-Situbondo",
    ],
    packaging: "Tas Anyaman Pandan Ramah Lingkungan + Kartu Ucapan",
    waText:
      "Halo, saya tertarik memesan Paket Sedap Pesisir (Rp 125.000) untuk dikirim ke alamat saya.",
  },
  {
    id: "manis",
    name: "Paket Manis Legit Situbondo",
    price: "Rp 145.000",
    popular: true,
    tagline: "Paket manis favorit keluarga & oleh-oleh kantor",
    items: [
      "2 Besek Tape Singkong Manis Original",
      "2 Pack Keripik Mangga Arumanis Renyah",
      "1 Pack Dodol Mangga Legit Situbondo",
      "1 Pack Rengginang Manis Gula Merah",
    ],
    packaging: "Box Besek Bambu Eksklusif + Pita Satin + Kartu Ucapan",
    waText:
      "Halo, saya ingin pesan Paket Manis Legit Situbondo (Rp 145.000). Mohon info ketersediaan stok & ongkir.",
  },
  {
    id: "primadona",
    name: "Paket Hampers Mahkota Ijen",
    price: "Rp 235.000",
    tagline: "Kombinasi lengkap kopi premium & oleh-oleh ikonik",
    items: [
      "1 Pouch Kopi Robusta Kayumas Ijen (200 gr)",
      "2 Besek Tape Singkong Manis Mentega",
      "2 Kotak Terasi Udang Rebon Besuki",
      "2 Bungkus Kerupuk Tenggiri Pasir Putih",
      "1 Toples Rengginang Lorjuk Premium",
    ],
    packaging: "Hardbox Motif Batik Situbondo + Greeting Card Custom",
    waText:
      "Halo, saya ingin memesan Paket Hampers Mahkota Ijen (Rp 235.000) untuk hadiah relasi kerja / keluarga.",
  },
];

export default function OlehHampers() {
  return (
    <section id="hampers" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold text-orange-800">
            <Gift className="h-3.5 w-3.5" />
            Paket Bingkisan & Acara
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Paket Hampers & Bingkisan Spesial
          </h2>
          <p className="mt-3 text-stone-600">
            Cocok untuk kiriman silaturahmi keluarga, hampers hari raya, buah
            tangan dinas kantor, maupun bingkisan rekan bisnis dengan kemasan
            eksklusif.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {hampers.map((hamper) => (
            <div
              key={hamper.id}
              className={`relative flex flex-col rounded-xl border p-8 transition-all duration-300 ${
                hamper.popular
                  ? "border-orange-500 bg-stone-950 text-white shadow-xl ring-2 ring-orange-500/50"
                  : "border-stone-200 bg-stone-50 text-stone-900 shadow-xs hover:border-orange-300"
              }`}>
              {hamper.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-orange-500 to-amber-500 px-4 py-1 text-xs font-bold text-stone-950">
                  PALING BANYAK DIPESAN
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold">{hamper.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    hamper.popular ? "text-stone-300" : "text-stone-600"
                  }`}>
                  {hamper.tagline}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-orange-500">
                    {hamper.price}
                  </span>
                  <span
                    className={`text-xs ${
                      hamper.popular ? "text-stone-400" : "text-stone-500"
                    }`}>
                    / paket lengkap
                  </span>
                </div>
              </div>

              <div
                className={`flex-1 rounded-2xl p-4 ${
                  hamper.popular ? "bg-white/5" : "bg-white"
                }`}>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    hamper.popular ? "text-orange-400" : "text-orange-600"
                  }`}>
                  Isi Dalam Paket:
                </p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {hamper.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                      <span
                        className={
                          hamper.popular ? "text-stone-200" : "text-stone-700"
                        }>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-4 border-t pt-3 text-xs ${
                    hamper.popular
                      ? "border-white/10 text-stone-300"
                      : "border-stone-200 text-stone-600"
                  }`}>
                  <span className="font-semibold text-orange-500">
                    Kemasan:{" "}
                  </span>
                  {hamper.packaging}
                </div>
              </div>

              <a
                href={waLink(hamper.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  hamper.popular
                    ? "bg-linear-to-r from-orange-500 to-amber-500 text-stone-950 hover:opacity-90 focus-visible:ring-orange-500"
                    : "bg-stone-900 text-white hover:bg-orange-600 focus-visible:ring-stone-900"
                }`}>
                <HeartHandshake className="h-4 w-4" />
                Pesan Paket Ini via WA
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
