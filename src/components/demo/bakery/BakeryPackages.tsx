import { Check, Gift } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface PackageItem {
  title: string;
  tagline: string;
  price: string;
  badge?: string;
  popular?: boolean;
  contents: string[];
  waMessage: string;
}

const packages: PackageItem[] = [
  {
    title: "Hampers Roti Nusantara",
    tagline: "Bingkisan istimewa untuk silaturahmi, hari raya & rekan kantor.",
    price: "Rp 125.000",
    badge: "Paling Diminati",
    popular: true,
    contents: [
      "6 Varian roti manis premium pilihan",
      "1 Box eksklusif berpita emas & kartu ucapan kustom",
      "Termasuk tas jinjing ramah lingkungan",
      "Bisa request pilihan rasa sesuai selera",
    ],
    waMessage:
      "Halo Dapur Roti Nusantara, saya mau pesan Paket Hampers Roti Nusantara.",
  },
  {
    title: "Tumpeng Roti Syukuran",
    tagline: "Alternatif modern tumpeng tradisional untuk ulang tahun & peresmian.",
    price: "Rp 285.000",
    badge: "Spesial Acara",
    contents: [
      "Susunan 30 pcs mini sweet buns & croissant",
      "Hiasan topper selamat & pita bertingkat",
      "Tampah anyaman bambu beralas daun pisang higienis",
      "Pre-order H-1 sebelum acara",
    ],
    waMessage:
      "Halo Dapur Roti Nusantara, saya mau konsultasi pemesanan Tumpeng Roti Syukuran.",
  },
  {
    title: "Snack Box Rapat & Arisan",
    tagline: "Praktis, higienis, dan lezat untuk kebutuhan konsumsi event.",
    price: "Rp 18.000 / box",
    contents: [
      "Isi 2 roti manis/gurih + 1 pastry",
      "Air mineral cup & tisu higienis",
      "Box tertutup bersegel jaminan mutu",
      "Minimal pemesanan hanya 10 box",
    ],
    waMessage:
      "Halo Dapur Roti Nusantara, saya mau order Snack Box untuk acara rapat/arisan.",
  },
];

const BakeryPackages = () => {
  return (
    <section id="paket" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-orange-800">
            <Gift className="h-3.5 w-3.5" />
            Paket Acara & Hampers
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Solusi Manis untuk Hari Bahagia Anda
          </h2>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">
            Mulai dari bingkisan eksklusif hingga konsumsi rapat kantor skala besar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col justify-between rounded-xl p-7 transition-all ${
                pkg.popular
                  ? "border-2 border-amber-500 bg-linear-to-b from-amber-500/5 to-white shadow-lg"
                  : "border border-neutral-200 bg-white hover:border-amber-300 hover:shadow-md"
              }`}>
              {pkg.badge && (
                <div className="absolute -top-3.5 left-6">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                      pkg.popular
                        ? "bg-amber-500 text-neutral-950 shadow-xs"
                        : "bg-neutral-800 text-white"
                    }`}>
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="mt-2">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 md:text-sm">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="my-6 border-y border-neutral-100 py-4">
                  <span className="text-xs text-neutral-500">Mulai dari</span>
                  <div className="text-2xl font-extrabold text-neutral-900 md:text-3xl">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-neutral-700 md:text-sm">
                  {pkg.contents.map((content) => (
                    <li key={content} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{content}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-2">
                <a
                  href={waLink(pkg.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    pkg.popular
                      ? "bg-amber-500 text-neutral-950 hover:bg-amber-400 focus-visible:ring-amber-500"
                      : "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-900"
                  }`}>
                  <Gift className="h-4 w-4" />
                  Pesan Paket via WA
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BakeryPackages;
