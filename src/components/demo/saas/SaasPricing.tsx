import { Check } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const plans = [
  {
    name: "Starter",
    tagline: "Cocok untuk solopreneur atau UMKM rintisan.",
    price: "Rp 149.000",
    period: "/bulan",
    popular: false,
    features: [
      "Hingga 3 anggota tim",
      "5 automasi alur kerja aktif",
      "Dasbor analitik dasar",
      "Pencadangan data mingguan",
      "Dukungan via email & chat",
    ],
    ctaText: "Pilih Paket Starter",
    ctaMsg: "Halo KelolaKu, saya ingin berlangganan paket Starter.",
    btnStyle:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
  },
  {
    name: "Pro Bisnis",
    tagline: "Paling direkomendasikan untuk tim yang sedang berkembang.",
    price: "Rp 399.000",
    period: "/bulan",
    popular: true,
    features: [
      "Hingga 15 anggota tim",
      "Jumlah automasi alur kerja tidak dibatasi",
      "Dasbor analitik & ekspor laporan",
      "Integrasi notifikasi WhatsApp",
      "Pencadangan cloud harian otomatis",
      "Prioritas dukungan teknis 24/7",
    ],
    ctaText: "Mulai Paket Pro Bisnis",
    ctaMsg: "Halo KelolaKu, saya ingin mencoba paket Pro Bisnis.",
    btnStyle:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
  },
  {
    name: "Custom Enterprise",
    tagline: "Skalabilitas maksimal dengan infrastruktur privat mandiri.",
    price: "Kustom",
    period: "",
    popular: false,
    features: [
      "Jumlah anggota tim tidak dibatasi",
      "Private cloud / on-premise deployment",
      "Custom integrasi API & webhook internal",
      "SLA jaminan uptime 99.99%",
      "Dedicated account manager",
      "Pelatihan onboarding langsung ke tim",
    ],
    ctaText: "Konsultasi Enterprise",
    ctaMsg: "Halo KelolaKu, saya ingin konsultasi kebutuhan paket Enterprise.",
    btnStyle:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
  },
];

const SaasPricing = () => {
  return (
    <section id="harga" className="py-20 bg-white text-slate-900 border-t border-slate-200">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Paket Harga Transparan
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-slate-950">
            Investasi Terjangkau, Dampak Maksimal
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Tanpa biaya tersembunyi. Upgrade, downgrade, atau batalkan kapan saja
            sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-blue-500 bg-linear-to-b from-blue-50/50 to-white shadow-xl ring-2 ring-blue-500/20"
                  : "border-slate-200 bg-white shadow-sm hover:shadow-md"
              }`}>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-500">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm font-medium text-slate-500">
                      {plan.period}
                    </span>
                  )}
                </div>

                <div className="my-6 border-t border-slate-100" />

                <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Fasilitas Termasuk:
                </div>

                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={waLink(plan.ctaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${plan.btnStyle}`}>
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasPricing;
