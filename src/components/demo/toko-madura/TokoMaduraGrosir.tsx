import { CheckCircle2, MessageCircle, PackageCheck, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const packages = [
  {
    name: "Paket Sembako Berkah",
    tagline: "Cocok untuk stok bulanan rumah tangga",
    price: "Rp 150.000",
    badge: "Paling Laris",
    items: [
      "Beras Rojo Lele 5kg",
      "Minyak Goreng Filma 2L",
      "Gula Pasir Gulaku 1kg",
      "Telur Ayam Negeri 1kg",
    ],
    waMessage:
      "Halo Toko Madura Barokah, saya mau pesan Paket Sembako Berkah (Rp 150.000).",
  },
  {
    name: "Paket Kulakan Warung",
    tagline: "Harga agen khusus reseller kelontong & warung makan",
    price: "Harga Grosir Terbaik",
    badge: "Grosir Partai",
    items: [
      "Beras karungan 25kg / 50kg",
      "Minyak goreng kartonan (dus)",
      "Mi instan kartonan (dus)",
      "Gula & terigu karungan",
    ],
    waMessage:
      "Halo Toko Madura Barokah, saya ingin daftar list harga grosir/kulakan warung.",
  },
  {
    name: "Layanan Antar Kilat",
    tagline: "Pesan antar beras karung, gas 3kg, & air galon",
    price: "Gratis Ongkir*",
    badge: "Radius 3 KM",
    items: [
      "Antar langsung ke depan pintu rumah",
      "Bantu pasang tabung gas melon",
      "Waktu antar kilat 15-30 menit",
      "*Gratis ongkir untuk min. belanja Rp 75.000",
    ],
    waMessage:
      "Halo Toko Madura Barokah, saya mau pesan antar sembako/gas ke rumah saya.",
  },
];

export default function TokoMaduraGrosir() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            <Truck className="h-3.5 w-3.5" />
            Layanan Grosir &amp; Antar ke Rumah
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Belanja Lebih Banyak, Makin Hemat
          </h2>
          <p className="mt-2 text-neutral-600">
            Kami melayani pembelian satuan, paket sembako rumah tangga, hingga
            kulakan partai besar untuk warung di sekitar Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50/40 p-6 transition-all hover:border-emerald-400 hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                    {pkg.badge}
                  </span>
                  <PackageCheck className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-neutral-900">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">{pkg.tagline}</p>
                <p className="mt-4 text-2xl font-bold text-emerald-700">
                  {pkg.price}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-neutral-200/60 pt-4">
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={waLink(pkg.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600">
                  <MessageCircle className="h-4 w-4" />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
