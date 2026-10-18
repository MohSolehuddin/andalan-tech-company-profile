import {
  Building2,
  FileCheck,
  Award,
  FileText,
  Briefcase,
  Landmark,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Pendirian PT / CV & Badan Usaha",
    desc: "Pengurusan akta pendirian, SK Kemenkumham, NPWP Badan, hingga aktivasi akun perizinan lengkap.",
  },
  {
    icon: Award,
    title: "Perizinan Berusaha & OSS RBA",
    desc: "Penerbitan NIB, penentuan KBLI presisi, izin edar, sertifikasi standar, dan izin operasional sektoral.",
  },
  {
    icon: FileCheck,
    title: "Akta Notaris & PPAT",
    desc: "Perubahan anggaran dasar, perjanjian pranikah, akta jual beli, peralihan hak tanah, dan legalisasi dokumen.",
  },
  {
    icon: FileText,
    title: "Perjanjian & Kontrak Bisnis",
    desc: "Drafting dan review kontrak komersial, NDA, shareholder agreement, SPK rekanan, hingga kontrak ketenagakerjaan.",
  },
  {
    icon: Briefcase,
    title: "Konsultasi Hukum Bisnis (Corporate Retainer)",
    desc: "Pendampingan hukum bulanan, audit kepatuhan regulasi, legal opinion objektif, dan mitigasi risiko sengketa.",
  },
  {
    icon: Landmark,
    title: "Hukum Properti & Real Estate",
    desc: "Legal due diligence status tanah/bangunan, verifikasi sertifikat BPN, pengurusan sewa komersial, dan sengketa lahan.",
  },
];

export default function LegalServices() {
  return (
    <section id="layanan" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-900">
            Layanan Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Solusi Hukum Lengkap untuk Kebutuhan Anda
          </h2>
          <p className="mt-3 text-slate-600">
            Didukung advokat dan notaris berpengalaman dengan pemahaman mendalam
            akan regulasi dan iklim bisnis di Indonesia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
