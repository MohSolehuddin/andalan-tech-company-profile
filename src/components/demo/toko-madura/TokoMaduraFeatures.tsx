import { Clock, Coins, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Buka 24 Jam Nonstop",
    desc: "Kapan pun butuh beras, mie, atau gas habis tengah malam, toko selalu buka.",
  },
  {
    icon: Coins,
    title: "Harga Grosir & Eceran",
    desc: "Belanja eceran tetap terjangkau, beli partai/kartonan dapat harga grosir murah.",
  },
  {
    icon: Truck,
    title: "Antar Cepat ke Rumah",
    desc: "Pesanan diantar langsung dalam hitungan menit ke wilayah sekitar toko.",
  },
  {
    icon: ShieldCheck,
    title: "Barang Segar & Berkualitas",
    desc: "Beras pulen pilihan, telur ayam segar harian, dan produk kemasan resmi.",
  },
];

export default function TokoMaduraFeatures() {
  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Kenapa Belanja di Sini?
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Solusi Kebutuhan Harian Tanpa Ribet
          </h2>
          <p className="mt-3 text-neutral-600">
            Karakter khas Toko Madura: lengkap, ramah, selalu siap 24 jam dengan
            kemudahan pesan antar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
