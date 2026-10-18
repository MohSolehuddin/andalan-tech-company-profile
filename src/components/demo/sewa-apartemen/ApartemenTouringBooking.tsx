import { CalendarCheck2, Clock, Eye, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const touringSteps = [
  {
    step: "01",
    title: "Pilih Unit & Metode Survey",
    desc: "Tentukan kamar/apartemen yang diminati, lalu pilih survey langsung ke lokasi atau virtual video tour via WhatsApp.",
  },
  {
    step: "02",
    title: "Jadwalkan Waktu Kunjungan",
    desc: "Atur waktu luang Anda bersama tim pengelola kami. Survey lokasi fleksibel setiap hari mulai pukul 08.00 s/d 20.00 WIB.",
  },
  {
    step: "03",
    title: "Cek Fasilitas & Konfirmasi",
    desc: "Lihat langsung kondisi kamar, perabot, kebersihan toilet, hingga area parkir didampingi staf kami.",
  },
  {
    step: "04",
    title: "Booking & Serah Terima Kunci",
    desc: "Selesaikan tanda tangan perjanjian sewa, bayar deposit via transfer resmi, dan terima kunci unit Anda.",
  },
];

export default function ApartemenTouringBooking() {
  return (
    <section id="touring" className="bg-slate-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Touring & Booking Steps */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-400/10 px-3.5 py-1 text-xs font-medium text-indigo-300">
              <Eye className="h-4 w-4" />
              Layanan Survey &amp; Touring Gratis
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Mau Lihat Unit Dulu? Yuk Jadwalkan Survey!
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Kami menyambut Anda untuk berkunjung langsung atau meminta video walkthrough
              real-time jika belum sempat datang ke lokasi.
            </p>

            <div className="mt-8 space-y-4">
              {touringSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-xs font-bold text-white">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Halo Huni Apartemen & Kost, saya ingin menjadwalkan survey lokasi untuk unit apartemen/kost.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-500">
                <CalendarCheck2 className="h-5 w-5" />
                Jadwalkan Survey via WA
              </a>
              <a
                href={waLink("Halo Huni Apartemen & Kost, saya dari luar kota dan ingin request Virtual Tour via Video Call.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
                <MessageCircle className="h-5 w-5 text-indigo-400" />
                Request Virtual Tour
              </a>
            </div>
          </div>

          {/* Contact and Property Info Card */}
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xs">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Informasi Pengelola
              </span>
              <h3 className="mt-1 text-xl font-bold text-white">
                Kantor Pengelola Huni Residence
              </h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                <div>
                  <p className="font-semibold text-white">Lokasi Kompleks</p>
                  <p className="text-slate-300">
                    Jl. Pemuda No. 88, Pusat Kota, Situbondo, Jawa Timur (Hanya 3 menit dari pusat perbelanjaan &amp; kampus)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                <div>
                  <p className="font-semibold text-white">Jam Operasional Layanan</p>
                  <p className="text-slate-300">Setiap Hari: 08.00 – 20.00 WIB (Survey dengan janji temu)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                <div>
                  <p className="font-semibold text-white">Customer Service / Booking</p>
                  <p className="text-slate-300">+62 877 4596 8545 (Respon Cepat WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                <div>
                  <p className="font-semibold text-white">Ketentuan Singkat</p>
                  <p className="text-slate-300">Akses penghuni 24 jam dengan kartu akses. Tamu wajib lapor resepsionis/security.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/40 p-4 text-xs text-indigo-200">
              💡 <strong>Tips Penghuni Baru:</strong> Booking lebih awal untuk mendapatkan promo potongan sewa bulan pertama untuk kontrak minimal 6 bulan!
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Huni Apartemen &amp; Kost — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
