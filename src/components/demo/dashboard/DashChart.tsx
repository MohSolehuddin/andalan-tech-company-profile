import { TrendingUp } from "lucide-react";

const months = [
  { label: "Jan", total: "7,2 jt", height: 64 },
  { label: "Feb", total: "8,9 jt", height: 88 },
  { label: "Mar", total: "6,4 jt", height: 56 },
  { label: "Apr", total: "10,8 jt", height: 108 },
  { label: "Mei", total: "9,1 jt", height: 84 },
  { label: "Jun", total: "12,4 jt", height: 124 },
  { label: "Jul", total: "11,6 jt", height: 116 },
  { label: "Agu", total: "14,2 jt", height: 148, active: true },
];

const DashChart = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Pendapatan Bulanan
          </h2>
          <p className="mt-1 text-xs text-slate-500">Januari – Agustus 2026</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          <TrendingUp className="h-3.5 w-3.5" />
          +18,2% YoY
        </span>
      </div>

      <div className="mt-6 flex h-56 items-end gap-2 sm:gap-3">
        {months.map((month) => (
          <div
            key={month.label}
            className="group flex flex-1 flex-col items-center justify-end gap-2">
            <span className="text-[10px] font-semibold text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">
              {month.total}
            </span>
            <div
              title={`${month.label}: Rp ${month.total}`}
              style={{ height: month.height }}
              className={`w-full rounded-t-lg transition-colors ${
                month.active
                  ? "bg-linear-to-t from-indigo-600 to-indigo-400"
                  : "bg-slate-200 group-hover:bg-indigo-200"
              }`}
            />
            <span className="text-[10px] font-medium text-slate-600">
              {month.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span>
          Total 8 bulan: <span className="font-bold text-slate-900">Rp 80,6 jt</span>
        </span>
        <span className="inline-flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            Bulan berjalan
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            Bulan sebelumnya
          </span>
        </span>
      </div>
    </section>
  );
};

export default DashChart;
