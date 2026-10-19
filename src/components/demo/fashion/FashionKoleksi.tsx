import { waLink } from "@/lib/demo/wa";

interface Drop {
  name: string;
  desc: string;
  emoji: string;
  gradient: string;
}

const drops: Drop[] = [
  {
    name: "Varsity Nusantara Series",
    desc: "Jaket varsity bordir motif tenun, edisi terbatas 100 pcs.",
    emoji: "🧥",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "Denim Lokal Chapter 2",
    desc: "Kemeja denim wash ringan, cocok untuk cuaca tropis.",
    emoji: "👔",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    name: "Cargo Utility Drop",
    desc: "Cargo pants ripstop dengan kantong fungsional.",
    emoji: "👖",
    gradient: "from-emerald-400 to-teal-600",
  },
];

export default function FashionKoleksi() {
  return (
    <section id="koleksi" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-700">
            Koleksi Baru
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Drop terbaru bulan ini
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {drops.map((drop) => (
            <div
              key={drop.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div
                className={`relative flex h-44 items-center justify-center bg-linear-to-br ${drop.gradient}`}>
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900">
                  Baru
                </span>
                <span className="text-6xl" aria-hidden="true">
                  {drop.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold text-neutral-900">{drop.name}</h3>
                <p className="mt-2 flex-1 text-sm text-neutral-600">
                  {drop.desc}
                </p>
                <a
                  href={waLink(
                    `Halo Distro Style Nusantara, saya mau tanya koleksi baru "${drop.name}".`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-lg border border-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900">
                  Tanya Koleksi Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
