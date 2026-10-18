import { CalendarClock } from "lucide-react";

interface Doctor {
  name: string;
  role: string;
  schedule: string;
  img: string;
}

const doctors: Doctor[] = [
  {
    name: "dr. Andini Putri",
    role: "Dokter Umum",
    schedule: "Senin–Jumat, 08.00–14.00",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "drg. Bagas Saputra",
    role: "Dokter Gigi",
    schedule: "Selasa & Kamis, 09.00–15.00",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "dr. Citra Maharani",
    role: "Spesialis Anak",
    schedule: "Rabu & Sabtu, 10.00–16.00",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=60",
  },
];

export default function KlinikDoctors() {
  return (
    <section className="bg-teal-50/60 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Tim Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Dokter yang Anda kenal &amp; percaya
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={doctor.img}
                alt={doctor.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900">
                  {doctor.name}
                </h3>
                <p className="text-sm font-medium text-teal-600">
                  {doctor.role}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-500">
                  <CalendarClock className="h-4 w-4" />
                  {doctor.schedule}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
