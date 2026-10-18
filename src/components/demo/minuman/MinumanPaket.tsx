import { CheckCircle2, Gift, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface BundlePackage {
  name: string;
  tagline: string;
  originalPrice: string;
  promoPrice: string;
  savings: string;
  items: string[];
  badge?: string;
}

const bundles: BundlePackage[] = [
  {
    name: "Paket Duo Segar",
    tagline: "Pas buat dinikmati berdua bareng teman atau pasangan",
    originalPrice: "Rp 44.000",
    promoPrice: "Rp 38.000",
    savings: "Hemat Rp 6.000",
    items: [
      "1x Brown Sugar Boba Fresh Milk",
      "1x Cold-Pressed Orange Booster",
      "Free 1 Topping Cincau",
    ],
  },
  {
    name: "Paket Bestie Triplet",
    tagline: "Kombinasi 3 minuman paling favorit untuk nongkrong seru",
    originalPrice: "Rp 71.000",
    promoPrice: "Rp 59.000",
    savings: "Hemat Rp 12.000",
    items: [
      "1x Roasted Milk Tea Boba",
      "1x Mango Sunshine Smoothie",
      "1x Cold-Pressed Orange Booster",
      "Free 2 Cup Topping Bebas Pilih",
    ],
    badge: "Paling Populer",
  },
  {
    name: "Paket Kantor & Meeting",
    tagline: "Pilihan hemat segarkan suasana kerja & kumpul tim kantor",
    originalPrice: "Rp 244.000",
    promoPrice: "Rp 199.000",
    savings: "Hemat Rp 45.000",
    items: [
      "10x Cup Mix (5 Boba + 5 Cold-Pressed Juice)",
      "Gratis Custom Label Nama Tiap Cup",
      "Kemasan Insulated Bag Rapi & Dingin",
      "Gratis Ongkir Area Terjangkau",
    ],
    badge: "Spesial Event",
  },
];

export default function MinumanPaket() {
  return (
    <section className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Paket Bundling Hemat
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pesan Banyak Lebih Murah
          </h2>
          <p className="mt-3 text-neutral-600">
            Cocok untuk traktiran teman, kumpul keluarga, hingga kebutuhan rapat
            kantor.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {bundles.map((bundle) => (
            <div
              key={bundle.name}
              className="relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-transform hover:-translate-y-1 hover:shadow-md">
              {bundle.badge && (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white shadow-xs">
                  <Gift className="h-3.5 w-3.5" />
                  {bundle.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {bundle.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-600">{bundle.tagline}</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-teal-700">
                    {bundle.promoPrice}
                  </span>
                  <span className="text-sm text-neutral-400 line-through">
                    {bundle.originalPrice}
                  </span>
                </div>
                <span className="mt-1 inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                  {bundle.savings}
                </span>

                <div className="mt-6 border-t border-neutral-100 pt-5">
                  <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                    Sudah Termasuk:
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {bundle.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-neutral-600">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-neutral-100 pt-5">
                <a
                  href={waLink(
                    `Halo Segar Boba & Juice, saya mau pesan ${bundle.name} (${bundle.promoPrice}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500">
                  <MessageCircle className="h-4 w-4" />
                  Pesan Paket Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
