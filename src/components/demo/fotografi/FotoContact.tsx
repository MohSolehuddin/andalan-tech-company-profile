import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function FotoContact() {
  return (
    <section id="kontak" className="bg-zinc-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Booking sesi foto Anda sekarang
            </h2>
            <p className="mt-4 text-zinc-200/90">
              Ceritakan tanggal dan jenis sesinya, kami cek ketersediaan jadwal
              dan kirim detail persiapannya.
            </p>
            <a
              href={waLink(
                "Halo Lumen Studio, saya mau booking sesi foto. Tanggalnya ..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-6 py-3 font-semibold text-zinc-900 transition-colors hover:bg-white">
              <MessageCircle className="h-5 w-5" />
              Booking via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-zinc-400" />
              <div>
                <p className="font-semibold">Studio</p>
                <p className="text-sm text-zinc-200/90">
                  Jl. Cahaya No. 14, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-zinc-400" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-zinc-200/90">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-zinc-400" />
              <div>
                <p className="font-semibold">Jam Studio</p>
                <p className="text-sm text-zinc-200/90">
                  Senin–Sabtu, 09.00–18.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-300/70">
          © {new Date().getFullYear()} Lumen Studio — Demo website oleh Andalan
          Tech.
        </div>
      </div>
    </section>
  );
}
