import { ShieldCheck, MapPin, Camera, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Secure Auth & Roles",
    desc: "Email sign-in with role-based access to employee and admin views.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Location Validation",
    desc: "Distance checks ensure clock-ins happen within your office radius.",
    icon: MapPin,
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Selfie Verification",
    desc: "Capture a quick selfie to confirm identity at clock in/out.",
    icon: Camera,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Insightful Reports",
    desc: "Understand punctuality trends and on‑time rates at a glance.",
    icon: BarChart3,
    color: "from-amber-500 to-orange-500",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-12 sm:py-16 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Why teams choose AttendEase</h2>
          <p className="mt-2 text-slate-600">Built with privacy and reliability at its core — ready for modern organizations.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <article key={f.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-tr ${f.color} text-white flex items-center justify-center mb-3`}>
                <f.icon size={18} />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
