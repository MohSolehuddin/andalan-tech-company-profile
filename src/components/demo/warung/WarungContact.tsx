import { Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const jamBuka = [
  { hari: "Senin – Jumat", jam: "07.00 – 21.00 WIB" },
  { hari: "Sabtu – Minggu", jam: "06.30 – 21.30 WIB" },
  { hari: "Libur Nasional", jam: "Tetap buka (08.00 – 20.00 WIB)" },
];

export default function WarungContact() {
  return (
    <section id="kontak" className="bg-stone-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-semibold text-red-300">
              <UtensilsCrossed className="h-3.5 w-3.5" />
              Makan enak, harga warung
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Lapar? Order Sekarang via WhatsApp
            </h2>
            <p className="mt-4 text-stone-300">
              Untuk pesanan makan di tempat, bungkus, maupun antar — cukup chat
              WhatsApp. Pesanan diproses beberapa menit setelah masuk.
            </p>
            <a
              href={waLink(
                "Halo Warung Sederhana Jaya, saya mau order makan / tanya menu hari ini."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500">
              <Phone className="h-5 w-5" />
              Chat WhatsApp Sekarang
            </a>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-400" />
              <div>
                <p className="font-semibold text-white">Alamat Warung</p>
                <p className="text-sm text-stone-300">
                  Jl. Raya Situbondo No. 8, Patokan, Jawa Timur
                </p>
                <p className="mt-1 text-xs text-red-300/80">
                  (Sebelah toko bangunan, parkir motor luas)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-red-400" />
              <div className="flex-1">
                <p className="font-semibold text-white">Jam Buka</p>
                <ul className="mt-1 space-y-1 text-sm text-stone-300">
                  {jamBuka.map((item) => (
                    <li
                      key={item.hari}
                      className="flex items-center justify-between gap-4">
                      <span>{item.hari}</span>
                      <span className="text-stone-400">{item.jam}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/10 pt-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-red-400" />
              <div>
                <p className="font-semibold text-white">Telepon / WhatsApp</p>
                <p className="text-sm text-stone-300">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-stone-400">
          © {new Date().getFullYear()} Warung Sederhana Jaya — Demo website oleh{" "}
          <span className="font-medium text-red-400">Andalan Tech</span>.
        </div>
      </div>
    </section>
  );
}
