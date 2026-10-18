import { Clock, Mail, MapPin, MessageCircle, Phone, UserCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function PropertiAgent() {
  return (
    <section id="kontak" className="bg-slate-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-3.5 py-1 text-xs font-medium text-teal-300">
              <UserCheck className="h-4 w-4" />
              Konsultan Properti Berpengalaman
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl text-white">
              Siap Menemukan Rumah Idaman Anda?
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Diskusikan kriteria hunian impian, anggaran, atau simulasi angsuran KPR dengan tim konsultan kami. Kami siap mendampingi survey ke lokasi pilihan Anda kapan saja.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Halo Griya Andalan Properti, saya ingin jadwalkan survey lokasi listing properti.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-400">
                <MessageCircle className="h-5 w-5" />
                Jadwalkan Survey via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Kantor Pemasaran</p>
                <p className="text-sm text-slate-300">
                  Jl. Basuki Rahmat No. 88, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Jam Operasional Layanan</p>
                <p className="text-sm text-slate-300">
                  Setiap Hari, 08.00 – 19.00 WIB (Survey bisa akhir pekan)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Hotline / WhatsApp</p>
                <p className="text-sm text-slate-300">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Email Resmi</p>
                <p className="text-sm text-slate-300">halo@andalanproperti.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Griya Andalan Properti — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
