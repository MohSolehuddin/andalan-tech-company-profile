import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const BakeryContact = () => {
  return (
    <section id="kontak" className="bg-neutral-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300">
              <ShieldCheck className="h-4 w-4" />
              Layanan Pesan Antar & Katering
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Mau Pesan Roti Hangat atau Konsultasi Hampers?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300 md:text-base">
              Hubungi kami langsung via WhatsApp. Kami siap melayani pesanan harian,
              custom request hampers hari raya, hingga katering tumpeng roti untuk
              acara Anda.
            </p>

            <div className="mt-8">
              <a
                href={waLink(
                  "Halo Dapur Roti Nusantara, saya mau tanya ketersediaan menu dan pesan roti hari ini."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-neutral-950 transition-colors hover:bg-amber-400">
                <Phone className="h-4 w-4" />
                Chat WhatsApp Toko
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs md:p-8">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Jam Buka & Operasional</p>
                <p className="mt-0.5 text-xs text-neutral-300 md:text-sm">
                  Setiap Hari: 06.30 – 21.00 WIB
                </p>
                <p className="mt-1 text-xs text-amber-300/80">
                  Batch panggangan baru: Pagi 06.30 & Siang 13.00 WIB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Alamat Toko</p>
                <p className="mt-0.5 text-xs text-neutral-300 md:text-sm">
                  Jl. Diponegoro No. 88, Dawuhan, Situbondo, Jawa Timur
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  Tersedia area dine-in santai & parkir luas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Layanan WhatsApp</p>
                <p className="mt-0.5 text-xs text-neutral-300 md:text-sm">
                  +62 877 4596 8545
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  Respon cepat & pemesanan instan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Dapur Roti Nusantara — Demo portfolio
          dibuat oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
};

export default BakeryContact;
