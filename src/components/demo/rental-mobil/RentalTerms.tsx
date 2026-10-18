import { AlertTriangle, CheckCircle2, ClipboardCheck } from "lucide-react";

const requirements = [
  "KTP asli dan SIM A aktif milik penyewa",
  "Usia minimal 21 tahun",
  "Deposit jaminan (dikembalikan setelah unit selesai dipakai)",
  "Unit hanya boleh dikemudikan oleh penyewa yang terdaftar",
];

const policies = [
  "BBM, tol, dan biaya parkir ditanggung penyewa",
  "Keterlambatan pengembalian dikenakan biaya per jam",
  "Dilarang memindahkan unit ke pihak lain tanpa izin",
  "Penyewa bertanggung jawab atas denda tilang selama masa sewa",
];

const prohibitions = [
  "Menggunakan unit untuk balap atau uji kecepatan",
  "Mengangkut barang ilegal dan berbahaya",
  "Mengemudikan unit dalam pengaruh alkohol atau obat terlarang",
];

export default function RentalTerms() {
  return (
    <section id="syarat" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Syarat &amp; Ketentuan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Sewa Mudah, Proses Jelas
          </h2>
          <p className="mt-3 text-slate-600">
            Cukup siapkan dokumen berikut, sisanya tim kami yang urus agar Anda
            langsung bisa jalan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <ClipboardCheck className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Dokumen &amp; Ketentuan
              </h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <AlertTriangle className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Ketentuan Selama Sewa
              </h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {policies.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="flex items-center gap-2 text-base font-bold text-amber-900">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Dilarang Keras
          </h3>
          <ul className="mt-3 grid gap-2 text-sm text-amber-900 sm:grid-cols-3">
            {prohibitions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
