import { Clock, MapPin, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { DEMO_WA, waLink } from "@/lib/demo/wa";

export default function OlehContact() {
  return (
    <section id="kontak" className="bg-stone-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              Konsultasi & Pemesanan
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Siap Kirim Oleh-Oleh Favorit ke Rumah Anda
            </h2>
            <p className="mt-4 text-stone-300">
              Butuh paket khusus untuk acara pernikahan, gathering kantor, atau
              buah tangan rombongan wisata? Hubungi admin kami di WhatsApp.
              Proses cepat, ramah, dan bisa custom isi hampers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Halo Oleh-Oleh Khas Situbondo, saya ingin berkonsultasi pemesanan oleh-oleh."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-stone-950 transition-colors hover:bg-orange-400">
                <MessageCircle className="h-5 w-5" />
                Hubungi via WhatsApp
              </a>
              <a
                href="#katalog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10">
                <ShoppingBag className="h-5 w-5" />
                Pilih Produk Dulu
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xs">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Lokasi Outlet Pusat</p>
                <p className="mt-1 text-sm text-stone-300">
                  Jl. Raya Pantura No. 88, Panarukan, Kab. Situbondo, Jawa Timur
                  68351 (Dekat Akses Wisata Bahari Pasir Putih)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Jam Operasional</p>
                <p className="mt-1 text-sm text-stone-300">
                  Buka setiap hari: 07.30 – 21.00 WIB
                </p>
                <p className="text-xs text-stone-400">
                  Pengiriman ekspedisi: Senin – Sabtu (Cut-off jam 12.00 WIB)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Layanan Pelanggan WhatsApp</p>
                <p className="mt-1 text-sm text-stone-300">
                  +{DEMO_WA.slice(0, 2)} {DEMO_WA.slice(2, 5)} {DEMO_WA.slice(5, 9)}{" "}
                  {DEMO_WA.slice(9)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} Oleh-Oleh Khas Situbondo — Demo website
          oleh{" "}
          <a
            href="/"
            className="font-medium text-stone-300 hover:text-white hover:underline">
            Andalan Tech
          </a>
          .
        </div>
      </div>
    </section>
  );
}
