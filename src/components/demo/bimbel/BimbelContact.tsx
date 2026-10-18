import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export const BimbelContact = () => {
  return (
    <section className="bg-indigo-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Banner CTA Trial */}
        <div className="rounded-xl bg-linear-to-r from-indigo-900 via-indigo-800 to-sky-900 p-8 md:p-12 text-center border border-sky-400/20 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-400/20 px-4 py-1.5 text-xs font-semibold text-sky-300">
            Khusus Pendaftar Bulan Ini
          </span>
          <h2 className="mt-4 text-2xl font-bold sm:text-4xl text-white">
            Coba Kelas Trial Gratis 1 Sesi Tanpa Komitmen!
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-indigo-100">
            Ajak anak Anda merasakan langsung suasana belajar interaktif dan metode
            penjelasan mudah dari tutor kami sebelum memutuskan bergabung.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={waLink(
                "Halo Bintang Prestasi, saya mau klaim Kelas Trial Gratis 1 Sesi untuk anak saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-8 py-3.5 font-bold text-indigo-950 transition-all hover:bg-sky-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Klaim Trial Gratis via WhatsApp
            </a>
          </div>
        </div>

        {/* Informasi Kontak & Lokasi */}
        <div className="mt-16 grid gap-8 border-t border-indigo-900/60 pt-12 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-900 text-sky-400">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Lokasi Kampus Belajar</h3>
              <p className="mt-1 text-sm text-indigo-200">
                Jl. Cendrawasih No. 45, Situbondo, Jawa Timur
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-900 text-sky-400">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Jam Operasional</h3>
              <p className="mt-1 text-sm text-indigo-200">
                Senin – Sabtu: 08.00 – 20.30 WIB
                <br />
                Minggu: Khusus Sesi Tryout &amp; Privat
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-900 text-sky-400">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Konsultasi Akademik</h3>
              <p className="mt-1 text-sm text-indigo-200">
                WhatsApp: +62 877-4596-8545
                <br />
                Respon cepat pada jam kerja
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-indigo-300/70">
          <p>© 2026 Bimbel Bintang Prestasi. Halaman demo portofolio oleh Andalan Tech.</p>
        </div>
      </div>
    </section>
  );
};

export default BimbelContact;
