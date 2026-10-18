import { Camera, Mail, Mic2, Palette, Sparkles, Utensils } from "lucide-react";

interface Service {
  icon: typeof Palette;
  title: string;
  description: string;
  badge: string;
}

const services: Service[] = [
  {
    icon: Palette,
    title: "Dekorasi Pelaminan & Venue",
    description:
      "Desain pelaminan custom tematik, pergola bunga segar, photo booth interaktif, dan penataan pencahayaan romantis.",
    badge: "Konsep Custom",
  },
  {
    icon: Utensils,
    title: "Catering & Kuliner Istimewa",
    description:
      "Menu buffet nusantara dan internasional bercita rasa premium, aneka food stall populer, serta pengujian menu (food tasting).",
    badge: "Food Tasting",
  },
  {
    icon: Sparkles,
    title: "MUA & Gaun Pengantin",
    description:
      "Riasan pengantin tahan lama nan elegan oleh perias bersertifikat, sewa kebaya akad, gaun resepsi, dan busana keluarga.",
    badge: "MUA Berpengalaman",
  },
  {
    icon: Camera,
    title: "Dokumentasi Foto & Sinematik",
    description:
      "Liputan lengkap hari-H oleh fotografer & videografer profesional, teaser video Instagram/TikTok, dan album cetak eksklusif.",
    badge: "Same-Day Teaser",
  },
  {
    icon: Mic2,
    title: "MC & Hiburan Musik",
    description:
      "Master of Ceremony berpengalaman memandu prosesi sakral hingga resepsi ceria, diiringi alunan grup akustik atau mini orchestra.",
    badge: "Acara Khidmat",
  },
  {
    icon: Mail,
    title: "Undangan Digital & Souvenir",
    description:
      "Website undangan digital dengan RSVP realtime, petunjuk Google Maps, amplop digital, serta kurasi souvenir berkesan.",
    badge: "Interaktif & Ramah",
  },
];

export default function WeddingServices() {
  return (
    <section id="layanan" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600">
            Layanan Terpadu
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Semua Kebutuhan Pernikahan dalam Satu Pintu
          </h2>
          <p className="mt-3 text-neutral-600">
            Kami mengoordinasikan seluruh vendor terbaik sehingga Anda dan keluarga dapat menikmati hari bahagia tanpa beban teknis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
