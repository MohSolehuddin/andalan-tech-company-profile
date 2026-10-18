import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    title: "Pilih Mobil & Tanggal",
    desc: "Tentukan unit, tanggal sewa, dan opsi lepas kunci atau dengan driver.",
  },
  {
    title: "Chat via WhatsApp",
    desc: "Kirim detail rencana Anda, tim kami cek ketersediaan unit secara real-time.",
  },
  {
    title: "Konfirmasi & Unit Diantar",
    desc: "Bayar DP, unit kami antar ke lokasi Anda — gratis area dalam kota.",
  },
];

export default function RentalBooking() {
  return (
    <section id="booking" className="bg-slate-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-3.5 py-1 text-xs font-medium text-sky-300">
              <MessageCircle className="h-4 w-4" />
              Booking Cepat, Unit Siap Antar
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Butuh Mobil Hari Ini? Chat Kami Sekarang
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Ceritakan tujuan dan tanggal perjalanan Anda, kami bantu pilih unit
              paling pas. Respons cepat setiap hari pada jam operasional.
            </p>

            <ol className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="text-sm text-slate-300">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <a
                href={waLink("Halo Sewa Mobil Andalan, saya ingin booking mobil. Ini rencana perjalanan saya:")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400">
                <MessageCircle className="h-5 w-5" />
                Booking via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
              <div>
                <p className="font-semibold text-white">Kantor &amp; Pool Mobil</p>
                <p className="text-sm text-slate-300">
                  Jl. Raya Situbondo No. 45, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
              <div>
                <p className="font-semibold text-white">Jam Operasional</p>
                <p className="text-sm text-slate-300">
                  Setiap Hari, 07.00 – 21.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
              <div>
                <p className="font-semibold text-white">Hotline / WhatsApp</p>
                <p className="text-sm text-slate-300">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
              <div>
                <p className="font-semibold text-white">Email Resmi</p>
                <p className="text-sm text-slate-300">halo@sewamobilandalan.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Sewa Mobil Andalan — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
