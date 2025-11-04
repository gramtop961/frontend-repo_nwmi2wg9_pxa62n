import Navbar from "./components/Navbar";
import HeroSpline from "./components/HeroSpline";
import FeatureGrid from "./components/FeatureGrid";
import LiveClockPanel from "./components/LiveClockPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSpline />
        <FeatureGrid />
        <LiveClockPanel />
      </main>
      <footer className="border-t border-slate-200 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} AttendEase. All rights reserved.</p>
          <div className="text-sm text-slate-500">Built with React, Tailwind, and a touch of 3D.</div>
        </div>
      </footer>
    </div>
  );
}
