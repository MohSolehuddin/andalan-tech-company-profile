import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function SpaContact() {
  return (
    <section id="kontak" className="bg-lime-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Waktunya memanjakan diri
            </h2>
            <p className="mt-4 text-lime-50/90">
              Booking sekarang dan rasakan pijat terbaik dari terapis kami.
              Bisa untuk kunjungan sendiri, pasangan, maupun keluarga.
            </p>
            <a
              href={waLink(
                "Halo, saya mau tanya jadwal dan booking di Ayu Spa & Reflexology."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 font-semibold text-emerald-950 transition-colors hover:bg-lime-300">
              <MessageCircle className="h-5 w-5" />
              Chat WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-lime-300" />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-sm text-lime-50/90">
                  Jl. Kenanga No. 27, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-lime-300" />
              <div>
                <p className="font-semibold">Jam Operasional</p>
                <p className="text-sm text-lime-50/90">
                  Setiap hari, 09.00 – 21.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-lime-300" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp</p>
                <p className="text-sm text-lime-50/90">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-lime-100/70">
          © {new Date().getFullYear()} Ayu Spa &amp; Reflexology — Demo website
          oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
