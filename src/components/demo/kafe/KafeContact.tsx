import { Clock, Coffee, Mail, MapPin, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function KafeContact() {
  return (
    <section id="kontak" className="bg-stone-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
              <Coffee className="h-3.5 w-3.5" />
              Ruang Temu & Acara
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Ingin Booking Meja atau Adakan Acara Spesial?
            </h2>
            <p className="mt-4 text-stone-300">
              Kami menerima reservasi meja untuk kerja kelompok, perayaan ulang
              tahun santai, peluncuran karya, hingga sewa space privat. Hubungi
              kami langsung via WhatsApp untuk respon cepat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Halo Kopi Titik Temu, saya mau tanya paket sewa ruang / reservasi meja untuk grup."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-500">
                <Phone className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
              <div>
                <p className="font-semibold text-white">Alamat Kafe</p>
                <p className="text-sm text-stone-300">
                  Jl. Cempaka No. 45, Patokan, Situbondo, Jawa Timur
                </p>
                <p className="mt-1 text-xs text-amber-300/80">
                  (50 meter timur Alun-alun Kota, parkir motor & mobil luas)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
              <div>
                <p className="font-semibold text-white">Jam Operasional</p>
                <p className="text-sm text-stone-300">
                  Senin – Kamis: 08.00 – 22.00 WIB
                </p>
                <p className="text-sm text-stone-300">
                  Jumat – Minggu: 08.00 – 23.30 WIB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
              <div>
                <p className="font-semibold text-white">Telepon / WhatsApp</p>
                <p className="text-sm text-stone-300">+62 877 4596 8545</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
              <div>
                <p className="font-semibold text-white">Email Kerjasama</p>
                <p className="text-sm text-stone-300">halo@kopititiktemu.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-stone-400">
          © {new Date().getFullYear()} Kopi Titik Temu — Demo website oleh{" "}
          <span className="font-medium text-amber-400">Andalan Tech</span>.
        </div>
      </div>
    </section>
  );
}
