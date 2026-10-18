import { Heart, Sparkles, Star } from "lucide-react";

interface Concept {
  id: number;
  title: string;
  theme: string;
  emoji: string;
  gradient: string;
}

interface Testimonial {
  couple: string;
  location: string;
  quote: string;
  packageUsed: string;
}

const concepts: Concept[] = [
  {
    id: 1,
    title: "Romantic Garden & Sunset",
    theme: "Outdoor & Intimate",
    emoji: "🌿",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    id: 2,
    title: "Adat Tradisional Modern",
    theme: "Heritage & Culture",
    emoji: "👑",
    gradient: "from-amber-500 to-orange-700",
  },
  {
    id: 3,
    title: "Grand Royal Ballroom",
    theme: "Luxury & Glamour",
    emoji: "✨",
    gradient: "from-rose-600 to-rose-900",
  },
  {
    id: 4,
    title: "Minimalist Pastel Blossom",
    theme: "Modern & Warm",
    emoji: "🌸",
    gradient: "from-rose-400 to-pink-600",
  },
  {
    id: 5,
    title: "Glass House Evening Elegance",
    theme: "Contemporary",
    emoji: "🥂",
    gradient: "from-sky-500 to-indigo-700",
  },
  {
    id: 6,
    title: "Serenade Rustic Wood",
    theme: "Bohemian & Natural",
    emoji: "🕯️",
    gradient: "from-amber-600 to-stone-800",
  },
];

const testimonials: Testimonial[] = [
  {
    couple: "Dimas & Sarah",
    location: "Hotel Mulia, Jakarta",
    quote:
      "Tim Mahligai WO sangat profesional! Dari proses lamaran, technical meeting dengan orang tua, sampai hari-H semuanya rapi dan tepat waktu. Tamu sangat memuji rasa cateringnya.",
    packageUsed: "Paket Gold (Royal Ballroom)",
  },
  {
    couple: "Rizky & Amanda",
    location: "Plataran Cilandak, Jakarta Selatan",
    quote:
      "Konsep outdoor garden kami terselenggara tanpa cemas walau sempat gerimis. Tim lapangan langsung sigap mengalihkan dekorasi saat itu juga. Kami sangat puas!",
    packageUsed: "Paket Silver (Intimate)",
  },
  {
    couple: "Kevin & Claudia",
    location: "The Tribrata Dharmawangsa",
    quote:
      "Pelayanan all-in yang benar-benar tanpa drama. Pendampingan H-90 sangat detail, busana pengantin dan dokumentasi video teaser-nya luar biasa indah.",
    packageUsed: "Paket Platinum (Grand Majesty)",
  },
];

export default function WeddingGallery() {
  return (
    <section id="galeri" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Gallery Section */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
            Galeri Konsep
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Inspirasi Tema Pernikahan Impian
          </h2>
          <p className="mt-3 inline-flex items-center gap-1.5 text-neutral-600">
            <Sparkles className="h-4 w-4 text-rose-500" />
            Portofolio visual konsep pernikahan yang telah kami eksekusi dengan sempurna.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {concepts.map((item) => (
            <div
              key={item.id}
              className={`flex h-44 flex-col items-center justify-center rounded-2xl bg-linear-to-br ${item.gradient} p-4 text-center text-white shadow-sm transition-transform hover:-translate-y-1`}>
              <span className="text-4xl" aria-hidden="true">
                {item.emoji}
              </span>
              <p className="mt-3 text-xs font-bold leading-snug">{item.title}</p>
              <p className="mt-1 text-[10px] text-white/80">{item.theme}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
              Ulasan Pengantin
            </p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
              Cerita Bahagia Bersama Kami
            </h2>
            <p className="mt-3 text-neutral-600">
              Kebahagiaan dan senyum pasangan pengantin serta keluarga adalah prioritas utama kami.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testi) => (
              <div
                key={testi.couple}
                className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 italic">
                    &ldquo;{testi.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-neutral-900">{testi.couple}</p>
                      <p className="text-xs text-neutral-500">{testi.location}</p>
                    </div>
                    <Heart className="h-5 w-5 text-rose-400 fill-rose-100" />
                  </div>
                  <span className="mt-2 inline-block rounded-md bg-rose-50 px-2 py-0.5 text-[11px] font-medium text-rose-700">
                    {testi.packageUsed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
