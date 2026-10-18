import { ExternalLink, Layers, TrendingUp } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const caseStudies = [
  {
    title: "ModaIndo Fashion Store",
    category: "E-Commerce & Mobile Web",
    highlight: "+180% Transaksi Online",
    tech: ["Next.js", "Payment Gateway", "Tailwind CSS"],
    description:
      "Platform e-commerce busana lokal dengan sistem checkout kilat, integrasi logistik otomatis, dan optimasi kecepatan buka halaman di bawah 1,2 detik.",
  },
  {
    title: "KirimCepat Logistik",
    category: "Web App & Fleet Tracking",
    highlight: "Automasi Manifest Real-time",
    tech: ["Custom Dashboard", "REST API", "PostgreSQL"],
    description:
      "Dashboard operasional pengiriman barang terintegrasi dengan modul pemindaian resi dan laporan analitik armada secara instan.",
  },
  {
    title: "SehatKu Telekonsultasi",
    category: "Aplikasi Booking Klinik",
    highlight: "10.000+ Janji Temu Terproses",
    tech: ["Mobile App", "Notifikasi WA", "Cloud Server"],
    description:
      "Sistem reservasi klinik dan telekonsultasi dokter dengan penjadwalan otomatis serta pengingat jadwal via integrasi WhatsApp.",
  },
  {
    title: "Mitra Karya Teknik",
    category: "Company Profile B2B & SEO",
    highlight: "Top 3 Google Kata Kunci Industri",
    tech: ["SEO Architecture", "Lead Generation", "UI/UX"],
    description:
      "Website profil perusahaan manufaktur & kontraktor dengan katalog produk interaktif dan formulir penawaran harga terintegrasi.",
  },
];

export default function AgencyPortfolio() {
  return (
    <section id="portofolio" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-700">
            Karya &amp; Studi Kasus
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl">
            Hasil Nyata yang Mendorong Kemajuan Klien
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Beberapa contoh proyek sukses yang kami kembangkan dengan standar
            desain premium dan stabilitas sistem tinggi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 sm:p-8 transition-all hover:border-indigo-300 hover:bg-white hover:shadow-md">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
                  <Layers className="h-3 w-3" />
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {item.highlight}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-neutral-200/80 pt-4">
                <a
                  href={waLink(`Halo Andalan Digital Agency, saya tertarik dengan portofolio serupa proyek ${item.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 transition-colors hover:text-indigo-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                  Diskusikan Proyek Serupa
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
