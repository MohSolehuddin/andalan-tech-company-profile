import {
  ClipboardList,
  MessageCircle,
  PackageCheck,
  Truck,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Pesan material",
    desc: "Chat WhatsApp, sebutkan material dan jumlahnya. Kami cek stok saat itu juga.",
  },
  {
    icon: PackageCheck,
    title: "2. Kami siapkan",
    desc: "Pesanan dikemas dan dicek ulang. Bayar transfer, QRIS, atau COD.",
  },
  {
    icon: Truck,
    title: "3. Antar ke proyek",
    desc: "Armada kami mengantar langsung ke lokasi proyek sesuai jadwal.",
  },
];

export default function BangunanDelivery() {
  return (
    <section id="antar" className="bg-stone-100 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Pengiriman
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Kirim material sampai lokasi proyek
          </h2>
          <p className="mt-4 text-neutral-600">
            Tidak perlu repot angkut sendiri. Pesan dari gudang, material tiba
            di proyek Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-stone-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-900">
                <step.icon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{step.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-stone-900 px-6 py-8 text-center text-white md:flex-row md:text-left">
          <div>
            <p className="text-lg font-bold">
              Gratis ongkir area kota untuk belanja min. Rp 500.000
            </p>
            <p className="mt-1 text-sm text-stone-300">
              Luar kota? Ongkir dihitung dari lokasi proyek — tanya dulu, pasti
              transparan.
            </p>
          </div>
          <a
            href={waLink("Halo Toko Bangunan Kokoh, saya mau atur pengiriman material ke lokasi proyek.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-stone-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400">
            <MessageCircle className="h-5 w-5" />
            Atur Pengiriman
          </a>
        </div>
      </div>
    </section>
  );
}
