import {
  CalendarCheck,
  Clock,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function VetContact() {
  return (
    <section id="kontak" className="bg-emerald-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
              <CalendarCheck className="h-3.5 w-3.5" />
              Reservasi Praktis Tanpa Antre
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Jadwalkan Kunjungan Anabul Hari Ini
            </h2>
            <p className="mt-4 text-emerald-100/90 leading-relaxed">
              Konsultasikan keluhan, jadwalkan vaksin, atau booking slot grooming
              dengan mudah. Cukup kirim pesan WhatsApp dan tim kami akan segera
              mengonfirmasi jadwal Anda.
            </p>

            <div className="mt-6 space-y-2 text-sm text-emerald-200/90">
              <p className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                  1
                </span>
                Chat via WhatsApp dengan detail kondisi hewan
              </p>
              <p className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                  2
                </span>
                Pilih waktu temu & dokter yang bertugas
              </p>
              <p className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                  3
                </span>
                Datang langsung tanpa antre panjang di klinik
              </p>
            </div>

            <div className="mt-8">
              <a
                href={waLink(
                  "Halo VetCare, saya ingin booking jadwal periksa/grooming untuk anabul saya."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-emerald-950 transition-colors hover:bg-emerald-300">
                <MessageCircle className="h-5 w-5" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Alamat Klinik & Petshop</p>
                <p className="mt-1 text-sm text-emerald-100/80">
                  Jl. Melati No. 12, Besuki, Situbondo, Jawa Timur 68356
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Jam Operasional</p>
                <p className="mt-1 text-sm text-emerald-100/80">
                  Senin – Minggu: 08.30 – 21.00 WIB
                </p>
                <p className="text-xs text-emerald-300/80">
                  *Poli darurat 24 jam siap respon via WhatsApp
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PhoneCall className="mt-0.5 h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Kontak Layanan Pelanggan</p>
                <p className="mt-1 text-sm text-emerald-100/80">
                  WhatsApp: +62 877 4596 8545
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-emerald-100/60">
          © {new Date().getFullYear()} VetCare Klinik Hewan & Petshop — Demo website
          oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
