import { Crown, Droplets, Palette, Scissors, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  icon: typeof Scissors;
}

const services: ServiceItem[] = [
  {
    id: "haircut",
    name: "Potong Rambut & Styling",
    category: "Haircut",
    price: "Mulai Rp 55.000",
    duration: "30-45 menit",
    description:
      "Konsultasi bentuk wajah, potong presisi sesuai request, cuci rambut, dan finishing pomade atau clay tahan seharian.",
    icon: Scissors,
  },
  {
    id: "clean-shave",
    name: "Cukur Bersih & Beard Trim",
    category: "Shaving",
    price: "Mulai Rp 35.000",
    duration: "20-40 menit",
    description:
      "Clean shave dengan handuk hangat, krim cukur premium, aftershave dingin, serta perapian garis jenggot dan kumis.",
    icon: Droplets,
  },
  {
    id: "hair-coloring",
    name: "Hair Coloring & Gray Blending",
    category: "Coloring",
    price: "Mulai Rp 120.000",
    duration: "60-90 menit",
    description:
      "Pewarnaan rambut pria, penutup uban natural, hingga highlight subtle dengan produk aman untuk kulit kepala.",
    icon: Palette,
  },
  {
    id: "scalp-treatment",
    name: "Treatment & Scalp Care",
    category: "Treatment",
    price: "Mulai Rp 85.000",
    duration: "30-60 menit",
    description:
      "Creambath, hair tonic, pijat kepala, dan perawatan kulit kepala untuk rambut sehat, kuat, dan bebas ketombe.",
    icon: Sparkles,
  },
  {
    id: "grooming-package",
    name: "Paket Grooming Lengkap",
    category: "Package",
    price: "Mulai Rp 185.000",
    duration: "90-120 menit",
    description:
      "Haircut, clean shave handuk hangat, creambath, ear & nose wax, plus hair tonic dalam satu sesi perawatan utuh.",
    icon: Crown,
  },
];

export default function BarbershopServices() {
  return (
    <section id="layanan" className="bg-zinc-50/70 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Layanan Unggulan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Semua kebutuhan grooming pria di satu kursi
          </h2>
          <p className="mt-3 text-neutral-600">
            Dikerjakan oleh barber berpengalaman dengan alat steril, produk
            perawatan pria berkelas, dan suasana santai khas barbershop.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900">
                    <service.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                    {service.duration}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-semibold tracking-wide text-amber-600 uppercase">
                    {service.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-neutral-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-zinc-100 pt-4">
                <p className="font-bold text-amber-600">{service.price}</p>
                <a
                  href={waLink(
                    `Halo Gents & Blade Barbershop, saya mau booking layanan ${service.name} (${service.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                  Booking via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
