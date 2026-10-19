import { Check } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const plans = [
  {
    name: "Basic Pass",
    period: "/ bulan",
    price: "Rp 299.000",
    desc: "Cocok untuk yang ingin fokus latihan angkat beban mandiri.",
    popular: false,
    features: [
      "Akses penuh area gym & beban bebas",
      "Fasilitas loker & shower air panas",
      "1x Tes komposisi tubuh (InBody)",
      "Bebas datang jam berapa pun (06.00-22.00)",
    ],
    waMsg: "Halo PrimaFit, saya ingin daftar paket Basic Pass (Rp 299rb/bln).",
  },
  {
    name: "Pro Member",
    period: "/ 3 bulan",
    price: "Rp 699.000",
    desc: "Paket paling diminati untuk latihan beban + variasi kelas studio.",
    popular: true,
    features: [
      "Semua fasilitas Basic Pass",
      "Akses bebas seluruh kelas studio (Zumba, Yoga, Spin)",
      "2x Sesi privat Personal Trainer",
      "Diskon 10% di PrimaFit Healthy Bar",
      "Free 1 botol shaker eksklusif",
    ],
    waMsg: "Halo PrimaFit, saya ingin daftar paket Pro Member (Rp 699rb/3bln).",
  },
  {
    name: "Annual Elite",
    period: "/ tahun",
    price: "Rp 2.399.000",
    desc: "Investasi komitmen kebugaran setahun penuh dengan penghematan maksimal.",
    popular: false,
    features: [
      "Akses 365 hari unlimited ke gym & kelas",
      "6x Sesi privat Personal Trainer",
      "Konsultasi meal plan nutrisi bulanan",
      "Loker permanen VIP khusus",
      "Welcome kit: Jersey premium & tas gym",
    ],
    waMsg: "Halo PrimaFit, saya ingin daftar paket Annual Elite (Rp 2.399jt/thn).",
  },
];

export default function FitnessPricing() {
  return (
    <section id="paket" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            Paket Keanggotaan
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Pilihan Member Tanpa Biaya Tersembunyi
          </h2>
          <p className="mt-3 text-neutral-600">
            Daftar sekarang melalui WhatsApp dan dapatkan bonus sesi orientasi alat
            bersama instruktur kami.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-xl border p-8 transition-shadow ${
                plan.popular
                  ? "border-orange-500 bg-neutral-950 text-white shadow-sm"
                  : "border-neutral-200 bg-white text-neutral-900 hover:shadow-lg"
              }`}>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-sm">
                  Paling Populer
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p
                  className={`mt-1 text-xs ${
                    plan.popular ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                  {plan.desc}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ${
                      plan.popular ? "text-neutral-400" : "text-neutral-500"
                    }`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-3 text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check
                        className={`h-4 w-4 shrink-0 mt-0.5 ${
                          plan.popular ? "text-orange-400" : "text-orange-600"
                        }`}
                      />
                      <span
                        className={
                          plan.popular ? "text-neutral-200" : "text-neutral-700"
                        }>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100/20">
                <a
                  href={waLink(plan.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.popular
                      ? "bg-linear-to-r from-orange-500 to-red-600 text-white shadow-sm"
                      : "border border-neutral-300 bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}>
                  Pilih Paket Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
