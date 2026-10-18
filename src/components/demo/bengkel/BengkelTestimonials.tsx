import { Star } from "lucide-react";

const stats = [
  { value: "4.500+", label: "Kendaraan Tertangani" },
  { value: "4.9 / 5", label: "Rating Kepuasan Pelanggan" },
  { value: "100%", label: "Suku Cadang Asli & Teruji" },
  { value: "14 Hari", label: "Garansi Pengerjaan Servis" },
];

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Honda HR-V 2021",
    comment:
      "Servis AC dan tune up di AutoPrima sangat memuaskan. AC yang tadinya bau apek langsung dingin segar, dan tarikan mobil jadi enteng lagi.",
  },
  {
    name: "Rian Firmansyah",
    role: "Pemilik Yamaha NMAX 2022",
    comment:
      "Ganti oli dan servis CVT pengerjaannya cepat banget. Mekaniknya jujur dan jelasin kondisi v-belt tanpa maksa ganti part yang masih bagus.",
  },
  {
    name: "Hendra Wijaya",
    role: "Pemilik Toyota Innova Reborn",
    comment:
      "Paling suka dengan transparansi biayanya. Estimasi dikonfirmasi di awal dan ada garansi 14 hari. Ruang tunggunya juga bersih dan ber-AC.",
  },
];

export default function BengkelTestimonials() {
  return (
    <section className="bg-zinc-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-xs md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-red-600 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-600 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Testimoni Pelanggan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-zinc-900 md:text-4xl">
            Dipercaya ribuan pengendara setia
          </h2>
          <p className="mt-3 text-zinc-600">
            Simak ulasan langsung dari pelanggan yang mempercayakan kendaraannya kepada kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs">
              <div>
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-100 pt-4">
                <p className="font-bold text-zinc-900">{item.name}</p>
                <p className="text-xs text-zinc-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
