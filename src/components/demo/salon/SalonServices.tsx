import {
  Droplets,
  HeartHandshake,
  Paintbrush,
  Scissors,
  Wand2,
} from "lucide-react";
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
    id: "haircut-styling",
    name: "Potong & Styling Rambut",
    category: "Hair Treatment",
    price: "Mulai Rp 75.000",
    duration: "45-60 menit",
    description:
      "Konsultasi bentuk wajah, cuci rambut relaksasi, haircut presisi, dan blowout styling tahan lama.",
    icon: Scissors,
  },
  {
    id: "rebonding-smoothing",
    name: "Rebonding & Smoothing Keratin",
    category: "Hair Texture",
    price: "Mulai Rp 250.000",
    duration: "2-3 jam",
    description:
      "Pelurusan rambut natural anti-lepek dengan nutrisi keratin cair, hasil lembut, berkilau, dan bebas kusut.",
    icon: Wand2,
  },
  {
    id: "facial-glow",
    name: "Facial & Glow Treatment",
    category: "Skin & Face",
    price: "Mulai Rp 175.000",
    duration: "60-90 menit",
    description:
      "Deep cleansing komedo, eksfoliasi lembut, massage wajah melancarkan sirkulasi, dan serum brightening.",
    icon: Droplets,
  },
  {
    id: "nail-art",
    name: "Nail Art & Mani-Pedi",
    category: "Nails Care",
    price: "Mulai Rp 95.000",
    duration: "60-75 menit",
    description:
      "Perawatan kutikula, scrub tangan & kaki, gel polish awet hingga 4 minggu, serta ratusan pilihan motif custom.",
    icon: Paintbrush,
  },
  {
    id: "makeup-hairdo",
    name: "Makeup & Bridal / Wisuda",
    category: "Makeup Art",
    price: "Mulai Rp 350.000",
    duration: "90-120 menit",
    description:
      "Riasan flawless tahan seharian untuk wisuda, lamaran, pre-wedding, maupun acara pesta formal.",
    icon: HeartHandshake,
  },
];

export default function SalonServices() {
  return (
    <section id="layanan" className="bg-rose-50/50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
            Layanan Unggulan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Perawatan menyeluruh dari rambut hingga kuku
          </h2>
          <p className="mt-3 text-neutral-600">
            Dikerjakan oleh beauty therapist berpengalaman dengan teknik terkini
            dan produk berkelas internasional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-rose-100 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100">
                    <service.icon className="h-6 w-6 text-rose-600" />
                  </div>
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
                    {service.duration}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-semibold tracking-wide text-rose-500 uppercase">
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

              <div className="mt-6 border-t border-rose-50 pt-4">
                <p className="font-bold text-rose-600">{service.price}</p>
                <a
                  href={waLink(
                    `Halo Glow & Glam Salon, saya mau reservasi treatment ${service.name} (${service.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                  Reservasi via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
