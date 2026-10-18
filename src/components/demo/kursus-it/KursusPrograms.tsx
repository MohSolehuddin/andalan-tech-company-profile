import { FileSpreadsheet, Gamepad2, Globe, MessageCircle, Palette } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface ProgramItem {
  id: string;
  name: string;
  badge: string;
  icon: typeof FileSpreadsheet;
  tagline: string;
  curriculum: string[];
  duration: string;
  level: string;
  gradientClass: string;
}

const programs: ProgramItem[] = [
  {
    id: "office",
    name: "Komputer Perkantoran Modern",
    badge: "Paling Populer",
    icon: FileSpreadsheet,
    tagline: "Kuasai administrasi data dan laporan kantor efisien.",
    curriculum: [
      "Microsoft Excel lanjutan (VLOOKUP, IF bertingkat, Pivot Table)",
      "Microsoft Word format surat dinas & mail merge otomatis",
      "PowerPoint presentasi visual & Google Workspace kolaboratif",
    ],
    duration: "8 Sesi (16 Jam)",
    level: "Pemula s/d Mahir",
    gradientClass: "from-blue-600 to-indigo-800",
  },
  {
    id: "desain",
    name: "Desain Grafis & Konten Visual",
    badge: "Skill Kreatif",
    icon: Palette,
    tagline: "Bikin materi promosi media sosial dan branding komersial.",
    curriculum: [
      "Dasar komposisi warna, tata letak & tipografi menarik",
      "Canva Pro & Photoshop editing foto komersial",
      "Illustrator untuk pembuatan logo, brosur, dan banner digital",
    ],
    duration: "10 Sesi (20 Jam)",
    level: "Pemula s/d Menengah",
    gradientClass: "from-indigo-600 to-violet-800",
  },
  {
    id: "web",
    name: "Web Development Siap Proyek",
    badge: "Karier Tech",
    icon: Globe,
    tagline: "Membangun website modern responsif dari dasar hingga online.",
    curriculum: [
      "Struktur semantik HTML5 & styling modern CSS / Tailwind",
      "Logika interaktif dasar JavaScript & DOM manipulation",
      "Proyek landing page bisnis & panduan hosting domain sendiri",
    ],
    duration: "12 Sesi (24 Jam)",
    level: "Pemula (Tanpa background IT)",
    gradientClass: "from-violet-700 to-blue-900",
  },
  {
    id: "coding-anak",
    name: "Coding & Game Anak-Anak",
    badge: "Usia 8–16 Tahun",
    icon: Gamepad2,
    tagline: "Asah logika, kreativitas, dan problem solving lewat bikin game.",
    curriculum: [
      "Visual block programming dengan Scratch (Game & Animasi)",
      "Logika algoritma, looping, variabel & pengenalan game loop",
      "Dasar pemrograman Python anak & proyek mini game interaktif",
    ],
    duration: "8 Sesi (16 Jam)",
    level: "Anak-anak & Remaja",
    gradientClass: "from-indigo-700 to-sky-800",
  },
];

export default function KursusPrograms() {
  return (
    <section id="program" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            Pilihan Program
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Kurikulum Praktis Sesuai Kebutuhan
          </h2>
          <p className="mt-3 text-slate-600">
            Setiap materi dirancang berbasis praktik langsung (hands-on) dengan bimbingan mentor sabar
            dari nol sampai menghasilkan karya riil.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:shadow-md">
              <div
                className={`flex items-center justify-between bg-linear-to-br ${prog.gradientClass} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xs">
                    <prog.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{prog.name}</h3>
                    <p className="text-xs text-indigo-100">{prog.level} · {prog.duration}</p>
                  </div>
                </div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                  {prog.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-medium text-slate-700">{prog.tagline}</p>

                <div className="mt-4 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Fokus Pembelajaran:
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600">
                    {prog.curriculum.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <a
                    href={waLink(
                      `Halo Kode Kursus Komputer & IT, saya ingin tanya info & silabus program ${prog.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500">
                    <MessageCircle className="h-4 w-4" />
                    Tanya Program Ini via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
