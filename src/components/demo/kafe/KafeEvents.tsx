import { Calendar, Clock, Music, Sparkles, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface CafeEvent {
  title: string;
  category: string;
  schedule: string;
  time: string;
  description: string;
  fee: string;
  icon: typeof Music;
}

const events: CafeEvent[] = [
  {
    title: "Acoustic Sunset Session",
    category: "Live Music",
    schedule: "Setiap Jumat & Sabtu",
    time: "19.30 – 22.00 WIB",
    description:
      "Penampilan musisi indie lokal membawakan lagu-lagu pop & jazz akustik yang menyejukkan akhir pekan Anda.",
    fee: "Gratis (Cukup Pesan Menu)",
    icon: Music,
  },
  {
    title: "Workshop Manual Brew & Cupping",
    category: "Edukasi Kopi",
    schedule: "Minggu ke-2 & ke-4",
    time: "15.00 – 17.00 WIB",
    description:
      "Belajar teknik pouring V60, mengenali acidity & notes rasa kopi bersama Head Barista kami.",
    fee: "Rp 50.000 (Termasuk Bahan & Sertifikat)",
    icon: Sparkles,
  },
  {
    title: "Community Board Game & Meetup",
    category: "Komunitas",
    schedule: "Setiap Rabu Malam",
    time: "18.30 – 21.30 WIB",
    description:
      "Tempat kumpul pegiat kreatif, freelancer, dan pecinta board game untuk networking santai.",
    fee: "Gratis untuk Pengunjung",
    icon: Users,
  },
];

export default function KafeEvents() {
  return (
    <section id="event" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-amber-700">
            <Calendar className="h-4 w-4" />
            Jadwal Event Rutin
          </span>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Selalu Ada Cerita di Setiap Pekan
          </h2>
          <p className="mt-3 text-stone-600">
            Temukan keseruan baru, perluas relasi, atau nikmati alunan musik
            akustik di bawah gemerlap lampu malam.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((evt) => (
            <div
              key={evt.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50/40 p-6 shadow-xs transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                  {evt.category}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-200/60 text-stone-700">
                  <evt.icon className="h-4 w-4" />
                </div>
              </div>

              <h3 className="mt-4 text-xl font-bold text-stone-900">
                {evt.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-stone-600">
                {evt.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-stone-200 pt-4 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-amber-700" />
                  <span className="font-medium text-stone-800">
                    {evt.schedule}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-amber-700" />
                  <span>{evt.time}</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-amber-800">
                  {evt.fee}
                </span>
                <a
                  href={waLink(
                    `Halo Kopi Titik Temu, saya tertarik reservasi untuk event "${evt.title}".`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-stone-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-900">
                  Daftar / Tanya
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
