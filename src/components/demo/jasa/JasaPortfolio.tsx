"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Work {
  id: number;
  title: string;
  client: string;
  category: string;
  emoji: string;
  gradient: string;
}

const works: Work[] = [
  { id: 1, title: "Rebranding Kopi Senja", client: "Kedai kopi lokal", category: "Branding", emoji: "☕", gradient: "from-amber-400 to-orange-500" },
  { id: 2, title: "Identitas Visual Dapur Ibu", client: "Katering rumahan", category: "Branding", emoji: "🍲", gradient: "from-rose-400 to-orange-500" },
  { id: 3, title: "Kampanye #KebaikanKecil", client: "Yayasan sosial", category: "Konten", emoji: "🌙", gradient: "from-violet-400 to-purple-500" },
  { id: 4, title: "Seri Edukasi Finansial", client: "Konsultan keuangan", category: "Konten", emoji: "📊", gradient: "from-emerald-400 to-teal-500" },
  { id: 5, title: "Landing Page Kelas Online", client: "Mentor desain", category: "Website", emoji: "💻", gradient: "from-sky-400 to-blue-500" },
  { id: 6, title: "Website Portofolio Fotografer", client: "Fotografer wedding", category: "Website", emoji: "📷", gradient: "from-fuchsia-400 to-pink-500" },
];

const categories = ["Semua", "Branding", "Konten", "Website"];

export default function JasaPortfolio() {
  const [active, setActive] = useState("Semua");

  const filtered = useMemo(
    () =>
      active === "Semua"
        ? works
        : works.filter((work) => work.category === active),
    [active]
  );

  return (
    <section id="portofolio" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Portofolio
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Karya yang sudah dipercaya klien
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? "bg-orange-600 text-white"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-orange-400"
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work) => (
            <div
              key={work.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div
                className={`flex h-40 items-center justify-center bg-linear-to-br ${work.gradient}`}>
                <span className="text-6xl" aria-hidden="true">
                  {work.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  {work.category}
                </span>
                <h3 className="mt-1 font-bold text-neutral-900">{work.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{work.client}</p>
                <a
                  href={waLink(
                    `Halo Nara Kreatif, saya tertarik dengan karya "${work.title}". Bisa minta detailnya?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700">
                  <ArrowUpRight className="h-4 w-4" />
                  Tanya Karya Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
