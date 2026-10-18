import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function ApotekContact() {
  return (
    <section id="kontak" className="bg-teal-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Butuh obat atau mau tanya dulu?
            </h2>
            <p className="mt-4 text-teal-50/90">
              Kirim pesan WhatsApp dengan nama obat atau keluhan Anda. Apoteker
              kami akan membantu mengecek stok, harga, dan cara pengiriman.
            </p>
            <a
              href={waLink(
                "Halo Apotek Sehatra, saya mau tanya pesanan dan jadwal antar."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-400 px-6 py-3 font-semibold text-teal-950 transition-colors hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Tanya Pesan Sekarang
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-sm text-teal-50/90">
                  Jl. Margonda Raya No. 128, Depok, Jawa Barat
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <p className="font-semibold">Jam Operasional</p>
                <p className="text-sm text-teal-50/90">
                  Senin–Sabtu, 07.00 – 23.00 WIB
                  <br />
                  Minggu, 08.00 – 22.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp</p>
                <p className="text-sm text-teal-50/90">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-teal-100/70">
          © {new Date().getFullYear()} Apotek Sehatra — Demo website oleh
          Andalan Tech.
        </div>
      </div>
    </section>
  );
}
