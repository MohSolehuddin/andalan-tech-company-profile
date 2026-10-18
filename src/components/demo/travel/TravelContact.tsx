import { Clock, Mail, MapPin, MessageCircle, Phone, UserCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function TravelContact() {
  return (
    <section id="kontak" className="bg-slate-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3.5 py-1 text-xs font-medium text-cyan-300">
              <UserCheck className="h-4 w-4" />
              Travel Consultant Siap Membantu
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl text-white">
              Siap Berangkat Liburan?
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Ceritakan destinasi impian, tanggal libur, dan jumlah peserta Anda. Tim kami
              akan menyusun rekomendasi paket beserta itinerary dan rincian biaya lengkap.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Halo Jelajah Andalan Travel, saya ingin booking paket wisata. Mohon dibantu rekomendasinya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400">
                <MessageCircle className="h-5 w-5" />
                Booking Sekarang via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Kantor Pemasaran</p>
                <p className="text-sm text-slate-300">
                  Jl. Diponegoro No. 45, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Jam Operasional Layanan</p>
                <p className="text-sm text-slate-300">
                  Senin – Sabtu, 08.00 – 20.00 WIB (Minggu via WhatsApp)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Hotline / WhatsApp</p>
                <p className="text-sm text-slate-300">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Email Resmi</p>
                <p className="text-sm text-slate-300">halo@jelajahandalan.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Jelajah Andalan Travel — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
