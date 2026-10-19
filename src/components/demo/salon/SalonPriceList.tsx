import { Check } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const packages = [
  {
    name: "Paket Fresh & Chic",
    subtitle: "Untuk perawatan rutin dan tampilan segar",
    price: "Rp 150.000",
    originalPrice: "Rp 195.000",
    popular: false,
    items: [
      "Cuci Rambut Aroma Therapy & Massage",
      "Potong Rambut & Styling Sesuai Wajah",
      "Blow Out / Catok Natural",
      "Vitamin Serum Rambut",
    ],
  },
  {
    name: "Paket Silky Glow Keratin",
    subtitle: "Rambut lurus jatuh berkilau tahan berbulan-bulan",
    price: "Rp 399.000",
    originalPrice: "Rp 520.000",
    popular: true,
    items: [
      "Smoothing Keratin Treatment Natural",
      "Deep Hair Mask Collagen",
      "Trim Ujung Rambut Bercabang",
      "Serum Pelindung Panas & UV",
      "Garansi Touch-up 7 Hari",
    ],
  },
  {
    name: "Paket Total Glamour Day",
    subtitle: "Treatment lengkap memanjakan seluruh tubuh",
    price: "Rp 550.000",
    originalPrice: "Rp 720.000",
    popular: false,
    items: [
      "Facial Cleansing & Brightening Bio-Light",
      "Nail Art Gel Polish (Tangan & Kaki)",
      "Creambath Spa Tradisional / Lidah Buaya",
      "Pijat Relaksasi Pundak & Punggung",
    ],
  },
];

const singlePrices = [
  { item: "Potong Rambut Wanita (termasuk cuci)", price: "Rp 75.000" },
  { item: "Cuci Blow Variasi / Curly Styling", price: "Rp 60.000" },
  { item: "Creambath & Head Massage 45 Menit", price: "Rp 85.000" },
  { item: "Coloring Fashion / Balayage", price: "Mulai Rp 300.000" },
  { item: "Lash Lift & Tinting Natural", price: "Rp 120.000" },
  { item: "Manicure & Pedicure Spa", price: "Rp 110.000" },
];

export default function SalonPriceList() {
  return (
    <section id="harga" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
            Daftar Harga & Paket
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Transparan tanpa biaya tersembunyi
          </h2>
          <p className="mt-3 text-neutral-600">
            Pilih paket bundling hemat atau treatment satuan sesuai kebutuhan
            perawatan Anda hari ini.
          </p>
        </div>

        {/* Paket Bundling */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between rounded-xl p-6 transition-all ${
                pkg.popular
                  ? "border-2 border-rose-500 bg-rose-50/40 shadow-lg md:-translate-y-2"
                  : "border border-neutral-200 bg-white"
              }`}>
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-600 px-3.5 py-1 text-xs font-semibold text-white shadow-xs">
                    Paling Favorit
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-neutral-900">{pkg.name}</h3>
                <p className="mt-1 text-xs text-neutral-500">{pkg.subtitle}</p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-neutral-900">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-neutral-600 line-through">
                    {pkg.originalPrice}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 border-t border-neutral-100 pt-6">
                  {pkg.items.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={waLink(
                    `Halo Glow & Glam Salon, saya berminat ambil ${pkg.name} seharga ${pkg.price}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    pkg.popular
                      ? "bg-rose-600 text-white hover:bg-rose-500"
                      : "bg-neutral-900 text-white hover:bg-rose-600"
                  }`}>
                  Pilih Paket Ini
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tabel Menu Satuan */}
        <div className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-neutral-900">
            Daftar Harga Treatment Satuan
          </h3>
          <p className="mt-1 text-xs text-neutral-600">
            Konsultasi awal gratis untuk menentukan produk yang cocok bagi jenis rambut dan kulit Anda.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {singlePrices.map((sp) => (
              <div
                key={sp.item}
                className="flex items-center justify-between rounded-xl border border-neutral-200/80 bg-white px-4 py-3 text-sm">
                <span className="text-neutral-800 font-medium">{sp.item}</span>
                <span className="font-bold text-rose-600">{sp.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
