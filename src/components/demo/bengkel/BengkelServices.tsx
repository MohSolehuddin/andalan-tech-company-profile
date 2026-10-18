import {
  Wrench,
  Gauge,
  Sparkles,
  Snowflake,
  ShieldCheck,
  Disc,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  icon: typeof Wrench;
}

const services: ServiceItem[] = [
  {
    id: "ganti-oli",
    name: "Ganti Oli & Filter",
    category: "Perawatan Rutin",
    price: "Mulai Rp 150.000",
    duration: "25–35 Menit",
    description: "Penggantian oli mesin kualitas terbaik + kuras & cek filter oli.",
    icon: Wrench,
  },
  {
    id: "tune-up",
    name: "Tune Up & Injeksi",
    category: "Mesin",
    price: "Mulai Rp 250.000",
    duration: "45–60 Menit",
    description: "Pembersihan throttle body, busi, kalibrasi sistem injeksi, dan scan ECU.",
    icon: Gauge,
  },
  {
    id: "servis-ac",
    name: "Servis AC Kendaraan",
    category: "Kenyamanan",
    price: "Mulai Rp 200.000",
    duration: "40–60 Menit",
    description: "Flushing freon, cuci evaporator, ganti cabin filter, dan antibakteri.",
    icon: Snowflake,
  },
  {
    id: "rem-kaki",
    name: "Servis Rem & Kaki-Kaki",
    category: "Keamanan",
    price: "Mulai Rp 175.000",
    duration: "45–60 Menit",
    description: "Bleeding minyak rem, ganti kampas, balancing roda, dan cek suspensi.",
    icon: Disc,
  },
  {
    id: "aki-kelistrikan",
    name: "Cek Kelistrikan & Aki",
    category: "Elektrikal",
    price: "Mulai Rp 100.000",
    duration: "20–30 Menit",
    description: "Pengecekan alternator, tegangan aki digital, sekring, dan lampu utama.",
    icon: Sparkles,
  },
  {
    id: "inspeksi-total",
    name: "Inspeksi 45 Titik Total",
    category: "Medical Checkup",
    price: "Mulai Rp 120.000",
    duration: "30–45 Menit",
    description: "Pemeriksaan menyeluruh sebelum perjalanan jauh dengan laporan detail.",
    icon: ShieldCheck,
  },
];

export default function BengkelServices() {
  return (
    <section id="layanan" className="bg-zinc-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Layanan & Biaya
          </p>
          <h2 className="mt-2 text-3xl font-bold text-zinc-900 md:text-4xl">
            Solusi servis lengkap & harga transparan
          </h2>
          <p className="mt-3 text-zinc-600">
            Tidak ada biaya tersembunyi. Semua estimasi dikonfirmasi mekanik
            sebelum pengerjaan dimulai.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-zinc-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-100 pt-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-zinc-500">Estimasi Biaya</span>
                    <p className="text-lg font-bold text-red-600">{service.price}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{service.duration}</span>
                </div>

                <a
                  href={waLink(
                    `Halo AutoPrima Motor, saya ingin konsultasi & booking untuk servis ${service.name} (${service.price}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600">
                  Pilih Layanan Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
