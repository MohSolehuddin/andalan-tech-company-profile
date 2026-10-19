import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  popular?: boolean;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    name: "Glow Basic Facial",
    price: "Rp 350.000",
    period: "/ sesi",
    desc: "Perawatan esensial untuk membersihkan pori dan mengembalikan kesegaran kulit.",
    features: [
      "Skin check manual awal",
      "Double cleansing & ekstraksi komedo",
      "Aqua peel exfoliation",
      "Cooling mask calming therapy",
      "Sunscreen post-treatment",
    ],
  },
  {
    name: "Acne Clear Program",
    price: "Rp 650.000",
    period: "/ sesi",
    desc: "Solusi terfokus untuk meredakan jerawat meradang dan membersihkan minyak berlebih.",
    features: [
      "Konsultasi dokter spesialis",
      "Medical deep facial cleansing",
      "Bio-chemical acne peeling",
      "Blue light anti-bacterial therapy",
      "Krim iritasi & spot acne gratis",
    ],
  },
  {
    name: "Pico Glow Laser",
    price: "Rp 1.250.000",
    period: "/ sesi",
    desc: "Treatment favorit untuk mencerahkan wajah, meratakan warna, dan samarkan bekas noda.",
    popular: true,
    features: [
      "Analisis kulit digital 3D",
      "Full face pico rejuvenation laser",
      "Bio-cellulose calming mask",
      "Vitamin brightening infusion",
      "Gratis kontrol dokter 1 minggu",
    ],
  },
  {
    name: "Royal Glass Skin & Lift",
    price: "Rp 1.950.000",
    period: "/ paket",
    desc: "Kombinasi komprehensif pencerah instan dan stimulasi pengencangan kolagen wajah.",
    features: [
      "Konsultasi komprehensif dokter",
      "Pico Laser + Radiance Peel",
      "HIFU targeted tightening contour",
      "Glutathione antioxidant boost",
      "Paket skincare homecare starter",
    ],
  },
];

export default function SkincarePricing() {
  return (
    <section id="paket" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
            Paket &amp; Investasi Cantik
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Harga Transparan, Hasil Maksimal
          </h2>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base">
            Semua paket dilakukan dengan standar medis ketat tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all ${
                plan.popular
                  ? "border-rose-500 bg-linear-to-b from-rose-50/40 via-white to-pink-50/30 shadow-lg ring-2 ring-rose-400"
                  : "border-neutral-200 bg-white shadow-xs hover:border-neutral-300 hover:shadow-md"
              }`}>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-linear-to-r from-rose-600 to-pink-600 px-3 py-0.5 text-xs font-bold text-white shadow-xs">
                    Paling Favorit
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-neutral-900">{plan.name}</h3>
                <p className="mt-1 text-xs text-neutral-500">{plan.desc}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-neutral-950">
                    {plan.price}
                  </span>
                  <span className="text-xs text-neutral-500">{plan.period}</span>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-neutral-100 pt-4 text-xs text-neutral-700">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-neutral-100 pt-4">
                <a
                  href={waLink(
                    `Halo Glow Aesthetic Clinic, saya ingin pesan/booking paket ${plan.name} (${plan.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.popular
                      ? "bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md hover:from-rose-500 hover:to-pink-500"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}>
                  <MessageCircle className="h-4 w-4" />
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
