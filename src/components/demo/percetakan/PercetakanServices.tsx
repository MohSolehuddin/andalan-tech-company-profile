import {
  Image,
  Tag,
  CreditCard,
  Shirt,
  Mail,
  FileText,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Image,
    title: "Banner & Spanduk",
    category: "Outdoor & Indoor",
    desc: "Cetak flexi frontlite 280g, 340g, hingga Korea 440g tahan hujan & panas. Dilengkapi mata ayam ring keliling siap pasang.",
    specs: ["Bahan Flexi Standard & Korea", "X-Banner & Roll Up Banner", "Finishing mata ayam / lem keliling"],
  },
  {
    icon: Tag,
    title: "Stiker & Label Kemasan",
    category: "Branding Produk",
    desc: "Stiker chromo, vinyl waterproof, transparan, dan hologram. Sudah dipotong rapi kiss-cut atau die-cut siap tempel.",
    specs: ["Vinyl Anti Air & Sobek", "Cutting presisi sesuai pola desain", "Opsi laminasi doff / glossy"],
  },
  {
    icon: CreditCard,
    title: "Kartu Nama & ID Card",
    category: "Bisnis & Personal",
    desc: "Cetak kartu nama tebal Art Carton 260g/310g laminasi doff/glossy elegan serta kartu member atau ID Card bahan PVC keras.",
    specs: ["Box mika eksklusif per 100 pcs", "Bisa cetak 2 sisi full color", "Sudut lengkung (rounded corner) opsional"],
  },
  {
    icon: Shirt,
    title: "Kaos Sablon DTF",
    category: "Apparel & Merchandise",
    desc: "Sablon digital transfer film (DTF) full-color pada kaos Cotton Combed 30s premium. Hasil lembut, tajam, dan tidak pecah.",
    specs: ["Bisa pesan satuan tanpa minimal", "Cetak gradasi warna & foto penuh", "Kaos katun adem & nyaman dipakai"],
  },
  {
    icon: Mail,
    title: "Undangan Pernikahan & Khitan",
    category: "Acara & Hajatan",
    desc: "Undangan softcover & hardcover berbagai pilihan tema elegan. Kertas jasmine berglitter atau craft rustic sesuai selera.",
    specs: ["Gratis plastik OPP & label nama", "Gratis QR code Google Maps", "Revisi teks & layout sampai ACC"],
  },
  {
    icon: FileText,
    title: "Brosur, Flyer & Poster",
    category: "Promosi Usaha",
    desc: "Media promosi efektif untuk pembukaan usaha, menu kafe, atau katalog produk. Tersedia ukuran A6, A5, A4, hingga A3+.",
    specs: ["Art Paper 120g & 150g mengkilap", "Cetak 1 sisi atau bolak-balik", "Bisa lipat 2 atau lipat 3 (trifold)"],
  },
];

export default function PercetakanServices() {
  return (
    <section id="layanan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-600">
            Layanan Percetakan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Solusi Cetak Lengkap untuk Segala Kebutuhan
          </h2>
          <p className="mt-3 text-neutral-600">
            Didukung mesin digital printing mutakhir berkecepatan tinggi dengan tinta pigmen anti pudar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <ul className="space-y-2">
                  {service.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
