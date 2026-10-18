import { CalendarCheck, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const bookingSteps = [
  {
    step: "1",
    title: "Pilih Tipe Kamar & Tanggal",
    desc: "Tentukan kamar yang sesuai dan sampaikan tanggal menginap Anda.",
  },
  {
    step: "2",
    title: "Chat WhatsApp",
    desc: "Kirim detail pesanan, tim kami cek ketersediaan kamar secara real-time.",
  },
  {
    step: "3",
    title: "Konfirmasi & Check-in",
    desc: "Dapatkan konfirmasi booking, lalu check-in mudah dengan KTP saja.",
  },
];

export default function HotelLocation() {
  return (
    <section id="lokasi" className="bg-slate-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-3.5 py-1 text-xs font-medium text-teal-300">
              <MapPin className="h-4 w-4" />
              Lokasi Strategis di Pusat Kota
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl text-white">
              Booking Mudah, Lokasi Dekat Ke Mana Saja
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Hotel Nyaman Stay berada di pusat Kota Situbondo, dekat dengan pusat kuliner,
              wisata pantai, dan terminal. Cukup pesan lewat WhatsApp, tanpa perlu aplikasi tambahan.
            </p>

            <ol className="mt-8 space-y-5">
              {bookingSteps.map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-slate-950">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <a
                href={waLink("Halo Hotel Nyaman Stay, saya ingin booking kamar untuk menginap.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-400">
                <MessageCircle className="h-5 w-5" />
                Booking Sekarang via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Alamat Hotel</p>
                <p className="text-sm text-slate-300">
                  Jl. Raya Situbondo No. 45, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarCheck className="mt-0.5 h-5 w-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Waktu Check-in / Check-out</p>
                <p className="text-sm text-slate-300">
                  Check-in 14.00 WIB · Check-out 12.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Layanan Reservasi</p>
                <p className="text-sm text-slate-300">Setiap Hari, 24 Jam</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Telepon / WhatsApp</p>
                <p className="text-sm text-slate-300">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Email Resmi</p>
                <p className="text-sm text-slate-300">reservasi@nyamanstay.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Hotel Nyaman Stay — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
