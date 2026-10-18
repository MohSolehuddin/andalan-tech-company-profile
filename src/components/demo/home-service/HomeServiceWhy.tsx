import { BadgeCheck, Banknote, Clock, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Teknisi terlatih",
    desc: "Tim berpengalaman dan membawa alat sendiri, Anda tidak perlu menyiapkan apa pun.",
  },
  {
    icon: Banknote,
    title: "Harga transparan",
    desc: "Biaya disepakati sebelum pengerjaan. Tidak ada tagihan tambahan di akhir.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi pengerjaan",
    desc: "Ada kendala setelah servis? Kami datang kembali gratis dalam masa garansi.",
  },
  {
    icon: Clock,
    title: "Tepat waktu",
    desc: "Jadwal booking dihormati, termasuk opsi kunjungan di hari Sabtu dan Minggu.",
  },
];

export default function HomeServiceWhy() {
  return (
    <section id="keunggulan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Kenapa ServisPro
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Dikerjakan rapi, dijamin sampai tuntas
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <reason.icon className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 font-bold text-neutral-900">
                {reason.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
