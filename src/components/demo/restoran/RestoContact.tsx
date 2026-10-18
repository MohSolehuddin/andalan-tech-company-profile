import { Clock, MapPin, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function RestoContact() {
  return (
    <section id="kontak" className="bg-neutral-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Mau reservasi atau pesan antar?
            </h2>
            <p className="mt-4 text-neutral-300">
              Tim kami siap membantu. Klik tombol di bawah untuk memesan langsung
              lewat WhatsApp — pesanan diproses dalam beberapa menit.
            </p>
            <a
              href={waLink(
                "Halo Rasa Nusantara, saya mau reservasi / pesan antar."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500">
              <Phone className="h-5 w-5" />
              Chat WhatsApp Sekarang
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-amber-400" />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-sm text-neutral-300">
                  Jl. Merdeka No. 12, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-amber-400" />
              <div>
                <p className="font-semibold">Jam Buka</p>
                <p className="text-sm text-neutral-300">
                  Setiap hari, 10.00 – 22.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-amber-400" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp</p>
                <p className="text-sm text-neutral-300">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Rasa Nusantara — Demo website oleh Andalan
          Tech.
        </div>
      </div>
    </section>
  );
}
