import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function AgencyContact() {
  return (
    <section id="kontak" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300">
              <Send className="h-3.5 w-3.5" />
              Mulai Proyek Anda
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Siap Mengubah Ide Menjadi Solusi Digital?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Diskusikan rancangan aplikasi, kebutuhan website perusahaan, atau rencana
              pemasaran digital bisnis Anda langsung bersama tim teknis kami via WhatsApp.
            </p>
            <div className="mt-8">
              <a
                href={waLink("Halo Andalan Digital Agency, saya mau jadwalkan sesi diskusi/konsultasi proyek baru.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
              <div>
                <p className="font-semibold text-sm text-white">Lokasi Kantor</p>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Cyber Creative Hub Lt. 3, Jl. Teknologi Digital No. 88, Jakarta Selatan
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
              <div>
                <p className="font-semibold text-sm text-white">Jam Kerja &amp; Konsultasi</p>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Senin – Jumat: 09.00 – 18.00 WIB (Respon Cepat WhatsApp 24/7)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
              <div>
                <p className="font-semibold text-sm text-white">Telepon / WhatsApp Resmi</p>
                <p className="text-xs sm:text-sm text-neutral-400">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
              <div>
                <p className="font-semibold text-sm text-white">Email Kerja Sama</p>
                <p className="text-xs sm:text-sm text-neutral-400">
                  halo@andalangroup.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Andalan Digital Agency — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
