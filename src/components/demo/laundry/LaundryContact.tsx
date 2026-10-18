import { Clock, MapPin, MessageCircle, Phone, Shirt } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

export default function LaundryContact() {
  return (
    <section id="kontak" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 rounded-3xl border border-sky-100 bg-sky-50/60 p-8 md:grid-cols-2 md:p-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-medium text-sky-700">
              <Shirt className="h-3.5 w-3.5" />
              Outlet & Layanan Antar-Jemput
            </div>
            <h2 className="mt-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Siap bantu cucian Anda hari ini
            </h2>
            <p className="mt-4 text-neutral-600">
              Mampir ke outlet atau minta kurir menjemput. Kami buka setiap hari,
              termasuk akhir pekan dan hari libur nasional.
            </p>
            <a
              href={waLink(
                "Halo Kilat Bersih Laundry, saya mau tanya jadwal penjemputan cucian."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-500">
              <MessageCircle className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl border border-sky-100 bg-white p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
              <div>
                <p className="font-semibold text-neutral-900">Alamat Outlet</p>
                <p className="text-sm text-neutral-600">
                  Jl. Kebersihan No. 21, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
              <div>
                <p className="font-semibold text-neutral-900">Jam Buka</p>
                <p className="text-sm text-neutral-600">
                  Senin – Sabtu: 07.00 – 21.00 WIB
                  <br />
                  Minggu: 08.00 – 18.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
              <div>
                <p className="font-semibold text-neutral-900">
                  Telepon / WhatsApp
                </p>
                <p className="text-sm text-neutral-600">+62 877 4596 8545</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Kilat Bersih Laundry — Demo website oleh
          Andalan Tech.
        </div>
      </div>
    </section>
  );
}
