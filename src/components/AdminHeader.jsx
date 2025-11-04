import { CalendarRange, Settings } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Admin Dashboard</h1>
        <p className="text-slate-600 mt-1">Kelola kehadiran, pengguna, dan laporan secara real-time.</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
          <CalendarRange className="h-4 w-4" />
          Periode: Minggu ini
        </button>
        <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
          <Settings className="h-4 w-4" />
          Pengaturan
        </button>
      </div>
    </header>
  );
}
