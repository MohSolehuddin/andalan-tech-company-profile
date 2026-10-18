import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export const PaudContact = () => {
  return (
    <section id="kontak" className="bg-rose-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-400/10 px-3.5 py-1 text-xs font-semibold text-rose-300">
              Kunjungan &amp; Konsultasi
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Yuk, Main dan Kunjungi Sekolah Kami!
            </h2>
            <p className="mt-4 text-rose-100/90 leading-relaxed">
              Ayah dan Bunda dipersilakan datang untuk melihat langsung lingkungan belajar, ruang tidur daycare, serta berdiskusi santai dengan kepala sekolah dan tim pengasuh.
            </p>
            <div className="mt-8">
              <a
                href={waLink("Halo PAUD Ceria & Daycare, saya ingin jadwalkan kunjungan sekolah dan trial class anak.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-rose-500 to-pink-500 px-6 py-3.5 font-semibold text-white shadow-sm transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                <MessageCircle className="h-5 w-5" />
                Jadwalkan Kunjungan via WA
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="font-semibold text-white">Alamat Kampus</p>
                <p className="text-sm text-rose-100/80">
                  Jl. Melati Ceria No. 18, Kec. Panji, Situbondo, Jawa Timur 68321
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="font-semibold text-white">Waktu Layanan Informasi</p>
                <p className="text-sm text-rose-100/80">
                  Senin – Sabtu, 07.30 – 16.30 WIB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="font-semibold text-white">Telepon / WhatsApp</p>
                <p className="text-sm text-rose-100/80">+62 877 4596 8545</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="font-semibold text-white">Email Resmi</p>
                <p className="text-sm text-rose-100/80">halo@paudceria.sch.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-rose-200/70 sm:text-sm">
          © {new Date().getFullYear()} PAUD Ceria &amp; Daycare — Demo website portofolio oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
};

export default PaudContact;
