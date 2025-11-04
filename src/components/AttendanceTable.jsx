import { BadgeCheck, BadgeX, Timer, MoreHorizontal } from "lucide-react";

const StatusBadge = ({ status }) => {
  const map = {
    hadir: { label: "Hadir", className: "bg-emerald-50 text-emerald-700 ring-emerald-600/20", Icon: BadgeCheck },
    terlambat: { label: "Terlambat", className: "bg-amber-50 text-amber-700 ring-amber-600/20", Icon: Timer },
    alpa: { label: "Alpa", className: "bg-rose-50 text-rose-700 ring-rose-600/20", Icon: BadgeX },
  };
  const cfg = map[status] || map.hadir;
  const Icon = cfg.Icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${cfg.className}`}>
      <Icon className="h-3.5 w-3.5" /> {cfg.label}
    </span>
  );
};

const Row = ({ item }) => (
  <tr className="border-b last:border-none">
    <td className="px-4 py-3 text-sm font-medium text-slate-800">{item.name}</td>
    <td className="px-4 py-3 text-sm text-slate-600">{item.department}</td>
    <td className="px-4 py-3 text-sm text-slate-600">{item.timeIn}</td>
    <td className="px-4 py-3 text-sm text-slate-600">{item.timeOut}</td>
    <td className="px-4 py-3"><StatusBadge status={item.status} /></td>
    <td className="px-4 py-3 text-right">
      <button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
        <MoreHorizontal className="h-4 w-4" /> Aksi
      </button>
    </td>
  </tr>
);

const fallback = [
  { name: "Rina Hartati", department: "Finance", timeIn: "08:58", timeOut: "17:10", status: "hadir" },
  { name: "Ardi Pratama", department: "Engineering", timeIn: "09:12", timeOut: "18:00", status: "terlambat" },
  { name: "Dewi Lestari", department: "Marketing", timeIn: "-", timeOut: "-", status: "alpa" },
  { name: "Bima Saputra", department: "Operations", timeIn: "08:45", timeOut: "17:02", status: "hadir" },
];

export default function AttendanceTable({ data, title = "Rekap Kehadiran Hari Ini" }) {
  const rows = data && data.length ? data : fallback;
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Cari karyawan..."
            className="w-48 rounded-md border border-slate-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
          <select className="rounded-md border border-slate-200 px-2 py-1.5 text-sm text-slate-700">
            <option>Semua Departemen</option>
            <option>Engineering</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>Operations</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-2 font-medium">Nama</th>
              <th className="px-4 py-2 font-medium">Departemen</th>
              <th className="px-4 py-2 font-medium">Masuk</th>
              <th className="px-4 py-2 font-medium">Pulang</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 text-right font-medium">&nbsp;</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((item, idx) => (
              <Row key={`${item.name}-${item.timeIn}-${idx}`} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
