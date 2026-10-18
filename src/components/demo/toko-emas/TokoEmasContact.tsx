import { Clock, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function TokoEmasContact() {
  return (
    <section id="kontak" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-400">
              <Phone className="h-4 w-4" />
              Layanan Pelanggan
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Tertarik Memesan atau Konsultasi Model?
            </h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              Tim spesialis perhiasan kami siap membantu menjawab pertanyaan seputar
              kadar karat, rekomendasi ukuran jari, perkiraan berat, hingga
              prosedur pengiriman bergaransi.
            </p>
            <div className="mt-8">
              <a
                href={waLink(
                  "Halo Emas Mulia Perhiasan, saya ingin order / tanya perhiasan."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-yellow-500 to-amber-600 px-6 py-3.5 font-semibold text-neutral-950 transition-all hover:brightness-110">
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Showroom & Galeri</p>
                <p className="text-sm text-neutral-300">
                  Pertokoan Emas Pasar Baru Blok B No. 12, Jawa Timur
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Jam Operasional</p>
                <p className="text-sm text-neutral-300">
                  Senin – Minggu: 09.00 – 20.30 WIB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp Resmi</p>
                <p className="text-sm text-neutral-300">+62 877 4596 8545</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Pengiriman Aman</p>
                <p className="text-xs text-neutral-300">
                  Ekspedisi khusus perhiasan berasuransi 100% ke seluruh Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Emas Mulia Perhiasan — Demo website oleh{" "}
          <span className="text-white font-medium">Andalan Tech</span>.
        </div>
      </div>
    </section>
  );
}
