import { CheckCircle2, Clock8, XCircle, Umbrella } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, delta, color }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color} text-white`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-slate-600">{label}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </div>
      {delta && (
        <span className={`text-xs font-medium ${delta.startsWith("+") ? "text-emerald-600" : "text-rose-600"}`}>
          {delta}
        </span>
      )}
    </div>
  </div>
);

export default function StatsOverview() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard icon={CheckCircle2} label="Hadir" value={128} delta="+4%" color="bg-emerald-500" />
      <StatCard icon={Clock8} label="Terlambat" value={12} delta="-2%" color="bg-amber-500" />
      <StatCard icon={XCircle} label="Alpa" value={6} delta="+1%" color="bg-rose-500" />
      <StatCard icon={Umbrella} label="Cuti" value={3} delta="0%" color="bg-sky-500" />
    </section>
  );
}
