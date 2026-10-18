import { BadgeCheck, Check, Clock, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const packages = [
  {
    name: "Paket Rileks",
    duration: "60 menit",
    price: "Rp 149.000",
    popular: false,
    items: [
      "Body Massage 45 menit",
      "Reflexology kaki 15 menit",
      "Air jahe hangat",
    ],
  },
  {
    name: "Paket Segar",
    duration: "90 menit",
    price: "Rp 229.000",
    popular: true,
    items: [
      "Body Massage 45 menit",
      "Lulur & Body Scrub 30 menit",
      "Reflexology kaki 15 menit",
      "Masker + body lotion",
    ],
  },
  {
    name: "Paket Ayu",
    duration: "120 menit",
    price: "Rp 329.000",
    popular: false,
    items: [
      "Body Massage 60 menit",
      "Facial Glow 30 menit",
      "Lulur & Body Scrub 30 menit",
      "Teh herbal & snack sehat",
    ],
  },
];

export default function SpaPackages() {
  return (
    <section id="paket" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-700">
            Paket & Harga
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilih durasi sesuai waktu Anda
          </h2>
          <p className="mt-3 text-neutral-600">
            Harga transparan, sudah termasuk terapis profesional dan ruang
            perawatan privat.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between rounded-xl p-6 transition-all ${
                pkg.popular
                  ? "border-2 border-lime-500 bg-lime-50/40 shadow-lg md:-translate-y-2"
                  : "border border-neutral-200 bg-white"
              }`}>
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-lime-600 px-3.5 py-1 text-xs font-semibold text-white shadow-xs">
                    <Sparkles className="h-3 w-3" /> Paling Diminati
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {pkg.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    <Clock className="h-3.5 w-3.5" />
                    {pkg.duration}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-neutral-900">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-neutral-600">/ orang</span>
                </div>

                <ul className="mt-6 space-y-3 border-t border-neutral-100 pt-6">
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={waLink(
                    `Halo Ayu Spa & Reflexology, saya mau booking ${pkg.name} (${pkg.duration}, ${pkg.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    pkg.popular
                      ? "bg-lime-600 text-white hover:bg-lime-500"
                      : "bg-emerald-900 text-white hover:bg-lime-600"
                  }`}>
                  <BadgeCheck className="h-4 w-4" />
                  Booking Paket Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
