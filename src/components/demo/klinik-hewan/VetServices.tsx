import {
  HeartPulse,
  Home,
  MessageCircle,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface ServiceItem {
  icon: typeof Stethoscope;
  name: string;
  badge?: string;
  desc: string;
  priceStart: string;
}

const services: ServiceItem[] = [
  {
    icon: Syringe,
    name: "Vaksinasi & Imunisasi",
    badge: "Prioritas",
    desc: "Vaksin rabies, tricat, tetracat, parvovirus, dan distemper dengan buku vaksin resmi.",
    priceStart: "Mulai Rp 120.000",
  },
  {
    icon: Stethoscope,
    name: "Pemeriksaan & Pengobatan",
    badge: "Populer",
    desc: "Diagnosis menyeluruh, tes darah, USG hewan, serta terapi infeksi kulit, parasit, dan flu.",
    priceStart: "Mulai Rp 75.000",
  },
  {
    icon: Sparkles,
    name: "Grooming & Spa Anabul",
    badge: "Favorit",
    desc: "Mandi kutu/jamur, potong kuku, bersihkan telinga, perapihan bulu dengan air hangat.",
    priceStart: "Mulai Rp 60.000",
  },
  {
    icon: ShieldPlus,
    name: "Sterilisasi & Bedah Minor",
    desc: "Operasi kebiri jantan & kastrasi betina steril dengan pantauan anestesi profesional.",
    priceStart: "Mulai Rp 350.000",
  },
  {
    icon: Home,
    name: "Rawat Inap & Penitipan Pet",
    desc: "Kandang terpisah ber-AC, pengawasan dokter hewan 24 jam, dan update foto harian via WA.",
    priceStart: "Mulai Rp 50.000/hari",
  },
  {
    icon: HeartPulse,
    name: "Dental Care & Scaling Gigi",
    desc: "Pembersihan karang gigi ultrasonik aman untuk cegah bau mulut dan infeksi gusi anabul.",
    priceStart: "Mulai Rp 180.000",
  },
];

export default function VetServices() {
  return (
    <section id="layanan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Layanan Klinik
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Perawatan Medis & Salon Profesional
          </h2>
          <p className="mt-3 text-neutral-600">
            Ditangani langsung oleh tim dokter hewan dan perawat berpengalaman
            menggunakan peralatan medis higienis modern.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <item.icon className="h-6 w-6" />
                </div>
                {item.badge && (
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-lg font-bold text-neutral-900">
                {item.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{item.desc}</p>

              <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                <span className="text-sm font-semibold text-emerald-700">
                  {item.priceStart}
                </span>
                <a
                  href={waLink(
                    `Halo VetCare, saya ingin tanya info & jadwal layanan ${item.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-600">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Konsultasi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
