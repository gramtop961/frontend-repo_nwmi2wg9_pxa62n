import Spline from "@splinetool/react-spline";

export default function HeroSpline() {
  return (
    <section id="home" className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-12 lg:py-20">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 mb-4">Intelligent Attendance • Secure • AI-Assisted</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Manage attendance with confidence using
            <span className="block bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-600 bg-clip-text text-transparent"> AttendEase</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A modern system designed for teams. Verify presence with selfie + location, protect access with role-based controls, and gain insights powered by AI.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#demo" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 font-semibold shadow hover:bg-slate-800">Try the Live Clock</a>
            <a href="#features" className="inline-flex items-center rounded-lg border border-slate-200 px-5 py-3 font-semibold hover:bg-slate-50">Explore Features</a>
          </div>
        </div>
        <div className="order-1 lg:order-2 h-[360px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-slate-200 relative">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: "100%", height: "100%" }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30" />
        </div>
      </div>
    </section>
  );
}
