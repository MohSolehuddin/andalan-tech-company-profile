import { Clock, HeartHandshake, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function WeddingContact() {
  return (
    <section id="kontak" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-3.5 py-1 text-xs font-medium text-fuchsia-300">
              <HeartHandshake className="h-3.5 w-3.5 text-fuchsia-300" />
              Konsultasi & Food Tasting Gratis
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Siap Merancang Hari Spesial Anda?
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-300">
              Ceritakan tanggal pernikahan, jumlah tamu, dan preferensi tema Anda. Tim wedding consultant kami siap menyusun estimasi anggaran terbaik dan menjadwalkan food tasting gratis.
            </p>
            <div className="mt-8">
              <a
                href={waLink(
                  "Halo Mahligai Wedding, saya ingin konsultasi gratis dan informasi ketersediaan tanggal pernikahan."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-fuchsia-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-fuchsia-500">
                <MessageCircle className="h-5 w-5" />
                Konsultasi Gratis via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-fuchsia-400" />
              <div>
                <p className="font-semibold text-white">Kantor & Galeri</p>
                <p className="mt-0.5 text-sm text-neutral-300">
                  Jl. Melati Indah No. 88, Kebayoran Baru, Jakarta Selatan
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-fuchsia-400" />
              <div>
                <p className="font-semibold text-white">Layanan WhatsApp</p>
                <p className="mt-0.5 text-sm text-neutral-300">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-fuchsia-400" />
              <div>
                <p className="font-semibold text-white">Jam Operasional & Janji Temu</p>
                <p className="mt-0.5 text-sm text-neutral-300">
                  Senin – Minggu: 09.00 – 21.00 WIB (Dengan Janji Temu)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Mahligai Wedding Organizer — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
