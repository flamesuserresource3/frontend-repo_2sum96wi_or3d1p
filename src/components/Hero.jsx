import Spline from "@splinetool/react-spline";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Enrollment open — Spring 2025
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Learn faster with a modern, glassy online academy
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Master real-world skills through beautiful, interactive lessons. Clean design, thoughtful curriculum, and a delightful learning experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-gray-900/10 hover:bg-black transition-colors"
            >
              Start learning
              <ArrowRight className="h-4 w-4" />
            </a>
            <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-5 py-3 text-sm text-gray-800 shadow-sm hover:bg-white transition-colors">
              <Play className="h-4 w-4" />
              Watch intro
            </button>
          </div>
        </div>

        <div className="relative h-[460px] md:h-[520px] lg:h-[560px] rounded-3xl bg-gradient-to-b from-white to-white/60 border border-white/60 shadow-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-400/30 via-indigo-400/30 to-emerald-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/30 via-sky-400/30 to-rose-400/30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
