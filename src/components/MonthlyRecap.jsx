import { BarChart3 } from "lucide-react";

function MiniBar({ data }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="flex items-end gap-1 h-24">
      {data.map((d, i) => (
        <div key={i} className="flex-1">
          <div
            className={`w-full rounded-t-md ${d.color}`}
            style={{ height: `${(d.value / max) * 100}%` }}
            title={`${d.label}: ${d.value}`}
          />
        </div>
      ))}
    </div>
  );
}

export default function MonthlyRecap({ month = new Date(), summary }) {
  // If summary not provided, generate a pleasant mock for current month
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const workingDays = Array.from({ length: daysInMonth }, (_, i) => i + 1).filter((d) => {
    const dt = new Date(month.getFullYear(), month.getMonth(), d);
    const day = dt.getDay();
    return day !== 0 && day !== 6; // mon-fri only
  });

  const generated = workingDays.map((d) => {
    // base present 85-96%, late 3-10%, absent 0-4%
    const present = Math.floor(80 + Math.random() * 16);
    const late = Math.floor(2 + Math.random() * 8);
    const absent = Math.max(0, 100 - present - late);
    return { day: d, present, late, absent };
  });

  const data = summary?.daily || generated;
  const totals = data.reduce(
    (acc, cur) => {
      acc.days += 1;
      acc.present += cur.present;
      acc.late += cur.late;
      acc.absent += cur.absent;
      return acc;
    },
    { days: 0, present: 0, late: 0, absent: 0 }
  );

  const avgPresent = Math.round(totals.present / Math.max(1, totals.days));
  const avgLate = Math.round(totals.late / Math.max(1, totals.days));
  const avgAbsent = Math.round(totals.absent / Math.max(1, totals.days));

  const chartData = data.slice(-20).map((d) => ({
    label: `Tgl ${d.day}`,
    value: d.present,
    color: "bg-emerald-500",
  }));

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Rekap Bulanan</h3>
        <div className="inline-flex items-center gap-2 text-sm text-slate-600">
          <BarChart3 className="h-4 w-4" /> {month.toLocaleString("id-ID", { month: "long", year: "numeric" })}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-slate-500">Rata-rata Hadir</p>
          <p className="text-xl font-semibold text-emerald-600">{avgPresent}%</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Rata-rata Terlambat</p>
          <p className="text-xl font-semibold text-amber-600">{avgLate}%</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Rata-rata Alpa</p>
          <p className="text-xl font-semibold text-rose-600">{avgAbsent}%</p>
        </div>
      </div>
      <div className="mt-5">
        <MiniBar data={chartData} />
        <p className="mt-2 text-xs text-slate-500">Grafik menunjukkan persentase hadir per hari kerja (20 hari terakhir).</p>
      </div>
    </section>
  );
}
