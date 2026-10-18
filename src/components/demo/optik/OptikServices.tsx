import { Droplets, Eye, Glasses, Wrench } from "lucide-react";

const services = [
  {
    icon: Eye,
    name: "Cek Mata & Resep",
    desc: "Pemeriksaan minus, silinder, dan mata tua oleh optometris berpengalaman. Gratis untuk pembelian kacamata.",
  },
  {
    icon: Glasses,
    name: "Lensa & Pasang Frame",
    desc: "Lensa single vision, progresif, hingga anti radiasi blue light, dipasang rapi sesuai resep Anda.",
  },
  {
    icon: Droplets,
    name: "Softlens & Perawatan",
    desc: "Konsultasi pemakaian softlens harian atau bulanan, lengkap dengan cairan pembersih dan tips aman.",
  },
  {
    icon: Wrench,
    name: "Servis & Penyetelan",
    desc: "Ganti baut, perbaiki tangkai patah, dan penyetelan frame agar nyaman dipakai seharian.",
  },
];

export default function OptikServices() {
  return (
    <section id="layanan" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Layanan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Semua kebutuhan mata dalam satu tempat
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                <service.icon className="h-6 w-6 text-indigo-700" />
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
