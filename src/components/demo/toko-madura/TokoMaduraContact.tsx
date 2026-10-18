import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function TokoMaduraContact() {
  return (
    <section id="kontak" className="bg-neutral-950 px-4 py-16 md:py-24 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
              Pelayanan 24 Jam
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Butuh Sembako Kapan Saja? Chat WhatsApp Kami
            </h2>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Toko Madura Barokah selalu buka untuk melayani kebutuhan mendesak
              maupun belanja rutin Anda. Tanya stok atau minta kirim barang
              langsung dibalas cepat.
            </p>
            <div className="mt-8">
              <a
                href={waLink(
                  "Halo Toko Madura Barokah, saya mau tanya stok dan pesan antar sembako."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400">
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
              <div>
                <p className="font-semibold text-white">Jam Operasional</p>
                <p className="text-sm text-neutral-300">
                  24 Jam Nonstop setiap hari (Hari Libur / Tanggal Merah tetap buka)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
              <div>
                <p className="font-semibold text-white">Lokasi Toko</p>
                <p className="text-sm text-neutral-300">
                  Jl. Raya Condet No. 18, Balekambang, Kramat Jati, Jakarta Timur
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
              <div>
                <p className="font-semibold text-white">Kontak WhatsApp</p>
                <p className="text-sm text-neutral-300">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Toko Madura Barokah — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
