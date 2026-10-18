import { MapPin, Truck, AlertCircle, Clock3 } from "lucide-react";

const areas = [
  {
    zone: "Zona Utama (Gratis Ongkir min. Rp 300rb)",
    locations: "Situbondo Kota, Panji, Kapongan, Arjasa, Panarukan",
    note: "Pengantaran langsung dari dapur utama tepat waktu",
  },
  {
    zone: "Zona Sekunder (Ongkir Flat Ekonomis)",
    locations: "Besuki, Suboh, Mlandingan, Kendit, Mangaran, Asembagus",
    note: "Dikirim dengan armada khusus berpenghangat (insulated box)",
  },
];

const rules = [
  {
    label: "Katering Harian",
    min: "Minimal 5 porsi / pengantaran",
    desc: "Bisa berlangganan mingguan atau bulanan dengan menu berbeda setiap hari.",
  },
  {
    label: "Nasi Box Acara",
    min: "Minimal 20 box",
    desc: "Pemesanan dikonfirmasi maksimal H-1 pukul 14.00 WIB.",
  },
  {
    label: "Prasmanan Acara",
    min: "Minimal 50 porsi",
    desc: "Pemesanan H-3 untuk reservasi set perlengkapan dan tenaga pramusaji.",
  },
  {
    label: "Snack Box Rapat",
    min: "Minimal 25 box",
    desc: "Kue dibuat fresh subuh di hari H acara agar tekstur maksimal.",
  },
];

export default function KateringArea() {
  return (
    <section id="area" className="bg-neutral-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Jangkauan & Ketentuan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
            Area Layanan & Minimal Order
          </h2>
          <p className="mt-3 text-neutral-600">
            Kami menjaga kesegaran dan suhu makanan dari dapur hingga ke meja Anda
            dengan standar pengemasan higienis dan tepat waktu.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Area Pengantaran */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 text-amber-600">
              <Truck className="h-6 w-6" />
              <h3 className="text-xl font-bold text-neutral-900">
                Wilayah Pengiriman
              </h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              Armada kurir Berkah Rasa siap mengantar pesanan langsung ke kantor,
              rumah, sekolah, atau gedung pertemuan.
            </p>

            <div className="mt-6 space-y-4">
              {areas.map((item) => (
                <div
                  key={item.zone}
                  className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <div>
                      <p className="text-sm font-bold text-neutral-900">
                        {item.zone}
                      </p>
                      <p className="mt-1 text-sm text-neutral-700">
                        {item.locations}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-500 border-t border-neutral-100 pt-4">
              <Clock3 className="h-4 w-4 text-amber-600" />
              <span>
                Jadwal kirim siang: 10.30 - 11.45 WIB | Kirim sore: 16.30 - 17.45 WIB
              </span>
            </div>
          </div>

          {/* Ketentuan Minimal Order */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 text-amber-600">
              <AlertCircle className="h-6 w-6" />
              <h3 className="text-xl font-bold text-neutral-900">
                Ketentuan Minimal Pemesanan
              </h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              Setiap pesanan dimasak secara freshly-made sesuai kuota porsi
              untuk menjaga kualitas rasa terbaik.
            </p>

            <div className="mt-6 space-y-3">
              {rules.map((rule) => (
                <div
                  key={rule.label}
                  className="flex flex-col justify-between rounded-xl border border-neutral-100 p-3.5 sm:flex-row sm:items-center">
                  <div>
                    <span className="font-semibold text-neutral-900 text-sm">
                      {rule.label}
                    </span>
                    <p className="text-xs text-neutral-500">{rule.desc}</p>
                  </div>
                  <span className="mt-2 inline-block shrink-0 rounded-md bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800 sm:mt-0">
                    {rule.min}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-neutral-100 p-3.5 text-xs text-neutral-600">
              💡 <strong>Food Tasting:</strong> Tersedia tester menu gratis untuk
              pemesanan paket prasmanan di atas 100 porsi. Hubungi kami untuk jadwal
              tasting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
