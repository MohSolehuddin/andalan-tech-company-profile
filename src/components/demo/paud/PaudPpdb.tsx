import { CalendarCheck, FileText, Heart, MessageCircle, UserCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Konsultasi & Trial Class",
    desc: "Hubungi admin via WhatsApp untuk menjadwalkan sesi coba kelas (trial class) gratis bagi calon siswa.",
  },
  {
    icon: FileText,
    title: "2. Formulir & Berkas",
    desc: "Mengisi data diri anak, melampirkan salinan akta kelahiran, KK, dan buku riwayat imunisasi.",
  },
  {
    icon: UserCheck,
    title: "3. Observasi Tumbuh Kembang",
    desc: "Sesi santai bersama psikolog anak & guru untuk memetakan gaya belajar serta kesiapan sosial emosional.",
  },
  {
    icon: CalendarCheck,
    title: "4. Konfirmasi & Penyambutan",
    desc: "Penyelesaian administrasi, pembagian perlengkapan seragam/starter pack, dan orientasi sekolah ceria.",
  },
];

const waves = [
  {
    name: "Gelombang Early Bird",
    period: "Oktober – Desember 2026",
    benefit: "Potongan Biaya Pangkal 20% + Gratis Trial Class 2 Hari",
    status: "Sedang Dibuka",
  },
  {
    name: "Gelombang Reguler",
    period: "Januari – Juni 2027",
    benefit: "Paket Buku Belajar Sentra & Goodie Bag Karakter",
    status: "Segera Dibuka",
  },
];

export const PaudPpdb = () => {
  return (
    <section id="ppdb" className="bg-rose-50/50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
            <span>PPDB &amp; Pendaftaran Daycare</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Alur Penerimaan yang Hangat &amp; Mudah
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Kami menyambut setiap anak dengan tangan terbuka. Proses pendaftaran fleksibel dan didampingi langsung oleh tim kami.
          </p>
        </div>

        {/* 4 Langkah */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-rose-100 bg-white p-6 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Gelombang Pendaftaran */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {waves.map((wave) => (
            <div
              key={wave.name}
              className="flex flex-col justify-between rounded-2xl border border-rose-200/80 bg-white p-6 shadow-xs">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-neutral-900">{wave.name}</h3>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    {wave.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-500">{wave.period}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700">
                  <Heart className="h-4 w-4 shrink-0 text-rose-500" />
                  <span>{wave.benefit}</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={waLink(`Halo PAUD Ceria, saya ingin mendaftar di ${wave.name}. Mohon rincian biaya pendaftarannya.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                  <MessageCircle className="h-4 w-4" />
                  Klaim Promo via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimoni Singkat Orang Tua */}
        <div className="mt-12 rounded-xl border border-rose-200 bg-linear-to-r from-rose-100/70 via-pink-50 to-amber-50 p-6 md:p-8">
          <p className="text-neutral-800 italic leading-relaxed md:text-lg">
            &ldquo;Anak saya dulu sangat pemalu dan susah lepas dari orang tua. Sejak masuk di PAUD Ceria &amp; Daycare, gurunya sangat telaten mendampingi. Sekarang dia mandiri, ceria, dan selalu antusias bangun pagi untuk sekolah.&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 font-bold text-white text-sm">
              MS
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900">Bunda Maya Safitri</p>
              <p className="text-xs text-neutral-600">Orang tua Alisha (Siswa Kelas TK A &amp; Daycare)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaudPpdb;
