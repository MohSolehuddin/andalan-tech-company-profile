import {
  BarChart3,
  Box,
  LayoutDashboard,
  LogOut,
  ShoppingCart,
  Users,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Pesanan", badge: "12" },
  { icon: Box, label: "Produk" },
  { icon: Users, label: "Pelanggan" },
  { icon: BarChart3, label: "Laporan" },
];

const DashSidebar = () => {
  return (
    <aside className="hidden w-64 shrink-0 flex-col justify-between bg-slate-900 text-slate-300 lg:sticky lg:top-[37px] lg:flex lg:h-[calc(100vh-37px)]">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-indigo-700 text-base font-extrabold text-white shadow-lg shadow-indigo-500/25">
            N
          </div>
          <div>
            <div className="text-sm font-bold text-white">NusaAdmin</div>
            <div className="text-[11px] text-slate-400">Panel Admin Toko</div>
          </div>
        </div>

        <nav className="mt-8 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/25"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}>
              <span className="inline-flex items-center gap-3">
                <item.icon className="h-4.5 w-4.5" />
                {item.label}
              </span>
              {item.badge && (
                <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-300">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-800 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-slate-600 to-slate-800 text-xs font-bold text-white">
            AP
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold text-white">
              Andi Pratama
            </div>
            <div className="text-[11px] text-slate-400">Super Admin</div>
          </div>
          <LogOut className="h-4 w-4 shrink-0 text-slate-500" />
        </div>
      </div>
    </aside>
  );
};

export default DashSidebar;
