import {
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  FileCheck,
  MessageCircle,
  Trophy,
  UserCheck,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: ClipboardList,
    title: "Daftar online",
    desc: "Isi formulir PMB dan pilih program studi D3 atau D4 favoritmu.",
  },
  {
    icon: FileCheck,
    title: "Unggah berkas",
    desc: "Ijazah/SKL, rapor, kartu keluarga, dan dokumen pendukung lainnya.",
  },
  {
    icon: UserCheck,
    title: "Tes seleksi & wawancara",
    desc: "Tes potensi akademik dan wawancara minat jurusan secara daring.",
  },
  {
    icon: CalendarCheck,
    title: "Pengumuman & registrasi",
    desc: "Hasil seleksi diumumkan via WhatsApp, lanjut registrasi mahasiswa baru.",
  },
];

const paths = [
  {
    icon: ClipboardList,
    name: "Jalur Mandiri",
    desc: "Tes potensi akademik dan wawancara untuk seluruh calon mahasiswa.",
  },
  {
    icon: Trophy,
    name: "Jalur Prestasi",
    desc: "Bebas tes bagi peraih prestasi akademik atau non-akademik tingkat provinsi.",
  },
  {
    icon: BadgeCheck,
    name: "Jalur Beasiswa",
    desc: "KIP-Kuliah dan Beasiswa Nusantara dengan potongan UKT hingga 100%.",
  },
];

const batches = [
  {
    name: "Gelombang 1",
    period: "1 November – 31 Desember 2026",
    note: "Potongan biaya pendaftaran 50%",
  },
  {
    name: "Gelombang 2",
    period: "1 Januari – 31 Juli 2027",
    note: "Kuota terbatas tiap program studi",
  },
];

export default function KampusAdmission() {
  return (
    <section id="pmb" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            PMB 2026/2027
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Jalur pendaftaran &amp; beasiswa
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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map((path) => (
            <div
              key={path.name}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <path.icon className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{path.name}</h3>
              <p className="mt-1 text-sm text-neutral-600">{path.desc}</p>
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
            &ldquo;Informasi PMB-nya jelas dan cepat. Mulai dari jalur
            pendaftaran sampai beasiswa, semuanya bisa ditanyakan lewat
            WhatsApp.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold text-neutral-900">
            Rizky Pratama{" "}
            <span className="font-normal text-neutral-500">
              — Mahasiswa D4 Teknik Informatika angkatan 2025
            </span>
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink("Halo, saya mau tanya info PMB Politeknik Nusantara.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-500">
            <MessageCircle className="h-5 w-5" />
            Tanya PMB via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
