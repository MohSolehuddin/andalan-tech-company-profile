import { CalendarClock, CheckCircle, Clock, MessageCircle, Plane, Users } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface ScheduleItem {
  id: string;
  date: string;
  packageName: string;
  airline: string;
  duration: string;
  hotel: string;
  seatsLeft: number;
  status: string;
}

const schedules: ScheduleItem[] = [
  {
    id: "sch-1",
    date: "15 Agustus 2026",
    packageName: "Umroh Reguler 9 Hari",
    airline: "Saudia Airlines (Direct CGK - JED)",
    duration: "9 Hari",
    hotel: "Makkah ★4 / Madinah ★4",
    seatsLeft: 6,
    status: "Seat Terbatas",
  },
  {
    id: "sch-2",
    date: "05 September 2026",
    packageName: "Umroh VIP Bintang 5",
    airline: "Garuda Indonesia (Direct CGK - MED)",
    duration: "12 Hari",
    hotel: "Pullman Zamzam / Rawda Royal ★5",
    seatsLeft: 4,
    status: "Seat Terbatas",
  },
  {
    id: "sch-3",
    date: "20 Oktober 2026",
    packageName: "Umroh Maulid Berkah",
    airline: "Saudia Airlines Direct",
    duration: "9 Hari",
    hotel: "Makkah ★4 / Madinah ★4",
    seatsLeft: 12,
    status: "Buka Pendaftaran",
  },
  {
    id: "sch-4",
    date: "18 November 2026",
    packageName: "Umroh Reguler Plus Thaif",
    airline: "Garuda Indonesia Direct",
    duration: "10 Hari",
    hotel: "Makkah ★4 / Madinah ★4",
    seatsLeft: 8,
    status: "Buka Pendaftaran",
  },
  {
    id: "sch-5",
    date: "10 Februari 2027",
    packageName: "Umroh Awal Ramadhan 1448 H",
    airline: "Saudia Airlines Direct",
    duration: "12 Hari",
    hotel: "Safwah Royale ★5 / Taiba Front ★4",
    seatsLeft: 5,
    status: "Seat Terbatas",
  },
];

export default function UmrohSchedules() {
  return (
    <section id="jadwal" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Jadwal Keberangkatan
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Jadwal Pasti Tahun 2026 / 2027
          </h2>
          <p className="mt-3 text-slate-600">
            Tiket pesawat sudah diblock dan terkonfirmasi (Pasti Terbang). Pilih tanggal yang sesuai rencana cuti dan ibadah Anda.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
          <div className="hidden bg-slate-900 px-6 py-4 text-xs font-semibold text-slate-200 md:grid md:grid-cols-12 md:gap-4">
            <span className="md:col-span-3">Tanggal Keberangkatan</span>
            <span className="md:col-span-3">Paket &amp; Durasi</span>
            <span className="md:col-span-3">Penerbangan &amp; Hotel</span>
            <span className="md:col-span-3 text-right">Sisa Kursi &amp; Booking</span>
          </div>

          <div className="divide-y divide-slate-100 bg-white">
            {schedules.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 p-5 transition-colors hover:bg-slate-50 md:grid md:grid-cols-12 md:items-center md:gap-4 md:p-6">
                {/* Tanggal */}
                <div className="md:col-span-3">
                  <div className="inline-flex items-center gap-2 font-bold text-slate-900">
                    <CalendarClock className="h-4 w-4 text-emerald-600" />
                    <span>{item.date}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Musim Umroh 1448 H</span>
                  </div>
                </div>

                {/* Paket */}
                <div className="md:col-span-3">
                  <p className="font-semibold text-slate-800">{item.packageName}</p>
                  <p className="text-xs text-slate-500">Durasi: {item.duration}</p>
                </div>

                {/* Maskapai & Hotel */}
                <div className="space-y-1 text-xs text-slate-600 md:col-span-3">
                  <div className="flex items-center gap-1.5">
                    <Plane className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{item.airline}</span>
                  </div>
                  <div className="text-slate-500">{item.hotel}</div>
                </div>

                {/* Sisa kursi & CTA */}
                <div className="flex items-center justify-between gap-3 md:col-span-3 md:justify-end">
                  <div className="text-left md:text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-0.5">
                      <Users className="h-3 w-3" />
                      Sisa {item.seatsLeft} seat
                    </span>
                  </div>
                  <a
                    href={waLink(`Halo Barokah Umroh & Haji, saya ingin memesan seat untuk keberangkatan tanggal ${item.date} (${item.packageName}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600">
                    <MessageCircle className="h-3.5 w-3.5" />
                    Amankan Seat
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-emerald-600" />
            DP ringan mulai Rp 5.000.000 / orang
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-emerald-600" />
            Pelunasan 30 hari sebelum jadwal terbang
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-emerald-600" />
            Garansi seat confirmed &amp; tiket PP terbit
          </span>
        </div>
      </div>
    </section>
  );
}
