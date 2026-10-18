import { Star } from "lucide-react";

const stats = [
  { value: "3.200+", label: "Klien Puas & Setia" },
  { value: "4.9 / 5", label: "Rating Kepuasan Google" },
  { value: "8+ Tahun", label: "Pengalaman di Industri" },
  { value: "100%", label: "Produk Aman & BPOM" },
];

const testimonials = [
  {
    name: "Clarissa Valery",
    treatment: "Smoothing Keratin & Haircut",
    comment:
      "Hasil smoothing-nya bener-bener natural, nggak kaku sama sekali. Rambut yang tadinya mengembang dan susah diatur sekarang gampang banget disisir dan wangi tahan lama!",
  },
  {
    name: "Dinda Anggraini",
    treatment: "Facial Glow & Manicure Gel",
    comment:
      "Tempatnya estetik, bersih, dan wangi aromaterapi. Terapisnya teliti banget bersihin komedo tanpa rasa sakit yang lebay. Nail art gel-nya juga rapi dan awet sebulan lebih.",
  },
  {
    name: "Rania Safitri",
    treatment: "Makeup Wisuda & Hairdo",
    comment:
      "Puas banget pakai jasa makeup di sini untuk wisuda! Riasannya flawless tahan dari pagi sampai sore tanpa crack, cocok banget sama tone kulitku. Banyak yang muji!",
  },
];

export default function SalonTestimonials() {
  return (
    <section className="bg-rose-50/40 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 rounded-xl border border-rose-100 bg-white p-8 shadow-xs md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-rose-600 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-neutral-600 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
            Testimoni Pelanggan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Dipercaya wanita aktif dan pecinta kecantikan
          </h2>
          <p className="mt-3 text-neutral-600">
            Kisah kepuasan nyata dari mereka yang telah mempercayakan perawatan
            diri di Glow & Glam Salon.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-rose-100 bg-white p-6 shadow-xs">
              <div>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-rose-50 pt-4">
                <p className="font-bold text-neutral-900">{item.name}</p>
                <p className="text-xs text-rose-500 font-medium">
                  {item.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
