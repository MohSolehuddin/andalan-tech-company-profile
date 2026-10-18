import { BookOpen, FileCheck, HeartHandshake, Hotel, PlaneTakeoff, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Pasti Travel Berizin",
    desc: "Memiliki Izin Resmi PPIU dari Kementerian Agama RI dan terakreditasi A, menjamin keamanan dana & legalitas jamaah.",
  },
  {
    icon: PlaneTakeoff,
    title: "Pasti Jadwal & Maskapai",
    desc: "Tiket pesawat PP telah dipesan dengan kepastian nomor penerbangan dan jam terbang langsung tanpa transit melelahkan.",
  },
  {
    icon: Hotel,
    title: "Pasti Hotel Dekat Masjid",
    desc: "Akomodasi hotel bintang 4 & 5 yang terjamin jaraknya dekat ke pelataran Masjidil Haram dan Masjid Nabawi.",
  },
  {
    icon: FileCheck,
    title: "Pasti Visa Terbit",
    desc: "Proses pengurusan visa umroh dan haji dilakukan secara terpadu melalui sistem resmi SISKOPATUH sebelum keberangkatan.",
  },
  {
    icon: BookOpen,
    title: "Bimbingan Sesuai Sunnah",
    desc: "Bimbingan manasik intensif teori & praktik, didampingi pembimbing ibadah dan muthawif mukim yang memahami fiqih sunnah.",
  },
  {
    icon: HeartHandshake,
    title: "Pelayanan Sepenuh Hati",
    desc: "Pendampingan dari pembuatan paspor, penanganan koper/handling bandara, hingga kepulangan kembali ke Tanah Air.",
  },
];

export default function UmrohFeatures() {
  return (
    <section className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Komitmen Layanan
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Prinsip 5 Pasti Umroh Kemenag
          </h2>
          <p className="mt-3 text-slate-600">
            Fokus kami adalah kekhusyukan dan kenyamanan ibadah Anda dengan standar operasional yang amanah dan transparan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
