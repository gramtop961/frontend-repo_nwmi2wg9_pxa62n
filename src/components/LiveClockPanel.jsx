import { useEffect, useMemo, useRef, useState } from "react";
import { Clock, CheckCircle2, AlertCircle } from "lucide-react";

function formatTime(d) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

export default function LiveClockPanel() {
  const [now, setNow] = useState(new Date());
  const [status, setStatus] = useState("");
  const ticking = useRef(null);

  useEffect(() => {
    ticking.current = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(ticking.current);
  }, []);

  const tz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);

  const handleAction = async (type) => {
    try {
      setStatus(`${type === "in" ? "Clocking in" : "Clocking out"}…`);
      // In a full app this would capture selfie + location and call a secure API.
      await new Promise((r) => setTimeout(r, 600));
      setStatus("Success");
      alert(`Demo: ${type === "in" ? "Clock In" : "Clock Out"} simulated.`);
    } catch (e) {
      console.error(e);
      setStatus("Error");
    } finally {
      setTimeout(() => setStatus(""), 800);
    }
  };

  return (
    <section id="demo" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-600">Current time • {tz}</p>
                <p className="text-3xl font-bold tracking-tight tabular-nums">{formatTime(now)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => handleAction("in")} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-5 py-3 font-semibold shadow hover:bg-emerald-700">
                <CheckCircle2 size={18}/> Clock In
              </button>
              <button onClick={() => handleAction("out")} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 font-semibold hover:bg-slate-50">
                <AlertCircle size={18}/> Clock Out
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            This demo showcases the live clock UI. In production, this triggers a secure API that validates your selfie and location before saving attendance.
          </p>
          {status && (
            <div className="mt-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 bg-slate-50 border-slate-200 text-slate-700">
                <span className={`h-2 w-2 rounded-full ${status === "Success" ? "bg-emerald-500" : status === "Error" ? "bg-rose-500" : "bg-amber-400"}`} />
                {status}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
