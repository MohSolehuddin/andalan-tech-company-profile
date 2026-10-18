import { Calculator, Check, FileSpreadsheet, ShieldAlert, Sparkles, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const rabTiers = [
  {
    name: "Paket Standar",
    range: "Rp 3.500.000 - Rp 4.200.000",
    unit: "/ m² bangunan",
    desc: "Cocok untuk rumah tinggal minimalis 1-2 lantai, kost-kostan, atau paviliun keluarga.",
    features: [
      "Pondasi batu kali & footplat beton bertulang",
      "Dinding bata ringan (hebel) plester aci",
      "Lantai granit tile 60x60 cm",
      "Kusen & jendela aluminium 3 inch",
      "Rangka atap baja ringan & genteng beton",
      "Cat dinding interior & eksterior berkualitas",
    ],
    popular: false,
  },
  {
    name: "Paket Premium",
    range: "Rp 4.500.000 - Rp 5.500.000",
    unit: "/ m² bangunan",
    desc: "Pilihan favorit untuk hunian modern kontemporer dengan material grade A dan aksen arsitektural.",
    features: [
      "Struktur cakar ayam K-250 siap 2-3 lantai",
      "Lantai granit glazed polished 80x80 cm / vinyl",
      "Kusen aluminium powder coating Alexindo 4 inch",
      "Sanitair TOTO / American Standard lengkap",
      "Plafon gypsum drop ceiling + indirect warm LED",
      "Fasad aksen batu alam / conwood modern",
    ],
    popular: true,
  },
  {
    name: "Renovasi Kustom",
    range: "Mulai Rp 1.500.000",
    unit: "/ m² pekerjaan",
    desc: "Fleksibel disesuaikan dengan volume kerusakan, tambah ruangan, atau rombak fasad.",
    features: [
      "Bongkar pasang atap & dak lantai 2",
      "Perluasan dapur, kamar mandi, atau carport",
      "Instalasi pipa air kotor/bersih & kelistrikan baru",
      "Pengecatan ulang total waterproof",
      "Pembersihan puing sisa renovasi tuntas",
      "Laporan progres mingguan via dokumentasi foto/video",
    ],
    popular: false,
  },
];

const steps = [
  { step: "01", title: "Survei & Diskusi Gratis", desc: "Tim kami datang ke lokasi Anda untuk pengukuran fisik lahan, analisa struktur, dan konsultasi kebutuhan tanpa biaya." },
  { step: "02", title: "Penyusunan RAB & Desain", desc: "Kami buatkan draft Rencana Anggaran Biaya (RAB) rinci per item material dan gambar denah visual 3D." },
  { step: "03", title: "Kontrak SPK & Termin", desc: "Penandatanganan Surat Perjanjian Kerja resmi. Sistem pembayaran dibagi dalam termin progresif sesuai progres fisik di lapangan." },
  { step: "04", title: "Serah Terima & Garansi", desc: "Pengecekan akhir bersama pemilik rumah (checklist serah terima kunci) dan penerbitan sertifikat garansi pemeliharaan 6 bulan." },
];

const KontraktorRAB = () => {
  return (
    <section id="estimasi-rab" className="bg-stone-900 py-16 text-white md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-400">
            <Calculator className="h-3.5 w-3.5" />
            Transparansi Biaya Konstruksi
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Estimasi Biaya RAB &amp; Pilihan Paket
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-stone-300 sm:text-base">
            Biaya pasti tanpa jebakan biaya tersembunyi. Setiap rincian bahan material dan upah tukang tercantum jelas di RAB.
          </p>
        </div>

        {/* Pricing tiers */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {rabTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col justify-between rounded-xl border p-6 transition-all ${
                tier.popular
                  ? "border-yellow-400 bg-stone-800 shadow-md"
                  : "border-stone-800 bg-stone-950/70"
              }`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-500 px-3 py-0.5 text-xs font-bold text-stone-950">
                  Paling Banyak Dipilih
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <p className="mt-2 text-xs text-stone-400">{tier.desc}</p>
                <div className="mt-4 border-b border-stone-700/60 pb-4">
                  <div className="text-2xl font-extrabold text-yellow-400">{tier.range}</div>
                  <div className="text-xs text-stone-400">{tier.unit}</div>
                </div>

                <ul className="mt-5 space-y-2.5 text-xs text-stone-300">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-yellow-400" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800">
                <a
                  href={waLink(`Halo Bangun Karya Kontraktor, saya ingin konsultasi simulasi RAB untuk ${tier.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 ${
                    tier.popular
                      ? "bg-yellow-500 text-stone-950 hover:bg-yellow-400"
                      : "border border-stone-700 bg-stone-800 text-stone-200 hover:bg-stone-700 hover:text-white"
                  }`}>
                  <FileSpreadsheet className="h-4 w-4" />
                  Minta Simulasi RAB via WA
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Steps */}
        <div className="mt-16 rounded-xl border border-stone-800 bg-stone-950/80 p-6 md:p-8">
          <h3 className="text-center text-lg font-bold text-white sm:text-xl">
            4 Langkah Mudah Membangun Bersama Kami
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st) => (
              <div key={st.step} className="relative">
                <span className="text-3xl font-black text-yellow-500/30">{st.step}</span>
                <h4 className="mt-1 text-sm font-bold text-yellow-400">{st.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontraktorRAB;
