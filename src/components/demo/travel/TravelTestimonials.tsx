import { Star } from "lucide-react";

const stats = [
  { value: "1.200+", label: "Wisatawan berangkat" },
  { value: "4.9/5", label: "Rating kepuasan" },
  { value: "45+", label: "Destinasi tersedia" },
  { value: "98%", label: "Itinerary tepat waktu" },
];

const testimonials = [
  {
    id: "rina",
    name: "Rina Puspitasari",
    origin: "Surabaya",
    trip: "Bali Escape 4D3N",
    quote:
      "Itinerary-nya sangat rapi dan guide-nya sabar banget sama anak-anak. Hotel bersih, transportasi selalu on time. Liburan pertama yang benar-benar bebas repot!",
  },
  {
    id: "bima",
    name: "Bima Ardianto",
    origin: "Sidoarjo",
    trip: "Bromo Sunrise 3D2N",
    quote:
      "Jam 3 pagi dijemput tepat waktu, jeep-nya nyaman, dan guide tahu spot foto terbaik. Sunrise Penanjakan jadi momen yang tidak akan kami lupakan.",
  },
  {
    id: "clara",
    name: "Clara Wijaya",
    origin: "Malang",
    trip: "Labuan Bajo Sailing 4D3N",
    quote:
      "Trip kapal Phinisi-nya luar biasa. Makanan enak, kru ramah, dan rute Padar-Komodo sesuai jadwal. Worth every rupiah, pasti repeat order!",
  },
];

export default function TravelTestimonials() {
  return (
    <section className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
            Testimoni Wisatawan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Cerita Bahagia dari Perjalanan Mereka
          </h2>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-bold text-cyan-700">{item.value}</p>
              <p className="mt-1 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-cyan-300 hover:shadow-md">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-slate-600 leading-relaxed">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">
                  {item.origin} — {item.trip}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
