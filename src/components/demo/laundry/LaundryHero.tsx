import { Clock, Shirt, ShieldCheck, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Truck, label: "Antar-jemput gratis area kota" },
  { icon: Clock, label: "Layanan express selesai 6 jam" },
  { icon: ShieldCheck, label: "Garansi cuci ulang jika kurang bersih" },
];

export default function LaundryHero() {
  return (
    <section className="relative overflow-hidden bg-sky-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-sky-600/30 via-sky-950 to-blue-700/20" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5 text-sm text-sky-200">
            <Shirt className="h-4 w-4 text-sky-300" />
            Laundry Kiloan & Satuan Terpercaya
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Cucian bersih, wangi, dan rapi tanpa keluar rumah
          </h1>
          <p className="mt-4 text-lg text-sky-100/90">
            Antar-jemput gratis, pengerjaan cepat, dan hasil yang konsisten.
            Serahkan cucian Anda, kami urus sisanya.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#order"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-400 px-6 py-3 font-semibold text-sky-950 transition-colors hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <Truck className="h-5 w-5" />
              Order Antar-Jemput
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Lihat Layanan & Harga
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-sky-100/90">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-sky-300" />
                {item.label}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm text-sky-100/80">
            Atau langsung chat kami di{" "}
            <a
              href={waLink(
                "Halo Kilat Bersih Laundry, saya mau tanya-tanya dulu sebelum order."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-300 underline underline-offset-4 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
