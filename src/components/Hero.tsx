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
            <span className="text-sm font-medium text-neutral-800">
              Kecepatan Instan • SEO 98+
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Website Anda,{" "}
            <span className="text-primary">
              Secepat Kilat
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto text-left sm:text-center leading-relaxed">
            Kami membangun website modern dengan Next.js dan Vercel. Performa
            maksimal, deploy otomatis, server terkelola penuh.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <a href="#contact">Mulai Proyek</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <a href="#portfolio">Lihat Portfolio</a>
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                98+
              </div>
              <div className="text-sm font-medium text-neutral-700">SEO Score</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {"<2s"}
              </div>
              <div className="text-sm font-medium text-neutral-700">Load Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                24/7
              </div>
              <div className="text-sm font-medium text-neutral-700">Uptime</div>
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
