import { User, Shield, Home } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200 sticky top-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-fuchsia-500" />
          <span className="text-xl font-semibold tracking-tight">AttendEase</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#home" className="hover:text-slate-900 flex items-center gap-1"><Home size={16}/> Home</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#demo" className="hover:text-slate-900">Live Demo</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50">
            <Shield size={16}/> Admin
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-semibold shadow hover:bg-slate-800">
            <User size={16}/> Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
