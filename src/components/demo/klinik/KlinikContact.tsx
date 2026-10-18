import { CalendarCheck, Clock, MapPin, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function KlinikContact() {
  return (
    <section id="kontak" className="bg-teal-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Siap melayani keluarga Anda
            </h2>
            <p className="mt-4 text-teal-50/90">
              Buat janji temu sekarang dan pilih jadwal yang paling nyaman. Tanpa
              antre panjang, tanpa bingung.
            </p>
            <a
              href={waLink("Halo, saya mau buat janji di Klinik Sehat Bersama.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-400 px-6 py-3 font-semibold text-teal-950 transition-colors hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <CalendarCheck className="h-5 w-5" />
              Buat Janji Sekarang
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-sm text-teal-50/90">
                  Jl. Kesehatan No. 45, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <p className="font-semibold">Jam Operasional</p>
                <p className="text-sm text-teal-50/90">
                  Senin–Sabtu, 08.00 – 20.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp</p>
                <p className="text-sm text-teal-50/90">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-teal-100/70">
          © {new Date().getFullYear()} Klinik Sehat Bersama — Demo website oleh
          Andalan Tech.
        </div>
      </div>
    </section>
  );
}
