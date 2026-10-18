import { Clock, MessageCircle, ShoppingBasket, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const points = [
  { icon: Truck, label: "Antar cepat sekitar rumah" },
  { icon: Clock, label: "Buka setiap hari 06.00–21.00" },
  { icon: ShoppingBasket, label: "Harga sembako ramah kantong" },
];

export default function KelontongHero() {
  return (
    <section className="relative overflow-hidden bg-green-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-lime-600/30 via-green-950 to-emerald-900/40" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 text-sm text-lime-200">
            <ShoppingBasket className="h-4 w-4" />
            Toko Kelontong / Sembako
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Sembako lengkap, harga pasar
          </h1>
          <p className="mt-4 text-lg text-lime-50/90">
            Belanja kebutuhan harian tanpa antre. Pilih barang, kirim daftar
            belanja lewat WhatsApp, pesanan diantar sampai rumah.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-lime-400">
              <ShoppingBasket className="h-5 w-5" />
              Lihat Harga Sembako
            </a>
            <a
              href={waLink("Halo Kelontong Sembako Murah, saya mau pesan sembako.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              <MessageCircle className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-lime-50/90">
            {points.map((point) => (
              <span key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-lime-300" />
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
