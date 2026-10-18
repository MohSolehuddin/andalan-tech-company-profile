import { CheckCircle2, MessageCircle, RefreshCw, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const services = [
  {
    title: "Custom Cincin Kawin & Perhiasan",
    description:
      "Bawa desain referensi sendiri atau diskusikan konsep cincin impian. Pilihan material emas kuning, putih, atau rose gold dengan grafir nama gratis.",
    benefits: [
      "Gratis ukir nama laser",
      "Garansi resize ukuran 1x",
      "Pilihan kadar 17K hingga 24K",
    ],
  },
  {
    title: "Tukar Tambah (Trade-In) Transparan",
    description:
      "Perbarui koleksi lama Anda menjadi model terbaru. Timbangan digital presisi dengan pemotongan harga yang jelas dan tidak memberatkan.",
    benefits: [
      "Terima emas dari toko lain",
      "Uji kadar instan di tempat",
      "Kompensasi selisih harga bersahabat",
    ],
  },
  {
    title: "Buyback & Penjualan Kembali",
    description:
      "Kami menerima penjualan kembali perhiasan maupun logam mulia dengan patokan harga harian yang jujur dan pembayaran tunai atau transfer saat itu juga.",
    benefits: [
      "Dana langsung cair",
      "Mengacu harga buyback harian",
      "Bisa tanpa nota (uji kadar laboratorium)",
    ],
  },
  {
    title: "Cuci Emas & Reparasi Kilat",
    description:
      "Kembalikan kilau perhiasan Anda seperti baru kembali. Layanan sambung rantai putus, pasang kembali batu permata lepas, dan pembersihan ultrasonik.",
    benefits: [
      "Gratis cuci perhiasan berkala",
      "Proses cepat bisa ditunggu",
      "Dikerjakan pengrajin berpengalaman",
    ],
  },
];

export default function TokoEmasServices() {
  return (
    <section id="layanan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <Sparkles className="h-4 w-4" />
            Layanan Spesialis
          </span>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Custom Desain & Tukar Tambah Emas
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Layanan lengkap dari pembuatan cincin pernikahan, trade-in model
            lama, hingga jaminan buyback terpercaya.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2 border-t border-neutral-100 pt-4 text-xs font-medium text-neutral-700">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <a
                  href={waLink(
                    `Halo Emas Mulia Perhiasan, saya mau konsultasi tentang layanan ${service.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-amber-700 hover:text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-700">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Konsultasikan Layanan Ini via WA →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-linear-to-r from-amber-600 via-amber-500 to-yellow-500 p-8 text-neutral-950 shadow-md">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <RefreshCw className="h-3.5 w-3.5" />
                Punya Emas Lama di Rumah?
              </span>
              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Tukar Tambah dengan Model Terkini Sekarang
              </h3>
              <p className="mt-1 text-sm text-neutral-900/80 max-w-xl">
                Kirimkan foto atau taksiran perhiasan lama Anda ke WhatsApp kami
                untuk mendapatkan estimasi awal harga tukar tambah.
              </p>
            </div>
            <a
              href={waLink(
                "Halo Emas Mulia Perhiasan, saya ingin estimasi tukar tambah emas lama saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-950">
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              Chat Konsultasi Tukar Tambah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
