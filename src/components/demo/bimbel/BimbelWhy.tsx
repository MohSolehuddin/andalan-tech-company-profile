import { Award, FileSpreadsheet, HeartHandshake, Users } from "lucide-react";

const advantages = [
  {
    icon: Users,
    title: "Kelas Kecil (Maksimal 8 Siswa)",
    desc: "Suasana belajar kondusif. Tutor dapat memantau daya serap tiap siswa secara personal dan mendalam tanpa ada yang tertinggal.",
  },
  {
    icon: Award,
    title: "Tutor Alumnus PTN Ternama",
    desc: "Pengajar ramah lulusan ITB, UI, UGM, dan ITS yang terlatih menyampaikan materi rumit menjadi menyenangkan dan mudah dipahami.",
  },
  {
    icon: FileSpreadsheet,
    title: "Tryout Rutin & Analisis Skor IRT",
    desc: "Simulasi ujian secara berkala dengan sistem pembobotan standar nasional untuk mengukur kesiapan dan pemetaan kelemahan bab.",
  },
  {
    icon: HeartHandshake,
    title: "Laporan Berkala ke Orang Tua",
    desc: "Laporan presensi, evaluasi pemahaman materi, dan grafik nilai dikirim rutin ke WhatsApp orang tua untuk pemantauan bersama.",
  },
];

const testimonials = [
  {
    quote:
      "Alhamdulillah anak saya yang awalnya kesulitan di Matematika dan Fisika sekarang nilai rapornya naik drastis jadi peringkat 3 kelas. Gurunya sangat telaten dan sabar.",
    author: "Ibu Dian Pratiwi",
    role: "Orang Tua Siswa Kelas 11 SMA",
  },
  {
    quote:
      "Drilling soal TPS dan tryout rutin di Bintang Prestasi bikin mental ujian saya jauh lebih siap. Hasilnya saya berhasil tembus Teknik Informatika pilihan pertama!",
    author: "Fajar Nugraha",
    role: "Alumni Bimbel — Mahasiswa PTN 2026",
  },
];

export const BimbelWhy = () => {
  return (
    <section className="border-y border-neutral-200/80 bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Mengapa Kami Berbeda
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            Pendekatan Terarah untuk Hasil Maksimal
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base">
            Kami menggabungkan kenyamanan belajar, pengajar berpengalaman, dan
            monitoring transparan demi kemajuan akademik putra-putri Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimoni */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((testi) => (
            <div
              key={testi.author}
              className="flex flex-col justify-between rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 sm:p-8">
              <p className="text-sm sm:text-base text-neutral-700 italic leading-relaxed">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-indigo-200/60 pt-4">
                <p className="text-sm font-bold text-neutral-900">
                  {testi.author}
                </p>
                <p className="text-xs text-indigo-700">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BimbelWhy;
