import { Banknote, Calculator, Check, Clock, FileText, MessageCircle, Shield, ThumbsUp } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const leasingPartners = [
  "FIFGROUP",
  "Adira Finance",
  "OTO Kredit Motor",
  "Mandiri Utama Finance",
  "Bussan Auto Finance (BAF)",
];

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Pilih Unit & Konsultasi",
    desc: "Tentukan tipe motor dan konsultasikan estimasi DP serta angsuran bulanan yang sesuai kantong.",
  },
  {
    step: "02",
    icon: MessageCircle,
    title: "Kirim Berkas via WA",
    desc: "Cukup foto KTP dan Kartu Keluarga (KK). Tim kami bantu input pengajuan tanpa perlu antre di kantor.",
  },
  {
    step: "03",
    icon: Clock,
    title: "Proses ACC 1 Hari",
    desc: "Verifikasi cepat oleh rekanan leasing resmi. Hasil persetujuan kredit diinfokan dalam waktu 24 jam.",
  },
  {
    step: "04",
    icon: ThumbsUp,
    title: "Motor Diantar & Serah Terima",
    desc: "Unit diantar langsung ke rumah Anda lengkap dengan helm, jaket, dan surat jalan sementara. DP bisa dibayar saat motor tiba.",
  },
];

export default function MotorFinancing() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Fasilitas Pembiayaan
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Kredit Motor Kilat &amp; Syarat Praktis
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Bekerjasama dengan leasing resmi dan terpercaya untuk memberikan bunga bersaing,
            tenor fleksibel hingga 36 bulan, dan approval anti ribet.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-orange-300 hover:shadow-md">
              <span className="text-3xl font-black text-slate-200">{item.step}</span>
              <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Leasing Box & Direct CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400">
                <Shield className="h-3.5 w-3.5" />
                Leasing Rekanan Resmi &amp; Terdaftar OJK
              </div>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                Ingin Hitung Simulasi DP &amp; Angsuran?
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Sebutkan motor incaran dan kemampuan angsuran Anda. Tim finance kami akan
                meracik skema cicilan terbaik dengan angsuran termurah.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {leasingPartners.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-medium text-slate-300">
                    <Check className="inline-block h-3.5 w-3.5 text-orange-400 mr-1" />
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:col-span-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-orange-400">
                <Calculator className="h-4 w-4" />
                Konsultasi Simulasi Kredit Cepat
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Dapatkan tabel cicilan lengkap 11, 23, 29, dan 35 bulan langsung dikirimkan ke WhatsApp Anda.
              </p>

              <div className="mt-5 space-y-2.5 text-xs text-slate-200">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Persyaratan Utama:</span>
                  <span className="font-semibold text-white">KTP &amp; KK Saja</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>DP Minimal:</span>
                  <span className="font-semibold text-orange-400">Mulai 10% / Rp 500 Ribu</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pembayaran DP:</span>
                  <span className="font-semibold text-white">Bisa COD Saat Unit Tiba</span>
                </div>
              </div>

              <a
                href={waLink("Halo Motor Jaya Showroom, saya ingin simulasi kredit motor. Mohon kirimkan rincian DP dan tenor angsuran.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 text-xs font-bold text-white shadow-md shadow-orange-600/30 transition-all hover:bg-orange-500">
                <MessageCircle className="h-4 w-4" />
                Minta Tabel Angsuran via WA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
