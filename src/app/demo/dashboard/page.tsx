import type { Metadata } from "next";
import { Bell, Plus, Search } from "lucide-react";
import DashSidebar from "@/components/demo/dashboard/DashSidebar";
import DashStats from "@/components/demo/dashboard/DashStats";
import DashChart from "@/components/demo/dashboard/DashChart";
import DashTable from "@/components/demo/dashboard/DashTable";
import DashActivity from "@/components/demo/dashboard/DashActivity";

export const metadata: Metadata = {
  title: "NusaAdmin — Demo Dashboard & Admin | Andalan Tech",
  description:
    "Demo aplikasi admin & dashboard oleh Andalan Tech: kartu KPI, grafik pendapatan, tabel pesanan, dan panel aktivitas dalam satu panel modern.",
};

const mobileNav = ["Dashboard", "Pesanan", "Produk", "Pelanggan", "Laporan"];

const DashboardDemoPage = () => {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-[1400px]">
        <DashSidebar />

        <div className="min-w-0 flex-1">
          <header className="sticky top-[37px] z-40 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-lg font-bold tracking-tight sm:text-xl">
                  Dashboard
                </h1>
                <p className="text-xs text-slate-500">
                  Ringkasan performa toko — 18 Oktober 2026
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <label className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 md:flex">
                  <Search className="h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Cari pesanan, produk..."
                    className="w-44 bg-transparent outline-none placeholder:text-slate-600"
                  />
                </label>
                <button
                  type="button"
                  className="relative rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-rose-500" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">Produk Baru</span>
                </button>
              </div>
            </div>

            <nav className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
              {mobileNav.map((item, i) => (
                <span
                  key={item}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                    i === 0
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}>
                  {item}
                </span>
              ))}
            </nav>
          </header>

          <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">
            <DashStats />
            <DashChart />
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <DashTable />
              </div>
              <DashActivity />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardDemoPage;
