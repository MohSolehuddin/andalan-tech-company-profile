import { Clock, MapPin, MessageCircle, Phone, Wrench } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function BengkelContact() {
  return (
    <section id="kontak" className="bg-zinc-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3.5 py-1 text-xs font-medium text-red-300">
              <Wrench className="h-3.5 w-3.5" />
              Konsultasi & Layanan Darurat
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Butuh konsultasi atau ada kendala mesin di jalan?
            </h2>
            <p className="mt-4 text-zinc-300">
              Tim mekanik kami siap membantu diagnosa awal via WhatsApp atau
              menyiapkan slot servis kilat untuk kendaraan Anda.
            </p>
            <a
              href={waLink(
                "Halo AutoPrima Motor, saya mau tanya konsultasi servis kendaraan saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6 border border-white/10">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-red-400 shrink-0" />
              <div>
                <p className="font-semibold">Lokasi Bengkel</p>
                <p className="text-sm text-zinc-300">
                  Jl. Raya Otomotif No. 88, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-red-400 shrink-0" />
              <div>
                <p className="font-semibold">WhatsApp Layanan</p>
                <p className="text-sm text-zinc-300">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-red-400 shrink-0" />
              <div>
                <p className="font-semibold">Jam Operasional</p>
                <p className="text-sm text-zinc-300">
                  Senin – Sabtu: 08.00 – 17.00 WIB
                  <br />
                  Minggu: 09.00 – 15.00 WIB (Layanan Kilat)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} AutoPrima Motor — Demo website oleh Andalan
          Tech.
        </div>
      </div>
    </section>
  );
}
