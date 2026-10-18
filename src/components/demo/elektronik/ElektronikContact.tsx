import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function ElektronikContact() {
  return (
    <section id="kontak" className="bg-slate-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Layanan Pelanggan
            </span>
            <h2 className="mt-2 text-2xl font-bold sm:text-4xl">
              Konsultasi & Pemesanan Langsung
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
              Bingung memilih kapasitas AC atau ukuran TV yang tepat untuk ruangan Anda? Konsultasikan kebutuhan Anda bersama tim spesialis kami melalui WhatsApp.
            </p>
            <div className="mt-8">
              <a
                href={waLink("Halo Elektronik Jaya Abadi, saya ingin konsultasi rekomendasi produk elektronik.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500">
                <MessageCircle className="h-5 w-5 text-emerald-300" />
                Chat Customer Service
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-1 h-5 w-5 text-blue-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Showroom & Toko Utama</p>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-300">
                  Jl. Diponegoro No. 128, Kota Situbondo, Jawa Timur 68312
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Phone className="mt-1 h-5 w-5 text-blue-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">WhatsApp & Telepon</p>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-300">+62 877 4596 8545</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="mt-1 h-5 w-5 text-blue-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Jam Operasional</p>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-300">
                  Senin – Minggu: 08.30 – 21.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800/80 pt-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Elektronik Jaya Abadi — Demo Website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
