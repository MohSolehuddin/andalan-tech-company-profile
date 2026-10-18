import { Clock, Mail, MapPin, MessageCircle, Phone, Sprout } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function TaniContact() {
  return (
    <section id="kontak" className="bg-slate-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-3.5 py-1 text-xs font-medium text-green-300">
              <Sprout className="h-4 w-4 text-lime-400" />
              Toko Sarana Pertanian Situbondo
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl text-white">
              Kebutuhan Tani Mendesak? Hubungi Kami Sekarang
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Tim kami siap membantu pengecekan ketersediaan stok pupuk, harga benih hibrida, pesanan antar ke sawah, atau sewa mesin pertanian. Kirim pesan WhatsApp kapan saja.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Halo Tani Makmur Situbondo, saya ingin pesan sarana pertanian dan tanya pengiriman ke sawah.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-green-600 to-lime-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:from-green-500 hover:to-lime-500">
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-lime-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Alamat Toko &amp; Gudang</p>
                <p className="text-sm text-slate-300">
                  Jl. Raya Surabaya - Banyuwangi No. 128, Mimbaan, Kec. Panji, Kab. Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-lime-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Jam Buka Toko</p>
                <p className="text-sm text-slate-300">
                  Senin – Minggu: 06.00 – 17.30 WIB (Buka lebih pagi untuk persiapan ke sawah)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-lime-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Layanan WhatsApp / Telepon</p>
                <p className="text-sm text-slate-300">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-lime-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Email Pertanyaan</p>
                <p className="text-sm text-slate-300">kontak@tanimakmur-situbondo.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs sm:text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Tani Makmur Situbondo — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
