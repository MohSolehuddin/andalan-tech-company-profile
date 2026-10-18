import { Award, CalendarClock, Star } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const barbers = [
  {
    initials: "RP",
    name: 'Raka "The Blade" Pratama',
    role: "Master Barber",
    experience: "12 tahun",
    specialty: "Skin fade, classic cut, pompadour",
    schedule: "Selasa – Sabtu",
  },
  {
    initials: "DA",
    name: "Dimas Anggara",
    role: "Senior Barber",
    experience: "8 tahun",
    specialty: "Textured crop, slick back, scissor cut",
    schedule: "Rabu – Minggu",
  },
  {
    initials: "BS",
    name: "Bagas Saputra",
    role: "Barber & Color Specialist",
    experience: "6 tahun",
    specialty: "Hair coloring, gray blending, highlight",
    schedule: "Senin – Jumat",
  },
  {
    initials: "YM",
    name: "Yudha Mahendra",
    role: "Grooming Therapist",
    experience: "5 tahun",
    specialty: "Hot towel shave, scalp & hair treatment",
    schedule: "Kamis – Senin",
  },
];

export default function BarbershopTeam() {
  return (
    <section id="tim" className="bg-neutral-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Barber & Tim Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Pilih barber favorit Anda, duduk, dan rileks
          </h2>
          <p className="mt-3 text-amber-100/80">
            Setiap barber punya spesialisasi dan jam praktiknya masing-masing.
            Tentukan jadwal bersama barber favorit lewat WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-zinc-700 to-amber-600 text-lg font-extrabold text-white">
                  {barber.initials}
                </div>
                <h3 className="mt-4 font-bold text-white">{barber.name}</h3>
                <p className="mt-0.5 text-xs font-semibold text-amber-400">
                  {barber.role}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-neutral-400">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  {barber.experience} pengalaman
                </p>
                <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                  Spesialis: {barber.specialty}
                </p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
                  <CalendarClock className="h-3.5 w-3.5 text-amber-400" />
                  Praktik {barber.schedule}
                </p>
                <a
                  href={waLink(
                    `Halo Gents & Blade Barbershop, saya mau booking dengan ${barber.name} (${barber.role}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-400">
                  <Star className="h-4 w-4" />
                  Booking Barber Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
