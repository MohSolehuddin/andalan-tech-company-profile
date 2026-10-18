import {
  Activity,
  Baby,
  FlaskConical,
  Smile,
  Stethoscope,
  Syringe,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    name: "Konsultasi Umum",
    desc: "Pemeriksaan & diagnosis oleh dokter umum berpengalaman.",
  },
  {
    icon: Smile,
    name: "Perawatan Gigi",
    desc: "Scaling, tambal, dan pemutihan gigi dengan alat modern.",
  },
  {
    icon: Baby,
    name: "Klinik Anak",
    desc: "Imunisasi dan pemantauan tumbuh kembang anak.",
  },
  {
    icon: FlaskConical,
    name: "Laboratorium",
    desc: "Tes darah & pemeriksaan penunjang hasil cepat.",
  },
  {
    icon: Syringe,
    name: "Vaksinasi",
    desc: "Vaksin dewasa & anak, aman dan nyaman.",
  },
  {
    icon: Activity,
    name: "Fisioterapi",
    desc: "Program pemulihan cedera dan terapi nyeri.",
  },
];

export default function KlinikServices() {
  return (
    <section id="layanan" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Layanan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Perawatan lengkap dalam satu tempat
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                <service.icon className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {service.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
