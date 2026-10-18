import { MessageSquareText, FileSearch, PenTool, CheckCircle2 } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    step: "01",
    icon: MessageSquareText,
    title: "Konsultasi & Analisis Awal",
    desc: "Diskusi awal via WhatsApp atau temu kantor untuk mengidentifikasi kebutuhan legalitas atau persoalan hukum bisnis Anda.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "Pemeriksaan Dokumen & Regulasi",
    desc: "Tim kami menelaah berkas persyaratan, legal due diligence, serta menyelaraskan dengan aturan perundangan terbaru.",
  },
  {
    step: "03",
    icon: PenTool,
    title: "Penyusunan & Pengesahan Notarial",
    desc: "Drafting akta/kontrak secara presisi, penandatanganan resmi di hadapan notaris, dan pengajuan ke instansi pemerintah.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Penyerahan Dokumen Resmi",
    desc: "Dokumen sah fisik dan salinan digital diserahkan lengkap, disertai panduan kepatuhan hukum berkelanjutan untuk bisnis.",
  },
];

export default function LegalProcess() {
  return (
    <section id="alur-kerja" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-900">
            Alur Kerja
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Proses Jelas, Terukur, &amp; Transparan
          </h2>
          <p className="mt-3 text-slate-600">
            Kami memastikan setiap tahapan hukum berjalan efisien dengan
            pelaporan berkala ke klien tanpa biaya terselubung.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
              <span className="text-xs font-bold tracking-wider text-slate-400">
                TAHAP {item.step}
              </span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={waLink(
              "Halo Pratama & Co, saya ingin konsultasi proses pendirian usaha / perizinan."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800">
            Mulai Konsultasi Langkah Pertama
          </a>
        </div>
      </div>
    </section>
  );
}
