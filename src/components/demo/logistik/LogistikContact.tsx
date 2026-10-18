import { Clock, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function LogistikContact() {
  return (
    <section id="kontak" className="bg-indigo-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <MessageCircle className="h-4 w-4" />
              Order & Konsultasi
            </span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Mau pindah atau kirim barang minggu ini?
            </h2>
            <p className="mt-4 text-blue-50/90">
              Kirim foto barang dan alamat asal-tujuan lewat WhatsApp. Tim kami
              balas dengan estimasi biaya dan slot armada terdekat.
            </p>
            <a
              href={waLink(
                "Halo PindahAja Logistik, saya mau order pindahan / pengiriman barang."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold">Pool & Kantor</p>
                <p className="text-sm text-blue-50/90">
                  Jl. Raya Situbondo No. 88, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-blue-50/90">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold">Jam Layanan</p>
                <p className="text-sm text-blue-50/90">
                  Senin–Sabtu, 08.00–20.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold">Area Layanan</p>
                <p className="text-sm text-blue-50/90">
                  Seluruh Jawa Timur, Jabodetabek, dan antar pulau.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-blue-100/70">
          © {new Date().getFullYear()} PindahAja Logistik & Ekspedisi — Demo
          website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
