import {
  CircleCheck,
  MessageSquare,
  Package,
  ShoppingCart,
  UserPlus,
} from "lucide-react";
import { waLink } from "@/lib/demo/wa";

const activities = [
  {
    icon: ShoppingCart,
    text: "Pesanan baru INV-10245 dari Rina Wijayanti",
    time: "2 menit lalu",
    iconClass: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: CircleCheck,
    text: "Pembayaran INV-10241 terverifikasi",
    time: "26 menit lalu",
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: UserPlus,
    text: "Pelanggan baru: Maya Anggraini",
    time: "1 jam lalu",
    iconClass: "bg-sky-50 text-sky-600",
  },
  {
    icon: Package,
    text: "Stok produk Paket Starter tinggal 8 unit",
    time: "3 jam lalu",
    iconClass: "bg-amber-50 text-amber-600",
  },
  {
    icon: MessageSquare,
    text: "3 pesan masuk belum dibalas",
    time: "5 jam lalu",
    iconClass: "bg-rose-50 text-rose-600",
  },
];

const DashActivity = () => {
  return (
    <div className="flex flex-col gap-6">
      <section className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:p-6">
        <h2 className="text-base font-bold text-slate-900">Aktivitas Terbaru</h2>
        <p className="mt-1 text-xs text-slate-500">Pantauan realtime tim</p>

        <ul className="mt-5 space-y-4">
          {activities.map((activity) => (
            <li key={activity.text} className="flex items-start gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${activity.iconClass}`}>
                <activity.icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs leading-relaxed text-slate-700">
                  {activity.text}
                </span>
                <span className="mt-0.5 block text-[11px] text-slate-600">
                  {activity.time}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl bg-linear-to-br from-indigo-600 to-slate-900 p-5 text-white shadow-sm">
        <div className="text-sm font-bold">
          Ingin aplikasi admin seperti ini?
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-indigo-100">
          Kami bangun dashboard, database, dan hak akses tim sesuai alur bisnis
          Anda.
        </p>
        <a
          href={waLink(
            "Halo Andalan Tech, saya ingin membuat aplikasi admin seperti demo NusaAdmin."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-indigo-700 transition-colors hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
          <MessageSquare className="h-4 w-4" />
          Konsultasi via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default DashActivity;
