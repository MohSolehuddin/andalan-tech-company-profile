import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function JasaContact() {
  return (
    <section id="kontak" className="bg-orange-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Siap mulai bangun personal brand Anda?
            </h2>
            <p className="mt-4 text-orange-50/90">
              Konsultasi awal gratis. Cerita singkat soal keahlian dan target
              Anda, kami bantu susun langkah pertamanya.
            </p>
            <a
              href={waLink(
                "Halo Nara Kreatif, saya mau konsultasi gratis soal personal brand saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-400">
              <MessageCircle className="h-5 w-5" />
              Konsultasi via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-orange-300" />
              <div>
                <p className="font-semibold">Studio</p>
                <p className="text-sm text-orange-50/90">
                  Jl. Kreatif No. 21, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-orange-300" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-orange-50/90">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-orange-300" />
              <div>
                <p className="font-semibold">Jam Kerja</p>
                <p className="text-sm text-orange-50/90">
                  Senin–Sabtu, 09.00–18.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-orange-100/70">
          © {new Date().getFullYear()} Nara Kreatif — Demo website oleh Andalan
          Tech.
        </div>
      </div>
    </section>
  );
}
