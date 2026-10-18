import { Check, ClipboardList, Code, Compass, MessageCircle, Rocket } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Discovery & Brief",
    desc: "Memahami model bisnis, target audiens, dan spesifikasi fitur yang dibutuhkan.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "UI/UX & Arsitektur",
    desc: "Perancangan wireframe, prototype interaktif, dan penentuan infrastruktur sistem.",
  },
  {
    icon: Code,
    step: "03",
    title: "Development & QA",
    desc: "Koding dengan standar tinggi, review performa, dan pengujian ketat sebelum rilis.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deployment & Support",
    desc: "Peluncuran produk ke server produksi, pelatihan operasional, serta garansi teknis.",
  },
];

const packages = [
  {
    name: "Paket Launchpad",
    badge: "Cocok untuk UMKM / Brand Baru",
    price: "Rp 3.500.000",
    desc: "Website company profile atau landing page modern untuk membangun reputasi profesional.",
    features: [
      "Custom UI/UX Landing Page",
      "Responsif Mobile & Desktop",
      "Setup Domain & Cloud Hosting 1 Thn",
      "Integrasi Tombol WhatsApp & Form",
      "SEO Dasar & Google Search Console",
      "Waktu Pengerjaan 5-7 Hari Kerja",
    ],
    waMsg: "Halo Andalan Digital Agency, saya tertarik dengan Paket Launchpad.",
  },
  {
    name: "Paket Business Growth",
    badge: "Paling Populer",
    popular: true,
    price: "Rp 7.500.000",
    desc: "Solusi lengkap web dinamis, katalog produk, dan optimasi funnel pemasaran digital.",
    features: [
      "Semua fitur Paket Launchpad",
      "Multi-Halaman & Katalog Produk / Jasa",
      "CMS / Admin Panel Mudah Digunakan",
      "Optimasi SEO On-Page & Technical",
      "Setup Google Analytics & Facebook Pixel",
      "Dukungan Teknis & Maintenance Prioritas",
    ],
    waMsg: "Halo Andalan Digital Agency, saya mau pesan Paket Business Growth.",
  },
  {
    name: "Paket Enterprise / Custom",
    badge: "Custom Software",
    price: "Mulai Rp 15.000.000",
    desc: "Pengembangan web application, sistem portal kustom, atau aplikasi mobile terintegrasi.",
    features: [
      "Arsitektur Kustom (Fullstack / Mobile)",
      "Database & REST API Scalable",
      "Integrasi Payment Gateway & Kurir",
      "Modul Reporting & User Role Manajemen",
      "SLA Server 99.9% & Backup Harian",
      "Dedicated Project Manager",
    ],
    waMsg: "Halo Andalan Digital Agency, saya ingin diskusi Paket Custom Software / Enterprise.",
  },
];

export default function AgencyProcessPricing() {
  return (
    <section id="proses-paket" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-700">
            Alur Kerja Transparan
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl">
            Proses Rapi, Tepat Waktu, dan Teruji
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Setiap proyek dikelola dengan metodologi terarah agar hasil akhir
            sesuai ekspektasi dan target peluncuran.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
              <span className="text-2xl font-black text-violet-200">
                {s.step}
              </span>
              <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-700">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{s.title}</h3>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-700">
            Pilihan Paket Layanan
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl">
            Investasi Jelas Sesuai Kebutuhan Anda
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Transparansi fitur tanpa biaya tersembunyi. Konsultasikan kebutuhan unik Anda bersama tim kami.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between rounded-2xl border bg-white p-6 sm:p-8 transition-all ${
                pkg.popular
                  ? "border-violet-500 shadow-xl ring-2 ring-violet-500/20"
                  : "border-neutral-200 shadow-xs hover:border-neutral-300"
              }`}>
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-violet-600 to-indigo-600 px-3.5 py-1 text-xs font-semibold text-white shadow-xs">
                  {pkg.badge}
                </span>
              )}
              <div>
                {!pkg.popular && (
                  <span className="inline-block rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                    {pkg.badge}
                  </span>
                )}
                <h3 className={`font-bold text-neutral-900 ${pkg.popular ? "mt-2" : "mt-3"} text-xl`}>
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  {pkg.desc}
                </p>
                <div className="mt-5 border-y border-neutral-100 py-4">
                  <span className="text-xs text-neutral-500">Estimasi mulai</span>
                  <div className="text-2xl font-black text-neutral-900 sm:text-3xl">
                    {pkg.price}
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-neutral-700">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-violet-600 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={waLink(pkg.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-violet-600 text-white hover:bg-violet-700 shadow-sm shadow-violet-600/30"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}>
                  <MessageCircle className="h-4 w-4" />
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
