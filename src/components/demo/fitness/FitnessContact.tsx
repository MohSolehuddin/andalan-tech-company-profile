import { Clock, Dumbbell, MapPin, Phone, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function FitnessContact() {
  return (
    <section id="kontak" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400">
              <Dumbbell className="h-3.5 w-3.5" />
              Mulai Perjalanan Anda
            </span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Siap Bertransformasi Hari Ini?
            </h2>
            <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
              Kunjungi studio kami atau daftarkan diri Anda sekarang. Klaim uji coba
              gratis 1 hari dan rasakan sendiri atmosfer latihan di PrimaFit Studio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Halo PrimaFit Studio, saya ingin daftar uji coba gratis 1 hari.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-red-600 px-6 py-3 font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                <ShieldCheck className="h-5 w-5" />
                Daftar Free Trial via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Lokasi Studio</p>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                  Jl. Pemuda No. 88, Kawasan Olahraga Terpadu, Situbondo, Jawa Timur
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Jam Operasional</p>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                  Senin – Minggu: 06.00 – 22.00 WIB
                  <br />
                  (Buka setiap hari termasuk hari libur nasional)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Kontak WhatsApp</p>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                  +62 877 4596 8545 (Respon Cepat)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} PrimaFit Studio — Demo website oleh{" "}
          <span className="font-semibold text-neutral-300">Andalan Tech</span>.
        </div>
      </div>
    </section>
  );
}
