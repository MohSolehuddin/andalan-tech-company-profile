import { CalendarCheck, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function SkincareBooking() {
  return (
    <section id="booking" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-400/20 px-3 py-1 text-xs font-semibold text-rose-300">
              Reservasi Cepat
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Siap Rasakan Perubahan Nyata Kulit Anda?
            </h2>
            <p className="mt-3 text-sm text-neutral-300 sm:text-base">
              Reservasi jadwal treatment atau konsultasi dengan mudah langsung
              terhubung ke admin WhatsApp klinik kami. Tanpa antre lama, jadwal
              fleksibel.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={waLink(
                  "Halo Glow Aesthetic Clinic, saya mau reservasi jadwal treatment:\nNama:\nTreatment:\nTanggal & Jam Pilihan:"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-rose-600 to-pink-600 px-6 py-3.5 font-semibold text-white shadow-sm transition-all hover:from-rose-500 hover:to-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                <CalendarCheck className="h-5 w-5" />
                Booking Jadwal via WhatsApp
              </a>
              <p className="text-xs text-neutral-400">
                💬 Admin kami akan membalas dan mengonfirmasi slot dalam 5–10 menit.
              </p>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <h3 className="text-lg font-bold text-white">Lokasi &amp; Kontak Klinik</h3>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="text-sm font-semibold text-white">Alamat Klinik</p>
                <p className="text-xs text-neutral-300">
                  Jl. Boulevard Estetika No. 18, Surabaya, Jawa Timur
                </p>
                <span className="mt-1 inline-block text-[11px] text-rose-300">
                  (Tersedia area parkir luas &amp; ruang tunggu private)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="text-sm font-semibold text-white">Jam Praktik</p>
                <p className="text-xs text-neutral-300">
                  Senin – Minggu: 09.00 – 20.00 WIB
                </p>
                <p className="text-[11px] text-neutral-400">
                  Hari Libur Nasional tetap buka (reservasi H-1 disarankan)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="text-sm font-semibold text-white">Hotline &amp; Customer Care</p>
                <p className="text-xs text-neutral-300">+62 877 4596 8545</p>
                <a
                  href={waLink("Halo Glow Aesthetic Clinic, saya mau tanya lokasi dan rute klinik.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline">
                  <MessageCircle className="h-3 w-3" /> Tanya Petunjuk Arah via WA
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Glow Aesthetic Clinic — Demo website oleh{" "}
          <span className="text-neutral-400">Andalan Tech</span>.
        </div>
      </div>
    </section>
  );
}
