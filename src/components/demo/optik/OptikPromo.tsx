import {
  BadgePercent,
  GraduationCap,
  MessageCircle,
  TicketPercent,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const promos = [
  {
    icon: BadgePercent,
    tag: "Bundling",
    name: "Paket Frame + Lensa",
    desc: "Beli frame dan lensa sekaligus, hemat hingga Rp 150.000.",
  },
  {
    icon: GraduationCap,
    tag: "Pelajar",
    name: "Promo Pelajar & Mahasiswa",
    desc: "Tunjukkan kartu pelajar, dapat potongan 15% untuk kacamata pertama.",
  },
  {
    icon: TicketPercent,
    tag: "Gratis",
    name: "Gratis Cek Mata",
    desc: "Tes mata dan resep gratis setiap pembelian kacamata atau softlens.",
  },
];

export default function OptikPromo() {
  return (
    <section id="promo" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Promo Bulan Ini
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Lebih hemat untuk mata sehat
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {promos.map((promo) => (
            <div
              key={promo.name}
              className="rounded-2xl border border-indigo-100 bg-linear-to-br from-indigo-50 to-sky-50 p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                  <promo.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  {promo.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {promo.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{promo.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-indigo-600 to-sky-600 px-6 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-bold text-white">
              Slot cek mata terbatas setiap hari
            </p>
            <p className="mt-1 text-sm text-indigo-50/90">
              Reservasi sekarang dan pilih jam yang paling nyaman untuk Anda.
            </p>
          </div>
          <a
            href={waLink(
              "Halo Optik Melihat Jernih, saya mau klaim promo dan reservasi."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <MessageCircle className="h-5 w-5" />
            Klaim Promo
          </a>
        </div>
      </div>
    </section>
  );
}
