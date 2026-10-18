import { MessageCircle, ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const products = [
  {
    emoji: "🤒",
    name: "Paket Demam & Flu",
    desc: "Paracetamol, vitamin C, dan obat batuk untuk keluhan ringan.",
    price: "Mulai Rp 35.000",
  },
  {
    emoji: "💪",
    name: "Vitamin Daya Tahan",
    desc: "Multivitamin harian untuk dewasa, tersedia berbagai merek.",
    price: "Mulai Rp 45.000",
  },
  {
    emoji: "🩺",
    name: "Perlengkapan Cek Mandiri",
    desc: "Tensimeter digital, termometer, dan tes gula darah praktis.",
    price: "Mulai Rp 89.000",
  },
  {
    emoji: "🧴",
    name: "Perawatan Luka",
    desc: "Plester, antiseptik, kasa steril, dan salep penyembuh luka.",
    price: "Mulai Rp 15.000",
  },
];

export default function ApotekProducts() {
  return (
    <section id="produk" className="bg-teal-50/60 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Produk Populer
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Stok lengkap, harga wajar
          </h2>
          <p className="mt-3 text-neutral-600">
            Harga dapat berubah sesuai merek dan ketersediaan. Konfirmasi stok
            lewat WhatsApp sebelum memesan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-teal-100 to-emerald-100 text-2xl">
                {product.emoji}
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {product.name}
              </h3>
              <p className="mt-1 flex-1 text-sm text-neutral-600">
                {product.desc}
              </p>
              <p className="mt-4 text-sm font-semibold text-teal-700">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink(
              "Halo Apotek Sehatra, saya mau cek stok dan harga produk."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-teal-500 to-emerald-600 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <ShoppingBag className="h-5 w-5" />
            Cek Stok via WhatsApp
          </a>
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-neutral-500">
            <MessageCircle className="h-3.5 w-3.5" />
            Balasan cepat pada jam operasional
          </p>
        </div>
      </div>
    </section>
  );
}
