import { Calendar, Check, Clock, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const pricePlans = [
  {
    name: "Kelas Reguler",
    tagline: "Belajar interaktif dalam grup kecil (3–5 peserta)",
    price: "Rp 450.000",
    unit: "/ program",
    popular: false,
    features: [
      "1 perangkat PC per peserta",
      "Modul materi & video ringkasan",
      "Sertifikat kelulusan resmi",
      "Jadwal tetap terstruktur",
      "Grup tanya jawab dengan mentor",
    ],
    waMessage: "Halo Kode Kursus Komputer & IT, saya mau daftar Kelas Reguler.",
  },
  {
    name: "Kelas Privat 1-on-1",
    tagline: "Bimbingan eksklusif dengan fokus penuh dan jadwal fleksibel",
    price: "Rp 850.000",
    unit: "/ program",
    popular: true,
    features: [
      "1 mentor khusus untuk 1 peserta",
      "Jadwal belajar bebas pilih (bisa diatur)",
      "Materi bisa disesuaikan kebutuhan riil kantor/kuliah",
      "Bisa bawa laptop pribadi atau PC lab",
      "Sertifikat resmi + evaluasi portofolio",
      "Pendampingan pasca kelas via WhatsApp",
    ],
    waMessage: "Halo Kode Kursus Komputer & IT, saya mau daftar Kelas Privat 1-on-1.",
  },
  {
    name: "In-House / Korporat",
    tagline: "Pelatihan kustom untuk tim kantor, instansi, atau sekolah",
    price: "Kustom",
    unit: "/ tim",
    popular: false,
    features: [
      "Pelatihan di kantor Anda atau lab kami",
      "Silabus kustom sesuai SOP perusahaan",
      "Laporan evaluasi kompetensi per karyawan",
      "Sertifikat pelatihan institusi",
      "Invoice resmi & fleksibilitas jam kerja",
    ],
    waMessage: "Halo Kode Kursus Komputer & IT, saya mau konsultasi pelatihan In-House Perusahaan.",
  },
];

const schedules = [
  { time: "09.00 – 11.00 WIB", label: "Kelas Pagi", desc: "Senin – Rabu atau Selasa – Kamis" },
  { time: "13.30 – 15.30 WIB", label: "Kelas Siang", desc: "Senin – Rabu atau Selasa – Kamis" },
  { time: "19.00 – 21.00 WIB", label: "Kelas Malam (After Office)", desc: "Cocok untuk pekerja & mahasiswa" },
  { time: "Sabtu & Minggu", label: "Kelas Weekend Intensif", desc: "Pagi 09.30 atau Siang 13.30 WIB" },
];

export default function KursusSchedulePrice() {
  return (
    <section id="biaya" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            Biaya &amp; Jadwal
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Investasi Terjangkau, Kualitas Terjamin
          </h2>
          <p className="mt-3 text-slate-600">
            Pilih model belajar yang paling cocok dengan ritme harian Anda tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricePlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-lg ${
                plan.popular
                  ? "border-indigo-600 bg-white ring-2 ring-indigo-600 shadow-md"
                  : "border-slate-200 bg-white"
              }`}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-xs">
                  Pilihan Paling Diminati
                </span>
              )}

              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-1 text-xs text-slate-500">{plan.tagline}</p>

              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-sm text-slate-500"> {plan.unit}</span>
              </div>

              <ul className="mb-6 flex-1 space-y-2.5 text-xs text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-indigo-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(plan.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-colors ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}>
                <MessageCircle className="h-4 w-4" />
                Pilih Paket via WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Schedule Highlights */}
        <div className="mt-16 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-800">
                <Calendar className="h-5 w-5" />
                <h3 className="font-bold">Pilihan Jadwal Belajar Fleksibel</h3>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Bisa pilih kelas weekday atau weekend. Peserta privat bisa mengatur jadwal secara custom dengan mentor.
              </p>
            </div>
            <a
              href={waLink("Halo Kode Kursus Komputer & IT, saya ingin cek ketersediaan jadwal kelas terdekat.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 hover:underline md:mt-0">
              <Clock className="h-4 w-4" />
              Cek Kursi &amp; Jadwal Terdekat
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {schedules.map((sch) => (
              <div key={sch.label} className="rounded-xl border border-white bg-white p-4 shadow-xs">
                <p className="font-bold text-slate-900 text-sm">{sch.label}</p>
                <p className="mt-1 text-xs font-semibold text-indigo-700">{sch.time}</p>
                <p className="mt-1 text-[11px] text-slate-500">{sch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
