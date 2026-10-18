import { Briefcase, Coffee, Home } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Desain Rumah Tinggal",
    desc: "Tata ruang, material, dan pencahayaan yang hangat untuk hunian keluarga — dari kamar utama, dapur, sampai taman.",
    points: [
      "Konsep & moodboard sesuai gaya Anda",
      "Gambar 3D per ruangan",
      "Pendampingan tukang hingga finishing",
    ],
    accent: "bg-rose-100 text-rose-700",
  },
  {
    icon: Briefcase,
    title: "Kantor & Ruang Kerja",
    desc: "Ruang kerja produktif dan rapi untuk startup, klinik, maupun instansi, dengan zonasi dan penyimpanan yang efisien.",
    points: [
      "Layout kerja ergonomis & efisien",
      "Identitas brand masuk ke interior",
      "Estimasi biaya per area kerja",
    ],
    accent: "bg-orange-100 text-orange-700",
  },
  {
    icon: Coffee,
    title: "Kafe, Restoran & Toko",
    desc: "Desain ruang usaha yang instagramable namun tetap nyaman, siap mendukung alur pelayanan dan kenyamanan pengunjung.",
    points: [
      "Konsep visual & focal point ruangan",
      "Zonasi area tamu dan pelayanan",
      "Rekomendasi material tahan lama",
    ],
    accent: "bg-amber-100 text-amber-700",
  },
];

export default function InteriorServices() {
  return (
    <section id="layanan" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
            Layanan Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Desain untuk Setiap Ruang
          </h2>
          <p className="mt-3 text-slate-600">
            Satu studio untuk kebutuhan interior hunian maupun usaha, dikerjakan
            desainer berpengalaman dengan alur kerja yang jelas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:border-rose-300 hover:shadow-md">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.accent}`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.desc}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
