import { Shield, UserPlus, Pencil, Trash2 } from "lucide-react";

const RoleBadge = ({ role }) => {
  const map = {
    admin: "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
    manager: "bg-sky-50 text-sky-700 ring-sky-600/20",
    staff: "bg-slate-50 text-slate-700 ring-slate-600/20",
  };
  const cls = map[role] || map.staff;
  return <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${cls}`}>{role}</span>;
};

const users = [
  { id: 1, name: "Rina Hartati", email: "rina@company.com", role: "admin" },
  { id: 2, name: "Ardi Pratama", email: "ardi@company.com", role: "manager" },
  { id: 3, name: "Dewi Lestari", email: "dewi@company.com", role: "staff" },
  { id: 4, name: "Bima Saputra", email: "bima@company.com", role: "staff" },
];

export default function UserManagementPanel() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h3 className="text-sm font-semibold flex items-center gap-2"><Shield className="h-4 w-4" /> Manajemen Pengguna</h3>
        <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800">
          <UserPlus className="h-4 w-4" /> Tambah Pengguna
        </button>
      </div>
      <ul className="divide-y divide-slate-100">
        {users.map((u) => (
          <li key={u.id} className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="font-medium text-slate-800">{u.name}</p>
              <p className="text-sm text-slate-500">{u.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <RoleBadge role={u.role} />
              <button className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50" aria-label="Edit">
                <Pencil className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-rose-600 hover:bg-rose-50" aria-label="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
