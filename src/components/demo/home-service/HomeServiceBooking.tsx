import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  "Chat WhatsApp dan ceritakan keluhan atau kebutuhan Anda.",
  "Pilih tanggal dan jam kunjungan yang paling pas.",
  "Teknisi datang, kerja rapi, Anda bayar setelah selesai.",
];

export default function HomeServiceBooking() {
  return (
    <section id="booking" className="bg-sky-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Booking hari ini, besok teknisi datang
            </h2>
            <p className="mt-4 text-sky-100/90">
              Layanan area Situbondo dan sekitarnya. Baik servis AC, cleaning,
              maupun plumbing — semua bisa dipesan lewat WhatsApp.
            </p>

            <ol className="mt-6 space-y-3 text-sm text-sky-100/90">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-sky-950">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <a
              href={waLink(
                "Halo ServisPro AC & Home Cleaning, saya mau booking teknisi. Boleh info jadwal yang tersedia?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Booking via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-sky-300" />
              <div>
                <p className="font-semibold">Area Layanan</p>
                <p className="text-sm text-sky-100/90">
                  Situbondo, Besuki, Panarukan, dan sekitarnya
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-sky-300" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-sky-100/90">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-sky-300" />
              <div>
                <p className="font-semibold">Jam Operasional</p>
                <p className="text-sm text-sky-100/90">
                  Setiap hari, 07.00–20.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-sky-100/70">
          © {new Date().getFullYear()} ServisPro AC & Home Cleaning — Demo
          website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
