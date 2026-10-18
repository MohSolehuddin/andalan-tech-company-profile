import { Clock, MapPin, MessageCircle, Phone, Quote } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const testimonials = [
  {
    name: "Bu Wulan — Nasabah Kesehatan",
    text: "Saat anak saya dirawat, agen langsung bantu urus klaim. Semua berkas dipandu, dananya cair lima hari kemudian.",
  },
  {
    name: "Pak Hendra — Nasabah Jiwa",
    text: "Penjelasannya jujur dan tidak memaksa. Polis sesuai kemampuan saya, dan premi tetap stabil sampai sekarang.",
  },
  {
    name: "Bu Sari — Nasabah Pendidikan",
    text: "Dana pendidikan anak saya makin terarah. Tiap tahun diingatkan jadwal setoran, jadi tidak pernah telat.",
  },
];

export default function AsuransiContact() {
  return (
    <section id="kontak" className="bg-blue-950 px-4 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Testimoni
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Dipercaya nasabah dari berbagai kota
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl bg-white/5 p-6">
              <Quote className="h-6 w-6 text-teal-300" />
              <blockquote className="mt-3 text-blue-50/90">
                {item.text}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-white">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Konsultasi gratis, tanpa komitmen
            </h2>
            <p className="mt-4 text-blue-50/90">
              Ceritakan kebutuhan dan anggaran Anda. Kami bantu hitung ilustrasi
              premi yang paling pas untuk keluarga Anda.
            </p>
            <a
              href={waLink(
                "Halo Amanah Proteksi, saya mau konsultasi asuransi gratis."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" />
              Konsultasi via WhatsApp
            </a>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <p className="font-semibold">Kantor</p>
                <p className="text-sm text-blue-50/90">
                  Jl. Merdeka No. 45, Situbondo, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-blue-50/90">+62 877 4596 8545</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <p className="font-semibold">Jam Layanan</p>
                <p className="text-sm text-blue-50/90">
                  Senin–Sabtu, 09.00–18.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-blue-100/70">
          © {new Date().getFullYear()} Amanah Proteksi — Demo website oleh Andalan
          Tech.
        </div>
      </div>
    </section>
  );
}
