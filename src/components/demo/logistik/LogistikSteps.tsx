import {
  ClipboardCheck,
  MessageSquareText,
  PackageCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "1. Chat WhatsApp",
    desc: "Ceritakan barang, rute, dan tanggal rencana pindah atau kirim.",
  },
  {
    icon: ClipboardCheck,
    title: "2. Survei & Estimasi",
    desc: "Tim survei lokasi atau cek foto barang, lalu kirim penawaran pasti.",
  },
  {
    icon: PackageCheck,
    title: "3. Packing & Angkut",
    desc: "Barang dipacking, dicatat manifesnya, lalu diangkut dengan armada kami.",
  },
  {
    icon: Truck,
    title: "4. Tiba & Dicek Bersama",
    desc: "Bongkar di tujuan, cek kondisi barang bersama, dan resi ditutup.",
  },
];

const stats = [
  { value: "1.200+", label: "Pindahan & pengiriman selesai" },
  { value: "98%", label: "Tepat waktu sampai tujuan" },
  { value: "24 jam", label: "Respon order WhatsApp" },
  { value: "100%", label: "Barang diasuransikan" },
];

export default function LogistikSteps() {
  return (
    <section id="cara-kerja" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Cara Kerja
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Proses pindah jelas, tanpa kejutan biaya
          </h2>
          <p className="mt-3 text-neutral-600">
            Empat langkah sederhana dari chat pertama sampai barang tiba di
            tujuan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <step.icon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{step.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-700 px-6 py-8 text-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-blue-50/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
