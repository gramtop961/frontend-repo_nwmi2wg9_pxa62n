import AdminHeader from "./components/AdminHeader";
import TodayRecap from "./components/TodayRecap";
import MonthlyRecap from "./components/MonthlyRecap";
import AttendanceTable from "./components/AttendanceTable";

export default function App() {
  // Mock data hari ini (dapat diganti ke data API/Firebase nanti)
  const todayData = [
    { name: "Rina Hartati", department: "Finance", timeIn: "08:58", timeOut: "17:10", status: "hadir" },
    { name: "Ardi Pratama", department: "Engineering", timeIn: "09:12", timeOut: "18:00", status: "terlambat" },
    { name: "Dewi Lestari", department: "Marketing", timeIn: "-", timeOut: "-", status: "alpa" },
    { name: "Bima Saputra", department: "Operations", timeIn: "08:45", timeOut: "17:02", status: "hadir" },
    { name: "Sari Putri", department: "HR", timeIn: "-", timeOut: "-", status: "cuti" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <AdminHeader />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <TodayRecap data={todayData} />
            <AttendanceTable data={todayData} title="Daftar Kehadiran Hari Ini" />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <MonthlyRecap />
            {/* Tambahan ide peningkatan: notifikasi aktivitas terbaru dapat diletakkan di bawah ini */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold mb-3">Saran Peningkatan</h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li>Filter lanjutan: rentang tanggal, departemen, status.</li>
                <li>Ekspor laporan ke CSV/PDF dan kirim via email.</li>
                <li>Pengingat otomatis untuk karyawan belum check-in.</li>
                <li>Integrasi GPS & selfie untuk validasi kehadiran.</li>
                <li>Manajemen shift dan jadwal kerja fleksibel.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} AttendEase Admin.</p>
          <div className="text-sm text-slate-500">Ringkasan harian & bulanan untuk keputusan cepat.</div>
        </div>
      </footer>
    </div>
  );
}
