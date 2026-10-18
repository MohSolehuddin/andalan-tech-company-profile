import {
  Briefcase,
  Calculator,
  Code2,
  Cog,
  HeartPulse,
  MessageCircle,
  Palette,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const programs = [
  {
    icon: Code2,
    level: "D4",
    name: "Teknik Informatika",
    desc: "Rekayasa perangkat lunak, data, dan keamanan siber berbasis proyek industri.",
  },
  {
    icon: Briefcase,
    level: "D4",
    name: "Manajemen Bisnis Digital",
    desc: "Kewirausahaan, pemasaran digital, dan analisis bisnis berbasis teknologi.",
  },
  {
    icon: Palette,
    level: "D4",
    name: "Desain Komunikasi Visual",
    desc: "Branding, ilustrasi, dan konten kreatif dengan portofolio siap industri.",
  },
  {
    icon: Cog,
    level: "D3",
    name: "Teknik Mesin",
    desc: "Manufaktur, CAD/CAM, dan pemeliharaan mesin dengan praktik bengkel.",
  },
  {
    icon: Calculator,
    level: "D3",
    name: "Akuntansi",
    desc: "Akuntansi keuangan, perpajakan, dan komputer akuntansi bersertifikat.",
  },
  {
    icon: HeartPulse,
    level: "D3",
    name: "Keperawatan",
    desc: "Praktik keperawatan di laboratorium dan rumah sakit mitra kampus.",
  },
];

export default function KampusPrograms() {
  return (
    <section id="program" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Program Studi
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilih jenjang D3 atau D4 sesuai kariermu
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                  <program.icon className="h-6 w-6 text-emerald-700" />
                </div>
                <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                  {program.level}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {program.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{program.desc}</p>
              <a
                href={waLink(
                  `Halo, saya mau tanya program ${program.level} ${program.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                <MessageCircle className="h-4 w-4" />
                Tanya via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
