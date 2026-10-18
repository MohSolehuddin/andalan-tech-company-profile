import { MessageCircle, FileText, SearchCheck, Wallet } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Hubungi Agen",
    desc: "Chat WhatsApp kami dan ceritakan kejadian serta jenis klaim Anda.",
  },
  {
    icon: FileText,
    title: "2. Lengkapi Dokumen",
    desc: "Kami bantu siapkan berkas: KTP, kuitansi, dan surat keterangan.",
  },
  {
    icon: SearchCheck,
    title: "3. Verifikasi Klaim",
    desc: "Tim verifikasi memproses 3–7 hari kerja, Anda mendapat update berkala.",
  },
  {
    icon: Wallet,
    title: "4. Dana Cair",
    desc: "Klaim disetujui dan dana ditransfer langsung ke rekening Anda.",
  },
];

export default function AsuransiSteps() {
  return (
    <section id="klaim" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Alur Klaim
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Klaim mudah, prosesnya transparan
          </h2>
          <p className="mt-3 text-neutral-600">
            Empat langkah sederhana — sisanya kami yang urus.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <step.icon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{step.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink("Halo Amanah Proteksi, saya mau mengajukan klaim.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600">
            <MessageCircle className="h-5 w-5" />
            Ajukan Klaim via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
