import { Apple, Camera, Clock, Gamepad2, Shield, Sparkles, Wind } from "lucide-react";

const facilities = [
  {
    icon: Gamepad2,
    title: "Playground Indoor & Outdoor Aman",
    desc: "Lantai berperedam benturan (rubber mat) dan wahana permainan teruji ramah anak tanpa sudut tajam.",
  },
  {
    icon: Wind,
    title: "Ruang Kelas & Tidur Ber-AC",
    desc: "Suhu ruangan terkontrol dengan air purifier, tempat tidur individual yang rutin disanitasi.",
  },
  {
    icon: Apple,
    title: "Snack & Makan Siang Sehat",
    desc: "Menu nutrisi variatif tanpa MSG dan pengawet, disesuaikan dengan pantangan atau alergi si kecil.",
  },
  {
    icon: Camera,
    title: "CCTV Online & Monitoring",
    desc: "Pengawasan lingkungan sekolah 24 jam dengan sistem absensi dan kartu jemput anak berfoto.",
  },
  {
    icon: Sparkles,
    title: "Pojok Baca & Sensory Room",
    desc: "Ratusan buku cerita bergambar serta alat peraga Montessori untuk melatih konsentrasi motorik.",
  },
  {
    icon: Shield,
    title: "Pemeriksaan Kesehatan Rutin",
    desc: "Pengecekan suhu harian, kurva berat/tinggi badan bulanan, dan konsultasi dokter gigi berkala.",
  },
];

const schedules = [
  {
    program: "Kelompok Bermain (KB)",
    days: "Senin – Kamis",
    hours: "08.00 – 10.30 WIB",
    note: "Sesi main sensorik, motorik & circle time",
  },
  {
    program: "TK A & TK B",
    days: "Senin – Jumat",
    hours: "07.30 – 11.30 WIB",
    note: "Sentra tematik, pra-literasi & snack time",
  },
  {
    program: "Daycare Full Day",
    days: "Senin – Jumat",
    hours: "07.00 – 17.00 WIB",
    note: "Makan 2x, snack 2x, tidur siang & pendampingan",
  },
  {
    program: "Daycare Half Day",
    days: "Senin – Jumat",
    hours: "11.30 – 17.00 WIB",
    note: "Cocok untuk lanjutan setelah jam sekolah KB/TK",
  },
];

export const PaudFacilities = () => {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
            Fasilitas &amp; Rutinitas
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Lingkungan Ramah Anak &amp; Jadwal Teratur
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Kami memastikan kenyamanan, keamanan, dan kebersihan terbaik agar anak merasa betah bereksplorasi setiap hari.
          </p>
        </div>

        {/* Fasilitas Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((fac) => (
            <div
              key={fac.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                <fac.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{fac.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Jadwal Operasional & Belajar */}
        <div className="mt-16 rounded-3xl bg-neutral-900 p-8 text-white md:p-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-300">
                <Clock className="h-3.5 w-3.5" />
                Jadwal Belajar &amp; Pengasuhan
              </span>
              <h3 className="mt-2 text-2xl font-bold">Waktu Layanan Harian</h3>
            </div>
            <p className="text-xs text-neutral-400 md:text-sm">
              *Tersedia opsi antar-jemput anak untuk wilayah terdekat.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {schedules.map((item) => (
              <div
                key={item.program}
                className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-medium text-rose-300">{item.days}</p>
                <h4 className="mt-1 font-bold text-white">{item.program}</h4>
                <p className="mt-3 text-lg font-extrabold text-amber-300">
                  {item.hours}
                </p>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaudFacilities;
