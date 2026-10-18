import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function FashionContact() {
  return (
    <section id="kontak" className="bg-violet-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Siap order atau masih tanya-tanya?
            </h2>
            <p className="mt-4 text-violet-50/90">
              Tim kami siap bantu pilih model dan ukuran yang paling pas.
              Chat sekarang, stok dicek langsung.
            </p>
            <a
              href={waLink("Halo Distro Style Nusantara, saya mau order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-400">
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <p className="font-semibold">Alamat Store</p>
                <p className="text-sm text-violet-50/90">
                  Jl. Merdeka No. 21, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-violet-50/90">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <p className="font-semibold">Jam Buka</p>
                <p className="text-sm text-violet-50/90">
                  Senin–Sabtu 09.00–20.00, Minggu 10.00–17.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-violet-100/70">
          © {new Date().getFullYear()} Distro Style Nusantara — Demo website oleh
          Andalan Tech.
        </div>
      </div>
    </section>
  );
}
