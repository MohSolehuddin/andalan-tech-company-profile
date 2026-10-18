import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  HelpCircle,
  Info,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { PACKAGE_TIERS, ADDONS, formatIDR } from "@/lib/pricing";
import { waLink } from "@/lib/demo/wa";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paket & Harga Pembuatan Website — Andalan Tech",
  description:
    "Pilihan paket pembuatan website transparan dan terjangkau untuk bisnis, UMKM, dan profesional: Starter, Bisnis, Pro, dan Custom.",
};

const faqs = [
  {
    q: "Berapa lama estimasi pengerjaan website?",
    a: "Untuk paket Starter estimasi 3–5 hari kerja, paket Bisnis 7–14 hari kerja, sedangkan paket Pro dan Custom berkisar antara 2–4 minggu tergantung kelengkapan materi konten dan kompleksitas integrasi sistem.",
  },
  {
    q: "Apa yang termasuk dalam biaya perpanjangan tahunan?",
    a: "Biaya perpanjangan tahunan mencakup perpanjangan sewa domain (.com/.id), cloud hosting berperforma tinggi, pembaruan sertifikat keamanan SSL, backup berkala, dan monitoring kestabilan server.",
  },
  {
    q: "Apakah saya bisa melakukan upgrade paket di kemudian hari?",
    a: "Tentu saja. Anda bisa memulai dari paket Starter atau Bisnis terlebih dahulu, lalu meng-upgrade ke paket Pro atau Custom kapan saja seiring perkembangan skala usaha Anda.",
  },
  {
    q: "Bagaimana sistem pembayaran dan garansi pengerjaan?",
    a: "Pembayaran dilakukan bertahap (DP di awal dan pelunasan saat website selesai serta telah disetujui). Kami menyediakan garansi perbaikan bug dan pendampingan pasca peluncuran untuk memastikan website berjalan lancar.",
  },
];

export default function PaketPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-xs">
        <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 rounded-sm">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="text-xs font-semibold uppercase tracking-wider text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 rounded-sm">
              Lihat Demo
            </Link>
            <a
              href={waLink("Halo, saya ingin tanya seputar paket website Andalan Tech")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2">
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-neutral-950 px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-neutral-300">
            <Sparkles className="h-4 w-4 text-amber-400" />
            Paket &amp; Harga Transparan
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Pilihan Paket Pembuatan Website
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Website modern, cepat, dan terpercaya untuk bisnis Anda. Dibuat dengan
            teknologi terkini, ramah SEO, dan siap pakai.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-xs transition-all hover:shadow-lg ${
                tier.popular
                  ? "border-neutral-900 ring-2 ring-neutral-900"
                  : "border-neutral-200"
              }`}>
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                  Paling Populer
                </div>
              )}

              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Paket
                </div>
                <h2 className="mt-1 text-2xl font-bold text-neutral-900">
                  {tier.name}
                </h2>
                <p className="mt-2 text-xs text-neutral-600 min-h-[32px]">
                  {tier.scope}
                </p>

                <div className="mt-5 border-t border-b border-neutral-100 py-4">
                  <div className="text-xs text-neutral-600">Buat pertama:</div>
                  <div className="text-2xl font-bold text-neutral-900">
                    {formatIDR(tier.firstPrice)}
                  </div>
                  <div className="mt-1 text-xs text-neutral-600">
                    Perpanjang: {formatIDR(tier.renewalPrice)}/tahun
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-3">
                    Fitur Termasuk:
                  </div>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs leading-relaxed text-neutral-700">
                        <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <a
                  href={waLink(`Halo, saya tertarik paket ${tier.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
                    tier.popular
                      ? "bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm"
                      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-200"
                  }`}>
                  <MessageCircle className="h-3.5 w-3.5" />
                  Pilih Paket {tier.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Layanan Tambahan (Add-Ons)
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Pilihan layanan tambahan untuk melengkapi operasional dan pemasaran digital website Anda.
            </p>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs">
            <div className="divide-y divide-neutral-200">
              {ADDONS.map((addon) => (
                <div
                  key={addon.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 hover:bg-neutral-50/70 transition-colors">
                  <span className="font-medium text-neutral-900 text-sm">
                    {addon.name}
                  </span>
                  <span className="text-sm font-semibold text-neutral-700">
                    {addon.name}: {formatIDR(addon.price)}/{addon.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indikatif Note */}
        <div className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-xs sm:text-sm text-amber-900">
            <Info className="h-5 w-5 shrink-0 text-amber-700 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Catatan:</strong> Seluruh harga di atas bersifat indikatif dan dapat disesuaikan dengan kebutuhan spesifik, volume halaman/data, maupun kompleksitas integrasi proyek Anda.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Hal-hal yang sering ditanyakan mengenai layanan pembuatan website Andalan Tech.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <h3 className="flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-900">
                  <HelpCircle className="h-4 w-4 shrink-0 text-neutral-600" />
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600 pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Penutup */}
        <div className="mt-20">
          <div className="rounded-xl border border-neutral-800 bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-8 sm:p-12 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Konsultasikan Website Impian Anda
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-400 text-xs sm:text-sm">
              Bingung memilih paket yang paling tepat? Diskusikan ide dan kebutuhan bisnis Anda bersama kami secara gratis tanpa komitmen.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink("Halo, saya ingin konsultasi paket website untuk bisnis saya")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-100 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
                <MessageCircle className="h-4 w-4" />
                Konsultasi Gratis via WhatsApp
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
                Lihat Contoh Website <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
