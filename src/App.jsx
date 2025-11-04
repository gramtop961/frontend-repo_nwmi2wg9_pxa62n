import AdminHeader from "./components/AdminHeader";
import StatsOverview from "./components/StatsOverview";
import AttendanceTable from "./components/AttendanceTable";
import UserManagementPanel from "./components/UserManagementPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <AdminHeader />

        <div className="mt-6">
          <StatsOverview />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AttendanceTable />
          </div>
          <div className="lg:col-span-1">
            <UserManagementPanel />
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} AttendEase Admin.</p>
          <div className="text-sm text-slate-500">Ringkasan real-time dan kontrol pengguna.</div>
        </div>
      </footer>
    </div>
  );
}
