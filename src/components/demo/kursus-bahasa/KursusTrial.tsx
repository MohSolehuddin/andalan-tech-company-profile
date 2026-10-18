import {
  CalendarCheck,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  UserCheck,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    icon: MessageCircle,
    title: "Chat WhatsApp",
    desc: "Kirim pesan untuk memilih bahasa, level, dan jadwal kelas.",
  },
  {
    icon: CalendarCheck,
    title: "Pilih jadwal trial",
    desc: "Tentukan jadwal trial gratis, online maupun offline.",
  },
  {
    icon: UserCheck,
    title: "Ikuti kelas percobaan",
    desc: "Coba kelasnya langsung bersama tutor, tanpa biaya apa pun.",
  },
];

export default function KursusTrial() {
  return (
    <section id="trial" className="bg-blue-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Trial Gratis
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Coba dulu, baru daftar
          </h2>
          <p className="mt-3 text-blue-50/90">
            Rasakan suasana kelas dan gaya tutor Lingua lewat satu sesi trial
            gratis sebelum memilih paket belajar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-400 text-xs font-bold text-blue-950">
                {index + 1}
              </span>
              <step.icon className="h-6 w-6 text-blue-300" />
              <h3 className="mt-4 font-bold">{step.title}</h3>
              <p className="mt-1 text-sm text-blue-50/80">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">
              Daftar trial sekarang, kuota terbatas
            </h3>
            <p className="mt-3 text-blue-50/90">
              Kelas dibuka setiap hari Senin sampai Sabtu, pagi hingga malam.
              Tim kami akan membantu memilih level dan jadwal yang paling pas.
            </p>
            <a
              href={waLink(
                "Halo Lingua Kursus Bahasa, saya mau daftar trial gratis kelas bahasa."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-400 px-6 py-3 font-semibold text-blue-950 transition-colors hover:bg-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Daftar Trial via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-sm text-blue-50/90">
                  Jl. Merdeka No. 45, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold">Jam Layanan</p>
                <p className="text-sm text-blue-50/90">
                  Senin–Sabtu, 08.00 – 20.00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold">Telepon / WhatsApp</p>
                <p className="text-sm text-blue-50/90">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-blue-300" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-blue-50/90">
                  info@linguakursus.id
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-blue-100/70">
          © {new Date().getFullYear()} Lingua Kursus Bahasa — Demo website oleh
          Andalan Tech.
        </div>
      </div>
    </section>
  );
}
