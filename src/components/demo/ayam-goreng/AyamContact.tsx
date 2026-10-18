import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function AyamContact() {
  return (
    <section id="kontak" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Lapar? Pesan sekarang atau ajak kami buka outlet di kotamu
            </h2>
            <p className="mt-4 text-neutral-300">
              Tim kami siap menerima pesanan antar, pesanan jumlah besar, hingga
              ajakan kemitraan franchise. Klik tombol di bawah, pesanan diproses
              dalam beberapa menit.
            </p>
            <a
              href={waLink(
                "Halo Ayam Geprek Mantap, saya mau pesan / tanya kemitraan outlet."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500">
              <MessageCircle className="h-5 w-5" />
              Chat WhatsApp Sekarang
            </a>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-red-400" />
              <div>
                <p className="font-semibold">Outlet Pusat</p>
                <p className="text-sm text-neutral-300">
                  Jl. PB Sudirman No. 88, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-red-400" />
              <div>
                <p className="font-semibold">Jam Buka</p>
                <p className="text-sm text-neutral-300">
                  Setiap hari, 10.00 – 22.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-red-400" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp</p>
                <p className="text-sm text-neutral-300">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Ayam Geprek Mantap — Demo website
          franchise oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
