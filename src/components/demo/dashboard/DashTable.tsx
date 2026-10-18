const orders = [
  {
    id: "INV-10245",
    customer: "Rina Wijayanti",
    initials: "RW",
    product: "Paket Starter",
    date: "18 Okt 2026",
    status: "Selesai",
    total: "Rp 1.250.000",
  },
  {
    id: "INV-10244",
    customer: "Budi Santoso",
    initials: "BS",
    product: "Paket Pro Bisnis",
    date: "18 Okt 2026",
    status: "Diproses",
    total: "Rp 3.450.000",
  },
  {
    id: "INV-10243",
    customer: "Siti Aminah",
    initials: "SA",
    product: "Paket Starter",
    date: "17 Okt 2026",
    status: "Dikirim",
    total: "Rp 899.000",
  },
  {
    id: "INV-10242",
    customer: "Hendra Pratama",
    initials: "HP",
    product: "Paket Enterprise",
    date: "17 Okt 2026",
    status: "Menunggu",
    total: "Rp 12.500.000",
  },
  {
    id: "INV-10241",
    customer: "Dewi Lestari",
    initials: "DL",
    product: "Paket Pro Bisnis",
    date: "16 Okt 2026",
    status: "Selesai",
    total: "Rp 3.450.000",
  },
  {
    id: "INV-10240",
    customer: "Agus Salim",
    initials: "AS",
    product: "Paket Starter",
    date: "16 Okt 2026",
    status: "Batal",
    total: "Rp 450.000",
  },
  {
    id: "INV-10239",
    customer: "Maya Anggraini",
    initials: "MA",
    product: "Paket Pro Bisnis",
    date: "15 Okt 2026",
    status: "Selesai",
    total: "Rp 3.450.000",
  },
];

const statusStyles: Record<string, string> = {
  Selesai: "bg-emerald-50 text-emerald-600",
  Diproses: "bg-indigo-50 text-indigo-600",
  Dikirim: "bg-sky-50 text-sky-600",
  Menunggu: "bg-amber-50 text-amber-600",
  Batal: "bg-rose-50 text-rose-600",
};

const DashTable = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-xs">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 p-5 sm:p-6">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Pesanan Terbaru
          </h2>
          <p className="mt-1 text-xs text-slate-500">7 transaksi terakhir</p>
        </div>
        <button
          type="button"
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
          Lihat semua
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-slate-600">
              <th className="px-5 py-3 font-semibold sm:px-6">ID</th>
              <th className="px-5 py-3 font-semibold sm:px-6">Pelanggan</th>
              <th className="px-5 py-3 font-semibold sm:px-6">Produk</th>
              <th className="px-5 py-3 font-semibold sm:px-6">Tanggal</th>
              <th className="px-5 py-3 font-semibold sm:px-6">Status</th>
              <th className="px-5 py-3 text-right font-semibold sm:px-6">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-slate-100 transition-colors hover:bg-slate-50">
                <td className="px-5 py-3.5 font-mono text-xs text-slate-500 sm:px-6">
                  {order.id}
                </td>
                <td className="px-5 py-3.5 sm:px-6">
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-slate-700 text-[10px] font-bold text-white">
                      {order.initials}
                    </span>
                    <span className="font-medium text-slate-800">
                      {order.customer}
                    </span>
                  </span>
                </td>
                <td className="px-5 py-3.5 text-slate-600 sm:px-6">
                  {order.product}
                </td>
                <td className="px-5 py-3.5 text-slate-500 sm:px-6">
                  {order.date}
                </td>
                <td className="px-5 py-3.5 sm:px-6">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right font-semibold text-slate-900 sm:px-6">
                  {order.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashTable;
