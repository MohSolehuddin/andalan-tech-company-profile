import { ArrowUpRight, Globe, Palette, Search, Share2, Smartphone } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const services = [
  {
    icon: Globe,
    title: "Pembuatan Website Modern",
    description:
      "Company profile, landing page, dan portal web berperforma tinggi, SEO-ready, serta adaptif di semua perangkat.",
    tags: ["Next.js", "WordPress", "High Performance"],
    waMsg: "Halo Andalan Digital Agency, saya mau tanya layanan pembuatan Website.",
  },
  {
    icon: Smartphone,
    title: "Pengembangan Aplikasi",
    description:
      "Aplikasi Android & iOS kustom serta sistem web aplikasi (SaaS/Dashboard) dengan arsitektur scalable.",
    tags: ["Mobile App", "Web App / SaaS", "REST API"],
    waMsg: "Halo Andalan Digital Agency, saya mau tanya layanan pengembangan Aplikasi Mobile/Web.",
  },
  {
    icon: Search,
    title: "Optimasi SEO & Google Ads",
    description:
      "Tingkatkan peringkat pencarian Google organik dan kampanye iklan tertarget untuk mendapatkan prospek berkualitas.",
    tags: ["Technical SEO", "Keyword Research", "SEM / Ads"],
    waMsg: "Halo Andalan Digital Agency, saya mau tanya layanan Optimasi SEO & Google Ads.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Perencanaan konten strategis, copywriting engaging, dan penjadwalan posting untuk menjaga loyalitas audiens brand.",
    tags: ["Content Strategy", "Copywriting", "Monthly Growth"],
    waMsg: "Halo Andalan Digital Agency, saya mau tanya layanan Social Media Management.",
  },
  {
    icon: Palette,
    title: "Branding & UI/UX Design",
    description:
      "Desain identitas visual menyeluruh: logo, color palette, design system, hingga rancangan UI/UX prototipe interaktif.",
    tags: ["Logo & Guideline", "Figma Prototype", "User Research"],
    waMsg: "Halo Andalan Digital Agency, saya mau tanya layanan Branding & Desain UI/UX.",
  },
];

export default function AgencyServices() {
  return (
    <section id="layanan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-700">
            Layanan Unggulan
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl">
            Solusi Menyeluruh untuk Ekosistem Digital Bisnis
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Dari perancangan awal hingga eksekusi teknis, kami siap mewujudkan
            platform digital yang menghasilkan konversi nyata.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-all hover:border-indigo-300 hover:shadow-md">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <svc.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {svc.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <a
                  href={waLink(svc.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 transition-colors hover:text-indigo-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                  Konsultasi Layanan Ini
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
