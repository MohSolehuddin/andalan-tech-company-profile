import { Clock, GlassWater, Leaf, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const highlights = [
  { icon: Leaf, label: "100% Buah Asli & Gula Alami" },
  { icon: GlassWater, label: "Kustom Level Manis & Es" },
  { icon: Clock, label: "Buka Tiap Hari 10.00–21.30" },
];

export default function MinumanHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-teal-900/40 via-neutral-950 to-teal-950/30" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-sm font-medium text-teal-200">
            <Sparkles className="h-4 w-4" />
            Juice Bar & Boba Fresh Tiap Hari
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Segar Boba &amp; Juice
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            Paduan boba kenyal gurih dan cold-pressed juice buah segar pilihan.
            Kustomisasi level gula serta es sesukamu, pesan cepat langsung via
            WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Halo Segar Boba & Juice, saya mau pesan minuman segar hari ini."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500">
              <MessageCircle className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
              Lihat Menu Minuman
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-teal-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
