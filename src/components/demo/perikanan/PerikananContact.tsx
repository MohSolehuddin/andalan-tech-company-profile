import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function PerikananContact() {
  return (
    <section id="kontak" className="bg-slate-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Pusat Informasi & Pemesanan
            </span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Siap Menjadi Mitra Pasokan Hasil Laut Anda
            </h2>
            <p className="mt-4 text-slate-300">
              Diskusikan kebutuhan tonase mingguan, permintaan jenis ikan musiman,
              atau jadwalkan kunjungan ke fasilitas cold storage kami di Situbondo.
            </p>
            <div className="mt-8">
              <a
                href={waLink("Halo Samudra Situbondo, saya berminat menjalin kemitraan pasokan seafood rutin.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-cyan-400">
                <MessageCircle className="h-5 w-5" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
              <div>
                <p className="font-semibold text-white">Hub Sortasi & Cold Storage</p>
                <p className="mt-1 text-sm text-slate-300">
                  Kawasan Pelabuhan Panarukan & Pantai Pasir Putih, Kec. Panarukan, Kab. Situbondo, Jawa Timur 68351
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
              <div>
                <p className="font-semibold text-white">WhatsApp & Telepon</p>
                <p className="mt-1 text-sm text-slate-300">+62 877 4596 8545</p>
                <p className="text-xs text-slate-400">Layanan CS & Order: 05.00 - 21.00 WIB</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
              <div>
                <p className="font-semibold text-white">Email Kerjasama B2B</p>
                <p className="mt-1 text-sm text-slate-300">halo@andalan.tech</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Samudra Situbondo — Demo website supplier perikanan oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
