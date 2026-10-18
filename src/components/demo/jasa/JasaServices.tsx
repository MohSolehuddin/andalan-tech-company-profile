import {
  Compass,
  PenLine,
  Palette,
  Megaphone,
  Globe,
  Camera,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Brand Strategy",
    desc: "Riset positioning, pesan utama, dan peta konten personal brand Anda.",
  },
  {
    icon: PenLine,
    title: "Copywriting & Konten",
    desc: "Naskah caption, carousel, dan artikel yang menjual keahlian Anda.",
  },
  {
    icon: Palette,
    title: "Identitas Visual",
    desc: "Logo, palet warna, dan template grafis agar tampilan konsisten.",
  },
  {
    icon: Megaphone,
    title: "Kelola Sosial Media",
    desc: "Kalender konten, jadwal posting, dan laporan performa bulanan.",
  },
  {
    icon: Globe,
    title: "Website Profil",
    desc: "Landing page personal brand yang cepat, rapi, dan siap konversi.",
  },
  {
    icon: Camera,
    title: "Foto & Video Profil",
    desc: "Sesi foto dan video singkat untuk memperkuat kredibilitas Anda.",
  },
];

export default function JasaServices() {
  return (
    <section id="layanan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Layanan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Satu partner untuk seluruh kebutuhan brand
          </h2>
          <p className="mt-3 text-neutral-600">
            Pilih layanan yang Anda butuhkan, atau ambil paket lengkap untuk
            hasil yang lebih konsisten.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                <service.icon className="h-6 w-6 text-orange-700" />
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
