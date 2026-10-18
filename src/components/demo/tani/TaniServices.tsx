import { HelpCircle, MessageCircle, Tractor, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const services = [
  {
    icon: Truck,
    title: "Pengiriman Cepat ke Titik Lahan",
    desc: "Layanan drop muatan pupuk berton-ton, benih karungan, atau herbisida langsung ke gubuk sawah atau rumah petani tanpa repot sewa angkutan sendiri.",
    tag: "Area Situbondo & Sekitarnya",
  },
  {
    icon: Tractor,
    title: "Sewa Alat & Mesin Tani (Alsintan)",
    desc: "Penyewaan traktor bajak roda 2, mesin pompa air irigasi sawah, alat semprot kabut (mist blower), dan mesin perontok padi (thresher) siap pakai.",
    tag: "Harian / Musim Tanam",
  },
  {
    icon: HelpCircle,
    title: "Bantuan Pemilihan Varietas & Obat Hama",
    desc: "Rekomendasi formula takaran herbisida/insektisida yang tepat sasaran, aman bagi tanaman, serta pemilihan benih sesuai karakteristik tanah dan cuaca Situbondo.",
    tag: "Bimbingan Teknis",
  },
];

export default function TaniServices() {
  return (
    <section className="bg-slate-100/70 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-green-700">
            Layanan Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Layanan Lengkap untuk Pertanian Anda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Lebih dari sekadar toko, kami hadir membantu kelancaran operasional petani dari awal tanam sampai panen.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs transition-all hover:border-green-400 hover:shadow-md">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-100 text-green-800">
                  <svc.icon className="h-6 w-6" />
                </div>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-green-700">
                  {svc.tag}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {svc.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={waLink(`Halo Tani Makmur Situbondo, saya ingin informasi layanan: ${svc.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-green-700 transition-colors hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600">
                  <MessageCircle className="h-4 w-4" />
                  Tanya Layanan Ini &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
