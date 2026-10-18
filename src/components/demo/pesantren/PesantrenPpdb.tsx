import {
  CalendarCheck,
  CheckCircle2,
  Coins,
  FileText,
  MessageCircle,
  UserCheck,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: FileText,
    title: "Pendaftaran Online / WA",
    desc: "Mengisi formulir biodata santri baru melalui link PPDB atau konfirmasi langsung ke kontak panitia.",
  },
  {
    icon: UserCheck,
    title: "Penyerahan Berkas",
    desc: "Menyerahkan fotokopi KK, akta lahir, pasfoto, surat keterangan sehat, dan ijazah/SKL terakhir.",
  },
  {
    icon: CheckCircle2,
    title: "Ujian Seleksi & Observasi",
    desc: "Ujian baca Al-Qur'an, tes kemampuan dasar agama, serta wawancara motivasi bersama orang tua/wali.",
  },
  {
    icon: CalendarCheck,
    title: "Pengumuman & Masuk Asrama",
    desc: "Pengumuman kelulusan, penyelesaian administrasi daftar ulang, dan orientasi santri baru (Khutbatul Arsy).",
  },
];

const schedules = [
  {
    batch: "Gelombang 1 (Jalur Utama)",
    period: "1 Desember 2026 – 28 Februari 2027",
    quota: "Kuota 120 Santri Putra & Putri",
    promo: "Keringanan Infaq Sarana 30%",
  },
  {
    batch: "Gelombang 2 (Jalur Reguler)",
    period: "1 Maret – 30 Mei 2027",
    quota: "Sisa Kuota Terbatas",
    promo: "Pendaftaran ditutup jika kuota asrama terpenuhi",
  },
];

const requirements = [
  "Mengisi formulir pendaftaran PPDB santri baru",
  "Fotokopi Akta Kelahiran & Kartu Keluarga (masing-masing 3 lembar)",
  "Fotokopi Ijazah / SKL terlegalisir (3 lembar)",
  "Surat keterangan sehat & bebas penyakit menular dari faskes",
  "Pasfoto berwarna santri terbaru ukuran 3x4 (4 lembar)",
  "Surat pernyataan kesanggupan mematuhi tata tertib pesantren",
];

const fees = [
  { label: "Biaya Formulir & Seleksi", value: "Rp 150.000 (sekali bayar)" },
  { label: "Infaq Sarana & Fasilitas Kamar", value: "Mulai Rp 3.500.000 (dapat dicicil)" },
  { label: "Iuran Bulanan (SPP + Asrama + Makan 3x)", value: "Rp 850.000 / bulan" },
  { label: "Seragam & Kitab Pegangan Santri", value: "Disediakan koperasi pesantren" },
];

export default function PesantrenPpdb() {
  return (
    <section id="ppdb" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            PPDB Santri Baru 2026/2027
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Alur &amp; Informasi Pendaftaran Santri
          </h2>
          <p className="mt-3 text-neutral-600">
            Penerimaan santri baru Pondok Pesantren Raudhatul Ulum Situbondo
            dibuka secara transparan dan terpandu.
          </p>
        </div>

        {/* 4 Langkah Alur */}
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
              <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Jadwal Gelombang */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {schedules.map((item) => (
            <div
              key={item.batch}
              className="rounded-2xl bg-emerald-50/80 p-6 ring-1 ring-emerald-200/60">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-emerald-950">{item.batch}</h3>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  {item.quota}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-emerald-900">
                {item.period}
              </p>
              <p className="mt-3 inline-flex rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-800">
                {item.promo}
              </p>
            </div>
          ))}
        </div>

        {/* Syarat & Biaya */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 md:p-8">
            <h3 className="text-xl font-bold text-neutral-900">
              Persyaratan Pendaftaran
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                Rincian Biaya &amp; Administrasi
              </h3>
            </div>
            <div className="mt-4 divide-y divide-neutral-200 text-sm">
              {fees.map((fee) => (
                <div key={fee.label} className="py-2.5 flex justify-between gap-4">
                  <span className="text-neutral-600">{fee.label}</span>
                  <span className="font-semibold text-neutral-900 text-right">
                    {fee.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              *Tersedia program beasiswa tahfidz dan keringanan biaya bagi santri yatim/dhuafa.
            </p>
          </div>
        </div>

        {/* Testimoni Orang Tua */}
        <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 md:p-8">
          <p className="text-neutral-700 italic leading-relaxed">
            &ldquo;Alhamdulillah, putra kami sangat betah di asrama. Hafalan Qur&apos;an bertambah
            lancar dan kajian kitab kuningnya terstruktur rapi. Komunikasi pengasuh dan panitia PPDB
            via WhatsApp sangat ramah dan responsif.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold text-neutral-900">
            H. Ahmad Munir, S.Ag{" "}
            <span className="font-normal text-neutral-500">
              — Wali Santri Asal Surabaya
            </span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href={waLink("Halo Panitia PPDB Pondok Pesantren Raudhatul Ulum Situbondo, saya ingin konsultasi pendaftaran santri baru.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <MessageCircle className="h-5 w-5" />
            Tanya PPDB via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
