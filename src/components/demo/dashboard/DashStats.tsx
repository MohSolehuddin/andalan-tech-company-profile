import { Percent, ShoppingCart, TrendingDown, TrendingUp, Users, Wallet } from "lucide-react";

const stats = [
  {
    icon: Wallet,
    label: "Pendapatan",
    value: "Rp 84,25 jt",
    delta: "+12,4%",
    up: true,
    iconClass: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: ShoppingCart,
    label: "Pesanan",
    value: "1.284",
    delta: "+8,2%",
    up: true,
    iconClass: "bg-sky-50 text-sky-600",
  },
  {
    icon: Users,
    label: "Pelanggan",
    value: "3.842",
    delta: "+5,1%",
    up: true,
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Percent,
    label: "Konversi",
    value: "4,8%",
    delta: "-0,6%",
    up: false,
    iconClass: "bg-amber-50 text-amber-600",
  },
];

const DashStats = () => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconClass}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                stat.up
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-rose-50 text-rose-600"
              }`}>
              {stat.up ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              {stat.delta}
            </span>
          </div>
          <div className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
            {stat.value}
          </div>
          <div className="mt-1 text-xs text-slate-500">
            {stat.label} · vs bulan lalu
          </div>
        </div>
      ))}
    </section>
  );
};

export default DashStats;
