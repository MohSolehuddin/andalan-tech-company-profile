import { ClipboardCheck, HeartHandshake, MessageCircle, Microscope, Stethoscope, UserCheck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    num: "01",
    icon: Microscope,
    title: "Analisis Digital Kulit",
    desc: "Pemeriksaan kondisi pori, pigmentasi, kelembapan, dan sebum menggunakan teknologi kamera digital dermatologi.",
  },
  {
    num: "02",
    icon: Stethoscope,
    title: "Konsultasi Privat Dokter",
    desc: "Diskusi mendalam dengan dokter estetika bersertifikat untuk menentukan rencana tindakan yang aman dan tepat sasaran.",
  },
  {
    num: "03",
    icon: ClipboardCheck,
    title: "Treatment Medis Steril",
    desc: "Tindakan dilakukan di ruang perawatan higienis berstandar klinik medis oleh tim profesional terlatih.",
  },
  {
    num: "04",
    icon: HeartHandshake,
    title: "Pendampingan Homecare",
    desc: "Resep rangkaian perawatan lanjutan di rumah dan evaluasi berkala gratis untuk memastikan hasil bertahan lama.",
  },
];

const doctors = [
  {
    name: "dr. Audrey Jessica, Sp.D.V.E",
    role: "Spesialis Kulit & Estetika",
    focus: "Hiperpigmentasi, Melasma, Laser Dermatology",
    schedule: "Senin – Kamis, 10.00 – 17.00 WIB",
  },
  {
    name: "dr. Farhan Alamsyah, Dipl. AAAM",
    role: "Aesthetic Medicine Doctor",
    focus: "Acne Vulgaris, Scar Revision, Anti-Aging",
    schedule: "Jumat – Minggu, 11.00 – 19.00 WIB",
  },
];

export default function SkincareConsultation() {
  return (
    <section id="konsultasi" className="bg-neutral-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-rose-900/60 border border-rose-400/30 px-3 py-1 text-xs font-semibold text-rose-300">
            Alur Perawatan
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Konsultasi Berbasis Pendekatan Medis
          </h2>
          <p className="mt-2 text-sm text-neutral-400 md:text-base">
            Kami tidak menawarkan janji instan, melainkan solusi kulit sehat jangka
            panjang yang terukur dan aman.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <span className="text-2xl font-black text-rose-400/40">
                {step.num}
              </span>
              <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/20 text-rose-300">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Doctors & WA Callout */}
        <div className="mt-16 rounded-2xl border border-rose-500/30 bg-linear-to-br from-rose-950/40 via-neutral-950 to-pink-950/30 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                Dokter Praktik Kami
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Ditangani Langsung oleh Praktisi Berpengalaman
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {doctors.map((doc) => (
                  <div
                    key={doc.name}
                    className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4 text-rose-400 shrink-0" />
                      <p className="font-semibold text-white text-sm">
                        {doc.name}
                      </p>
                    </div>
                    <p className="mt-1 text-xs font-medium text-rose-300">
                      {doc.role}
                    </p>
                    <p className="mt-2 text-xs text-neutral-400">
                      Fokus: {doc.focus}
                    </p>
                    <p className="mt-2 text-xs text-neutral-400">
                      🕒 {doc.schedule}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-6 text-center lg:col-span-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h4 className="mt-3 text-lg font-bold text-white">
                Punya Pertanyaan Seputar Kulit?
              </h4>
              <p className="mt-1 text-xs text-neutral-300">
                Konsultasikan keluhan kulit atau tanya rekomendasi treatment secara
                gratis melalui chat WhatsApp klinik.
              </p>
              <a
                href={waLink(
                  "Halo Dokter Glow Aesthetic Clinic, saya ingin bertanya dan konsultasi mengenai perawatan kulit yang cocok untuk saya."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                <MessageCircle className="h-4 w-4" />
                Chat Dokter via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
