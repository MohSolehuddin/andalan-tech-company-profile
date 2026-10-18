import { Clock, MapPin, MessageCircle, Phone, Truck } from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const steps = [
  {
    step: "01",
    title: "Pilih Menu & Topping",
    desc: "Tentukan minuman, topping favorit, serta level manis & es yang diinginkan.",
  },
  {
    step: "02",
    title: "Kirim Chat WhatsApp",
    desc: "Klik tombol pesan, format otomatis langsung siap terkirim ke admin kedai.",
  },
  {
    step: "03",
    title: "Antar atau Ambil Sendiri",
    desc: "Bayar via QRIS/Transfer, pesanan segera dibuat segar dan siap meluncur.",
  },
];

export default function MinumanContact() {
  return (
    <section className="bg-neutral-900 px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Order workflow */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            Cara Pemesanan Cepat
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Tinggal Klik, Langsung Terhubung ke WhatsApp
          </h2>
          <p className="mt-3 text-neutral-400">
            Tanpa perlu download aplikasi tambahan, pesan boba &amp; juice favorit
            kamu dalam hitungan detik.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <span className="text-2xl font-black text-teal-400">{s.step}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Action card & Outlet details */}
        <div className="mt-12 rounded-xl border border-teal-500/30 bg-linear-to-r from-teal-950 via-neutral-900 to-teal-950 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
                <Truck className="h-3.5 w-3.5" />
                Layanan Antar Instan &amp; Pesanan Acara
              </span>
              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                Mau Pesan untuk Acara Ulang Tahun atau Kantor?
              </h3>
              <p className="mt-3 text-sm text-neutral-300">
                Kami melayani pesanan partai besar (corporate order, gathering,
                pesta) dengan harga khusus dan kemasan box dingin higienis.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(
                    "Halo Segar Boba & Juice, saya mau pesan minuman atau tanya paket catering acara."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500">
                  <MessageCircle className="h-5 w-5" />
                  Order WhatsApp Sekarang
                </a>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-300">
              <h4 className="font-bold text-white">Informasi Kedai</h4>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span>
                  Jl. Boulevard Segar No. 18, Kebayoran Baru, Jakarta Selatan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-teal-400" />
                <span>Buka Setiap Hari: 10.00 – 21.30 WIB</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-teal-400" />
                <span>WhatsApp Pemesanan: +62 877-4596-8545</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-500">
          <p>© 2026 Segar Boba &amp; Juice. Seluruh hak cipta dilindungi.</p>
          <p className="mt-1">
            Website demo portofolio oleh Andalan Tech — Solusi Pembuatan Website
            Bisnis &amp; UMKM.
          </p>
        </div>
      </div>
    </section>
  );
}
