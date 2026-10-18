import { Droplets, Flame, Sparkles, Sun, Wand2, Zap } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const treatments = [
  {
    icon: Droplets,
    badge: "Facial",
    name: "Hydra Deep Cleansing Facial",
    desc: "Pembersihan komedo tanpa rasa sakit, eksfoliasi lembut, dan hidrasi serum konsentrat tinggi untuk membersihkan pori secara tuntas.",
    duration: "75 menit",
    target: "Pori tersumbat, kusam, komedo",
  },
  {
    icon: Flame,
    badge: "Chemical Peeling",
    name: "Radiance Bio Peeling",
    desc: "Aplikasi formula asam organik teruji klinis untuk meregenerasi sel kulit mati, memudarkan noda bekas jerawat, dan meratakan tekstur kulit.",
    duration: "45 menit",
    target: "Bekas jerawat, hiperpigmentasi",
  },
  {
    icon: Zap,
    badge: "Laser Technology",
    name: "Pico Glow Laser Rejuvenation",
    desc: "Teknologi gelombang pico-second presisi tinggi untuk memecah pigmen melanin gelap, memudarkan flek, dan merangsang produksi kolagen alami.",
    duration: "60 menit",
    target: "Flek hitam, pori besar, melasma",
  },
  {
    icon: Sun,
    badge: "Brightening",
    name: "Glass Skin Brightening Therapy",
    desc: "Infusi antioksidan Glutathione & Vitamin C murni lewat micro-electroporation untuk hasil wajah glowing, cerah merona seketika.",
    duration: "60 menit",
    target: "Kulit kusam, warna kulit tidak merata",
  },
  {
    icon: Wand2,
    badge: "Acne Care",
    name: "Active Acne Purifying Therapy",
    desc: "Kombinasi Blue Light Photo-therapy dan serum anti-bakteri untuk menenangkan peradangan jerawat aktif serta mencegah timbulnya bopeng.",
    duration: "60 menit",
    target: "Jerawat meradang, kulit rentan breakout",
  },
  {
    icon: Sparkles,
    badge: "Anti-Aging",
    name: "Collagen Lift & Tightening",
    desc: "Stimulasi ultrasound non-invasif untuk mengencangkan elastisitas kulit wajah, menyamarkan kerutan halus, dan mempertegas garis rahang.",
    duration: "90 menit",
    target: "Garis halus, kulit kendur",
  },
];

export default function SkincareTreatments() {
  return (
    <section id="treatment" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
            Layanan Unggulan
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Solusi Kulit Cantik &amp; Sehat
          </h2>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base">
            Pilihan treatment medis dan estetika berbasis bukti ilmiah, dilakukan
            oleh dokter estetika dan beautician tersertifikasi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-all hover:border-rose-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-rose-50 to-pink-50 text-rose-600">
                    <t.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                    {t.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-neutral-900">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {t.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span>⏱️ Durasi: {t.duration}</span>
                  <span className="font-medium text-rose-700">Target: {t.target.split(",")[0]}</span>
                </div>
                <a
                  href={waLink(
                    `Halo Glow Aesthetic Clinic, saya tertarik konsultasi mengenai treatment ${t.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full rounded-lg bg-neutral-100 py-2.5 text-center text-xs font-semibold text-neutral-800 transition-colors hover:bg-rose-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                  Tanya Treatment Ini via WA
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
