import { CalendarDays, MapPin, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const itineraryDays = [
  {
    day: "Hari 1",
    title: "Kedatangan & Sunset Tanah Lot",
    items: [
      "Penjemputan di Bandara Ngurah Rai",
      "Check-in hotel area Ubud & makan siang",
      "Sunset di Pura Tanah Lot",
    ],
  },
  {
    day: "Hari 2",
    title: "Ubud Culture & Tegalalang",
    items: [
      "Saraswati Temple & Ubud Monkey Forest",
      "Makan siang view sawah Tegalalang",
      "Tibumana Waterfall & pasar seni Ubud",
    ],
  },
  {
    day: "Hari 3",
    title: "Nusa Penida Day Trip",
    items: [
      "Fast boat ke Pulau Nusa Penida",
      "Kelingking Beach & Broken Beach",
      "Snorkeling di Crystal Bay",
    ],
  },
  {
    day: "Hari 4",
    title: "Oleh-oleh & Kepulangan",
    items: [
      "Belanja oleh-oleh khas Bali",
      "Check-out & antar ke bandara",
      "Perjalanan pulang dengan cerita baru",
    ],
  },
];

export default function TravelItinerary() {
  return (
    <section id="itinerary" className="bg-slate-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-3">
          <div className="md:sticky md:top-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3.5 py-1 text-xs font-medium text-cyan-300">
              <MapPin className="h-4 w-4" />
              Contoh Itinerary
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl text-white">
              Bali Escape 4 Hari 3 Malam
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Gambaran nyata rundown perjalanan yang akan Anda terima. Setiap itinerary
              dikirim tertulis sebelum keberangkatan dan bisa disesuaikan.
            </p>
            <a
              href={waLink("Halo Jelajah Andalan Travel, boleh minta contoh itinerary lengkap paket Bali Escape?")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400">
              <MessageCircle className="h-4 w-4" />
              Minta Itinerary Lengkap
            </a>
          </div>

          <div className="md:col-span-2">
            <ol className="space-y-4">
              {itineraryDays.map((item) => (
                <li
                  key={item.day}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {item.day}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                    {item.items.map((activity) => (
                      <li key={activity} className="flex items-start gap-2">
                        <CalendarDays className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
