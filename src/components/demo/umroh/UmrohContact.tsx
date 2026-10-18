import { Clock, FileText, MapPin, MessageCircle, Phone } from "lucide-react";
import { DEMO_WA, waLink } from "@/lib/demo/wa";

const requirements = [
  "Paspor asli dengan masa berlaku minimal 8 bulan (nama minimal 2 suku kata)",
  "Buku nikah bagi suami istri atau akta lahir bagi anak di bawah umur",
  "Pas foto terbaru ukuran 4x6 latar belakang putih tampak wajah 80%",
  "Buku kuning suntik vaksin meningitis (rekomendasi Kemenkes)",
  "Membayar uang muka (DP) pendaftaran dan memilih paket",
];

export default function UmrohContact() {
  return (
    <section id="kontak" className="bg-slate-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Layanan &amp; Konsultasi
          </span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Siap Melayani Tamu Allah ke Baitullah
          </h2>
          <p className="mt-3 text-slate-300">
            Tim kami siap membantu pengurusan berkas, pembuatan paspor, konsultasi manasik, dan pendaftaran keluarga Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Kantor & Kontak */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-xl font-bold text-white">Kantor Pusat Barokah Umroh &amp; Haji</h3>
            <p className="mt-2 text-sm text-slate-300">
              Silakan berkunjung langsung ke kantor kami untuk konsultasi tatap muka atau pendaftaran langsung.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                <span>Jl. Basuki Rahmat No. 88, Kav. Baitullah, Situbondo, Jawa Timur 68312</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-emerald-400" />
                <span>Senin – Sabtu: 08.00 – 17.00 WIB (Minggu &amp; Libur Nasional dengan Janji Temu)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-emerald-400" />
                <span>Hotline: +{DEMO_WA}</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={waLink("Halo Barokah Umroh & Haji, saya ingin konsultasi pendaftaran umroh/haji dan menanyakan persyaratan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500">
                <MessageCircle className="h-5 w-5" />
                Hubungi via WhatsApp Sekarang
              </a>
            </div>
          </div>

          {/* Persyaratan Pendaftaran */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex items-center gap-2 text-emerald-400">
              <FileText className="h-5 w-5" />
              <h3 className="text-xl font-bold text-white">Syarat Berkas Pendaftaran</h3>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Persiapkan dokumen berikut untuk kelancaran pengurusan visa dan sistem SISKOPATUH Kemenag RI:
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-400">
                    {idx + 1}
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-200">
              💡 Belum memiliki paspor? Tim kami menyediakan surat rekomendasi resmi Kemenag untuk pembuatan paspor di kantor Imigrasi.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
