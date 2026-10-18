import { CalendarDays, Clock3, MapPin, Navigation } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Schedule {
  day: string;
  location: string;
  time: string;
  note: string;
}

const schedules: Schedule[] = [
  {
    day: "Senin",
    location: "Kampus Politeknik Situbondo",
    time: "10.00 – 15.00",
    note: "Area parkir timur",
  },
  {
    day: "Selasa",
    location: "Alun-Alun Situbondo",
    time: "11.00 – 20.00",
    note: "Sisi barat panggung",
  },
  {
    day: "Rabu",
    location: "RSUD dr. Abdoer Rahem",
    time: "09.00 – 14.00",
    note: "Depan kantin karyawan",
  },
  {
    day: "Kamis",
    location: "Perumahan Griya Asri Panji",
    time: "15.30 – 20.30",
    note: "Dekat pos keamanan",
  },
  {
    day: "Jumat",
    location: "Situbondo Town Square",
    time: "10.00 – 21.00",
    note: "Food court outdoor",
  },
  {
    day: "Sabtu – Minggu",
    location: "Pantai Pasir Putih",
    time: "08.00 – 21.00",
    note: "Area parkir pengunjung",
  },
];

export default function FoodTruckSchedule() {
  return (
    <section id="jadwal" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
            Jadwal Lokasi
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Cari kami di sekitar kota
          </h2>
          <p className="mt-3 text-neutral-600">
            Jadwal dapat berubah karena cuaca atau acara khusus. Konfirmasi
            lokasi terbaru lewat WhatsApp sebelum berangkat.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          {schedules.map((schedule) => (
            <div
              key={schedule.day}
              className="flex flex-col gap-3 border-b border-neutral-100 p-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="inline-flex w-24 shrink-0 items-center gap-1.5 rounded-lg bg-yellow-100 px-2.5 py-1.5 text-xs font-bold text-yellow-800">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {schedule.day}
                </span>
                <div>
                  <p className="inline-flex items-center gap-1.5 font-semibold text-neutral-900">
                    <MapPin className="h-4 w-4 text-red-600" />
                    {schedule.location}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    {schedule.note}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 sm:justify-end">
                <Clock3 className="h-4 w-4 text-yellow-600" />
                {schedule.time} WIB
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-neutral-900 p-6 text-white sm:flex-row">
          <div>
            <p className="font-semibold">Mau kami mampir ke lokasi Anda?</p>
            <p className="mt-1 text-sm text-neutral-300">
              Booking private untuk kantor, sekolah, atau kompleks perumahan.
            </p>
          </div>
          <a
            href={waLink(
              "Halo Roda Rasa Food Truck, saya mau ajukan lokasi private booking."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-yellow-400">
            <Navigation className="h-4 w-4" />
            Ajukan Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
