import { Hotel, Route, Users, Wallet } from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Itinerary Jelas & Fleksibel",
    desc: "Rundown perjalanan tersusun rapi per hari dan bisa disesuaikan dengan kebutuhan trip keluarga, kantor, maupun solo traveling.",
  },
  {
    icon: Users,
    title: "Guide Lokal Berpengalaman",
    desc: "Didampingi tour guide lokal yang hafal medan, cerita budaya, hingga spot foto terbaik di setiap destinasi.",
  },
  {
    icon: Hotel,
    title: "Hotel & Transport Terverifikasi",
    desc: "Akomodasi dan kendaraan sudah kami kurasi langsung, memastikan kenyamanan dan keamanan selama perjalanan.",
  },
  {
    icon: Wallet,
    title: "Harga Transparan All-In",
    desc: "Rincian biaya paket, tiket masuk, dan akomodasi dijelaskan sejak awal tanpa biaya tersembunyi di tengah perjalanan.",
  },
];

export default function TravelFeatures() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
            Keunggulan Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Liburan Nyaman, Perjalanan Terencana
          </h2>
          <p className="mt-3 text-slate-600">
            Kami memastikan liburan Anda nyaman lewat persiapan matang dan layanan terpercaya.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-cyan-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
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
