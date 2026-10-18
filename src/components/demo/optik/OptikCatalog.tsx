import { ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Frame {
  emoji: string;
  name: string;
  desc: string;
  price: string;
}

const frames: Frame[] = [
  {
    emoji: "👓",
    name: "Havana Classic",
    desc: "Frame acetate klasik, ringan dan cocok untuk pemakaian harian.",
    price: "Rp 385.000",
  },
  {
    emoji: "🤓",
    name: "Metro Titanium",
    desc: "Titanium lentur anti karat dengan bantalan hidung empuk.",
    price: "Rp 620.000",
  },
  {
    emoji: "🕶️",
    name: "Aviator Pilot",
    desc: "Model pilot dengan lensa photochromic yang berubah gelap di luar.",
    price: "Rp 450.000",
  },
  {
    emoji: "🧒",
    name: "Kiddo Flex",
    desc: "Frame anak fleksibel dan tahan banting untuk anak sekolah.",
    price: "Rp 275.000",
  },
  {
    emoji: "💻",
    name: "Aurora Blue Light",
    desc: "Lensa anti radiasi layar, nyaman untuk kerja dan gaming.",
    price: "Rp 399.000",
  },
  {
    emoji: "🏃",
    name: "Sport Runner",
    desc: "Frame sport wrap dengan grip anti selip untuk olahraga.",
    price: "Rp 520.000",
  },
];

export default function OptikCatalog() {
  return (
    <section id="koleksi" className="bg-indigo-50/60 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Koleksi Frame
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilih frame favorit, pesan langsung
          </h2>
          <p className="mt-3 text-neutral-600">
            Harga sudah termasuk lensa dasar minus/silinder. Konfirmasi stok dan
            ukuran lewat WhatsApp sebelum memesan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {frames.map((frame) => (
            <div
              key={frame.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-indigo-100 to-sky-100 text-2xl">
                {frame.emoji}
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {frame.name}
              </h3>
              <p className="mt-1 flex-1 text-sm text-neutral-600">
                {frame.desc}
              </p>
              <p className="mt-4 text-sm font-semibold text-indigo-700">
                {frame.price}
              </p>
              <a
                href={waLink(
                  `Halo Optik Melihat Jernih, saya mau pesan frame ${frame.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                <ShoppingBag className="h-4 w-4" />
                Pesan via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
