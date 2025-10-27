import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import AnimatedParticles from "./Particle";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedParticles />
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Kecepatan Instan • SEO 98+
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Website Anda,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Secepat Kilat
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Kami membangun website modern dengan Next.js dan Vercel. Performa
            maksimal, deploy otomatis, server terkelola penuh.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 shadow-(--glow-primary)">
              Mulai Proyek
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Lihat Portfolio
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                98+
              </div>
              <div className="text-sm text-muted-foreground">SEO Score</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {"<2s"}
              </div>
              <div className="text-sm text-muted-foreground">Load Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
