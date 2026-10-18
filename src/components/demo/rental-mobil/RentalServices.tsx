import { CalendarRange, KeyRound, MapPinned, Plane, UserCheck } from "lucide-react";

const modes = [
  {
    icon: KeyRound,
    title: "Lepas Kunci",
    desc: "Bebas kemana saja tanpa menunggu driver. Cocok untuk perjalanan pribadi, dinas, atau liburan santai bersama keluarga.",
    points: [
      "Syarat mudah: KTP asli + SIM A aktif",
      "Deposit jaminan, kembali saat unit dikembalikan",
      "Overtime dihitung per jam secara transparan",
    ],
    accent: "bg-sky-100 text-sky-700",
  },
  {
    icon: UserCheck,
    title: "Dengan Driver",
    desc: "Santai tanpa lelah mengemudi. Driver kami ramah, hafal rute lokal, dan siap mengantar sesuai jadwal Anda.",
    points: [
      "Jasa driver sudah termasuk harga sewa",
      "BBM, tol, dan parkir ditanggung penyewa",
      "Siap antar jemput luar kota & city tour",
    ],
    accent: "bg-blue-100 text-blue-700",
  },
];

const extras = [
  {
    icon: Plane,
    title: "Antar Jemput Bandara & Terminal",
    desc: "Penjemputan tepat waktu dengan papan nama, pantau jadwal kedatangan Anda.",
  },
  {
    icon: CalendarRange,
    title: "Sewa Mingguan & Bulanan",
    desc: "Harga khusus untuk pemakaian jangka panjang, cocok untuk proyek atau dinas luar kota.",
  },
  {
    icon: MapPinned,
    title: "City Tour & Antar Tamu",
    desc: "Paket wisata keluarga hingga antar tamu pernikahan dan acara resmi dengan armada rapi.",
  },
];

export default function RentalServices() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Pilihan Sewa
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Lepas Kunci atau Dengan Driver
          </h2>
          <p className="mt-3 text-slate-600">
            Kedua skema tersedia untuk semua unit. Tim kami akan merekomendasikan
            opsi paling hemat sesuai rencana perjalanan Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:border-sky-300 hover:shadow-md">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${mode.accent}`}>
                <mode.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{mode.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{mode.desc}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                {mode.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {extras.map((extra) => (
            <div key={extra.title} className="rounded-2xl bg-slate-50 p-6">
              <extra.icon className="h-6 w-6 text-sky-600" />
              <h3 className="mt-3 text-base font-bold text-slate-900">{extra.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{extra.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
