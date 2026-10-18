import { CalendarCheck, Clock, MapPin, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function DokterBooking() {
  return (
    <section id="booking" className="bg-sky-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Booking jadwal dalam 1 menit
            </h2>
            <p className="mt-4 text-sky-50/90">
              Kirim nama, keluhan, dan tanggal yang diinginkan lewat WhatsApp.
              Admin kami konfirmasi slot dan dokter yang sesuai.
            </p>
            <a
              href={waLink(
                "Halo Klinik Gigi Senyum Sehat, saya mau booking jadwal perawatan. Nama saya: ... Keluhan: ... Tanggal: ..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sky-400 px-6 py-3 font-semibold text-sky-950 transition-colors hover:bg-sky-300">
              <CalendarCheck className="h-5 w-5" />
              Booking via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-sky-300" />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-sm text-sky-50/90">
                  Jl. Merdeka No. 88, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-sky-300" />
              <div>
                <p className="font-semibold">Jam Operasional</p>
                <p className="text-sm text-sky-50/90">
                  Senin–Sabtu, 09.00 – 20.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-sky-300" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp</p>
                <p className="text-sm text-sky-50/90">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-sky-100/70">
          © {new Date().getFullYear()} Klinik Gigi Senyum Sehat — Demo website
          oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
