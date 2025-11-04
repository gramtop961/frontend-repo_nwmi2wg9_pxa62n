import { CheckCircle2, Clock8, XCircle, Umbrella } from "lucide-react";

function Stat({ icon: Icon, label, value, color, sub }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color} text-white`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-slate-600">{label}</p>
          <p className="text-xl font-semibold">{value}</p>
          {sub && <p className="text-xs text-slate-500 mt-0.5">{sub}</p>}
        </div>
      </div>
    </div>
  );
}

export default function TodayRecap({ data = [] }) {
  const totals = data.reduce(
    (acc, cur) => {
      acc.total += 1;
      if (cur.status === "hadir") acc.hadir += 1;
      if (cur.status === "terlambat") acc.terlambat += 1;
      if (cur.status === "alpa") acc.alpa += 1;
      if (cur.status === "cuti") acc.cuti += 1;
      return acc;
    },
    { total: 0, hadir: 0, terlambat: 0, alpa: 0, cuti: 0 }
  );

  const pct = (n) => (totals.total ? Math.round((n / totals.total) * 100) : 0);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Ringkasan Kehadiran Hari Ini</h3>
        <p className="text-sm text-slate-500">Total {totals.total} karyawan</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={CheckCircle2} label="Hadir" value={`${totals.hadir} orang`} color="bg-emerald-500" sub={`${pct(totals.hadir)}% dari total`} />
        <Stat icon={Clock8} label="Terlambat" value={`${totals.terlambat} orang`} color="bg-amber-500" sub={`${pct(totals.terlambat)}% dari total`} />
        <Stat icon={XCircle} label="Alpa" value={`${totals.alpa} orang`} color="bg-rose-500" sub={`${pct(totals.alpa)}% dari total`} />
        <Stat icon={Umbrella} label="Cuti" value={`${totals.cuti} orang`} color="bg-sky-500" sub={`${pct(totals.cuti)}% dari total`} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium mb-3 text-slate-700">Distribusi Status</p>
        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full bg-emerald-500" style={{ width: `${pct(totals.hadir)}%` }} />
          <div className="h-full bg-amber-500" style={{ width: `${pct(totals.terlambat)}%` }} />
          <div className="h-full bg-rose-500" style={{ width: `${pct(totals.alpa)}%` }} />
          <div className="h-full bg-sky-500" style={{ width: `${pct(totals.cuti)}%` }} />
        </div>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Hadir</span>
          <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" /> Terlambat</span>
          <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-rose-500" /> Alpa</span>
          <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-sky-500" /> Cuti</span>
        </div>
      </div>
    </section>
  );
}
