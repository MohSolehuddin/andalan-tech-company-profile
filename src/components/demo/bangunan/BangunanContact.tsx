import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function BangunanContact() {
  return (
    <section id="kontak" className="bg-stone-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Butuh material hari ini?
            </h2>
            <p className="mt-4 text-stone-100/90">
              Chat tim kami untuk cek stok, harga grosir, dan jadwal
              pengiriman. Dibalas cepat setiap hari kerja.
            </p>
            <a
              href={waLink("Halo Toko Bangunan Kokoh, saya mau order material untuk proyek.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-stone-950 transition-colors hover:bg-amber-400">
              <MessageCircle className="h-5 w-5" />
              Chat WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-amber-400" />
              <div>
                <p className="font-semibold">Gudang & Toko</p>
                <p className="text-sm text-stone-100/90">
                  Jl. Raya Proyek No. 12, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-amber-400" />
              <div>
                <p className="font-semibold">Jam Buka</p>
                <p className="text-sm text-stone-100/90">
                  Senin - Sabtu, 07.00 - 17.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-amber-400" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-stone-100/90">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-stone-100/70">
          © {new Date().getFullYear()} Toko Bangunan Kokoh — Demo website oleh
          Andalan Tech.
        </div>
      </div>
    </section>
  );
}
