import { CalendarCheck, Clock, Info } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const schedule = [
  { day: "Senin", hours: "09.00 – 20.00 WIB", doctor: "drg. Senja Maharani" },
  { day: "Selasa", hours: "09.00 – 20.00 WIB", doctor: "drg. Bima Prasetya" },
  { day: "Rabu", hours: "09.00 – 20.00 WIB", doctor: "drg. Senja Maharani" },
  { day: "Kamis", hours: "09.00 – 20.00 WIB", doctor: "drg. Bima Prasetya" },
  { day: "Jumat", hours: "09.00 – 20.00 WIB", doctor: "drg. Senja Maharani" },
  { day: "Sabtu", hours: "09.00 – 14.00 WIB", doctor: "drg. Nadia Puspita" },
];

export default function DokterSchedule() {
  return (
    <section id="jadwal" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Jadwal Praktik
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Pilih hari yang paling nyaman
          </h2>
          <p className="mt-4 text-neutral-600">
            Jadwal bisa berubah saat hari libur nasional. Konfirmasi slot Anda
            lewat WhatsApp sebelum datang.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-sky-600 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold sm:px-6">Hari</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Jam Praktik</th>
                <th className="hidden px-4 py-3 font-semibold sm:table-cell sm:px-6">
                  Dokter Jaga
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr
                  key={row.day}
                  className="border-t border-neutral-100 odd:bg-white even:bg-sky-50/50">
                  <td className="px-4 py-3 font-semibold text-neutral-900 sm:px-6">
                    {row.day}
                  </td>
                  <td className="px-4 py-3 text-neutral-700 sm:px-6">
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-sky-500" />
                      {row.hours}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-neutral-700 sm:table-cell sm:px-6">
                    {row.doctor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-sky-200 bg-sky-50 p-5 sm:flex-row sm:items-center">
          <p className="inline-flex items-start gap-2 text-sm text-sky-900">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
            Gigi terasa nyeri di luar jam praktik? Kirim pesan WhatsApp, kami
            bantu arahkan ke slot darurat terdekat.
          </p>
          <a
            href={waLink(
              "Halo Klinik Gigi Senyum Sehat, saya butuh jadwal darurat untuk sakit gigi."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-500">
            <CalendarCheck className="h-4 w-4" />
            Tanya Slot Darurat
          </a>
        </div>
      </div>
    </section>
  );
}
