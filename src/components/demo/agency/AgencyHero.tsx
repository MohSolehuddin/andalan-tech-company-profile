import { ArrowRight, Code2, MessageCircle, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const trustPoints = [
  { icon: Rocket, label: "50+ Proyek Digital Tuntas" },
  { icon: ShieldCheck, label: "Kode Bersih & Bergaransi" },
  { icon: Sparkles, label: "Desain Modern & Responsif" },
  { icon: Code2, label: "Tech Stack Terkini" },
];

export default function AgencyHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-300">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span>Digital Agency &amp; Software House</span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Bangun Produk Digital Andal Bersama{" "}
            <span className="text-indigo-300">
              Andalan Agency
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-neutral-300 md:text-xl">
            Solusi pengembangan website modern, aplikasi mobile, optimasi SEO,
            hingga strategi branding yang terukur untuk percepatan pertumbuhan bisnis Anda.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink("Halo Andalan Digital Agency, saya ingin konsultasi kebutuhan pembuatan website/aplikasi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              Konsultasi Proyek Gratis
            </a>
            <a
              href="#layanan"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-neutral-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto">
              Lihat Layanan
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-neutral-800/80 pt-8 text-left">
            {trustPoints.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <item.icon className="h-4 w-4 shrink-0 text-indigo-400" />
                <span className="text-xs sm:text-sm text-neutral-300 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
