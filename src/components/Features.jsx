import { Rocket, BookOpen, Shield } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Project-based",
    desc: "Build real-world projects with step-by-step guidance and mentor feedback.",
  },
  {
    icon: BookOpen,
    title: "Curated content",
    desc: "Tightly crafted lessons with clear outcomes and delightful pacing.",
  },
  {
    icon: Shield,
    title: "Career-ready",
    desc: "Interview prep, portfolio reviews, and certificates you can trust.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Built for focus and flow
          </h2>
          <p className="mt-4 text-gray-600">
            A minimal, light interface with glassy surfaces keeps you immersed while learning.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/60 bg-white/60 backdrop-blur-xl p-6 shadow-lg shadow-slate-900/5 hover:shadow-xl transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white grid place-items-center shadow-md">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-400/20 via-indigo-400/20 to-emerald-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
