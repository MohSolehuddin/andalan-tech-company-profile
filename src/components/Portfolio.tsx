import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { demoItems } from "@/lib/demo/demos";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Portfolio{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Kami
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contoh website siap pakai — klik untuk melihat demo langsung, tanpa
            perlu daftar.
          </p>
        </div>

        {/* Live demos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoItems.map((demo) => (
            <Link
              key={demo.slug}
              href={`/demo/${demo.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-(--glow-primary)">
              <div
                className={`flex h-44 items-center justify-center bg-linear-to-br ${demo.accentBg}`}>
                <span className="text-6xl" aria-hidden="true">
                  {demo.emoji}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold transition-colors group-hover:text-accent">
                  {demo.name}
                </h3>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {demo.niche}
                </span>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {demo.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {demo.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {h}
                    </span>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                  Lihat Demo <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 p-8 border border-primary/30 animate-fade-in-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-accent">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Butuh yang berbeda?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Demo di atas bisa kami sesuaikan 100% dengan brand Anda. Dapatkan{" "}
              <span className="text-accent font-bold">harga spesial</span> untuk
              klien pertama kami.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-linear-to-r from-primary to-accent text-white hover:shadow-(--glow-primary) transition-all">
              <a href="#contact">Mulai Proyek Anda</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
