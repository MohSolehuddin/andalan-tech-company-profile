"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  techStack: string[];
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "TechStore - E-Commerce Platform",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    description: "Platform e-commerce modern dengan Next.js dan Vercel Edge",
    techStack: ["Next.js", "React", "Tailwind", "Vercel"],
  },
  {
    id: 2,
    title: "FinTech Dashboard",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Dashboard analytics real-time untuk startup fintech",
    techStack: ["Next.js", "TypeScript", "Neon", "Vercel"],
  },
  {
    id: 3,
    title: "Luxury Hotel Landing",
    category: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    description: "Landing page hotel mewah dengan animasi smooth",
    techStack: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    id: 4,
    title: "Fashion Marketplace",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    description: "Marketplace fashion dengan filter AI-powered",
    techStack: ["Next.js", "React", "Vercel", "AI"],
  },
  {
    id: 5,
    title: "SaaS Product Launch",
    category: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Landing page SaaS dengan konversi tinggi",
    techStack: ["Next.js", "Tailwind", "Vercel Edge"],
  },
  {
    id: 6,
    title: "Corporate Website",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    description: "Website korporat dengan CMS headless",
    techStack: ["Next.js", "Sanity", "Vercel"],
  },
];

const categories = ["All", "E-Commerce", "Landing Page", "Corporate"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Portfolio{" "}
            <span className="text-primary bg-clip-text bg-linear-240-to-r from-primary to-accent">
              Kami
            </span>
          </h2>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proyek-proyek yang telah kami kerjakan dengan teknologi terkini
          </p> */}
        </div>

        {/* Special Offer Banner */}
        <div className="mb-12 relative overflow-hidden rounded-2xl bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 p-8 border border-primary/30 animate-fade-in-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-accent">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Jadilah Yang Pertama!
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Andalan Tech baru saja diluncurkan. Pesan sekarang dan dapatkan{" "}
              <span className="text-accent font-bold">harga super spesial</span>{" "}
              untuk klien pertama kami. Kesempatan terbatas!
            </p>
            <Button
              size="lg"
              className="bg-linear-to-r from-primary to-accent text-white hover:shadow---glow-primary) transition-all"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }>
              Dapatkan Penawaran Spesial
            </Button>
          </div>
        </div>

        {false && (
          <>
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="transition-all hover:shadow-(--glow-primary)">
                  {category}
                </Button>
              ))}
            </div>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-(--glow-primary) transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <Button size="sm" variant="secondary" className="gap-2">
                        Lihat Detail <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-xs whitespace-nowrap">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
