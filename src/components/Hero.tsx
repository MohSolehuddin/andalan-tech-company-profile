import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-[#F58220]/40">
            <Zap className="w-4 h-4 text-[#F58220]" />
            <span className="text-sm font-medium text-neutral-800">
              Kecepatan Instan • SEO 98+
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Website Anda,{" "}
            <span className="text-primary underline decoration-[#F58220] decoration-2 underline-offset-8">
              Secepat Kilat
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-left sm:text-center leading-relaxed">
            Kami membangun website modern dengan Next.js dan Vercel. Performa
            maksimal, deploy otomatis, server terkelola penuh.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <a href="#contact">Mulai Proyek</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 rounded-lg border-primary text-primary hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <a href="#portfolio">Lihat Portfolio</a>
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                98+
              </div>
              <div className="text-sm font-medium text-muted-foreground">SEO Score</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {"<2s"}
              </div>
              <div className="text-sm font-medium text-muted-foreground">Load Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                24/7
              </div>
              <div className="text-sm font-medium text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
