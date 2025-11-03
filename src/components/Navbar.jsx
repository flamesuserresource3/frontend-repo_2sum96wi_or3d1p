import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white grid place-items-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight">Glassy Academy</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#courses" className="hover:text-gray-900 transition-colors">Courses</a>
          <a href="#cta" className="hover:text-gray-900 transition-colors">Get Started</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center rounded-xl border border-gray-200 bg-white/70 px-3 py-2 text-sm text-gray-800 shadow-sm hover:bg-white transition-colors">
            Sign in
          </button>
          <button className="inline-flex items-center rounded-xl bg-gray-900 text-white px-4 py-2 text-sm shadow-lg hover:bg-black transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
}
