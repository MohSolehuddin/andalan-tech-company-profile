import {
  Car,
  Coffee,
  ConciergeBell,
  Droplets,
  ShieldCheck,
  UtensilsCrossed,
  Waves,
  Wifi,
} from "lucide-react";

const facilities = [
  {
    icon: Wifi,
    title: "WiFi Cepat Gratis",
    desc: "Koneksi internet stabil di seluruh area hotel, cocok untuk kerja maupun streaming.",
  },
  {
    icon: Coffee,
    title: "Sarapan Pagi",
    desc: "Menu sarapan hangat dengan pilihan masakan lokal dan internasional setiap hari.",
  },
  {
    icon: Waves,
    title: "Kolam Renang",
    desc: "Kolam renang bersih untuk dewasa dan anak, lengkap dengan kursi santai.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restoran & Kafe",
    desc: "Menyediakan makan siang, makan malam, dan camilan dengan harga bersahabat.",
  },
  {
    icon: Droplets,
    title: "AC & Air Panas",
    desc: "Setiap kamar dilengkapi AC, TV, dan air panas untuk istirahat maksimal.",
  },
  {
    icon: ConciergeBell,
    title: "Resepsionis 24 Jam",
    desc: "Tim resepsionis siap membantu check-in, check-out, dan kebutuhan tamu kapan saja.",
  },
  {
    icon: Car,
    title: "Parkir Luas & Aman",
    desc: "Area parkir gratis dengan pengawasan CCTV untuk kendaraan tamu.",
  },
  {
    icon: ShieldCheck,
    title: "Kebersihan Terjaga",
    desc: "Kamar dibersihkan harian dengan standar kebersihan yang ketat dan teratur.",
  },
];

export default function HotelFacilities() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Fasilitas Hotel
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Fasilitas Lengkap untuk Istirahat Nyaman
          </h2>
          <p className="mt-3 text-slate-600">
            Nikmati fasilitas pilihan yang membuat menginap bersama keluarga jadi lebih menyenangkan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
