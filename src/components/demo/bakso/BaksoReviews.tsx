import { Clock, ShieldCheck, Sparkles, Star } from "lucide-react";

const SECRETS = [
  {
    num: "1",
    title: "Daging Sapi Segar Paha Belakang",
    desc: "Kadar serat otot padat menghasilkan tekstur 'kres' alami tanpa pengenyal atau tepung berlebih.",
  },
  {
    num: "2",
    title: "Rebusan Tulang Sumsum 12 Jam",
    desc: "Tulang sumsum sapi lokal direbus lambat bersama bawang putih goreng dan lada putih Bangka hingga gurih alami.",
  },
  {
    num: "3",
    title: "Sambal Rawit Ulek Segar",
    desc: "Hanya cabai rawit merah asli ulek segar, kecap manis kedelai hitam tradisional, dan cuka aren alami.",
  },
];

const REVIEWS = [
  {
    name: "Bambang Wibisono",
    role: "Pelanggan Cabang Manyar, Surabaya",
    initials: "BW",
    bgColor: "bg-red-700",
    quote:
      "Kalo ke cabang Manyar Surabaya wajib pesen Bakso Iga Sumsum. Kuahnya bener-bener kaldu asli, nggak bikin tenggorokan serik atau haus berlebihan karena gak kebanyakan vetsin. Tempatnya adem dan parkirannya lega.",
  },
  {
    name: "Ratna Sari Dewi",
    role: "Pelanggan Cabang Tebet, Jakarta",
    initials: "RS",
    bgColor: "bg-amber-600",
    quote:
      "Bakso uratnya juara banget! Keras kenyal daging sapi, bukan kenyal tepung kanji. Pangsit gorengnya juga fresh dan garing renyah. Seneng banget sekarang udah ada 5 cabang di area Jakarta jadi gampang mampir.",
  },
  {
    name: "Agus Dananjaya",
    role: "Pelanggan Cabang Ijen, Malang",
    initials: "AD",
    bgColor: "bg-stone-800",
    quote:
      "Paling suka kalau lagi dingin di Malang mampir ke cabang Ijen. Kuah sumsumnya masih mengepul panas, sambelnya pedes segar, ditambah es teler durian yang porsinya gak pelit. Pelayanan stafnya ramah dan cekatan.",
  },
];

const BaksoReviews = () => {
  return (
    <section id="ulasan" className="py-16 bg-stone-50 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* Tentang & Rahasia Section */}
        <div id="tentang" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-14">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-wider text-red-700 uppercase block">
              Kisah & Standar Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
              Bermula dari Gerobak Kayu Sederhana di Tahun 1998
            </h2>
            <p className="text-stone-700 text-sm leading-relaxed">
              Didirikan oleh Pak Slamet Harsono di sudut jalan Jawa Timur 28 tahun lalu, prinsip kami tidak pernah berubah:{" "}
              <em>daging sapi segar harus digiling saat subuh, dan kaldu sumsum direbus lambat hingga lemak alaminya menyatu sempurna</em>.
            </p>
            <p className="text-stone-700 text-sm leading-relaxed">
              Meskipun telah berkembang menjadi <strong>20 cabang</strong>, kami menolak mesin adonan instan pabrikan atau perisa daging artifisial. Dapur terpusat kami mendistribusikan adonan segar setiap pagi untuk menjaga cita rasa otentik.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-stone-900 text-xs">Tanpa Pengawet Sintetis</span>
                </div>
                <p className="text-xs text-stone-600">Tekstur kenyal 100% dari serat daging sapi murni dan putih telur.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="font-bold text-stone-900 text-xs">Standar Sanitasi Dinkes</span>
                </div>
                <p className="text-xs text-stone-600">Seluruh cabang berpendingin ruangan dengan sertifikasi kebersihan resmi.</p>
              </div>
            </div>
          </div>

          {/* 3 Rahasia Card */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h3 className="font-bold text-base text-stone-900">
                3 Rahasia Kelezatan Kuah & Bakso Kami
              </h3>
            </div>

            <div className="space-y-3">
              {SECRETS.map((item) => (
                <div key={item.num} className="flex gap-3 items-start">
                  <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-bold text-xs flex items-center justify-center shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs">{item.title}</h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ulasan Pelanggan */}
        <div className="pt-8 border-t border-stone-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold tracking-wider text-red-700 uppercase block mb-1">
              Ulasan Pengunjung
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Apa Kata Pecinta Bakso?
            </h2>
            <p className="text-stone-600 text-sm mt-1">Ulasan nyata dari pelanggan setia kami di berbagai cabang.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {REVIEWS.map((rev) => (
              <div
                key={rev.name}
                className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[10px] text-stone-400 ml-1">Google Maps</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-3 border-t border-stone-100">
                  <div
                    className={`w-8 h-8 rounded-full ${rev.bgColor} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                    {rev.initials}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block leading-tight">
                      {rev.name}
                    </span>
                    <span className="text-[11px] text-stone-500 block">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Guarantee & Halal Banner */}
        <div className="p-6 rounded-xl bg-stone-900 text-stone-300 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-bold text-white text-sm block">Bakso Warisan Nusantara</span>
            <p className="text-stone-400">
              Menjaga keaslian bakso daging sapi murni dengan kaldu sumsum tulang asli sejak 1998 di 20 cabang resmi.
            </p>
            <p className="text-stone-300">
              Sertifikat Halal LPPOM MUI: <span className="text-emerald-400 font-mono">ID3511000192837</span>
            </p>
          </div>
          <div className="text-center md:text-right shrink-0">
            <span className="text-stone-400 block">Hotline Kemitraan & Manajemen:</span>
            <span className="text-amber-400 font-mono font-bold text-sm">(031) 592-8899</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaksoReviews;
