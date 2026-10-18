import { ChefHat, Leaf, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Bahan Segar",
    desc: "Belanja tiap pagi langsung dari pasar lokal.",
  },
  {
    icon: ChefHat,
    title: "Resep Asli",
    desc: "Bumbu warisan keluarga, tanpa MSG berlebih.",
  },
  {
    icon: Truck,
    title: "Antar Cepat",
    desc: "Pesan online, kami antar hangat ke rumah Anda.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=60",
];

export default function RestoAbout() {
  return (
    <section className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                <feature.icon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((src, index) => (
            <div
              key={src}
              className={`overflow-hidden rounded-2xl ${
                index === 0 ? "col-span-2 md:col-span-1" : ""
              }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Galeri Rasa Nusantara"
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
