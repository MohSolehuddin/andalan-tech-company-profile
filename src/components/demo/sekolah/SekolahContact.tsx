import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function SekolahContact() {
  return (
    <section id="kontak" className="bg-emerald-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Kunjungi kampus kami
            </h2>
            <p className="mt-4 text-emerald-50/90">
              Ingin melihat langsung suasana sekolah? Buat janji kunjungan atau
              konsultasi PPDB sekarang, tim kami siap membantu.
            </p>
            <a
              href={waLink("Halo, saya mau jadwalkan kunjungan ke SMA Cendekia Nusantara.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-emerald-950 transition-colors hover:bg-emerald-300">
              <MessageCircle className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-emerald-300" />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-sm text-emerald-50/90">
                  Jl. Pendidikan No. 12, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-emerald-300" />
              <div>
                <p className="font-semibold">Jam Layanan PPDB</p>
                <p className="text-sm text-emerald-50/90">
                  Senin–Sabtu, 08.00 – 15.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-emerald-300" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp</p>
                <p className="text-sm text-emerald-50/90">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-emerald-300" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-emerald-50/90">
                  ppdb@smacendekianusantara.sch.id
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-emerald-100/70">
          © {new Date().getFullYear()} SMA Cendekia Nusantara — Demo website
          oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
