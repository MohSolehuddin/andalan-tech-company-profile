import { Building, Calendar, Check, MessageCircle, Plane, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface PackageItem {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  emoji: string;
  duration: string;
  price: string;
  flight: string;
  hotel: string;
  visaNote: string;
  features: string[];
}

const packages: PackageItem[] = [
  {
    id: "umroh-reguler",
    name: "Umroh Reguler 9 Hari",
    badge: "Paling Diminati",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    emoji: "🕋",
    duration: "9 Hari Perjalanan",
    price: "Rp 26.500.000",
    flight: "Saudia Airlines (Direct CGK - JED)",
    hotel: "Makkah ★4 (250m) & Madinah ★4 (150m)",
    visaNote: "Visa Umroh Resmi & Asuransi Perjalanan",
    features: [
      "Tiket pesawat PP direct tanpa transit",
      "Makan 3x sehari fullboard masakan Indonesia",
      "Bimbingan muthawif mukim bersertifikat",
      "Ziarah kota Makkah, Madinah, dan Jabal Nur",
      "Perlengkapan koper eksklusif & kain ihram",
    ],
  },
  {
    id: "umroh-vip",
    name: "Umroh VIP Bintang 5 (12 Hari)",
    badge: "Fasilitas Mewah",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    emoji: "✨",
    duration: "12 Hari Perjalanan",
    price: "Rp 35.800.000",
    flight: "Garuda Indonesia Direct",
    hotel: "Pullman ZamZam (Pelataran) & Rawda Royal Inn ★5",
    visaNote: "Visa Elektronik Cepat & Asuransi Proteksi Penuh",
    features: [
      "Hotel 0 meter dari pelataran Masjidil Haram",
      "Kereta Cepat Haramain Express Makkah-Madinah",
      "Makan prasmanan hotel bintang 5 menu nusantara",
      "City tour ziarah bonus wisata sejarah Thaif",
      "Layanan pendorong kursi roda jika diperlukan",
    ],
  },
  {
    id: "umroh-ramadhan",
    name: "Umroh Awal Ramadhan 12 Hari",
    badge: "Spesial Ramadhan",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    emoji: "🌙",
    duration: "12 Hari Perjalanan",
    price: "Rp 38.500.000",
    flight: "Saudia Airlines Direct",
    hotel: "Safwah Royale Orchid ★5 & Taiba Front ★4",
    visaNote: "Visa Ramadhan Resmi Kemenag",
    features: [
      "Ibadah tarawih & qiyamul lail di Masjidil Haram",
      "Menu iftar & sahur buffet masakan Indonesia",
      "Kajian tazkiyatun nafs harian bersama asatidz",
      "Handling bandara & lounge VIP di terminal",
      "Termasuk air zam-zam 5 liter resmi regulasi",
    ],
  },
  {
    id: "haji-furoda",
    name: "Haji Khusus / Furoda Mujamalah",
    badge: "Tanpa Antre",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    emoji: "🕌",
    duration: "25-27 Hari (Musim Haji)",
    price: "Rp 285.000.000",
    flight: "Garuda Indonesia / Saudia Airlines",
    hotel: "Mövenpick Clock Tower ★5 & Maktab VIP Mina",
    visaNote: "Visa Haji Mujamalah Resmi Kuota Kerajaan",
    features: [
      "Berangkat langsung tahun berjalan tanpa antrean",
      "Tenda VIP ber-AC & kasur empuk di Mina & Arafah",
      "Dokter pendamping kesehatan 24 jam selama masa haji",
      "Bimbingan manasik intensif 4x sebelum keberangkatan",
      "Legalitas terdaftar resmi di SISKOPATUH Kemenag RI",
    ],
  },
];

export default function UmrohPackages() {
  return (
    <section id="paket" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Pilihan Paket Ibadah
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Paket Umroh &amp; Haji Terpercaya
          </h2>
          <p className="mt-3 text-slate-600">
            Seluruh paket terjamin kepastian maskapai penerbangan, hotel dekat masjid, dan legalitas visa resmi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-3xl">{pkg.emoji}</span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">{pkg.name}</h3>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-emerald-700">{pkg.price}</span>
                  <span className="text-xs text-slate-500">/ jamaah (Quad)</span>
                </div>

                <div className="mt-4 space-y-2 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span><strong>Durasi:</strong> {pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span><strong>Penerbangan:</strong> {pkg.flight}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span><strong>Akomodasi:</strong> {pkg.hotel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span><strong>Legalitas:</strong> {pkg.visaNote}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <a
                  href={waLink(`Halo Barokah Umroh & Haji, saya berminat mendaftar paket "${pkg.name}". Mohon informasi seat dan jadwalnya.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-700">
                  <MessageCircle className="h-4 w-4" />
                  Konsultasi Paket Ini via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
