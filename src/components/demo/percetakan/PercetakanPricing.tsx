import { Check, MessageCircle, Clock, PackageCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const priceList = [
  {
    name: "Spanduk / Banner Flexi",
    price: "Rp 18.000",
    unit: "/ m²",
    minOrder: "Min. 1 meter",
    eta: "1 - 3 Jam",
    badge: "Kilat",
    features: [
      "Bahan Flexi 280g standar outdoor",
      "Finishing mata ayam & lem samping",
      "Tahan air & sinar matahari langsung",
      "Opsi upgrade Korea 440g (+Rp 12.000/m)",
    ],
    waMsg: "Halo Cetak Cepat Digital Printing, saya mau pesan Spanduk/Banner Flexi.",
  },
  {
    name: "Stiker Vinyl A3+ Kiss Cut",
    price: "Rp 14.000",
    unit: "/ lembar A3+",
    minOrder: "Min. 3 lembar",
    eta: "Siap Hari Ini",
    badge: "Paling Laris",
    popular: true,
    features: [
      "Bahan Vinyl waterproof putih / bening",
      "Sudah dipotong pola (Kiss Cut) siap tempel",
      "Cetak tajam high-resolution pigmen",
      "Pilihan laminasi doff atau glossy",
    ],
    waMsg: "Halo Cetak Cepat Digital Printing, saya mau pesan Stiker Vinyl A3+ Kiss Cut.",
  },
  {
    name: "Kartu Nama Bisnis (1 Box)",
    price: "Rp 35.000",
    unit: "/ box (100 pcs)",
    minOrder: "Min. 1 box",
    eta: "1 Hari Jadi",
    badge: "Populer",
    features: [
      "Art Carton 260g tebal & elegan",
      "Cetak 2 sisi full color presisi",
      "Termasuk kotak mika bening",
      "Gratis penataan tata letak standar",
    ],
    waMsg: "Halo Cetak Cepat Digital Printing, saya mau pesan Kartu Nama Bisnis (1 Box).",
  },
  {
    name: "Sablon Kaos DTF Satuan",
    price: "Rp 65.000",
    unit: "/ pcs (kaos + cetak)",
    minOrder: "Bisa satuan (1 pcs)",
    eta: "1 - 2 Hari",
    badge: "Bisa Satuan",
    features: [
      "Sudah termasuk Kaos Cotton Combed 30s",
      "Cetak DTF area hingga A3 full color",
      "Warna penuh dengan gradasi halus",
      "Tersedia ukuran S, M, L, XL, XXL",
    ],
    waMsg: "Halo Cetak Cepat Digital Printing, saya mau pesan Sablon Kaos DTF Satuan.",
  },
  {
    name: "Undangan Pernikahan / Khitan",
    price: "Rp 1.500",
    unit: "/ pcs",
    minOrder: "Min. 100 pcs",
    eta: "3 - 5 Hari",
    badge: "Hemat",
    features: [
      "Bahan Jasmine shimmer mewah / BC tebal",
      "Gratis bungkus plastik OPP & label",
      "Gratis cetak QR code Google Maps",
      "Preview revisi sebelum naik mesin",
    ],
    waMsg: "Halo Cetak Cepat Digital Printing, saya mau pesan Undangan Pernikahan/Khitan.",
  },
  {
    name: "Brosur Promosi A5 (1 Rim)",
    price: "Rp 195.000",
    unit: "/ rim (500 lbr)",
    minOrder: "Min. 1 rim",
    eta: "1 - 2 Hari",
    badge: "Promo",
    features: [
      "Kertas Art Paper 120g mengkilap",
      "Ukuran A5 (14,8 x 21 cm)",
      "Cetak 1 sisi full color resolusi tinggi",
      "Cocok untuk promo toko & event",
    ],
    waMsg: "Halo Cetak Cepat Digital Printing, saya mau pesan Brosur Promosi A5 (1 Rim).",
  },
];

export default function PercetakanPricing() {
  return (
    <section id="harga" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-600">
            Daftar Harga & Minimal Order
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Harga Transparan, Tanpa Biaya Tersembunyi
          </h2>
          <p className="mt-3 text-neutral-600">
            Pemesanan mudah dan transparan. Bisa order sedikit untuk kebutuhan mendesak maupun partai besar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {priceList.map((item) => (
            <div
              key={item.name}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200 hover:shadow-lg ${
                item.popular
                  ? "border-orange-500 bg-orange-50/20 shadow-md ring-2 ring-orange-400/30"
                  : "border-neutral-200 bg-white"
              }`}>
              {item.badge && (
                <div className="absolute -top-3 right-5">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${item.popular ? "bg-orange-600 text-white" : "bg-neutral-800 text-white"}`}>
                    {item.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-neutral-900">{item.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-neutral-950">{item.price}</span>
                  <span className="text-xs text-neutral-500">{item.unit}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 px-2 py-1 font-medium text-neutral-700">
                    <PackageCheck className="h-3.5 w-3.5 text-neutral-500" />
                    {item.minOrder}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-orange-100 px-2 py-1 font-medium text-orange-800">
                    <Clock className="h-3.5 w-3.5 text-orange-600" />
                    {item.eta}
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-neutral-100 pt-5 text-sm">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-neutral-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={waLink(item.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    item.popular
                      ? "bg-orange-600 text-white hover:bg-orange-500"
                      : "border border-neutral-300 bg-white text-neutral-800 hover:border-orange-500 hover:text-orange-600"
                  }`}>
                  <MessageCircle className="h-4 w-4" />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-neutral-100 p-6 text-center sm:p-8">
          <h4 className="text-lg font-bold text-neutral-900">
            Perlu Custom Ukuran, Bahan Khusus, atau Cetak Partai Besar?
          </h4>
          <p className="mt-2 text-sm text-neutral-600">
            Kami melayani cetak instansi, partai politik, dan UMKM dengan harga grosir kompetitif.
          </p>
          <a
            href={waLink("Halo Cetak Cepat Digital Printing, saya mau minta penawaran harga untuk cetak partai besar / custom.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            Minta Penawaran Grosir
          </a>
        </div>
      </div>
    </section>
  );
}
