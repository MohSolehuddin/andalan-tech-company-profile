import { Clock, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { DEMO_WA, waLink } from "@/lib/demo/wa";

export default function MotorContact() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 text-white shadow-xl">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                Showroom Resmi &amp; Terpercaya
              </span>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Kunjungi Showroom Kami atau Hubungi Kami Hari Ini
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Datang langsung untuk melihat kondisi unit, lakukan test ride gratis, atau
                konsultasikan langsung rencana tukar tambah motor Anda bersama tim kami.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin className="h-5 w-5 shrink-0 text-orange-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Alamat Showroom</h4>
                    <p className="mt-1 text-slate-300">
                      Jl. Raya Panji No. 88, Panji Kidul, Situbondo, Jawa Timur
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Clock className="h-5 w-5 shrink-0 text-orange-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Jam Operasional</h4>
                    <p className="mt-1 text-slate-300">
                      Senin - Sabtu: 08.00 - 17.00 WIB
                      <br />
                      Minggu: 09.00 - 15.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-6 backdrop-blur-md lg:col-span-5">
              <h3 className="text-lg font-bold text-white">Layanan Pelanggan WhatsApp</h3>
              <p className="mt-1 text-xs text-slate-300">
                Respon cepat untuk pertanyaan harga, pengajuan berkas kredit, nego unit, maupun booking servis.
              </p>

              <div className="mt-4 rounded-xl bg-black/30 p-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-400" />
                  <span>WhatsApp: +{DEMO_WA}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={waLink("Halo Motor Jaya Showroom, saya ingin membuat janji test ride sepeda motor.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-orange-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500">
                  <MessageCircle className="h-4 w-4" />
                  Jadwalkan Test Ride via WhatsApp
                </a>
                <a
                  href={waLink("Halo Motor Jaya Showroom, saya ingin konsultasi umum seputar motor yang tersedia.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50">
                  Tanya CS Showroom
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
