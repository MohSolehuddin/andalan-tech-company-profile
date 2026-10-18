import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO di Logistik Kencana",
    quote:
      "Sejak menggunakan KelolaKu, koordinasi kurir lapangan dan administrasi gudang berjalan otomatis. Waktu olah data kami berkurang lebih dari 60%.",
    initials: "BS",
    bgClass: "from-blue-500 to-indigo-600",
  },
  {
    name: "Rina Wijayanti",
    role: "Founder Imaji Creative Studio",
    quote:
      "Tampilannya sangat bersih dan cepat dipelajari anggota tim baru. Notifikasi WhatsApp untuk reminder deadline benar-benar fitur penolong kami.",
    initials: "RW",
    bgClass: "from-cyan-500 to-blue-600",
  },
  {
    name: "Hendra Pratama",
    role: "Operational Head di Kedai Kawan",
    quote:
      "Sistem reporting real-time memudahkan saya memonitor omset 5 cabang langsung dari handphone. Sangat bernilai untuk bisnis yang sedang ekspansi.",
    initials: "HP",
    bgClass: "from-teal-500 to-cyan-600",
  },
];

const SaasTestimonials = () => {
  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Bukti Nyata
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-slate-950">
            Dipercaya Oleh Ratusan Tim di Indonesia
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Dengarkan cerita langsung dari mereka yang telah mengubah cara kerja
            menjadi lebih terstruktur dan efisien.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all hover:shadow-md">
              <div>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-700 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${item.bgClass} text-xs font-bold text-white shadow-xs`}>
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasTestimonials;
