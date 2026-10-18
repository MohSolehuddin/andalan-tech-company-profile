import { ShieldCheck, BadgeCheck, HeartHandshake, Users, ThumbsUp, Star } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Klaim dibantu penuh",
    desc: "Tim kami dampingi dari pengajuan sampai dana cair. Anda tidak perlu bolak-balik mengurus berkas sendiri.",
  },
  {
    icon: BadgeCheck,
    title: "Agen resmi berlisensi",
    desc: "Terdaftar dan diawasi OJK, bekerja sama dengan perusahaan asuransi terpercaya di Indonesia.",
  },
  {
    icon: HeartHandshake,
    title: "Konsultasi gratis",
    desc: "Ceritakan kebutuhan dan anggaran Anda, kami carikan proteksi paling sesuai tanpa biaya dan tanpa paksaan.",
  },
];

const stats = [
  { icon: Users, value: "1.200+", label: "Nasabah aktif" },
  { icon: ThumbsUp, value: "98%", label: "Klaim disetujui" },
  { icon: Star, value: "4.9/5", label: "Rating kepuasan" },
];

export default function AsuransiWhy() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Keunggulan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Kenapa memilih Amanah Proteksi
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                <reason.icon className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">{reason.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-neutral-50 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <stat.icon className="h-6 w-6 text-blue-700" />
              </div>
              <p className="mt-4 text-3xl font-bold text-neutral-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
