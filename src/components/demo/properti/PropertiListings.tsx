import { Bed, Bath, Compass, MapPin, Maximize2, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Listing {
  id: string;
  name: string;
  badge: string;
  location: string;
  price: string;
  installment: string;
  bedrooms: number;
  bathrooms: number;
  landArea: number;
  buildingArea: number;
  gradientClass: string;
}

const listings: Listing[] = [
  {
    id: "cluster-grand-harmoni",
    name: "Cluster Grand Harmoni",
    badge: "Siap Huni",
    location: "Kotakan, Situbondo",
    price: "Rp 485.000.000",
    installment: "Cicilan mulai 3,1 jt/bln",
    bedrooms: 3,
    bathrooms: 2,
    landArea: 96,
    buildingArea: 65,
    gradientClass: "from-teal-800 to-emerald-950",
  },
  {
    id: "puri-asri-regency",
    name: "Puri Asri Regency",
    badge: "Promo DP 0%",
    location: "Panji, Situbondo",
    price: "Rp 350.000.000",
    installment: "Cicilan mulai 2,3 jt/bln",
    bedrooms: 2,
    bathrooms: 1,
    landArea: 72,
    buildingArea: 45,
    gradientClass: "from-emerald-800 to-teal-950",
  },
  {
    id: "villa-argopuro-residence",
    name: "Villa Argopuro Residence",
    badge: "View Pegunungan",
    location: "Besuki, Situbondo",
    price: "Rp 650.000.000",
    installment: "Cicilan mulai 4,2 jt/bln",
    bedrooms: 3,
    bathrooms: 2,
    landArea: 120,
    buildingArea: 85,
    gradientClass: "from-teal-900 to-slate-900",
  },
  {
    id: "townhouse-cendana-city",
    name: "Townhouse Cendana City",
    badge: "Eksklusif Kota",
    location: "Pusat Kota, Situbondo",
    price: "Rp 820.000.000",
    installment: "Cicilan mulai 5,4 jt/bln",
    bedrooms: 4,
    bathrooms: 3,
    landArea: 130,
    buildingArea: 110,
    gradientClass: "from-slate-900 to-emerald-950",
  },
  {
    id: "griya-harmoni-permai",
    name: "Griya Harmoni Permai",
    badge: "Dekat Fasilitas Umum",
    location: "Panarukan, Situbondo",
    price: "Rp 295.000.000",
    installment: "Cicilan mulai 1,9 jt/bln",
    bedrooms: 2,
    bathrooms: 1,
    landArea: 66,
    buildingArea: 38,
    gradientClass: "from-emerald-900 to-slate-950",
  },
  {
    id: "green-royal-mansion",
    name: "Green Royal Mansion",
    badge: "Posisi Hook Luas",
    location: "Asembagus, Situbondo",
    price: "Rp 540.000.000",
    installment: "Cicilan mulai 3,5 jt/bln",
    bedrooms: 3,
    bathrooms: 2,
    landArea: 112,
    buildingArea: 75,
    gradientClass: "from-teal-900 to-slate-950",
  },
];

export default function PropertiListings() {
  return (
    <section id="listing" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Daftar Listing
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Pilihan Properti Pilihan &amp; Siap Huni
          </h2>
          <p className="mt-3 text-slate-600">
            Semua unit telah melewati proses verifikasi legalitas, sertifikat lengkap, dan siap proses KPR.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-shadow hover:shadow-lg">
              {/* Visual Card Header without external image */}
              <div
                className={`relative flex h-48 flex-col justify-between bg-linear-to-br ${item.gradientClass} p-5 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-xs">
                    {item.badge}
                  </span>
                  <span className="text-2xl">🏡</span>
                </div>
                <div>
                  <p className="text-xs text-teal-200 uppercase tracking-wider">
                    {item.installment}
                  </p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                    {item.price}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 shrink-0 text-teal-600" />
                  {item.location}
                </p>

                {/* Specs */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 text-center text-xs text-slate-600">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="flex items-center gap-1 font-semibold text-slate-900">
                      <Bed className="h-4 w-4 text-teal-600" />
                      {item.bedrooms} KT
                    </span>
                    <span className="text-[11px] text-slate-600">Kamar</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 border-x border-slate-100">
                    <span className="flex items-center gap-1 font-semibold text-slate-900">
                      <Bath className="h-4 w-4 text-teal-600" />
                      {item.bathrooms} KM
                    </span>
                    <span className="text-[11px] text-slate-600">K. Mandi</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="flex items-center gap-1 font-semibold text-slate-900">
                      <Maximize2 className="h-4 w-4 text-teal-600" />
                      {item.buildingArea}/{item.landArea}
                    </span>
                    <span className="text-[11px] text-slate-600">LB / LT (m²)</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-6 pt-2">
                  <a
                    href={waLink(
                      `Halo Griya Andalan Properti, saya tertarik dan ingin tanya rumah: ${item.name} (${item.location}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600">
                    <MessageCircle className="h-4 w-4" />
                    Tanya Rumah Ini
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
