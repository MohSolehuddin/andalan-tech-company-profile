import { Building, Hammer, LayoutGrid, Wrench, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const services = [
  {
    icon: Building,
    title: "Bangun Rumah Baru",
    price: "Mulai Rp 3,5 Jt / m²",
    desc: "Pembangunan hunian dari nol dengan struktur beton bertulang SNI, desain 3D arsitektur, dan spesifikasi material berkualitas.",
    points: [
      "Struktur pondasi cakar ayam kokoh",
      "Desain fasad & denah fungsional",
      "Pengawasan mandor berpengalaman",
    ],
  },
  {
    icon: Hammer,
    title: "Renovasi Total & Parsial",
    price: "Mulai Rp 1,5 Jt / m²",
    desc: "Layanan perbaikan rumah, penambahan lantai/tingkat, pelebaran dapur, hingga penggantian rangka atap baja ringan bebas bocor.",
    points: [
      "Peningkatan lantai (tingkat 2)",
      "Peremajaan fasad tampak depan",
      "Penataan ulang tata ruang ruang keluarga",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Desain & Interior Kantor",
    price: "Mulai Rp 2,8 Jt / m²",
    desc: "Pengerjaan fit-out ruang kerja, partisi gipsum/kaca, plafon drop ceiling, dan instalasi kelistrikan estetik untuk kenyamanan kerja.",
    points: [
      "Partisi ruangan kedap suara",
      "Plafon akustik & tata lampu modern",
      "Pengerjaan rapi & tepat jadwal",
    ],
  },
  {
    icon: Wrench,
    title: "Kanopi, Pagar & Eksterior",
    price: "Mulai Rp 450 Rb / m²",
    desc: "Pembuatan pagar minimalis modern, kanopi alderon/solar flat dengan rangka hollow galvanis tebal dan anti-karat tahan lama.",
    points: [
      "Rangka galvanis finishing cat duco",
      "Pilihan atap alderon, solar flat, tempered",
      "Model laser cut kekinian",
    ],
  },
];

const KontraktorServices = () => {
  return (
    <section id="layanan" className="bg-stone-50 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-800">
            Layanan Unggulan
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
            Layanan Konstruksi Terintegrasi
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600">
            Dari perencanaan denah, estimasi material, hingga pelaksanaan fisik lapangan dengan standar mutu terjamin.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-800">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.desc}</p>

                  <ul className="mt-4 space-y-2 border-t border-stone-100 pt-4 text-xs text-stone-700">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href={waLink(`Halo Bangun Karya Kontraktor, saya ingin konsultasi layanan ${item.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-yellow-600/30 bg-yellow-50 px-4 py-2.5 text-xs font-semibold text-yellow-900 transition-colors hover:bg-yellow-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-600">
                    Konsultasi Layanan Ini
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KontraktorServices;
