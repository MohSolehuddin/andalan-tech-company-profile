import { Images } from "lucide-react";

interface Shot {
  id: number;
  title: string;
  category: string;
  emoji: string;
  gradient: string;
}

const shots: Shot[] = [
  { id: 1, title: "Akad di Bawah Langit", category: "Wedding", emoji: "💍", gradient: "from-zinc-500 to-neutral-700" },
  { id: 2, title: "Senja Berdua", category: "Prewedding", emoji: "🌅", gradient: "from-amber-400 to-rose-500" },
  { id: 3, title: "Kopi Lokal Nusantara", category: "Produk", emoji: "☕", gradient: "from-neutral-500 to-zinc-800" },
  { id: 4, title: "Panggung Kelulusan", category: "Wisuda", emoji: "🎓", gradient: "from-sky-400 to-indigo-600" },
  { id: 5, title: "Lari Pagi Komunitas", category: "Event", emoji: "🏃", gradient: "from-emerald-400 to-teal-600" },
  { id: 6, title: "Keluarga Ceria", category: "Studio", emoji: "👨‍👩‍👧", gradient: "from-rose-400 to-orange-600" },
  { id: 7, title: "Detail Bunga & Cincin", category: "Wedding", emoji: "🌸", gradient: "from-pink-300 to-rose-500" },
  { id: 8, title: "Sepatu Brand Lokal", category: "Produk", emoji: "👟", gradient: "from-slate-500 to-zinc-900" },
];

export default function FotoGallery() {
  return (
    <section id="galeri" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-700">
            Galeri
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Sekilas hasil jepretan kami
          </h2>
          <p className="mt-3 inline-flex items-center gap-2 text-neutral-600">
            <Images className="h-4 w-4 text-zinc-500" />
            Karya asli dikirim saat konsultasi, ini pratinjau suasananya.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {shots.map((shot) => (
            <div
              key={shot.id}
              className={`flex h-44 flex-col items-center justify-center rounded-2xl bg-linear-to-br ${shot.gradient} p-4 text-center text-white shadow-sm transition-transform hover:-translate-y-1`}>
              <span className="text-5xl" aria-hidden="true">
                {shot.emoji}
              </span>
              <p className="mt-3 text-sm font-semibold">{shot.title}</p>
              <p className="text-xs text-white/80">{shot.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
