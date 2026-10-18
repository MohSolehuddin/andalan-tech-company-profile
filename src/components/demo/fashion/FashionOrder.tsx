import { MessageCircle, PackageCheck, Ruler, Wallet } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: PackageCheck,
    title: "1. Pilih produk",
    desc: "Tentukan model dan ukuran dari katalog atau koleksi baru.",
  },
  {
    icon: MessageCircle,
    title: "2. Chat WhatsApp",
    desc: "Kirim nama produk dan ukuran, kami cek stok saat itu juga.",
  },
  {
    icon: Wallet,
    title: "3. Bayar mudah",
    desc: "Transfer bank, QRIS, atau COD untuk area tertentu.",
  },
  {
    icon: Ruler,
    title: "4. Terima & cek ukuran",
    desc: "Barang dikirim rapi. Tidak pas? Tukar dalam 7 hari.",
  },
];

export default function FashionOrder() {
  return (
    <section id="cara-order" className="bg-violet-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Cara Order
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Empat langkah, pesanan diproses
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-violet-100 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
                <step.icon className="h-6 w-6 text-violet-700" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{step.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-linear-to-br from-violet-600 to-purple-700 px-6 py-8 text-white sm:flex-row">
          <div>
            <p className="text-lg font-bold">Belum yakin pilih ukuran?</p>
            <p className="text-sm text-violet-50/90">
              Kirim tinggi dan berat badan, kami bantu rekomendasi ukuran.
            </p>
          </div>
          <a
            href={waLink(
              "Halo Distro Style Nusantara, bantu rekomendasi ukuran ya. Tinggi saya ... cm, berat ... kg."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-violet-700 transition-colors hover:bg-violet-50">
            <MessageCircle className="h-5 w-5" />
            Konsultasi Ukuran
          </a>
        </div>
      </div>
    </section>
  );
}
