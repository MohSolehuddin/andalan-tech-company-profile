import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { demoItems } from "@/lib/demo/demos";

const FEATURED_SLUGS = [
  "restoran",
  "klinik",
  "toko",
  "jasa",
  "properti",
  "bengkel",
  "salon",
  "sekolah",
  "saas",
];

const featuredDemos = FEATURED_SLUGS.flatMap((slug) => {
  const demo = demoItems.find((item) => item.slug === slug);
  return demo ? [demo] : [];
});

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Portfolio{" "}
            <span className="text-primary">
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
          {featuredDemos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/demo/${demo.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <div
                className="relative h-44 overflow-hidden bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/demo/preview/${demo.slug}.webp`}
                  alt={`Pratinjau website ${demo.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold transition-colors group-hover:text-[#A8530F]">
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

        {/* See all demos */}
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            <Link href="/demo">
              Lihat semua {demoItems.length} demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 rounded-xl bg-card p-8 border border-border">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Butuh yang berbeda?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Demo di atas bisa kami sesuaikan 100% dengan brand Anda. Dapatkan{" "}
              <span className="text-[#A8530F] font-bold">harga spesial</span> untuk
              klien pertama kami.
            </p>
            <Button
              asChild
              size="lg"
              className="shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <a href="#contact">Mulai Proyek Anda</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
