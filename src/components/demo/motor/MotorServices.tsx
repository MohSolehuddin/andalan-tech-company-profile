import { ArrowLeftRight, CalendarCheck, MessageCircle, PenTool, ShieldCheck, Wrench } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const serviceFeatures = [
  {
    icon: Wrench,
    title: "Servis Rutin & Scanner Injeksi",
    desc: "Diagnostik kelistrikan dan kalibrasi injeksi dengan scanner canggih untuk performa mesin bertenaga dan irit BBM.",
  },
  {
    icon: PenTool,
    title: "Oli & Sparepart 100% Original",
    desc: "Sedia suku cadang asli pabrikan (AHM, Yamalube, Suzuki Genuine Parts), kampas rem, ban, aki, dan rantai bergaransi.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Perbaikan & Mesin",
    desc: "Jaminan kepuasan servis gratis jika keluhan berulang dalam 14 hari, plus garansi mesin 3 bulan untuk setiap unit bekas kami.",
  },
  {
    icon: ArrowLeftRight,
    title: "Layanan Trade-In (Tukar Tambah)",
    desc: "Tukar motor lama Anda dengan unit baru atau bekas impian. Taksiran harga bersaing, transparan, dan proses langsung beres.",
  },
];

export default function MotorServices() {
  return (
    <section className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Purna Jual &amp; Bengkel Resmi
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Layanan Servis, Sparepart &amp; Tukar Tambah
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Bukan sekadar menjual motor, kami memastikan performa kendaraan Anda selalu prima
            dengan mekanik tersertifikasi dan suku cadang asli.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceFeatures.map((svc) => (
            <div
              key={svc.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-orange-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <svc.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{svc.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Booking Strip */}
        <div className="mt-12 rounded-2xl border border-orange-200 bg-linear-to-r from-orange-600 to-red-600 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-xs">
                <CalendarCheck className="h-3.5 w-3.5" />
                Anti Antre di Bengkel
              </div>
              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                Booking Jadwal Servis atau Tanya Suku Cadang
              </h3>
              <p className="mt-1 text-xs text-orange-100 sm:text-sm">
                Tentukan hari dan jam kedatangan Anda, teknisi kami siap melayani saat Anda tiba di showroom.
              </p>
            </div>

            <a
              href={waLink("Halo Motor Jaya Showroom, saya ingin booking jadwal servis motor / menanyakan ketersediaan suku cadang.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-slate-900 shadow-md transition-colors hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
              <MessageCircle className="h-4 w-4 text-orange-600" />
              Booking Servis via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
