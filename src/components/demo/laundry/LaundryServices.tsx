import {
  BedDouble,
  Briefcase,
  Footprints,
  Shirt,
  Timer,
  Wind,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface ServiceItem {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  icon: typeof Shirt;
}

const services: ServiceItem[] = [
  {
    id: "cuci-kering",
    name: "Cuci Kering",
    price: "Rp 7.000 / kg",
    duration: "2 hari",
    description: "Dicuci bersih, dikeringkan, dan dilipat rapi siap masuk lemari.",
    icon: Wind,
  },
  {
    id: "cuci-setrika",
    name: "Cuci Setrika",
    price: "Rp 10.000 / kg",
    duration: "2 hari",
    description: "Paket lengkap: cuci, kering, setrika uap, dan pewangi tahan lama.",
    icon: Shirt,
  },
  {
    id: "express-6-jam",
    name: "Express 6 Jam",
    price: "Rp 15.000 / kg",
    duration: "6 jam",
    description: "Untuk kebutuhan mendesak. Jemput pagi, kembali sore hari yang sama.",
    icon: Timer,
  },
  {
    id: "cuci-sepatu",
    name: "Cuci Sepatu",
    price: "Rp 25.000 / pasang",
    duration: "3 hari",
    description: "Deep clean sol dan upper, aman untuk sneakers, kanvas, dan kulit.",
    icon: Footprints,
  },
  {
    id: "cuci-tas",
    name: "Cuci Tas",
    price: "Rp 30.000 / pcs",
    duration: "4 hari",
    description: "Pembersihan lembut untuk tas kerja, ransel, dan tas branded.",
    icon: Briefcase,
  },
  {
    id: "bed-cover",
    name: "Bed Cover & Selimut",
    price: "Rp 35.000 / pcs",
    duration: "3 hari",
    description: "Dicuci terpisah dengan deterjen khusus, wangi dan bebas tungau.",
    icon: BedDouble,
  },
];

export default function LaundryServices() {
  return (
    <section id="layanan" className="bg-sky-50/60 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Layanan Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Semua kebutuhan cuci, satu tempat
          </h2>
          <p className="mt-3 text-neutral-600">
            Dikerjakan mesin modern dengan air bersih, deterjen hypoallergenic,
            dan pengeringan yang tepat agar warna tetap awet.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                    <service.icon className="h-6 w-6 text-sky-700" />
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {service.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {service.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <p className="font-bold text-sky-600">{service.price}</p>
                <a
                  href={waLink(
                    `Halo Kilat Bersih Laundry, saya mau pesan ${service.name} (${service.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600">
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
