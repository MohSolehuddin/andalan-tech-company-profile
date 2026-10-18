import { Droplets, Flower2, Footprints, HandHeart, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const services = [
  {
    icon: HandHeart,
    name: "Body Massage",
    duration: "60 menit",
    price: "Rp 120.000",
    desc: "Pijat relaksasi seluruh tubuh dengan minyak aroma terapi untuk melepas pegal dan stres.",
  },
  {
    icon: Footprints,
    name: "Reflexology",
    duration: "45 menit",
    price: "Rp 90.000",
    desc: "Pijat titik refleksi kaki dan betis untuk melancarkan sirkulasi dan memulihkan stamina.",
  },
  {
    icon: Flower2,
    name: "Lulur & Body Scrub",
    duration: "60 menit",
    price: "Rp 135.000",
    desc: "Eksfoliasi kulit dengan lulur rempah alami, dilanjutkan masker dan body lotion.",
  },
  {
    icon: Sparkles,
    name: "Facial Glow",
    duration: "60 menit",
    price: "Rp 150.000",
    desc: "Deep cleansing, massage wajah, dan masker pencerah untuk kulit segar bercahaya.",
  },
];

export default function SpaServices() {
  return (
    <section id="layanan" className="bg-lime-50/50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-700">
            Layanan Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Perawatan tubuh yang menenangkan
          </h2>
          <p className="mt-3 text-neutral-600">
            Dipandu terapis berpengalaman dengan produk alami pilihan, dari
            pijat favorit hingga perawatan kulit lengkap.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col justify-between rounded-2xl border border-lime-100 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-100">
                    <service.icon className="h-6 w-6 text-lime-700" />
                  </div>
                  <span className="rounded-full bg-lime-50 px-3 py-1 text-xs font-medium text-lime-700">
                    {service.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-lime-50 pt-4">
                <p className="font-bold text-lime-700">{service.price}</p>
                <a
                  href={waLink(
                    `Halo Ayu Spa & Reflexology, saya mau booking ${service.name} (${service.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-lime-600">
                  <Droplets className="h-4 w-4" />
                  Pesan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
