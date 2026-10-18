import { CalendarCheck, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function DealerMobilTestDrive() {
  return (
    <section id="test-drive" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-medium text-red-700">
              <CalendarCheck className="h-4 w-4" />
              Test Drive Gratis
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Coba Dulu, Baru Beli
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Jadwalkan test drive unit pilihan Anda tanpa biaya. Bisa datang ke showroom
              atau tim kami antar unit ke lokasi Anda sesuai kesepakatan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Halo Auto Prima Dealer Mobil, saya ingin jadwalkan test drive. Unit yang diminati: ...")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600">
                <MessageCircle className="h-5 w-5" />
                Jadwalkan Test Drive
              </a>
              <a
                href={waLink("Halo Auto Prima Dealer Mobil, saya ingin tanya-tanya dulu soal unit dan kredit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-red-400 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500">
                <MessageCircle className="h-5 w-5 text-red-600" />
                Tanya via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-slate-900">Showroom &amp; Garasi</p>
                <p className="text-sm text-slate-600">
                  Jl. Basuki Rahmat No. 88, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-slate-900">Jam Operasional</p>
                <p className="text-sm text-slate-600">
                  Senin – Sabtu, 08.00 – 18.00 WIB (Minggu by appointment)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-slate-900">Hotline / WhatsApp</p>
                <p className="text-sm text-slate-600">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-slate-900">Email Resmi</p>
                <p className="text-sm text-slate-600">halo@autoprimadealer.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Auto Prima Dealer Mobil — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
