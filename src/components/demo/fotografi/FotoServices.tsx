import {
  Heart,
  Gem,
  Package,
  PartyPopper,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding",
    desc: "Dokumentasi akad dan resepsi seharian dengan dua fotografer.",
  },
  {
    icon: Gem,
    title: "Prewedding",
    desc: "Sesi romantis di lokasi pilihan, dari studio sampai alam terbuka.",
  },
  {
    icon: Package,
    title: "Foto Produk",
    desc: "Foto katalog UMKM dan brand dengan tata cahaya rapi siap jual.",
  },
  {
    icon: PartyPopper,
    title: "Event",
    desc: "Seminar, ulang tahun, dan gathering dengan liputan cepat.",
  },
  {
    icon: GraduationCap,
    title: "Wisuda",
    desc: "Sesi foto wisuda personal maupun keluarga di studio kami.",
  },
];

export default function FotoServices() {
  return (
    <section id="layanan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-700">
            Layanan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Satu studio untuk semua momen penting
          </h2>
          <p className="mt-3 text-neutral-600">
            Pilih jenis sesi yang Anda butuhkan, tim kami membantu menyiapkan
            konsep, lokasi, dan wardrobe-nya.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100">
                <service.icon className="h-6 w-6 text-zinc-800" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">
                {service.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
