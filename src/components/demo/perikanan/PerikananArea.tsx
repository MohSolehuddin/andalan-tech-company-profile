import { Calendar, CheckCircle2, Clock, MapPin, Truck } from "lucide-react";

const dispatchRoutes = [
  {
    region: "Jalur Jabodetabek & Banten (Via Truk Thermo / Bus Cold-Box)",
    schedule: "Jadwal Kirim: Setiap Selasa, Kamis & Sabtu sore",
    leadTime: "Tiba H+1 pagi (pasar induk & sentra resto Jakarta, Bogor, Depok, Tangerang, Bekasi)",
    minOrder: "Min. order 50 kg (bisa campur jenis ikan & udang)",
  },
  {
    region: "Jalur Surabaya & Gerbangkertosusila",
    schedule: "Jadwal Kirim: Harian (Setiap malam)",
    leadTime: "Tiba dini hari pukul 03.00 WIB langsung ke Pasar Pabean / resto rekanan",
    minOrder: "Min. order 25 kg",
  },
  {
    region: "Jalur Malang, Pasuruan, Probolinggo & Banyuwangi",
    schedule: "Jadwal Kirim: Harian (Pagi & Siang)",
    leadTime: "Pengiriman cepat via travel box pendingin 3-5 jam sampai",
    minOrder: "Min. order 15 kg",
  },
  {
    region: "Luar Pulau (Bali, Denpasar, Lombok)",
    schedule: "Jadwal Kirim: Senin s/d Sabtu via Pelabuhan Ketapang",
    leadTime: "Tiba siang hari di cold room depot penerima",
    minOrder: "Min. order 100 kg",
  },
];

const packagingSpecs = [
  "Boks Styrofoam Kerapatan Tinggi (High Density) anti-bocor",
  "Rasio Es Curah 1:1 untuk rute >12 jam guna stabilitas suhu",
  "Penambahan oxygen pack khusus udang hidup (opsional)",
  "Lengkap surat karantina ikan dan asal komoditas (SKAI)",
];

export default function PerikananArea() {
  return (
    <section id="area" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
            Jaringan Distribusi
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Area Layanan & Jadwal Ekspedisi
          </h2>
          <p className="mt-3 text-slate-600">
            Armada ekspedisi berpendingin siap mengantarkan pasokan hasil laut tepat waktu
            menjaga integritas cold-chain.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {dispatchRoutes.map((route) => (
              <div
                key={route.region}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-cyan-100 p-2 text-cyan-800">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-900 md:text-lg">
                      {route.region}
                    </h3>
                    <div className="mt-3 space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 shrink-0 text-cyan-700" />
                        <span className="font-medium text-slate-800">{route.schedule}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                        <span>{route.leadTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span>{route.minOrder}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-cyan-200 bg-cyan-50/60 p-6">
            <div>
              <h3 className="text-lg font-bold text-cyan-950">
                Standar Pengemasan Dingin
              </h3>
              <p className="mt-2 text-sm text-cyan-900/80">
                Setiap kiriman keluar dari hub sortasi Situbondo dipacking dengan SOP ketat:
              </p>
              <ul className="mt-5 space-y-3 text-sm text-cyan-950">
                {packagingSpecs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-cyan-200 bg-white p-4 text-xs text-slate-600">
              💡 <strong>Butuh Rute Khusus?</strong> Kami juga melayani carter armada truk termo
              untuk muatan tonase di atas 2 ton ke seluruh Jawa-Bali.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
