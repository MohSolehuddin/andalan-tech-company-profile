import { Clock, MapPin, MessageCircle, Monitor, Phone, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    num: "1",
    title: "Pilih Program & Format",
    desc: "Tentukan materi yang ingin dipelajari serta pilihan kelas (Reguler, Privat, atau In-House).",
  },
  {
    num: "2",
    title: "Chat Admin via WhatsApp",
    desc: "Konsultasikan jadwal belajar yang Anda inginkan dan dapatkan silabus materi lengkap.",
  },
  {
    num: "3",
    title: "Mulai Sesi Pertama",
    desc: "Lakukan konfirmasi pendaftaran, login grup siswa, dan langsung praktik bersama mentor.",
  },
];

export default function KursusContact() {
  return (
    <section id="kontak" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Steps */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            Cara Pendaftaran
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            3 Langkah Mudah Mulai Belajar
          </h2>
          <p className="mt-3 text-slate-600">
            Tanpa birokrasi ribet, langsung terhubung dengan mentor dan tim akademik kami.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((st) => (
            <div
              key={st.num}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-shadow hover:shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-xs">
                {st.num}
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{st.title}</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Lab & Contact Info Card */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-linear-to-br from-indigo-900 to-blue-950 p-8 text-white md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-200">
                <Sparkles className="h-3.5 w-3.5" />
                Pendaftaran Batch Terdekat Dibuka
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Siap Tingkatkan Skill Digital Anda?
              </h3>
              <p className="mt-3 text-sm text-indigo-100/90 leading-relaxed">
                Kursi kelas reguler dibatasi maksimal 5 peserta per angkatan agar bimbingan mentor
                maksimal. Hubungi admin kami sekarang untuk memastikan slot Anda!
              </p>

              <div className="mt-6 space-y-3 text-xs text-indigo-200">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-indigo-400" />
                  <span>Lab Training Center: Ruko Digital Creative Hub No. 12, Jakarta Selatan</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-indigo-400" />
                  <span>Jam Operasional: Setiap Hari 08.00 – 21.00 WIB</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Monitor className="h-4 w-4 shrink-0 text-indigo-400" />
                  <span>Fasilitas: Lab PC Core i7 / 16GB RAM, WiFi Fiber 100 Mbps, Full AC</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-6 text-center backdrop-blur-xs sm:p-8">
              <p className="text-xs uppercase tracking-wider text-indigo-200">
                Konsultasi Bebas Biaya
              </p>
              <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Chat Langsung dengan Tim Akademik
              </p>
              <p className="mt-2 text-xs text-indigo-100">
                Tanya materi yang cocok, cek kesesuaian jadwal, atau minta penawaran privat/korporat.
              </p>
              <a
                href={waLink("Halo Kode Kursus Komputer & IT, saya ingin mendaftar dan tanya info jadwal batch terdekat.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-indigo-400">
                <MessageCircle className="h-5 w-5" />
                Daftar via WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
