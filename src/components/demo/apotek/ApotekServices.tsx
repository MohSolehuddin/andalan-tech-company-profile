import {
  Bike,
  HeartPulse,
  MessageSquareText,
  Pill,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Pill,
    name: "Obat Resep & Bebas",
    desc: "Obat resep dokter maupun obat bebas tersedia lengkap dan asli.",
  },
  {
    icon: Sparkles,
    name: "Vitamin & Suplemen",
    desc: "Multivitamin, imun booster, dan suplemen harian untuk keluarga.",
  },
  {
    icon: Stethoscope,
    name: "Alat Kesehatan",
    desc: "Termometer, tensimeter, nebulizer, hingga alat bantu perawatan.",
  },
  {
    icon: Bike,
    name: "Antar / Ojek Obat",
    desc: "Pesanan diantar cepat ke rumah atau kantor area Jabodetabek.",
  },
  {
    icon: MessageSquareText,
    name: "Konsultasi Apoteker",
    desc: "Tanya dosis, aturan minum, dan interaksi obat langsung via chat.",
  },
  {
    icon: HeartPulse,
    name: "Cek Tensi & Gula Darah",
    desc: "Pemeriksaan ringan di gerai dengan hasil cepat dan akurat.",
  },
];

export default function ApotekServices() {
  return (
    <section id="layanan" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Layanan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Kebutuhan sehat Anda, satu tempat
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                <service.icon className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {service.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
