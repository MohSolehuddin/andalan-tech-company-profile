import { Clock, Mail, MapPin, MessageCircle, Phone, PencilRuler } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    title: "Ceritakan Ruang & Kebutuhan",
    desc: "Kirim foto ruangan, ukuran perkiraan, dan gaya favorit Anda lewat WhatsApp.",
  },
  {
    title: "Konsultasi & Survei Lokasi",
    desc: "Desainer kami diskusi kebutuhan, lalu survei lokasi untuk mengukur secara akurat.",
  },
  {
    title: "Konsep, RAB & Eksekusi",
    desc: "Terima konsep 3D beserta estimasi biaya, lalu eksekusi berjalan sesuai kesepakatan.",
  },
];

export default function InteriorConsult() {
  return (
    <section id="kontak" className="bg-slate-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/40 bg-rose-400/10 px-3.5 py-1 text-xs font-medium text-rose-300">
              <PencilRuler className="h-4 w-4" />
              Konsultasi Desain Gratis
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Siap Mulai Proyek Interior Anda?
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Ceritakan kondisi ruangan dan anggaran Anda, tim desainer kami bantu
              susun konsep paling pas. Konsultasi awal gratis, tanpa kewajiban
              lanjut.
            </p>

            <ol className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="text-sm text-slate-300">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <a
                href={waLink("Halo Ruang Interior Studio, saya ingin mulai proyek interior. Ini kondisi ruangan saya:")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                <MessageCircle className="h-5 w-5" />
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="font-semibold text-white">Studio &amp; Galeri</p>
                <p className="text-sm text-slate-300">
                  Jl. Diponegoro No. 21, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="font-semibold text-white">Jam Operasional</p>
                <p className="text-sm text-slate-300">
                  Senin – Sabtu, 09.00 – 18.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="font-semibold text-white">Hotline / WhatsApp</p>
                <p className="text-sm text-slate-300">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
              <div>
                <p className="font-semibold text-white">Email Resmi</p>
                <p className="text-sm text-slate-300">halo@ruanginterior.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Ruang Interior Studio — Demo website oleh Andalan Tech.
        </div>
      </div>
    </section>
  );
}
