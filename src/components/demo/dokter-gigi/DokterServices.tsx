import { Baby, Braces, HeartPulse, ShieldCheck, Smile, Sparkles } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const services = [
  {
    icon: Sparkles,
    name: "Scaling Gigi",
    desc: "Membersihkan karang gigi dan plak agar gusi sehat dan napas segar.",
    price: "Mulai Rp 250.000",
  },
  {
    icon: ShieldCheck,
    name: "Tambal Gigi",
    desc: "Tambal komposit sewarna gigi untuk gigi berlubang, nyaman tanpa sakit.",
    price: "Mulai Rp 200.000",
  },
  {
    icon: Braces,
    name: "Behel / Kawat Gigi",
    desc: "Perawatan ortodonti rapi dan terkontrol, mulai behel metal hingga clear.",
    price: "Mulai Rp 6.500.000",
  },
  {
    icon: Smile,
    name: "Whitening Gigi",
    desc: "Pemutihan gigi aman dengan hasil lebih cerah dalam satu kunjungan.",
    price: "Mulai Rp 1.500.000",
  },
  {
    icon: HeartPulse,
    name: "Perawatan Saluran Akar",
    desc: "Penyelamatan gigi yang rusak parah dengan prosedur minim nyeri.",
    price: "Mulai Rp 900.000",
  },
  {
    icon: Baby,
    name: "Gigi Anak",
    desc: "Pemeriksaan dan edukasi sikat gigi yang ramah untuk si kecil.",
    price: "Mulai Rp 150.000",
  },
];

export default function DokterServices() {
  return (
    <section id="layanan" className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Layanan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Perawatan gigi untuk seluruh keluarga
          </h2>
          <p className="mt-4 text-neutral-600">
            Harga transparan, ditangani dokter gigi berpengalaman, dan bisa
            konsultasi dulu via WhatsApp sebelum datang.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                <service.icon className="h-6 w-6 text-sky-700" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                {service.name}
              </h3>
              <p className="mt-1 flex-1 text-sm text-neutral-600">
                {service.desc}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
                <span className="text-sm font-semibold text-sky-700">
                  {service.price}
                </span>
                <a
                  href={waLink(
                    `Halo Klinik Gigi Senyum Sehat, saya mau tanya jadwal untuk ${service.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-neutral-700 underline underline-offset-2 hover:text-sky-700">
                  Tanya
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
