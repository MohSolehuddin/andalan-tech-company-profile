import { CalendarCheck, FileText, Megaphone, MessageCircle, UserCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: FileText,
    title: "Isi formulir online",
    desc: "Lengkapi data diri dan pilihan peminatan melalui formulir PPDB.",
  },
  {
    icon: UserCheck,
    title: "Unggah dokumen",
    desc: "Kartu keluarga, akta kelahiran, dan rapor semester terakhir.",
  },
  {
    icon: Megaphone,
    title: "Tes seleksi & wawancara",
    desc: "Tes potensi akademik dan wawancara bersama orang tua.",
  },
  {
    icon: CalendarCheck,
    title: "Pengumuman & daftar ulang",
    desc: "Hasil seleksi diumumkan via WhatsApp dan website sekolah.",
  },
];

const batches = [
  { name: "Gelombang 1", period: "1 November – 31 Desember 2026", note: "Potongan biaya pendaftaran 50%" },
  { name: "Gelombang 2", period: "1 Januari – 31 Maret 2027", note: "Kuota terbatas 2 kelas" },
];

export default function SekolahPpdb() {
  return (
    <section id="ppdb" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            PPDB 2026/2027
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Alur pendaftaran yang mudah
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-neutral-200 bg-white p-6">
              <span className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                {index + 1}
              </span>
              <step.icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-4 font-bold text-neutral-900">{step.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {batches.map((batch) => (
            <div
              key={batch.name}
              className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
              <h3 className="font-bold text-emerald-900">{batch.name}</h3>
              <p className="mt-1 text-sm text-emerald-800">{batch.period}</p>
              <p className="mt-3 inline-flex rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                {batch.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
          <p className="text-neutral-700 italic">
            &ldquo;Proses PPDB-nya transparan dan cepat. Kami mendapat info
            lengkap lewat WhatsApp, jadi tidak perlu bolak-balik ke
            sekolah.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold text-neutral-900">
            Ibu Rahmawati{" "}
            <span className="font-normal text-neutral-500">
              — Orang tua siswa kelas X
            </span>
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink("Halo, saya mau tanya info PPDB SMA Cendekia Nusantara.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <MessageCircle className="h-5 w-5" />
            Tanya PPDB via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
