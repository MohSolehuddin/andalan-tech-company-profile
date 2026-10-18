import { MapPin, Phone, Clock, MessageSquareQuote } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function KateringContact() {
  return (
    <section id="kontak" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">
              Konsultasi & Reservasi
            </span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Siap Sajikan Hidangan Terbaik untuk Acara Anda?
            </h2>
            <p className="mt-4 text-neutral-300">
              Ceritakan tanggal acara, jumlah porsi, serta preferensi menu Anda.
              Tim Berkah Rasa Catering siap menyiapkan penawaran paket paling pas
              dengan anggaran Anda.
            </p>

            <a
              href={waLink(
                "Halo Berkah Rasa Catering, saya mau pesan katering untuk tanggal [Tanggal] sebanyak [Jumlah Porsi] dengan paket [Harian/Box/Prasmanan/Snack]."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-amber-400">
              <MessageSquareQuote className="h-5 w-5" />
              Pesan Langsung via WhatsApp
            </a>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 p-6 border border-white/10">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Dapur Utama</p>
                <p className="text-sm text-neutral-300">
                  Jl. Basuki Rahmat No. 88, Mimbaan, Situbondo, Jawa Timur
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">WhatsApp & Telepon</p>
                <p className="text-sm text-neutral-300">+62 877 4596 8545</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Jam Operasional Layanan</p>
                <p className="text-sm text-neutral-300">
                  Senin – Minggu: 06.00 – 20.00 WIB (Siap kirim setiap hari)
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-xs text-amber-200">
              <p className="font-medium">Cara Pemesanan Cepat:</p>
              <p className="mt-1 text-neutral-300">
                1. Pilih jenis paket & tentukan tanggal <br />
                2. Klik tombol WhatsApp & kirim rincian pesanan <br />
                3. Pembayaran DP & pesanan dikirim tepat waktu
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Berkah Rasa Catering — Demo website template
          oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
