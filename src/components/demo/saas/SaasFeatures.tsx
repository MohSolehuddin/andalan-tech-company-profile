import {
  BarChart3,
  FileSpreadsheet,
  MessageSquare,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Otomasi Alur Kerja",
    desc: "Hubungkan proses lead masuk, delegasi tugas staf, hingga pembuatan invoice otomatis tanpa input manual berulang.",
  },
  {
    icon: BarChart3,
    title: "Dasbor & Metrik Realtime",
    desc: "Pantau performa omset, status proyek, dan produktivitas tim secara transparan melalui visual grafik yang mudah dimengerti.",
  },
  {
    icon: Users,
    title: "Kolaborasi Multi-Pengguna",
    desc: "Kelola hak akses untuk manajer, staf lapangan, maupun freelancer dalam satu workspace terpadu yang tersentralisasi.",
  },
  {
    icon: MessageSquare,
    title: "Notifikasi Cepat WhatsApp",
    desc: "Kirim update status pekerjaan dan pengingat deadline langsung ke nomor WhatsApp tim atau klien secara otomatis.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Terenkripsi",
    desc: "Data bisnis Anda diamankan dengan standar enkripsi modern, proteksi role-based access, dan pencadangan harian di cloud.",
  },
  {
    icon: FileSpreadsheet,
    title: "Export Laporan 1-Klik",
    desc: "Unduh rekap kinerja dan laporan keuangan dalam format Excel atau PDF kapan saja siap dipresentasikan ke stakeholder.",
  },
];

const SaasFeatures = () => {
  return (
    <section id="fitur" className="py-20 bg-slate-50 text-slate-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Fitur Unggulan
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-slate-950">
            Semua yang Dibutuhkan untuk Skalasi Bisnis
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Dibangun dengan fokus kemudahan adopsi tim agar bisnis langsung
            merasakan lonjakan efisiensi sejak hari pertama.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasFeatures;
