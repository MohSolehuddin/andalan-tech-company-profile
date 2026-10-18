import { Car, Droplets, KeyRound, ShieldCheck, Shirt, Utensils, Wifi, Wind } from "lucide-react";

const facilities = [
  {
    icon: Wind,
    title: "AC Hemat Energi & Dingin",
    desc: "Setiap kamar & unit apartemen dilengkapi pendingin ruangan terawat yang diservis berkala.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi Fiber",
    desc: "Koneksi internet stabil berkecepatan hingga 100 Mbps, lancar untuk WFH dan kuliah online.",
  },
  {
    icon: Car,
    title: "Area Parkir Aman & Luas",
    desc: "Lahan parkir motor dan mobil teratur di dalam gerbang dengan sistem keamanan berlapis.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan 24 Jam & CCTV",
    desc: "Pengawasan kamera CCTV 24/7 di area publik, koridor, dan gerbang utama bersama petugas keamanan.",
  },
  {
    icon: Droplets,
    title: "Water Heater Air Panas",
    desc: "Kamar mandi modern dilengkapi pemanas air otomatis untuk kenyamanan mandi kapan saja.",
  },
  {
    icon: KeyRound,
    title: "Akses Smart Card & Kunci Digital",
    desc: "Akses pintu gedung menggunakan kartu RFID dan smart door lock demi privasi dan keamanan penghuni.",
  },
  {
    icon: Utensils,
    title: "Dapur Bersama & Pantry",
    desc: "Fasilitas memasak lengkap dengan kompor gas, microwave, dispenser galon, dan kulkas bersama.",
  },
  {
    icon: Shirt,
    title: "Layanan Laundry Kiloan",
    desc: "Kerjasama layanan cuci setrika cepat dengan tarif terjangkau langsung diantar ke depan kamar.",
  },
];

export default function ApartemenFacilities() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            Fasilitas Lengkap
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Tinggal Praktis Tanpa Biaya Tambahan
          </h2>
          <p className="mt-3 text-slate-600">
            Semua fasilitas dirancang untuk memastikan kenyamanan, keamanan, dan produktivitas Anda setiap hari.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <facility.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {facility.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {facility.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
