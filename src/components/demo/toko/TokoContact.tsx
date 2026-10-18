import { MapPin, Phone, ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function TokoContact() {
  return (
    <section id="kontak" className="bg-indigo-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Ada pertanyaan sebelum beli?
            </h2>
            <p className="mt-4 text-indigo-50/90">
              Tim kami siap bantu memilih ukuran dan produk yang tepat. Chat
              sekarang, dibalas cepat.
            </p>
            <a
              href={waLink("Halo TokoKita, saya mau bertanya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400">
              <ShoppingBag className="h-5 w-5" />
              Chat WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-indigo-300" />
              <div>
                <p className="font-semibold">Alamat Toko</p>
                <p className="text-sm text-indigo-50/90">
                  Jl. Pasar Baru No. 8, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-indigo-300" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-indigo-50/90">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-indigo-100/70">
          © {new Date().getFullYear()} TokoKita — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
