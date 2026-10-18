import { MapPin, Phone, Clock, MessageSquare, Mail } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function LegalContact() {
  return (
    <section id="kontak" className="bg-slate-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Konsultasi &amp; Kontak
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Butuh Pendampingan Hukum atau Urus Legalitas?
            </h2>
            <p className="mt-4 text-slate-300">
              Jadwalkan sesi konsultasi awal dengan tim advokat atau notaris
              kami. Kami siap mendengarkan dan memberikan solusi hukum yang
              tuntas dan sesuai kepatuhan regulasi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Halo Pratama & Co, saya ingin menjadwalkan konsultasi hukum bisnis."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                <MessageSquare className="h-5 w-5" />
                Chat via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-blue-400" />
              <div>
                <p className="font-semibold text-white">Alamat Kantor</p>
                <p className="text-sm text-slate-300">
                  Menara Sudirman Lantai 18, Jl. Jend. Sudirman Kav. 60, Jakarta
                  Selatan 12190
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-blue-400" />
              <div>
                <p className="font-semibold text-white">WhatsApp &amp; Telepon</p>
                <p className="text-sm text-slate-300">+62 877 4596 8545</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-blue-400" />
              <div>
                <p className="font-semibold text-white">Email Resmi</p>
                <p className="text-sm text-slate-300">
                  konsultasi@pratamalaw.co.id
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-blue-400" />
              <div>
                <p className="font-semibold text-white">Jam Operasional</p>
                <p className="text-sm text-slate-300">
                  Senin – Jumat: 08.30 – 17.30 WIB
                </p>
                <p className="text-xs text-slate-400">
                  Sabtu: Dengan perjanjian temu
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Pratama &amp; Co Law Firm — Demo website
          oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
