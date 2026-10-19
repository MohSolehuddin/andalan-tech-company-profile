import { Award, Clock, DollarSign, Fish, Snowflake, ThermometerSnowflake } from "lucide-react";

const advantages = [
  {
    icon: Fish,
    title: "Segar Harian Nelayan",
    desc: "Ikan masuk dermaga Situbondo subuh langsung diproses sortasi grade A tanpa bahan kimia pengawet.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Rantai Dingin (Cold-Chain)",
    desc: "Suhu dijaga 0-2°C dengan es curah berkualitas tinggi & cold storage standar ekspor agar daging tetap kenyal.",
  },
  {
    icon: DollarSign,
    title: "Harga Grosir Langsung",
    desc: "Memangkas rantai tengkulak panjang sehingga Anda mendapatkan harga tangan pertama yang sangat kompetitif.",
  },
  {
    icon: Snowflake,
    title: "Packing Styrofoam + Ice Gel",
    desc: "Pengemasan kedap udara anti-bocor, tahan temperatur dingin hingga perjalanan ekspedisi 36 jam.",
  },
  {
    icon: Award,
    title: "Higienis & Bersertifikat",
    desc: "Fasilitas penanganan higienis sesuai SOP sanitasi perikanan tangkap dan budidaya air laut.",
  },
  {
    icon: Clock,
    title: "Kemitraan Rutin B2B",
    desc: "Kontrak pasokan berkala untuk restoran seafood, katering pabrik, supermarket, dan distributor pasar induk.",
  },
];

export default function PerikananFresh() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
            Standar Mutu
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Kenapa Memilih Samudra Situbondo?
          </h2>
          <p className="mt-3 text-slate-600">
            Komitmen kami adalah menghadirkan kesegaran laut Jawa Timur langsung ke dapur Anda
            tanpa penurunan mutu.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:border-cyan-400 hover:bg-white hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-800 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
