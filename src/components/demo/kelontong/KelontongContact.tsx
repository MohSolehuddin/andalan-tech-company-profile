import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function KelontongContact() {
  return (
    <section id="kontak" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-2xl bg-linear-to-br from-lime-600 to-green-700 p-8 text-white md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Kirim daftar belanja Anda
              </h2>
              <p className="mt-4 text-lime-50/90">
                Tulis kebutuhan sembako di WhatsApp, kami cek stok, harga, dan
                ongkirnya. Bayar setelah pesanan sampai.
              </p>
              <a
                href={waLink(
                  "Halo Kelontong Sembako Murah, ini daftar belanja saya:"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-green-700 transition-colors hover:bg-lime-50">
                <MessageCircle className="h-5 w-5" />
                Order via WhatsApp
              </a>
            </div>

            <div className="space-y-5 rounded-2xl bg-white/10 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-lime-200" />
                <div>
                  <p className="font-semibold">Alamat Toko</p>
                  <p className="text-sm text-lime-50/90">
                    Jl. Pasar Baru No. 12, Situbondo, Jawa Timur
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-lime-200" />
                <div>
                  <p className="font-semibold">Jam Buka</p>
                  <p className="text-sm text-lime-50/90">
                    Setiap hari, 06.00–21.00 WIB
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-lime-200" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-lime-50/90">+62 877 4596 8545</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Kelontong Sembako Murah — Demo website
          oleh Andalan Tech.
        </p>
      </div>
    </section>
  );
}
