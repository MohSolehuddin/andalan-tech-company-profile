import { Clock, HelpCircle, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const quickConsultOptions = [
  { label: "🏗️ Rencana Bangun Baru", msg: "Halo Bangun Karya Kontraktor, saya berencana bangun rumah baru dan ingin konsultasi kebutuhan serta perkiraan biaya." },
  { label: "🔨 Renovasi Rumah / Ruko", msg: "Halo Bangun Karya Kontraktor, saya mau renovasi properti (tambah lantai/perbaikan) dan butuh estimasi biaya." },
  { label: "📐 Desain & Fit-out Interior", msg: "Halo Bangun Karya Kontraktor, saya tertarik layanan desain dan renovasi interior ruangan/kantor." },
  { label: "📍 Booking Survei Lokasi", msg: "Halo Bangun Karya Kontraktor, saya ingin jadwal survei lokasi properti saya secara gratis." },
];

const faqs = [
  {
    q: "Apakah biaya survei lokasi dan konsultasi awal dikenakan tarif?",
    a: "Tidak sama sekali. Survei lokasi, konsultasi kebutuhan awal, hingga draft estimasi RAB pertama kali 100% gratis tanpa komitmen.",
  },
  {
    q: "Bagaimana sistem pembayaran proyek berjalan?",
    a: "Sistem pembayaran dibagi per termin sesuai persentase progres fisik di lapangan yang disepakati di dalam SPK resmi bermaterai.",
  },
  {
    q: "Apakah ada garansi jika ada kebocoran atau retak rambut setelah serah terima?",
    a: "Pasti. Kami memberikan garansi pemeliharaan tertulis selama 6 bulan penuh setelah serah terima kunci untuk menjamin ketenangan Anda.",
  },
];

const KontraktorContact = () => {
  return (
    <section id="kontak" className="bg-stone-100 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Kolom Kiri: Info kontak & Area layanan */}
          <div>
            <span className="inline-block rounded-full bg-yellow-200/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-900">
              Hubungi Kami
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Siap Memulai Proyek Konstruksi Anda?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
              Konsultasikan rencana Anda bersama tim arsitek dan estimator kami. Dapatkan saran teknis,
              pilihan material hemat berkualitas, serta kepastian jadwal pengerjaan.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-stone-200 bg-white p-4">
                <MapPin className="h-5 w-5 shrink-0 text-yellow-600" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-stone-900">Kantor &amp; Workshop</div>
                  <div className="text-stone-600">Jl. Raya Konstruksi No. 88, Sidoarjo - Surabaya, Jawa Timur</div>
                  <div className="mt-1 text-xs text-yellow-700">Melayani Surabaya, Sidoarjo, Gresik, &amp; sekitarnya</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-stone-200 bg-white p-4">
                <Clock className="h-5 w-5 shrink-0 text-yellow-600" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-stone-900">Jam Operasional Layanan</div>
                  <div className="text-stone-600">Senin - Sabtu: 08.00 - 17.00 WIB (Respon Cepat)</div>
                  <div className="text-stone-500">Konsultasi WhatsApp tetap terbuka 24/7</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-stone-200 bg-white p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-yellow-600" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-stone-900">Jaminan Mutu &amp; Legalitas</div>
                  <div className="text-stone-600">SPK resmi berkekuatan hukum, amanah, dan bergaransi retensi 6 bulan.</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Pilih Topik Konsultasi Cepat via WhatsApp:
              </div>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {quickConsultOptions.map((opt) => (
                  <a
                    key={opt.label}
                    href={waLink(opt.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-3 py-2 text-xs font-medium text-stone-800 transition-colors hover:border-yellow-500 hover:bg-yellow-50 hover:text-yellow-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
                    <MessageCircle className="h-3.5 w-3.5 text-yellow-600" />
                    <span>{opt.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: FAQ */}
          <div className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-yellow-800">
                <HelpCircle className="h-4 w-4" />
                Pertanyaan yang Sering Diajukan (FAQ)
              </div>
              <div className="mt-6 space-y-5">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-stone-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-xs sm:text-sm font-bold text-stone-900">{faq.q}</div>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-stone-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-stone-900 p-5 text-white">
              <div className="text-sm font-bold">Masih Ada Pertanyaan Lain?</div>
              <p className="mt-1 text-xs text-stone-300">
                Tim teknis kami siap menjawab detail kebutuhan renovasi atau bangun rumah Anda.
              </p>
              <div className="mt-4">
                <a
                  href={waLink("Halo Bangun Karya Kontraktor, saya ingin berdiskusi langsung mengenai rencana konstruksi saya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-500 px-4 py-2.5 text-xs font-bold text-stone-950 transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900">
                  <Phone className="h-3.5 w-3.5" />
                  Hubungi Admin via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontraktorContact;
