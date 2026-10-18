import { Clock, MapPin, Store } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

interface Outlet {
  city: string;
  address: string;
  flagship?: boolean;
}

const outlets: Outlet[] = [
  {
    city: "Situbondo",
    address: "Jl. PB Sudirman No. 88, Situbondo",
    flagship: true,
  },
  { city: "Bondowoso", address: "Jl. A. Yani No. 45, Bondowoso" },
  { city: "Jember", address: "Jl. Kalimantan No. 12, Jember" },
  { city: "Banyuwangi", address: "Jl. S. Parman No. 27, Banyuwangi" },
  { city: "Probolinggo", address: "Jl. Suroyo No. 10, Probolinggo" },
  { city: "Malang", address: "Jl. Soekarno Hatta No. 156, Malang" },
];

export default function AyamOutlets() {
  return (
    <section id="outlet" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Daftar Outlet
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            42 outlet, 6 kota besar Jawa Timur
          </h2>
          <p className="mt-3 text-neutral-600">
            Mampir langsung atau pesan antar dari outlet terdekat. Semua outlet
            buka setiap hari.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outlets.map((outlet) => (
            <div
              key={outlet.city}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100">
                  <Store className="h-5 w-5 text-red-600" />
                </div>
                {outlet.flagship && (
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                    Outlet Pusat
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                Outlet {outlet.city}
              </h3>
              <p className="mt-1 flex-1 text-sm text-neutral-600">
                <MapPin className="mr-1.5 inline h-4 w-4 text-red-500" />
                {outlet.address}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
                  <Clock className="h-3.5 w-3.5" />
                  10.00–22.00 WIB
                </span>
                <a
                  href={waLink(
                    `Halo Ayam Geprek Mantap, saya mau tanya lokasi outlet ${outlet.city}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-sm font-semibold text-red-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500">
                  Tanya lokasi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
