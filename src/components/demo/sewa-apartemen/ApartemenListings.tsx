import { Bed, Bath, Maximize2, MessageCircle, Check } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface RentalUnit {
  id: string;
  name: string;
  type: "Apartemen" | "Kost";
  badge: string;
  monthlyPrice: string;
  deposit: string;
  area: string;
  bedType: string;
  bathType: string;
  features: string[];
  emoji: string;
  gradientClass: string;
}

const units: RentalUnit[] = [
  {
    id: "studio-deluxe",
    name: "Studio Deluxe Apartemen",
    type: "Apartemen",
    badge: "Paling Diminati",
    monthlyPrice: "Rp 2.800.000 / bln",
    deposit: "Deposit 1 bulan",
    area: "24 m²",
    bedType: "Queen Bed",
    bathType: "KM Dalam + Water Heater",
    features: ["Kitchenette & Kulkas", "Smart TV 43 Inch", "Balkon Kota"],
    emoji: "🏢",
    gradientClass: "from-indigo-900 to-slate-950",
  },
  {
    id: "kost-putra-executive",
    name: "Kost Eksklusif Putra - Single",
    type: "Kost",
    badge: "Bebas Listrik",
    monthlyPrice: "Rp 1.450.000 / bln",
    deposit: "Deposit Rp 500.000",
    area: "16 m²",
    bedType: "Single Bed 120x200",
    bathType: "KM Dalam",
    features: ["AC & WiFi 100 Mbps", "Meja Kerja & Lemari", "Parkir Motor Luas"],
    emoji: "🛏️",
    gradientClass: "from-slate-800 to-indigo-950",
  },
  {
    id: "kost-putri-queen",
    name: "Kost Eksklusif Putri - Queen",
    type: "Kost",
    badge: "Akses Smart Card",
    monthlyPrice: "Rp 1.650.000 / bln",
    deposit: "Deposit Rp 500.000",
    area: "18 m²",
    bedType: "Queen Bed 160x200",
    bathType: "KM Dalam + Shower",
    features: ["CCTV & Penjaga 24 Jam", "Water Heater", "Dapur Bersama"],
    emoji: "🌸",
    gradientClass: "from-slate-800 to-indigo-950",
  },
  {
    id: "suite-2br-family",
    name: "2BR Executive Suite Apartemen",
    type: "Apartemen",
    badge: "Unit Luas",
    monthlyPrice: "Rp 4.500.000 / bln",
    deposit: "Deposit 1 bulan",
    area: "48 m²",
    bedType: "2 Kamar Tidur",
    bathType: "1 KM Utama + 1 KM Tamu",
    features: ["Full Kitchen Set", "Living Room Luas", "Mesin Cuci Pribadi"],
    emoji: "🏙️",
    gradientClass: "from-slate-900 to-indigo-950",
  },
  {
    id: "kost-vip-balcony",
    name: "Kost VIP Studio with Balcony",
    type: "Kost",
    badge: "Ada Balkon Pribadi",
    monthlyPrice: "Rp 1.950.000 / bln",
    deposit: "Deposit Rp 750.000",
    area: "20 m²",
    bedType: "Queen Bed 160x200",
    bathType: "KM Dalam + Water Heater",
    features: ["Kulkas Mini Pribadi", "Balkon Santai", "Cleaning 1x Seminggu"],
    emoji: "🌿",
    gradientClass: "from-indigo-900 to-slate-900",
  },
  {
    id: "loft-modern-duplex",
    name: "Apartemen Loft Mezzanine",
    type: "Apartemen",
    badge: "Desain Estetik",
    monthlyPrice: "Rp 3.600.000 / bln",
    deposit: "Deposit 1 bulan",
    area: "34 m²",
    bedType: "Mezzanine Queen Bed",
    bathType: "KM Dalam Modern",
    features: ["High Ceiling Aesthetic", "Workstation Ergonomis", "Smart Door Lock"],
    emoji: "✨",
    gradientClass: "from-indigo-900 to-slate-950",
  },
];

export default function ApartemenListings() {
  return (
    <section id="listing" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            Katalog Pilihan Unit
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Sewa Apartemen &amp; Kost Siap Huni
          </h2>
          <p className="mt-3 text-slate-600">
            Seluruh unit dilengkapi perabot lengkap (full furnished), koneksi internet cepat,
            dan pemeliharaan rutin. Tinggal bawa koper!
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((unit) => (
            <div
              key={unit.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-shadow hover:shadow-lg">
              {/* Visual Card Header */}
              <div
                className={`relative flex h-44 flex-col justify-between bg-linear-to-br ${unit.gradientClass} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-xs">
                    {unit.badge}
                  </span>
                  <span className="text-2xl">{unit.emoji}</span>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-indigo-200">
                    {unit.type} · {unit.deposit}
                  </p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                    {unit.monthlyPrice}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  {unit.name}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>{unit.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>{unit.bedType}</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span className="truncate">{unit.bathType}</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Fasilitas Unggulan:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                    {unit.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href={waLink(`Halo Huni Apartemen & Kost, saya tertarik dengan unit "${unit.name}" (${unit.monthlyPrice}). Apakah unit ini masih tersedia?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-50 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600">
                    <MessageCircle className="h-4 w-4" />
                    Tanya Unit via WA
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
