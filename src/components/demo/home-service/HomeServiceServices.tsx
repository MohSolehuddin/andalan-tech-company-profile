import {
  Wind,
  Wrench,
  Home,
  Building2,
  Droplets,
  Snowflake,
} from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Cuci AC",
    desc: "Cuci indoor & outdoor, vakum, cek freon, dan tes suhu sebelum selesai.",
  },
  {
    icon: Wrench,
    title: "Bongkar-Pasang AC",
    desc: "Relokasi atau pemasangan unit baru, lengkap dengan perapian pipa.",
  },
  {
    icon: Home,
    title: "Cleaning Rumah",
    desc: "Bersih kamar, dapur, kamar mandi, kasur, sofa, dan kaca rumah.",
  },
  {
    icon: Building2,
    title: "Cleaning Kantor",
    desc: "Paket harian, mingguan, atau bulanan untuk kantor dan ruko.",
  },
  {
    icon: Droplets,
    title: "Plumbing",
    desc: "Perbaikan bocor, saluran mampet, keran, dan pompa air.",
  },
  {
    icon: Snowflake,
    title: "Isi Freon & Perbaikan",
    desc: "Isi freon R32/R410 dan servis kerusakan AC ringan maupun berat.",
  },
];

export default function HomeServiceServices() {
  return (
    <section id="layanan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Layanan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Satu tim untuk AC dan kebersihan rumah
          </h2>
          <p className="mt-3 text-neutral-600">
            Pilih layanan yang Anda butuhkan — semua dikerjakan teknisi
            terlatih dengan harga yang disepakati di awal.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                <service.icon className="h-6 w-6 text-sky-700" />
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
