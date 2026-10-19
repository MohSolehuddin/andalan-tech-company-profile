import { Cake, CheckCircle2, MessageSquare, Palette, Wand2 } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const customFeatures = [
  {
    icon: Palette,
    title: "Bebas Request Tema & Warna",
    desc: "Kirimkan referensi desain dari Instagram atau Pinterest. Kami sesuaikan palet warna dan hiasannya.",
  },
  {
    icon: Cake,
    title: "Custom Topper Akrilik & Nama",
    desc: "Pilihan hiasan topper premium: akrilik mirror gold/silver, topper kayu rustic, atau figur karakter.",
  },
  {
    icon: Wand2,
    title: "Pilihan Rasa & Isian Lengkap",
    desc: "Kombinasikan rasa favorit: Vanila Bourbon, Dark Chocolate, Red Velvet, Matcha Cream, atau Mocca.",
  },
];

const customSteps = [
  "Konsultasi desain & tanggal acara via WhatsApp",
  "Pilih ukuran cake, varian rasa, dan teks topper",
  "Konfirmasi preview & pembayaran DP",
  "Kue dikirim aman dengan kurir khusus ke lokasi",
];

export default function TokoKueCustom() {
  return (
    <section id="custom" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Information */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-pink-600">
              Layanan Spesial
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
              Custom Order Cake &amp; Akrilik Topper
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Jadikan momen ulang tahun, wisuda, atau anniversary orang tersayang
              lebih berkesan dengan kue bertema impian. Kami melayani pembuatan
              kue custom pre-order dengan detail hiasan yang rapi dan elegan.
            </p>

            <div className="mt-8 space-y-5">
              {customFeatures.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={waLink(
                  "Halo Manis Kue & Dessert, saya ingin konsultasi custom order kue dan hiasan topper untuk acara saya."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3.5 font-semibold text-white transition-all hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900">
                <MessageSquare className="h-5 w-5 text-pink-400" />
                Konsultasi Custom via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Steps & Preview Box */}
          <div className="rounded-xl border border-pink-100 bg-linear-to-br from-pink-50/80 via-rose-50/30 to-amber-50/40 p-8 shadow-xs sm:p-10">
            <h3 className="text-xl font-bold text-neutral-900">
              Alur Pemesanan Custom Cake
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Disarankan melakukan pemesanan minimal H-2 atau H-3 sebelum hari H
              agar pengerjaan optimal.
            </p>

            <div className="mt-6 space-y-4">
              {customSteps.map((step, idx) => (
                <div key={step} className="flex items-start gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-medium text-neutral-700">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-pink-200/80 bg-white/90 p-5 backdrop-blur-xs">
              <div className="flex items-center gap-2 font-bold text-pink-700">
                <CheckCircle2 className="h-5 w-5 text-pink-600" />
                Bonus Spesial Setiap Order Cake
              </div>
              <ul className="mt-2 space-y-1 text-xs text-neutral-600">
                <li>• Free Lilin Spiral Aesthetic / Lilin Angka</li>
                <li>• Free Pisau Pemotong Kue Higienis</li>
                <li>• Free Custom Kartu Ucapan Spesial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
