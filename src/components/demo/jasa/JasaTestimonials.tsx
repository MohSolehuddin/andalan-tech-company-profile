import { Quote, Award, Users, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Award, value: "120+", label: "Proyek selesai" },
  { icon: Users, value: "50+", label: "Klien aktif" },
  { icon: ThumbsUp, value: "4.9/5", label: "Rating kepuasan" },
];

const testimonials = [
  {
    name: "Bu Ratna — Pemilik Katering",
    text: "Sejak rebranding, pesanan naik dua kali lipat. Sekarang pelanggan langsung tahu kami bedanya di mana.",
  },
  {
    name: "Mas Fajar — Konsultan Pajak",
    text: "Kontennya rapi dan konsisten. Calon klien datang sudah yakin sebelum chat pertama.",
  },
  {
    name: "Kak Sinta — Mentor Desain",
    text: "Landing page kelas online saya jadi jauh lebih meyakinkan. Pendaftar naik tiap batch.",
  },
];

export default function JasaTestimonials() {
  return (
    <section className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                <stat.icon className="h-6 w-6 text-orange-700" />
              </div>
              <p className="mt-4 text-3xl font-bold text-neutral-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-2xl bg-white p-6 shadow-sm">
              <Quote className="h-6 w-6 text-orange-500" />
              <blockquote className="mt-3 text-neutral-700">
                {item.text}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-neutral-900">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
