import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function OptikContact() {
  return (
    <section id="kontak" className="bg-indigo-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Reservasi atau pesan kacamata Anda
            </h2>
            <p className="mt-4 text-indigo-50/90">
              Kirim resep dokter, pilih frame, atau tanya ketersediaan softlens
              lewat WhatsApp. Pesanan bisa diambil di toko atau dikirim.
            </p>
            <a
              href={waLink(
                "Halo Optik Melihat Jernih, saya mau order / reservasi kacamata."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-400 px-6 py-3 font-semibold text-indigo-950 transition-colors hover:bg-indigo-300">
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-indigo-300" />
              <div>
                <p className="font-semibold">Alamat Toko</p>
                <p className="text-sm text-indigo-50/90">
                  Jl. Melati No. 21, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-indigo-300" />
              <div>
                <p className="font-semibold">Jam Operasional</p>
                <p className="text-sm text-indigo-50/90">
                  Senin–Sabtu, 09.00 – 21.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-indigo-300" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp</p>
                <p className="text-sm text-indigo-50/90">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-indigo-100/70">
          © {new Date().getFullYear()} Optik Melihat Jernih — Demo website oleh
          Andalan Tech.
        </div>
      </div>
    </section>
  );
}
