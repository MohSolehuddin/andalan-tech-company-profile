import { Award, CheckCircle, FileCheck, MessageCircle, QrCode, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const certBenefits = [
  {
    icon: QrCode,
    title: "Verifikasi Online & QR Code",
    desc: "Setiap sertifikat memiliki ID unik yang dapat divalidasi oleh HRD atau institusi secara online.",
  },
  {
    icon: FileCheck,
    title: "Portofolio Proyek Riil",
    desc: "Bawa pulang hasil karya asli—seperti spreadsheet olahan data, desain media, atau website fungsional.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Belajar Sampai Bisa",
    desc: "Belum lancar di modul tertentu? Anda boleh mengulang materi di kelas reguler berikutnya tanpa biaya tambahan.",
  },
  {
    icon: Award,
    title: "Akses Komunitas Alumni",
    desc: "Tetap terhubung di grup WhatsApp bersama mentor untuk konsultasi masalah kerja atau tugas harian.",
  },
];

export default function KursusCertificates() {
  return (
    <section id="sertifikat" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Certificate Visual Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-indigo-500 to-blue-600 opacity-20 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-linear-to-br from-indigo-900 via-indigo-950 to-slate-950 p-6 text-white shadow-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-indigo-700/50 pb-4">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-indigo-400" />
                  <span className="text-xs font-bold tracking-widest uppercase text-indigo-200">
                    Sertifikat Kelulusan
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                  Resmi &amp; Terverifikasi
                </span>
              </div>

              <div className="py-6 text-center">
                <p className="text-xs text-indigo-300 uppercase tracking-widest">Diberikan Kepada</p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Peserta Program
                </p>
                <div className="mx-auto my-3 h-0.5 w-16 bg-indigo-500" />
                <p className="text-xs leading-relaxed text-indigo-200">
                  Atas kelulusan dan keberhasilan menguasai kompetensi praktis program teknologi digital
                  dengan standar industri dan proyek akhir teruji.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-indigo-700/50 pt-4 text-[11px] text-indigo-300">
                <div>
                  <p className="text-white font-semibold">Kode Kursus Komputer &amp; IT</p>
                  <p className="text-[10px] text-indigo-400">Pusat Pelatihan Teknologi</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-indigo-300">No. REG: KK-IT/2026/089</p>
                  <p className="text-[10px] text-emerald-400">Valid Digital Signature</p>
                </div>
              </div>
            </div>
          </div>

          {/* Explanation & Benefits */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
              Kredensial Profesional
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Sertifikat Resmi untuk Tingkatkan Karier Anda
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Setiap kelulusan dievaluasi lewat proyek akhir nyata, bukan sekadar tes tertulis.
              Sertifikat kami diakui dan dapat Anda cantumkan di surat lamaran kerja, LinkedIn,
              maupun portofolio pribadi.
            </p>

            <div className="mt-8 space-y-4">
              {certBenefits.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-0.5 text-xs text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4">
              <a
                href={waLink("Halo Kode Kursus Komputer & IT, saya ingin tanya contoh sertifikat & syarat kelulusan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-slate-800">
                <MessageCircle className="h-4 w-4" />
                Tanya Detail Sertifikasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
