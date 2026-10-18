import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function PesantrenContact() {
  return (
    <section id="kontak" className="bg-emerald-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Silaturahim ke Pondok Pesantren Kami
            </h2>
            <p className="mt-4 text-emerald-100/90 leading-relaxed">
              Bapak/Ibu calon wali santri diperkenankan untuk berkunjung langsung,
              melihat lingkungan asrama, sarana ibadah, dan berkonsultasi mengenai
              pendidikan putra-putri tercinta dengan pengurus pesantren di Situbondo.
            </p>
            <a
              href={waLink(
                "Halo Sekretariat Pondok Pesantren Raudhatul Ulum Situbondo, saya ingin menjadwalkan kunjungan silaturahim ke pondok."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-400 px-6 py-3.5 font-semibold text-emerald-950 transition-colors hover:bg-teal-300">
              <MessageCircle className="h-5 w-5" />
              Jadwalkan Kunjungan via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
              <div>
                <p className="font-semibold">Alamat Pesantren</p>
                <p className="text-sm text-emerald-100/90">
                  Jl. KHR. As&apos;ad Syamsul Arifin No. 45, Situbondo, Jawa Timur 68311
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
              <div>
                <p className="font-semibold">Layanan Sekretariat PPDB</p>
                <p className="text-sm text-emerald-100/90">
                  Sabtu – Kamis, 08.00 – 16.00 WIB (Jumat Libur Ta&apos;lim)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp Panitia</p>
                <p className="text-sm text-emerald-100/90">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
              <div>
                <p className="font-semibold">Surat Elektronik</p>
                <p className="text-sm text-emerald-100/90">
                  ppdb@raudhatululum-situbondo.sch.id
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-emerald-100/70">
          © {new Date().getFullYear()} Pondok Pesantren Raudhatul Ulum Situbondo — Demo website profil &amp; PPDB
          oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
